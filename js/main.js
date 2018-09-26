
function moveNavi(element) {
    let rect = element.getBoundingClientRect();
    let navi = document.getElementById("navi");

    navi.style.left = -6+rect.x +"px";
    navi.style.top = -34+rect.y +"px";
}
