function initializeMenu() {
  const HEADER_MENU_ICON = document.getElementById("header-menu-icon");
  HEADER_MENU_ICON.addEventListener("click", showHideMenu);

  const SIDE_MENU_ICON = document.getElementById("side-menu-icon");
  SIDE_MENU_ICON.addEventListener("click", hideSideMenu);

  const SIDE_MENU = document.getElementById("side-menu");
  const OVERLAY = document.getElementById("overlay");

  document.addEventListener("click", function (event) {
    const isClickInsideMenu = SIDE_MENU.contains(event.target);
    const isHeaderMenuIcon = event.target === HEADER_MENU_ICON;
    if (!isClickInsideMenu && !isHeaderMenuIcon) {
      hideSideMenu();
    }
  });

  function showHideMenu() {
    SIDE_MENU.classList.add("visible"); // Add the class to show the side-menu
    OVERLAY.style.display = "block"; // Show background layer
  }

  function hideSideMenu() {
    SIDE_MENU.classList.remove("visible"); // Remove the class to hide the side-menu
    OVERLAY.style.display = "none"; // Hide background layer
  }
}

initializeMenu();
