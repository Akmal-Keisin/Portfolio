let r = document.getElementById('r').value
let g = document.getElementById('g').value
let b = document.getElementById('b').value
document.body.style.backgroundColor = 'rgb(' + r + ', ' + g + ', '+ b +')'

const setColor = document.getElementsByClassName('color-pick')[0]
setColor.addEventListener('click', function () {
  let color = randomRgb()
  document.body.style.backgroundColor = color 
  const value = document.getElementById('rgb-val')
  value.value = color
}) 

const randomColor = document.getElementsByClassName('random-color')[0]
randomColor.addEventListener('click', function() {
  let randomRed = Math.round(Math.random() * 255)
  let randomGreen = Math.round(Math.random() * 255)
  let randomBlue = Math.round(Math.random() * 255)

  let rgbColor = 'rgb(' + randomRed + ', ' + randomGreen + ', '+ randomBlue +')'
  document.body.style.backgroundColor = rgbColor 
  const value = document.getElementById('rgb-val')
  value.value = rgbColor
})

const red = document.getElementById('r')
red.addEventListener('input', function() {
  let r = red.value
  let g = green.value
  let b = blue.value
  let rgbColor = 'rgb(' + r + ', ' + g + ', '+ b +')'
  document.body.style.backgroundColor = rgbColor
  const value = document.getElementById('rgb-val')
  value.value = rgbColor
})
const green = document.getElementById('g')
green.addEventListener('input', function() {
  let r = red.value
  let g = green.value
  let b = red.value
  let rgbColor = 'rgb(' + r + ', ' + g + ', '+ b +')'
  document.body.style.backgroundColor = rgbColor
  const value = document.getElementById('rgb-val')
  value.value = rgbColor
})
const blue = document.getElementById('b')
blue.addEventListener('input', function() {
  let r = red.value
  let g = green.value
  let b = blue.value
  let rgbColor = 'rgb(' + r + ', ' + g + ', '+ b +')'
  document.body.style.backgroundColor = rgbColor
  const value = document.getElementById('rgb-val')
  value.value = rgbColor
})