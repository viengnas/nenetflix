var modalS = document.getElementById("searchModal");
var modal = document.getElementById("loginModal");
var span = document.getElementsByClassName("close");
window.onload = function() {
    var anchors = document.getElementsByClassName("buttonWatch");
    var comAnchors = document.getElementsByClassName("buttonDownload");

    for(var i = 0; i < anchors.length; i++) {
        var anchor = anchors[i];
        anchor.onclick = function() {
            modalS.style.display = "block";
        }
    }

    for(var j = 0; j < comAnchors.length; j++) {
        var anchor = comAnchors[j];
        anchor.onclick = function() {
            modal.style.display = "block";
        }
    }
}

span[0].onclick = function () {
    modalS.style.display = "none";
}

span[1].onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modalS) {
        modalS.style.display = "none";
    }
    if (event.target == modal) {
        modal.style.display = "none";
    }
}