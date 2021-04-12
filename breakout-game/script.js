//declaring
const container = document.querySelector(".container");
const scoreDispaly = document.querySelector(".score");
const button = document.querySelector(".guide");
const blockHeight = 20;
const blockWidth = 100;
const userStart = [340, 30];
let currentPosition = userStart;
const boardWidth = 780;
const boardHeight = 370;
const ballDiameter = 20;
const userblockWidth = 120;
const ballStartPosi = [390, 50];
let ballCurrentPosition = ballStartPosi;
let timerinterval;
let yDirection = 2;
let xDirection = 2;
let score = 0;

//block
class Block {
  constructor(xAxis, yAxis) {
    this.bottomLeft = [xAxis, yAxis];
    this.bottomRight = [xAxis + blockWidth, yAxis];
    this.topRight = [xAxis + blockWidth, yAxis + blockHeight];
    this.topLeft = [xAxis, yAxis + blockHeight];
  }
}
//generating blocks with positions
const blocks = [
  new Block(10, 330),
  new Block(120, 330),
  new Block(230, 330),
  new Block(340, 330),
  new Block(450, 330),
  new Block(560, 330),
  new Block(670, 330),
  new Block(10, 300),
  new Block(120, 300),
  new Block(230, 300),
  new Block(340, 300),
  new Block(450, 300),
  new Block(560, 300),
  new Block(670, 300),
  new Block(10, 270),
  new Block(120, 270),
  new Block(230, 270),
  new Block(340, 270),
  new Block(450, 270),
  new Block(560, 270),
  new Block(670, 270),
];
//addingBlock
const addBlock = () => {
  for (let i = 0; i < blocks.length; i++) {
    const block = document.createElement("div");
    block.classList.add("block");
    block.style.left = blocks[i].bottomLeft[0] + "px";
    block.style.bottom = blocks[i].bottomLeft[1] + "px";
    container.appendChild(block);
  }
};

addBlock();

// user
const user = document.createElement("div");
user.classList.add("user");
container.appendChild(user);

// drawing
const drawUser = () => {
  user.style.left = currentPosition[0] + "px";
  user.style.bottom = currentPosition[1] + "px";
};
const drawBall = () => {
  ball.style.left = ballCurrentPosition[0] + "px";
  ball.style.bottom = ballCurrentPosition[1] + "px";
};

drawUser();
// moving user
const moveUser = (e) => {
  switch (e.key) {
    case "ArrowLeft":
      currentPosition[0] > 0 ? ((currentPosition[0] -= 10), drawUser()) : {};
      break;
    case "ArrowRight":
      currentPosition[0] < boardWidth - userblockWidth
        ? ((currentPosition[0] += 10), drawUser())
        : {};
      break;

    default:
      break;
  }
};
//actions made
document.addEventListener("keydown", moveUser);

//ball
const ball = document.createElement("div");
ball.classList.add("ball");
container.appendChild(ball);
drawBall();

//move the ball
const moveBall = () => {
  ballCurrentPosition[1] += yDirection;
  ballCurrentPosition[0] += xDirection;
  drawBall();
  checkForCollisions();
};

const changeDirection = () => {
  if (xDirection === 2 && yDirection === 2) {
    yDirection = -2;
    return;
  }
  if (xDirection === 2 && yDirection === -2) {
    xDirection = -2;
    return;
  }
  if (xDirection === -2 && yDirection === -2) {
    yDirection = 2;
    return;
  }
  if (xDirection === -2 && yDirection === 2) {
    xDirection = 2;
    return;
  }
};

const checkForCollisions = () => {
  for (let i = 0; i < blocks.length; i++) {
    //prettier-ignore
    if ((ballCurrentPosition[0] > blocks[i].bottomLeft[0] &&ballCurrentPosition[0] < blocks[i].bottomRight[0]) &&
    //prettier-ignore
      ((ballCurrentPosition[1] + ballDiameter) > blocks[i].bottomLeft[1] &&ballCurrentPosition[1] < blocks[i].topLeft[1])
    ) {
      const allBlocks = Array.from(document.querySelectorAll(".block"));
      allBlocks[i].classList.remove("block");
      blocks.splice(i, 1);
      changeDirection();
        score++;
        scoreDispaly.innerHTML=score
    }
  }
  //user collision
  if (
    //prettier-ignore
    (ballCurrentPosition[0] > currentPosition[0] &&ballCurrentPosition[0] < currentPosition[0] + blockWidth)&&
    (ballCurrentPosition[1] > currentPosition[1] && ballCurrentPosition[1] < currentPosition[1] + blockHeight)
  ) {
    changeDirection();
  }
  //wall Collision
  if (
    ballCurrentPosition[0] >= boardWidth - ballDiameter ||
    ballCurrentPosition[1] >= boardHeight - ballDiameter ||
    ballCurrentPosition[0] < 0
  ) {
    changeDirection();
  }
  if (blocks.length === 0) {
    clearInterval(timerinterval);
    scoreDispaly.innerHTML = "You Won";
  }
  if (ballCurrentPosition[1] <= 0) {
    clearInterval(timerinterval);
    scoreDispaly.innerHTML = "you've lost";
    button.innerHTML = "replay";
    document.removeEventListener("keydown", moveUser);
  }
};
//button actions
timerinterval = setInterval(moveBall, 30);
