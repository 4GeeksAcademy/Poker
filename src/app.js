import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {

  const clases = [
    { symbol: "♦", color: "red" },
    { symbol: "♥", color: "red" },
    { symbol: "♠", color: "black" },
    { symbol: "♣", color: "black" }
  ];

  const ranking = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"];

 
  function generarCarta() {
    const randomClass = clases[Math.floor(Math.random() * clases.length)];
    const randomRanking = ranking[Math.floor(Math.random() * ranking.length)];
    document.getElementById("corner-top").innerHTML = randomClass.symbol;
    document.getElementById("corner-bottom").innerHTML = randomClass.symbol;
    document.getElementById("center-symbol").innerHTML =  randomRanking;
    document.getElementById("corner-top").style.color = randomClass.color;
    document.getElementById("corner-bottom").style.color = randomClass.color;
  }

  document.getElementById("newCardBtn").addEventListener("click", generarCarta);
  setInterval(generarCarta, 10000);

 
  const card = document.getElementById("card");

  function actualizarTamaño() {
    const w = document.getElementById("widthInput").value;
    const h = document.getElementById("heightInput").value;

    card.style.width = w + "px";
    card.style.height = h + "px";
  }

  document.getElementById("widthInput").addEventListener("input", actualizarTamaño);
  document.getElementById("heightInput").addEventListener("input", actualizarTamaño);

  
  generarCarta();
  actualizarTamaño();
};
