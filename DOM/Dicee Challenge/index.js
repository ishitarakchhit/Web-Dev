var randomnumber1 = Math.floor(Math.random()*6) +1;
document.querySelector("img").setAttribute("src", "./images/dice"+randomnumber1+".png");

var randomnumber2 = Math.floor(Math.random()*6) +1;
document.querySelectorAll("img")[1].setAttribute("src", "./images/dice"+randomnumber2+".png");

var result;

if(randomnumber1 > randomnumber2){
    result = "🚩 Player 1 Wins";
}
else if(randomnumber1 < randomnumber2){
    result = "Player 2 Wins 🚩";
}
else{
    result = "🎌 Draw 🎌";
}

document.querySelector("h1").innerHTML= result;
