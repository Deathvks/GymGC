function initializeMenu() {
    const HEADER_MENU_ICON = document.getElementById("header-menu-icon");
    HEADER_MENU_ICON.addEventListener("click", showHideMenu);

    const SIDE_MENU_ICON = document.getElementById("side-menu-icon");
    SIDE_MENU_ICON.addEventListener("click", hideSideMenu);

    const SIDE_MENU = document.getElementById("side-menu");
    const OVERLAY = document.getElementById("overlay");

    document.addEventListener("click", function(event) {
        const isClickInsideMenu = SIDE_MENU.contains(event.target);
        const isHeaderMenuIcon = event.target === HEADER_MENU_ICON;
        if (!isClickInsideMenu && !isHeaderMenuIcon) {
            hideSideMenu();
        }
    });

    function showHideMenu() {
        SIDE_MENU.style.visibility = "visible";
        OVERLAY.style.display = "block"; // Mostrar la capa de fondo
    }

    function hideSideMenu() {
        SIDE_MENU.style.visibility = "hidden";
        OVERLAY.style.display = "none"; // Ocultar la capa de fondo
    }
}

initializeMenu();
