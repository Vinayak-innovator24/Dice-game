
let randomNumber1 = Math.floor(Math.random()*6) + 1;
let random_image1 = "images/dice" + randomNumber1 + ".png";
document.getElementsByClassName("img")[0].setAttribute("src" ,random_image1);

let randomNumber2 = Math.floor(Math.random()*6) + 1;
let random_image2 = "images/dice" + randomNumber2 + ".png";
document.getElementsByClassName("img")[1].setAttribute("src" ,random_image2);

if(randomNumber1 == randomNumber2){
    document.querySelector("h1").innerHTML = "Draw";
}

else if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins";
}

else{
    document.querySelector("h1").innerHTML = "Player 2 wins";
}