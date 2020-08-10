let randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6;
randomNumber1 = Math.floor(randomNumber1 + 1);

let randomImage = "dice" + randomNumber1 + ".png"
let imageSource = "images/" + randomImage
document.querySelectorAll("img")[0].setAttribute("src", imageSource)


let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomImage2 = "dice" + randomNumber2 + ".png"
let randomImageSource2 = "images/" + randomImage2;
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "There is a draw"
} else if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 is the winner"
} else{
    document.querySelector("h1").innerHTML = "Player 2 won"
};