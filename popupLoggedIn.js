var modalS = document.getElementById("searchModal");
var btnS = document.getElementById("searchButton");
var span = document.getElementsByClassName("close");

btnS.onclick = function () {
    modalS.style.display = "block";
}

span[0].onclick = function () {
    modalS.style.display = "none";
}   

if(document.getElementById("watchModal")) {
    var modalW = document.getElementById("watchModal");
    var btnW = document.getElementById("watchButton");

    btnW.onclick = function () {
        modalW.style.display = "block";
    }

    window.onclick = function (event) {
        if (event.target == modalS) {
            modalS.style.display = "none";
        }
        if (event.target == modalW) {
            modalW.style.display = "none";
        }
    }
}
else {
    window.onclick = function (event) {
        if (event.target == modalS) {
            modalS.style.display = "none";
        }
    }
}