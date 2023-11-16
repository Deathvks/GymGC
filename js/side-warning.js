function initialize(){
    const SIDE_ALERT_WARNING = document.getElementById("close");
    SIDE_ALERT_WARNING.addEventListener("click", HideAlertWarning);
}

function HideAlertWarning(){
    const SIDE_ALERT = document.getElementById("alert");
    SIDE_ALERT.style.display = "none";
}

initialize();