function initializeMenu() {
    const HEADER_MENU_ICON = document.getElementById("header-menu-icon");
    HEADER_MENU_ICON.addEventListener("click", showHideMenu);

    const SIDE_MENU_ICON = document.getElementById("side-menu-icon");
    SIDE_MENU_ICON.addEventListener("click", hideSideMenu);

    const SIDE_MENU = document.getElementById("side-menu");

    document.addEventListener("click", function(event) {
        const isClickInsideMenu = SIDE_MENU.contains(event.target);
        const isHeaderMenuIcon = event.target === HEADER_MENU_ICON;
        if (!isClickInsideMenu && !isHeaderMenuIcon) {
            hideSideMenu();
        }
    });
}

function showHideMenu() {
    const SIDE_MENU = document.getElementById("side-menu");
    SIDE_MENU.style.visibility = "visible";
}

function hideSideMenu() {
    const SIDE_MENU = document.getElementById("side-menu");
    SIDE_MENU.style.visibility = "hidden";
}

initializeMenu();
