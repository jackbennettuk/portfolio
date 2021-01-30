// THIS FILE HANDLES AUTOMATIC TITLES, FAVICONS, ETC
// IT ALSO REFERENCES ALL OTHER GLOBAL FILES SUCH AS GLOBAL.CSS

// Automatic title
const siteName = "Jack Bennett";

let pageName;
pageName = window.location.pathname.split("/").pop();
pageName = pageName.replace(".html", "");
pageName = pageName.charAt(0).toUpperCase() + pageName.slice(1);

document.title = pageName + " | "+ siteName;

console.log(pageName);

// Automatic favicon


// Automatically add any global CSS and JS
function addCssFile(href) {
    let link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;

    document.head.appendChild(link);
} function addJsFile(href) {
    let script = document.createElement("script");
    script.src = href;

    document.body.appendChild(script);
}

addCssFile("../src/css/global.css");