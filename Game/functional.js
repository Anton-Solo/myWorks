//load results from local storage

document.addEventListener('DOMContentLoaded', function () {
    if(window.localStorage.length > 1) {
        highscoreList = JSON.parse(localStorage.getItem('gameResult'));
        loadRes();
    }  
});

//button for start the game

let start = document.querySelector('#start');

start.addEventListener('click', startFunc) ;
    
function startFunc () {
    createField ();
    randomSq ();
    clickCreate ();
    timerCount ();

    start.removeEventListener('click', startFunc);
};


//timer

function timerCount () {
    let seconds = 60;
    function tick () {
        let counter = document.querySelector('.game_time-count');
        seconds--;
        counter.innerHTML = "0:" + (seconds < 10 ? "0" : "") + String(seconds);
        if ( seconds > 0 ) {
            setTimeout(tick , 100);
        } else {
            document.querySelector('.game_popup-wrapper').style.display = "block";
            field.innerHTML = '';
            getScore ();
            saveResult ();
        }
    }
    tick ();
    
};

//new game button

let newGame = document.querySelector('#new-game');

newGame.addEventListener('click', function () {
    localStorage.clear();
    location.reload();
});