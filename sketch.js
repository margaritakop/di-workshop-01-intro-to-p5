var xedge = 400
var yedge = 400

var xSmallBall = 300
var ySmallBall = 300
var xSmallBallSpeed = 2
var ySmallBallSpeed = 2

var xBigBall = 100
var yBigBall = 300
var BigBallSpeed = 2

var xBigSize = 20
var yBigSize = 20

function setup() {
  createCanvas(xedge, yedge);
}

function draw() {
  //position and draw both the small and big balls
  background(0)
  xSmallBall = moveSmallBall(xSmallBall, ySmallBall)[0]
  ySmallBall = moveSmallBall(xSmallBall, ySmallBall)[1]
  fill(255,160,122)
  ellipse(xSmallBall, ySmallBall, 10, 10)
  fill(0,206,209)  
  ellipse(xBigBall, yBigBall, xBigSize, yBigSize)

  if (Math.abs(xSmallBall-xBigBall) < xBigSize/2 && Math.abs(ySmallBall-yBigBall) < xBigSize/2){
    xSmallBall = 400 * Math.random()
    ySmallBall = 400 * Math.random()
    xSmallBallSpeed = Math.round(Math.random()) * 2 - 1
    ySmallBallSpeed = Math.round(Math.random()) * 2 - 1
    xBigSize = xBigSize + 5
    yBigSize = yBigSize + 5
  }
}

// movements of small ball
function moveSmallBall(xSmallBall, ySmallBall){

  xSmallBall = xSmallBall + xSmallBallSpeed
  if (ballShouldBounce(xSmallBall, xedge)) {
    xSmallBallSpeed = xSmallBallSpeed * -1
    ySmallBallSpeed = ySmallBallSpeed * Math.random() * 2
  }

  ySmallBall = ySmallBall + ySmallBallSpeed
  if (ballShouldBounce(ySmallBall, yedge)) {
    ySmallBallSpeed = ySmallBallSpeed * -1
    xSmallBallSpeed = xSmallBallSpeed * Math.random() * 2
  }

  return [xSmallBall, ySmallBall]
}

function ballShouldBounce (position, edge){
  if (position < 0) {
    return true
  } else if (position > edge) {
    return true
  } else {
    return false
  }
}


// movements of the big ball
document.onkeydown = moveBigBall;
//detect if a key is down

function moveBigBall (event){
  //change the coordinates of the big ball according to pressed arrow keys
    console.log(event)
    keyCode = event.which || event.keyCode;

    if (keyCode == '38') {
        // up arrow
      yBigBall = yBigBall - BigBallSpeed
    }
    else if (keyCode == '40') {
        // down arrow
      yBigBall = yBigBall + BigBallSpeed
    }
    else if (keyCode == '37') {
       // left arrow
       xBigBall = xBigBall - BigBallSpeed
    }
    else if (keyCode == '39') {
       // right arrow
       xBigBall = xBigBall + BigBallSpeed
    }
}