var modal = document.getElementById("loginModal");
var modalS = document.getElementById("searchModal");
var modalR = document.getElementById("registerModal");
var btn = document.getElementById("loginButton");
var btnS = document.getElementById("searchButton");
var btnR = document.getElementById("registerButton");
var span = document.getElementsByClassName("close");

btn.onclick = function () {
    modal.style.display = "block";
}

btnS.onclick = function () {
    modalS.style.display = "block";
}

btnR.onclick = function () {
    modalR.style.display = "block";
}

span[0].onclick = function () {
    modalS.style.display = "none";
}

span[1].onclick = function () {
    modal.style.display = "none";
}

span[2].onclick = function () {
    modalR.style.display = "none";
}

/* reikia daryt šitas retardation nes jei saite nėra watchmodal negalima išjungt neivieno modal */
if(document.getElementById("watchModal")) {
    var modalW = document.getElementById("watchModal");
    var btnW = document.getElementById("watchButton");

    btnW.onclick = function () {
        modalW.style.display = "block";
    }
    
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
        if (event.target == modalS) {
            modalS.style.display = "none";
        }
        if (event.target == modalR) {
            modalR.style.display = "none";
        }
        if (event.target == modalW) {
            modalW.style.display = "none";
        }
    }
} else {
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
        if (event.target == modalS) {
            modalS.style.display = "none";
        }
        if (event.target == modalR) {
            modalR.style.display = "none";
        }
    }
}