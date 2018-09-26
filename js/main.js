
function moveNavi(element) {
    let rect = element.getBoundingClientRect();
    let navi = document.getElementById("navi");

    navi.style.left = -6 + rect.x + "px";
    navi.style.top = -34 + rect.y + "px";
}

let epsilon = 30;

window.onscroll = function() {

    let about = document.getElementById("About");
    let publications = document.getElementById("Publications");
    let projects = document.getElementById("Projects");
    let contact = document.getElementById("Contact");
    
    if (about.getBoundingClientRect().y + about.getBoundingClientRect().height >= epsilon) {
	moveNavi(document.getElementById("navAbout"));	
    } else if (publications.getBoundingClientRect().y + publications.getBoundingClientRect().height >= epsilon) {
	moveNavi(document.getElementById("navPublications"));	
    } else if (projects.getBoundingClientRect().y + projects.getBoundingClientRect().height >= epsilon) {
	moveNavi(document.getElementById("navProjects"));
    } else {
	moveNavi(document.getElementById("navContact"));
    }
    

}
