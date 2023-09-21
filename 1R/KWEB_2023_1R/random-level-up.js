const probs = [100, 60, 36, 22, 13, 8, 5, 3, 2, 1];

let currentLevel = 0;
let currentAttempt = 0;
let intervalID;

const getRandomBinaryResult = (a) => {
    let randnum = Math.floor(Math.random()*100);
    return (randnum < a);
};

function work(){
    currentAttempt++;
    document.getElementById('attempts').innerText = currentAttempt;
    const dice = getRandomBinaryResult(probs[currentLevel]);
    if(dice){
        currentLevel++;
        document.getElementById('current-level').innerText = currentLevel;
        document.getElementById('gauge-bar').style.width = (currentLevel * 10) + '%';
    }
    if(currentLevel >= 10){
        clearInterval(intervalID);
    }
};

function tryLevelUp() {
    intervalID = setInterval(work, 50);
};