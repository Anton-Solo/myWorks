//create field, every cell has individual coordinates

let field = document.querySelector('.game_field');

function createField () {
    for (let i = 1; i < 101; i++) {
        let cells = document.createElement('div');
        field.appendChild(cells);
        cells.classList.add('game_field-cell');
    }

    let cells = document.getElementsByClassName('game_field-cell');
    let x = 1,
    y = 10;
    for(let i=0; i < cells.length; i++) {
        if (x > 10) {
            x=1;
            y--;
        }
    cells[i].setAttribute('posX', x);
    cells[i].setAttribute('posY', y);
    x++;
    }
}

//create cubs


const red = function createSq () {
    let sq ;
    let posX = Math.round(Math.random() * (10 - 1) + 1);
    let posY = Math.round(Math.random() * (10 - 1) + 1);
    let sqCoordinates = [ posX, posY ];

    sq = document.querySelector('[posX = "' + sqCoordinates[0] +'"][posY = "' + sqCoordinates[1] + '"]');
    sq.classList.add('square');
    
}

const blue = function createSqBlue () {
    let sqBl ;
    let posX = Math.round(Math.random() * (10 - 1) + 1);
    let posY = Math.round(Math.random() * (10 - 1) + 1);
    let sqCoordinates = [ posX, posY ];

    sqBl = document.querySelector('[posX = "' + sqCoordinates[0] +'"][posY = "' + sqCoordinates[1] + '"]');
    sqBl.classList.add('squareBlue');
}

const yellow = function createSqyellow () {
    let sqYell ;
    let posX = Math.round(Math.random() * (10 - 1) + 1);
    let posY = Math.round(Math.random() * (10 - 1) + 1);
    let sqCoordinates = [ posX, posY ];

    sqYell = document.querySelector('[posX = "' + sqCoordinates[0] +'"][posY = "' + sqCoordinates[1] + '"]');
    sqYell.classList.add('squareYellow');
}

//function for random cubes

const arrColor = [red, blue, yellow];
    randomSq = () => {
        for(let i = 0; i < 2; i++){
            arrColor[Math.floor(Math.random() * arrColor.length)]();
        }
        
    }

let counter = 0;
let points = document.querySelector('.game_points-num');

// funtion for  create random times cubes
let create = function () {
    for(let i = 0; i < Math.floor(Math.random() * 2); i++){
        randomSq ();
    };
}

function clickCreate () {
    create();
    let squaresArray = [];
    let sqArr = [];
    
    let squares = document.querySelectorAll('.square');
    let squaresBlue = document.querySelectorAll('.squareBlue');
    let squaresYellow = document.querySelectorAll('.squareYellow');
    if(squares) {
        squaresArray.push(squares);
    } 
    if (squaresBlue) {
        squaresArray.push(squaresBlue);
    }
    if (squaresYellow) {
        squaresArray.push(squaresYellow)
    }
    
    //make one array from maxtrix
    for(i = 0; i < squaresArray.length; i++) {
        for(j = 0; j < squaresArray[i].length; j++) {
            sqArr.push(squaresArray[i][j]);
        }
    }

    //hang up click
    sqArr.forEach( el => el.addEventListener('click', function () {
            
        if (el.classList.contains('square')) {
            this.classList.remove('square');
            let point = 1;
            counter = counter + point;
            points.textContent = counter;
        } 
        if (el.classList.contains('squareBlue')) {
            this.classList.remove('squareBlue');
            let point = 3;
            counter = counter + point;
            points.textContent = counter;
        } 
        if (el.classList.contains('squareYellow')) {
            this.classList.remove('squareYellow');
            let point = 2;
            counter = counter + point;
            points.textContent = counter;
        }
        
        checkField ();
        clickCreate ();  
        })
    );
}

//check field 
function checkField () {
    let check = [];
    

    for (let i = 0; i < field.childNodes.length; i++) {
        
        if(field.childNodes[i].classList.contains("square") || field.childNodes[i].classList.contains("squareBlue") || field.childNodes[i].classList.contains("squareYellow")) {
            check.push(field.childNodes[i]);    
        }
        

    }
    if (check.length < 1) {
        create = randomSq ;
    } else if (check.length > 10) {
        field.innerHTML = '';
        createField ();
        randomSq();  
    }else  {
        create = function () {
            for(let i = 0; i < Math.floor(Math.random() * 2); i++){
                randomSq ();
            };
        }
    }
};


