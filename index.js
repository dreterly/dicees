let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomDiceImg = "dice" + randomNumber1 + ".png";
let randomSource = "images/" + randomDiceImg;
let img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", randomSource);

let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomDiceImg2 = "dice" + randomNumber2 + ".png";
let randomSource2 = "images/" + randomDiceImg2;
let img2 = document.querySelectorAll("img")[1];
 img2.setAttribute("src", randomSource2);

 if(randomNumber1>randomNumber2){
    document.querySelector("h1").textContent="Player1 Wins!"
 }
 else if(randomNumber1<randomNumber2){
      document.querySelector("h1").textContent="Player2 Wins!"
 }
 else(
     document.querySelector("h1").textContent="Draw!"
 )
