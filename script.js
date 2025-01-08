var car = document.getElementById('car');
var startBtn = document.getElementById('startBtn');
var stopBtn = document.getElementById('stopBtn');

var animation;
var position = 0;
var speed = 5;

function moveCar() {
  position += speed;
  if (position > window.innerWidth) {
    position = -365;                        
  }
  car.style.left = position + 'px';
}

function startMoving() {
  animation = setInterval(function () {
    moveCar();
  }, 50);
}

function stopMoving() {
  clearInterval(animation);
}

startBtn.addEventListener('click', function () {
  startMoving();
});

stopBtn.addEventListener('click', function () {
  stopMoving();
});
