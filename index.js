var randomNumber1=Math.floor(Math.random()*6)+1;
var randomNumber2=Math.floor(Math.random()*6)+1;
if(randomNumber1>randomNumber2){
  document.querySelector("h1.winner").innerHTML="Player 1 is the winner.";
}
if(randomNumber1<randomNumber2){
document.querySelector("h1.winner").innerHTML="Player 2 is the winner.";
}
if(randomNumber1===randomNumber2)
{
document.querySelector("h1.winner").innerHTML="It is a tie.";
}
document.querySelector("img.img1").src="images/dice"+randomNumber1+".png";
document.querySelector("img.img2").src="images/dice"+randomNumber2+".png";
