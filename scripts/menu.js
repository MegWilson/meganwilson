function menu() {
    var dropdown = document.getElementById("nav-links");
    if (dropdown.className === "nav-links") {
        dropdown.className += " responsive";
    } else {
        dropdown.className = "nav-links";
    }
}