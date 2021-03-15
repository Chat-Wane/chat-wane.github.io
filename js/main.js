
window.onload = createNav

/**
 * Creates the navigation bar on the left of the screen that enables
 * navigation between sections.
 */
function createNav() {
    let nav = document.createElement("nav");
    document.body.prepend(nav);

    let sep = document.createElement("div");
    sep.setAttribute("id", "vertical");
    document.body.prepend(sep);
    
    let sections = document.getElementsByTagName("h2");
    console.log(sections.length);
    for (let i = 0; i < sections.length; ++i) {
	let section = sections[i];
	let anchor = document.createElement("a");
	anchor.setAttribute("href", "#"+section.getAttribute("id"));
	anchor.text = section.textContent || section.innerText;
	nav.appendChild(anchor);
	console.log(section.textContent);
	console.log(section);
    }

    let rect = nav.getBoundingClientRect();
    sep.style.left = rect.width + "px";
    nav.style.top = "-" + rect.width + "px";       
}

// function moveNavi(element) {
//     let rect = element.getBoundingClientRect();
//     let navi = document.getElementById("navi");

//     navi.style.left = -6 + rect.x + "px";
//     navi.style.top = -34 + rect.y + "px";
// }

// let epsilon = 30;

// window.onscroll = function() {

//     let about = document.getElementById("About");
//     let publications = document.getElementById("Publications");
//     let projects = document.getElementById("Projects");
//     let contact = document.getElementById("Contact");
    
//     if (about.getBoundingClientRect().y + about.getBoundingClientRect().height >= epsilon) {
// 	moveNavi(document.getElementById("navAbout"));	
//     } else if (publications.getBoundingClientRect().y + publications.getBoundingClientRect().height >= epsilon) {
// 	moveNavi(document.getElementById("navPublications"));	
//     } else if (projects.getBoundingClientRect().y + projects.getBoundingClientRect().height >= epsilon) {
// 	moveNavi(document.getElementById("navProjects"));
//     } else {
// 	moveNavi(document.getElementById("navContact"));
//     }
    

// }
