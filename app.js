function dropFunction() {
    document.getElementById("drop-content").classList.toggle("show");
}

// function closeFunction() {
//     document.getElementById("drop-content").classList.toggle("close");
// }

window.onclick = function(event) {
    if (!event.target.matches('.drop-button')) {
        var dropdowns = document.getElementsById("drop-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
        }
    }