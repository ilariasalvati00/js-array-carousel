const up = document.getElementById("up");
const down = document.getElementById("down");
const img = document.getElementById("carousel");

let immagini = ["img/01.webp", "img/02.webp", "img/03.webp", "img/04.webp", "img/05.webp"]

let contatore = 0;

down.addEventListener("click",
function(){
    contatore = contatore % 5 + 1;
    img.src = immagini[contatore]; 
});

up.addEventListener("click",
function(){
    contatore = contatore % 5 - 1;
    img.src = immagini[contatore]; 
});




