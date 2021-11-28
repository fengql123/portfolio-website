let looper;
let degrees = 0;
function rotate(el, speed) {
    let cog1 = document.getElementById(el)
    cog1.style.transform = "rotate("+degrees+"deg)";
    looper = setTimeout('rotateAnimation(\''+el+'\','+speed+')', speed);
    degrees++;
    if (degrees > 359) {
        degrees = 1;
    }
}