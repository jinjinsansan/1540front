document.addEventListener("DOMContentLoaded", () => {
  const mobileToggle = document.querySelector(".mobile-menu-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");

  const closeMenu = () => {
    mobileToggle?.classList.remove("active");
    mobileMenu?.classList.remove("active");
    document.body.classList.remove("locked-scroll");
  };

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener("click", () => {
      mobileToggle.classList.toggle("active");
      mobileMenu.classList.toggle("active");
      document.body.classList.toggle("locked-scroll", mobileMenu.classList.contains("active"));
    });

    mobileMenu.addEventListener("click", (event) => {
      if (event.target instanceof HTMLAnchorElement) {
        closeMenu();
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 980) {
        closeMenu();
      }
    });
  }
});
