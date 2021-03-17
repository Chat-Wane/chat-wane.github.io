
window.onload = init
window.onresize = resizeNav

function init () {
    createNav();
    highlightPre();
}


/**
 * Depending on screen, might be too light, onmouseover highlight
 * the text within.
 */
function highlightPre() {
    let pres = document.getElementsByTagName("pre");
    for (let i = 0; i < pres.length; ++i) {
	pres[i].onmouseover = () => pres[i].style.color = "var(--nord3)";	
	pres[i].onmouseout  = () => pres[i].style.color = "var(--nord4)";
    }
}



/**
 * Resize to always have all navigation links available, whatever the
 * resolution of the screen.
 */
function resizeNav() {
    let nav = document.getElementsByTagName("nav")[0];
    nav.style.width = window.innerHeight + "px";
    
    let rect = nav.getBoundingClientRect();

    document.documentElement.style.setProperty("--left-margin", rect.width + "px");
}

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
    for (let i = 0; i < sections.length; ++i) {
	let section = sections[i];
	let anchor = document.createElement("a");
	anchor.setAttribute("href", "#"+section.getAttribute("id"));
	anchor.text = section.textContent || section.innerText;
	nav.appendChild(anchor);
    }

    // let rect = nav.getBoundingClientRect();
    // sep.style.left = rect.width + "px";
    // nav.style.top = "-" + rect.width + "px";
    
    resizeNav()
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
