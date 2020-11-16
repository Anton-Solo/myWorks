let highscoreList = [];
let table = document.querySelector('.game_result-table');

//create span for every player

function createStr(data) {
    let str = document.createElement('span');
    str.classList.add('game_result-item');
    table.appendChild(str);
    str.textContent = data;
};

//displaying results in a table

function loadRes() {
    table.innerHTML = '';
    for (let i = 0; i < highscoreList.length; i++) {
        createStr(`${highscoreList[i].player} ~ ${highscoreList[i].score} points;`);
    }
};

// save results in local storage, create array from results, sort results

function saveResult () {
    let saveBtn = document.querySelector('.game_popup-save');
    saveBtn.addEventListener('click', saveMe);
    function saveMe () {
        let score = document.querySelector('#score').textContent;
        let name = document.querySelector('#username').value;
        let gameResult = {};
            
        gameResult = {player: name, score: score};
        highscoreList.push(gameResult);
        highscoreList.sort(function(a,b) { return (b.score - a.score)});
    
        localStorage.setItem('gameResult', JSON.stringify(highscoreList));
        loadRes();
        counter = 0;
        points.textContent = '0';
        checkList ();
        start.addEventListener('click', startFunc);
            
        saveBtn.removeEventListener('click', saveMe);
        document.querySelector('.game_popup-wrapper').style.display = "none";
    };
};

// score
function getScore () {
    let score = document.querySelector('#score');
    score.textContent = points.textContent;
};

// check local storage, only 11 results 

function checkList () {
    let parseResults = JSON.parse(localStorage.getItem('gameResult'));
    console.log(highscoreList);
    if(parseResults.length > 10) {
        localStorage.clear();
        highscoreList = [];
    }
};


