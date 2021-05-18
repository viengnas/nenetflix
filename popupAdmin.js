var modalS = document.getElementById("searchModal");
var span = document.getElementsByClassName("close");
window.onload = function() {
    var anchors = document.getElementsByClassName("buttonWatch");
    for(var i = 0; i < anchors.length; i++) {
        var anchor = anchors[i];
        anchor.onclick = function() {
            modalS.style.display = "block";
        }
    }
}

span[0].onclick = function () {
    modalS.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modalS) {
        modalS.style.display = "none";
    }
}