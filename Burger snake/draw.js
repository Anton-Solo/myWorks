const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
const hamb = new Image();
hamb.src = "img/hamb.png";
const scale = 25; 
const rows = canvas.height / scale;
const columns = canvas.width / scale;

let snake;

(function setup() {
    snake = new Snake();
    fruit = new Fruit();

    fruit.getLocation();

    window.setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        fruit.draw();
        snake.update();
        snake.draw();
        

        if (snake.eat(fruit)) {
            fruit.getLocation();
        }

        snake.checkCrash();
        document.querySelector('.score').innerText = snake.total;

    }, 120);
}());

window.addEventListener('keydown', ((event) => {
    const direction = event.key.replace('Arrow', '');
    snake.changeDirection(direction);
}))