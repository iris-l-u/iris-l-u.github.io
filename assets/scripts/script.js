function hide1() {
    var x = document.getElementById("hidden1");
    if (x.style.display === "none") {
        x.style.display = "flex";
        x.style.flexDirection = "column";
        x.style.alignItems = "center";
    } else {
        x.style.display = "none";
    }
}

document.getElementById("button1").onclick = hide1;

function hide2() {
    var x = document.getElementById("hidden2");
    if (x.style.display === "none") {
        x.style.display = "flex";
        x.style.flexDirection = "column";
        x.style.alignItems = "center";
    } else {
        x.style.display = "none";
    }
}

document.getElementById("button2").onclick = hide2;

function hide3() {
    var x = document.getElementById("hidden3");
    if (x.style.display === "none") {
        x.style.display = "flex";
        x.style.flexDirection = "column";
        x.style.alignItems = "center";
    } else {
        x.style.display = "none";
    }
}

document.getElementById("button3").onclick = hide3;