const canvas = document.querySelector("#gameCanvas");
const ctx = canvas.getContext("2d");

const CANVAS_HEIGHT = canvas.height;
const CANVAS_WIDTH = canvas.width;

const BOARD_Y = 50; // y dla punktacji
const BOARD_P1_X = 300;
const BOARD_P2_X = 500;

const PADDLE_WIDTH = 20;
const PADDLE_HEIGHT = 100;
const PADDLE_P1_X = 10;
const PADDLE_P2_X = 770;
const PADDLE_START_Y = (CANVAS_HEIGHT - PADDLE_HEIGHT) / 2

const BALL_R = 15; // promień piłeczki
const BALL_START_X = CANVAS_WIDTH / 2;
const BALL_START_Y = CANVAS_HEIGHT / 2;
const BALL_START_DX = 4.5; // początkowa prędkość lotu piłeczki na współrzędnej x
const BALL_START_DY = 1.5 // początkowa prędkość lotu piłeczki na współrzeędnej y
const STATE_CHANGE_INTERVAL = 20;

let ballX = BALL_START_X;
let ballY = BALL_START_Y;
let ballDX = BALL_START_DX;
let ballDY = BALL_START_DY;
let p1PaddleY = PADDLE_START_Y
let p2PaddleY = PADDLE_START_Y;
let p1Points = 0;
let p2Points = 0;


ctx.font = "30px Arial"

function drawPaddle(x, y) {
    ctx.fillRect(x, y, 20, 100)
}

function drawPoints(text, x) {
    ctx.fillText(text, x, BOARD_Y);
}

function drawCircle(x, y, r) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fill();
}

function drawBall(x, y) {
    drawCircle(x, y, BALL_R);
}

function drawState() {
    clearCanvas();
    drawPoints(p1Points.toString(), BOARD_P1_X);
    drawPoints(p2Points.toString(), BOARD_P2_X);
    drawBall(ballX, ballY);
    drawPaddle(PADDLE_P1_X, p1PaddleY);
    drawPaddle(PADDLE_P2_X, p2PaddleY);
}

function clearCanvas() {
    ctx.clearRect(0,0, canvas.width, canvas.height);
}

function updateState(){
    ballX = ballX + ballDX;
    ballY = ballY + ballDY;

    p1PaddleY++;
    p2PaddleY--;
    p1Points++;
    p2Points += 3;
}

function updateAndDrawState() {
    updateState();
    drawState();
}

setInterval(updateAndDrawState, STATE_CHANGE_INTERVAL);

drawPaddle(770, 100);
drawPaddle(10, 300);

drawText('3', 300, 50);
drawText('6', 500, 50);

drawCircle(400,250,10);


