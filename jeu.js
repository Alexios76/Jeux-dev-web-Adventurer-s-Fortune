var click = 0;
var TempsEcoule = false;
function Score() {
    if (!TempsEcoule) {
        click += 1;
        document.getElementById("score").innerHTML = click;
    }
}
var time = 60; //temps en secondes
var timer = setInterval(function () {
    time--;
    document.getElementById("timer").innerHTML = time + "s";
    if (time == 0) {
        clearInterval(timer);
        document.getElementById("timer").innerHTML = "Temps écoulé!";
        TempsEcoule = true;
    }
}, 1000);

function movebox() {
    var box = document.getElementById("thebox");
    var top = Math.random() * window.innerHeight;
    var left = Math.random() * window.innerWidth;
    box.style.top = top + "px";
    box.style.left = left + "px";
  }
  