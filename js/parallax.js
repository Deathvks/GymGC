function initialize(){
    window.addEventListener("scroll", moveDivWhenUserScrolls);
}

function moveDivWhenUserScrolls(){
    moveDivWhenUserScrolls1();
    moveDivWhenUserScrolls2();
}

function moveDivWhenUserScrolls1(){
    const SCROLL_POSITION = window.scrollY;

    const IMAGE_TEXT = document.getElementById("image-and-text");
    IMAGE_TEXT.style.left = SCROLL_POSITION + "px"; 
}

function moveDivWhenUserScrolls2() {
    const SCROLL_THRESHOLD = 800; // Cambia este valor a la cantidad de píxeles requeridos
    const SCROLL_POSITION = window.scrollY;

    if (SCROLL_POSITION >= SCROLL_THRESHOLD) {
        const IMAGE_TEXT = document.getElementById("image-and-text2");
        IMAGE_TEXT.style.left = (SCROLL_POSITION - SCROLL_THRESHOLD) + "px";
    }
}

initialize();
