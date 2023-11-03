setTimeout(function () {
    alert("instructions:- Hit number Click on bubble.")
}, 1000);

function makeBubble() {
    let newBubble = "";

    for (let i = 1; i <= 170; i++) {
        let randomNum = Math.floor(Math.random() * 10);
        newBubble += `<div id="bubble">${randomNum}</div>`;
    }

    document.querySelector("#downPart").innerHTML = newBubble;
}

let sec = 60;
function runTimer() {
    let timer = setInterval(function () {
        if (sec > 0) {
            sec--;
            document.querySelector("#timer").innerHTML = sec;
        }
        else {
            clearInterval(timer);
            document.querySelector("#downPart").innerHTML = `<h1 id = 'gOverHighScore'> highest Score :  <span id ='gOverHighScoreColor'>${score} </span></h1> <h1 id = 'gOver'> Game Over.... </h1>`
        }
    }, "1000");

}

let hitRandom;
function getNewhit() {
    hitRandom = Math.floor(Math.random() * 10);
    document.querySelector("#hit").textContent = hitRandom;
}

let score = 0;
function increaseScore() {
    score += 10;
    document.querySelector("#score").textContent = score;
}

document.querySelector("#downPart").addEventListener("click",function(details){
    let clickedNumber = Number(details.target.textContent);
    if(clickedNumber === hitRandom){
        increaseScore();
        makeBubble();
        getNewhit();
    }
});



makeBubble();
runTimer();
getNewhit();
