// called whenever the mouse is inside the div
function trackMouse(el, isInside) {
    var rect = el.getBoundingClientRect();
    var child = el.childNodes[1];
    var posX = event.clientX - rect.left;
    var posY = event.clientY - rect.top;
    var childWidth = child.offsetWidth;
    var childHeight = child.offsetHeight;

    var speed = 3000

    var maxPosX = rect.width - childWidth / 2;
    var maxPosY = rect.height - childHeight / 2;
    var minPosX = childWidth / 2;
    var minPosY = childHeight / 2;

    

    // limit posX and posY to stay within the bounds of the div
    posX = Math.min(Math.max(posX, minPosX), maxPosX);
    posY = Math.min(Math.max(posY, minPosY), maxPosY);

    if (isInside === false) {
        posX = rect.width/2
        posY = rect.height/2
        speed = 1000
    } else {
        speed = 20000
    }

    child.animate({
        left: (posX - childWidth / 2) + "px",
        top: (posY - childHeight / 2) + "px"
    }, {
        duration: speed,
        fill: "forwards"
    });


}

