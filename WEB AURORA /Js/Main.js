// 

function toggleMenu() {
    var menu = document.getElementById("Menu");
    var line_hide = document.getElementById("line_hide");
    var line_unhide = document.getElementById("line_unhide");
    if (menu.style.display === "none") {
        menu.style.display = "block";
        line_hide.style.display = "block";
        line_unhide.style.display = "none";
        document.getElementById("stk_line_hide").style.fill = "#f9bd3b";
    } else {
        menu.style.display = "none";
        line_hide.style.display = "none";
        line_unhide.style.display = "block";
    }
}
