import {draw as drawSnake, update as updateSnake, SNAKE_SPEED, getSnakeHead, snakeInterSection} from './snake.js'
import {draw as drawFood, update as updateFood} from './food.js'
import {outSideGrid} from './grid.js'

let lastRenderTime = 0
let gameOver = false
const gameBoard = document.getElementById('game-board')


function main(currentTime) {
  if (gameOver) {
    if (confirm('You Lose, Press Ok To Restart')) {
      window.location.reload()
    }
    return
  }

  window.requestAnimationFrame(main)
  const secondSinceLastRender = (currentTime - lastRenderTime) / 1000
  if (secondSinceLastRender < 1 / SNAKE_SPEED) return

  lastRenderTime = currentTime
  update()
  draw()
}

window.requestAnimationFrame(main)
function update() {
  updateSnake()
  updateFood()
  checkDeath()
}

function draw() {
  gameBoard.innerHTML = ''
  drawSnake(gameBoard)
  drawFood(gameBoard)
}

function checkDeath() {
  gameOver = outSideGrid(getSnakeHead()) || snakeInterSection()
}