# 1540BO API Integration Specification for Vietnam Engineering Team

Last updated: 2026-05-28

## Purpose

This document defines the API contract required for connecting the Vietnam engineering team's 1540BO production system with the 1540 customer support and user intelligence system.

The goal is to let the support system continuously understand each user's current status, deposits, withdrawals, trades, bonuses, affiliate relation, and recent activity so that administrators can investigate users and AI can prepare accurate support reply drafts.

This document is intentionally written as an implementation contract. If any field name or entity model differs from the production database, please propose the closest equivalent before implementation.

## Systems

| System | Owner | Role |
| --- | --- | --- |
| 1540BO main site/application | Vietnam engineering team | User registration, login, deposit, withdrawal, trading, bonus, affiliate data source |
| 1540 support/intelligence system | Japan operations team | Support mailbox, AI draft generation, Telegram notification, administrator dashboard |
| Public support address | Japan operations team | `support@1540bo.com` |
| Support API domain | Japan operations team | `https://api.1540bo.com` |

## Required Integration Model

The preferred model is a hybrid of:

1. Pull API for periodic and recovery sync.
2. Webhooks for near realtime updates.

The support system must be able to rebuild its local state from pull APIs even if a webhook is missed.

## Authentication

All API requests from the support system to the 1540BO production API must use server-to-server authentication.

Recommended:

```http
Authorization: Bearer <external_api_key>
Accept: application/json
```

Requirements:

- API key must be scoped to read-only data needed for support and investigation.
- API key must not allow user balance mutation, withdrawal approval, bonus grant, affiliate setting changes, or login as user.
- Production and staging must use separate keys.
- The key must be rotatable without code change.
- All endpoints must be HTTPS only.

Optional stronger model:

```http
X-API-Key: <external_api_key>
X-Signature: <hmac_sha256(timestamp + "." + raw_body)>
X-Timestamp: <unix_seconds>
```

## Pagination and Incremental Sync

Every list endpoint must support incremental sync.

Required query parameters:

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `updated_since` | ISO 8601 datetime | optional | Return records updated after this timestamp |
| `cursor` | string | optional | Cursor returned by previous response |
| `limit` | integer | optional | Default 100, maximum 1000 |

Required response shape:

```json
{
  "items": [],
  "next_cursor": "opaque-cursor-or-null",
  "has_more": false,
  "server_time": "2026-05-28T03:00:00Z"
}
```

Rules:

- Use stable cursor pagination, not offset pagination, for large tables.
- `updated_at` must change whenever a record's support-relevant fields change.
- Deleted or cancelled records should remain visible with status fields rather than disappearing.

## Common Field Rules

Use these rules across all endpoints.

| Field | Rule |
| --- | --- |
| IDs | String preferred. Must be stable and unique. |
| Datetime | ISO 8601 UTC, e.g. `2026-05-28T03:00:00Z`. |
| Money | Decimal string preferred, e.g. `"100.50"`. Do not use floating point for source-of-truth values. |
| Currency | Uppercase code, e.g. `USDT`, `BTC`, `ETH`, `TRX`, `LTC`, `XRP`. |
| Network | Uppercase, e.g. `TRC20`, `ERC20`, `BEP20`. |
| Email | Lowercase normalized where possible. |
| Status | Use stable enum strings. Do not localize status values. |

## Endpoints

Base URL to be provided by Vietnam team:

```text
https://<production-api-domain>/v1
```

### 1. Health

```http
GET /health
```

Response:

```json
{
  "status": "ok",
  "server_time": "2026-05-28T03:00:00Z",
  "version": "2026.05.28"
}
```

### 2. Users

```http
GET /users?updated_since=2026-05-28T00:00:00Z&cursor=&limit=100
GET /users/{user_id}
GET /users/by-email/{email}
```

Required fields:

```json
{
  "id": "user_123",
  "email": "user@example.com",
  "name": "User Name",
  "phone": "+8490...",
  "country": "VN",
  "language": "vi",
  "status": "active",
  "kyc_status": "unverified",
  "registered_at": "2026-05-01T10:00:00Z",
  "latest_login_at": "2026-05-28T02:55:00Z",
  "first_deposit_at": "2026-05-02T12:00:00Z",
  "first_deposit_amount": "100.00",
  "second_deposit_at": "2026-05-10T12:00:00Z",
  "second_deposit_amount": "200.00",
  "affiliate_id": "aff_001",
  "affiliate_code": "ABC123",
  "created_at": "2026-05-01T10:00:00Z",
  "updated_at": "2026-05-28T02:55:00Z"
}
```

Status examples:

- `active`
- `locked`
- `banned`
- `closed`

KYC status examples:

- `unverified`
- `pending`
- `verified`
- `rejected`

### 3. Login Events

```http
GET /users/{user_id}/login-events?cursor=&limit=100
GET /login-events?updated_since=2026-05-28T00:00:00Z&cursor=&limit=100
```

Required fields:

```json
{
  "id": "login_123",
  "user_id": "user_123",
  "email": "user@example.com",
  "login_at": "2026-05-28T02:55:00Z",
  "ip_address": "203.0.113.10",
  "country": "VN",
  "device": "iPhone",
  "user_agent": "Mozilla/5.0 ...",
  "success": true,
  "updated_at": "2026-05-28T02:55:00Z"
}
```

### 4. Deposits

```http
GET /deposits?updated_since=2026-05-28T00:00:00Z&cursor=&limit=100
GET /users/{user_id}/deposits?cursor=&limit=100
```

Required fields:

```json
{
  "id": "dep_123",
  "user_id": "user_123",
  "email": "user@example.com",
  "amount": "100.00",
  "currency": "USDT",
  "network": "TRC20",
  "txid": "0x...",
  "from_address": "T...",
  "to_address": "T...",
  "status": "confirmed",
  "requested_at": "2026-05-02T11:50:00Z",
  "confirmed_at": "2026-05-02T12:00:00Z",
  "created_at": "2026-05-02T11:50:00Z",
  "updated_at": "2026-05-02T12:00:00Z"
}
```

Deposit statuses:

- `pending`
- `confirmed`
- `failed`
- `cancelled`
- `manual_review`

### 5. Withdrawals

```http
GET /withdrawals?updated_since=2026-05-28T00:00:00Z&cursor=&limit=100
GET /users/{user_id}/withdrawals?cursor=&limit=100
```

Required fields:

```json
{
  "id": "wd_123",
  "user_id": "user_123",
  "email": "user@example.com",
  "amount": "50.00",
  "fee": "1.00",
  "currency": "USDT",
  "network": "TRC20",
  "to_address": "T...",
  "txid": "0x...",
  "status": "processing",
  "hold_reason": "risk_review",
  "requested_at": "2026-05-20T01:00:00Z",
  "processed_at": null,
  "created_at": "2026-05-20T01:00:00Z",
  "updated_at": "2026-05-20T01:10:00Z"
}
```

Withdrawal statuses:

- `requested`
- `pending_review`
- `processing`
- `completed`
- `rejected`
- `cancelled`
- `on_hold`

### 6. Trades and Game History

```http
GET /trades?updated_since=2026-05-28T00:00:00Z&cursor=&limit=100
GET /users/{user_id}/trades?cursor=&limit=100
```

Required fields:

```json
{
  "id": "trade_123",
  "user_id": "user_123",
  "email": "user@example.com",
  "game_type": "binary_option",
  "asset_pair": "BTC/USDT",
  "direction": "up",
  "stake_amount": "10.00",
  "payout_amount": "18.00",
  "profit_loss": "8.00",
  "currency": "USDT",
  "entry_price": "68000.00",
  "settlement_price": "68100.00",
  "status": "won",
  "opened_at": "2026-05-28T02:00:00Z",
  "closed_at": "2026-05-28T02:01:00Z",
  "created_at": "2026-05-28T02:00:00Z",
  "updated_at": "2026-05-28T02:01:00Z"
}
```

Trade statuses:

- `open`
- `won`
- `lost`
- `draw`
- `cancelled`
- `refunded`

### 7. Bonuses

```http
GET /bonuses?updated_since=2026-05-28T00:00:00Z&cursor=&limit=100
GET /users/{user_id}/bonuses?cursor=&limit=100
```

Required fields:

```json
{
  "id": "bonus_123",
  "user_id": "user_123",
  "email": "user@example.com",
  "bonus_type": "first_deposit",
  "amount": "20.00",
  "currency": "USDT",
  "status": "granted",
  "granted_at": "2026-05-02T12:05:00Z",
  "expires_at": "2026-06-02T12:05:00Z",
  "wagering_requirement": "200.00",
  "wagering_completed": "40.00",
  "created_at": "2026-05-02T12:05:00Z",
  "updated_at": "2026-05-10T12:05:00Z"
}
```

### 8. Affiliates

```http
GET /affiliates?updated_since=2026-05-28T00:00:00Z&cursor=&limit=100
GET /affiliates/{affiliate_id}
GET /affiliates/{affiliate_id}/users?cursor=&limit=100
GET /affiliate-sales?updated_since=2026-05-28T00:00:00Z&cursor=&limit=100
```

Affiliate fields:

```json
{
  "id": "aff_001",
  "email": "partner@example.com",
  "name": "Partner Name",
  "code": "ABC123",
  "status": "approved",
  "registered_at": "2026-04-01T00:00:00Z",
  "reviewed_at": "2026-04-02T00:00:00Z",
  "created_at": "2026-04-01T00:00:00Z",
  "updated_at": "2026-05-28T00:00:00Z"
}
```

Affiliate sales fields:

```json
{
  "id": "aff_sale_123",
  "affiliate_id": "aff_001",
  "affiliate_code": "ABC123",
  "user_id": "user_123",
  "user_email": "user@example.com",
  "event_type": "deposit",
  "amount": "100.00",
  "commission_amount": "10.00",
  "currency": "USDT",
  "event_at": "2026-05-02T12:00:00Z",
  "created_at": "2026-05-02T12:00:00Z",
  "updated_at": "2026-05-02T12:00:00Z"
}
```

Affiliate statuses:

- `pending`
- `approved`
- `rejected`
- `suspended`

### 9. User Summary Endpoint

This endpoint is strongly recommended because support investigations need a compact, fast user snapshot.

```http
GET /users/{user_id}/support-summary
GET /users/by-email/{email}/support-summary
```

Response:

```json
{
  "user": {},
  "latest_login": {},
  "deposit_summary": {
    "count": 3,
    "total_amount": "500.00",
    "first_deposit": {},
    "second_deposit": {},
    "latest_deposit": {}
  },
  "withdrawal_summary": {
    "count": 1,
    "total_amount": "50.00",
    "latest_withdrawal": {}
  },
  "trade_summary": {
    "count": 25,
    "total_stake": "250.00",
    "total_profit_loss": "-15.00",
    "latest_trade": {}
  },
  "bonus_summary": {
    "count": 2,
    "total_amount": "40.00",
    "active_bonuses": []
  },
  "affiliate": {},
  "risk_flags": [
    {
      "code": "withdrawal_hold",
      "label": "Withdrawal on hold",
      "severity": "medium",
      "created_at": "2026-05-20T01:10:00Z"
    }
  ],
  "server_time": "2026-05-28T03:00:00Z"
}
```

## Webhooks from 1540BO to Support System

Webhooks are optional but recommended for near realtime support.

Endpoint on Japan support side:

```http
POST https://api.1540bo.com/api/external/webhook
```

Required headers:

```http
Content-Type: application/json
X-1540BO-Event: user.updated
X-1540BO-Timestamp: 1779946800
X-1540BO-Signature: sha256=<hmac_signature>
```

Signature:

```text
hmac_sha256(webhook_secret, timestamp + "." + raw_body)
```

Supported events:

- `user.created`
- `user.updated`
- `user.login`
- `deposit.created`
- `deposit.updated`
- `withdrawal.created`
- `withdrawal.updated`
- `trade.created`
- `trade.updated`
- `bonus.granted`
- `bonus.updated`
- `affiliate.created`
- `affiliate.updated`
- `affiliate.user_linked`
- `affiliate.sale_created`

Payload:

```json
{
  "event_id": "evt_123",
  "event_type": "deposit.updated",
  "occurred_at": "2026-05-28T03:00:00Z",
  "data": {
    "id": "dep_123",
    "user_id": "user_123",
    "email": "user@example.com",
    "status": "confirmed",
    "updated_at": "2026-05-28T03:00:00Z"
  }
}
```

Webhook rules:

- `event_id` must be globally unique.
- Retries should use the same `event_id`.
- Support system will treat duplicate `event_id` as idempotent.
- Retry schedule should include at least 5 attempts over 30 minutes.
- A webhook must not contain passwords, authentication tokens, seed phrases, private keys, or full payment secrets.

## Privacy and Security Limits

Do not send:

- Password hashes
- 2FA secrets
- Full KYC document images unless explicitly agreed
- Internal admin credentials
- Private keys or wallet seed phrases
- Card data or payment secrets

Sensitive fields such as IP addresses and wallet addresses are allowed only for support and fraud investigation purposes.

## Error Response Format

All endpoints should return this shape on error:

```json
{
  "error": {
    "code": "not_found",
    "message": "User not found",
    "request_id": "req_123"
  }
}
```

HTTP status examples:

| Status | Meaning |
| --- | --- |
| 200 | OK |
| 400 | Invalid request |
| 401 | Invalid or missing API key |
| 403 | API key not permitted |
| 404 | Record not found |
| 429 | Rate limited |
| 500 | Server error |

## Rate Limits

Minimum acceptable limits:

- Pull sync: 60 requests per minute
- User lookup by email: 120 requests per minute
- Webhook delivery: no strict limit, but retries must back off

If limits are lower, please provide exact values so the support sync scheduler can be configured safely.

## Staging Requirements

Before production connection, Vietnam team should provide:

- Staging base URL
- Staging API key
- At least 10 sample users
- Sample deposits, withdrawals, trades, bonuses, and affiliate relations
- One user with no deposit
- One user with failed deposit
- One user with withdrawal on hold
- One affiliate with linked users and sales

## Acceptance Checklist

- [ ] `/health` works.
- [ ] All list endpoints support `updated_since`, `cursor`, and `limit`.
- [ ] User lookup by email works.
- [ ] Deposit, withdrawal, trade, bonus, and affiliate records contain stable IDs.
- [ ] Monetary values are decimal strings.
- [ ] Datetimes are UTC ISO 8601.
- [ ] Webhook signatures are documented and testable.
- [ ] Duplicate webhooks are safe.
- [ ] Read-only API key cannot modify production data.
- [ ] Staging data is available for integration testing.

