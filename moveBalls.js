
// YOUR CODE 
// Random Int function referenced from MDN.
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function randomColor(){
  var newColor = "rgb("+getRandomInt(256)+","+getRandomInt(256)+","+getRandomInt(256)+")";
  return newColor;
}

function changeWithBounce(balls){
  console.log("I'm in ChangeWith Bounce");
  balls.style.borderRadius=getRandomInt(100)+"%";
  balls.style.background=randomColor();
  balls.style.zIndex=getRandomInt(6);
}

function moveBallX(balls){
  console.log("I'm in moveBallx");
  if (balls.right === true){
  balls.positionX = balls.positionX + balls.velocityX;
    if (balls.positionX >= balls.Xmax){
      balls.positionX = balls.Xmax;
      balls.right = false;
      changeWithBounce(balls);
    }
  } else{
    balls.positionX = balls.positionX-balls.velocityX;
    if (balls.positionX<=balls.Xmin){
      balls.positionX = balls.Xmin;
      balls.right = true;
      changeWithBounce(balls);
    }
  }
}

function moveBallY(balls){
  console.log("I'm in moveBallY");
  if (balls.down === true){
  balls.positionY = balls.positionY + balls.velocityY;
    if (balls.positionY >= balls.Ymax){
      balls.positionY = balls.Ymax;
      balls.down = false;
      changeWithBounce(balls);
    }
  } else{
    balls.positionY = balls.positionY-balls.velocityY;
    if (balls.positionY<=balls.Ymin){
      balls.positionY = balls.Ymin;
      balls.down = true;
      changeWithBounce(balls);
    }
  }

}
function moveBall(balls){
  console.log("I'm in moveBall");
  moveBallX(balls);
  moveBallY(balls);
  balls.style.left = balls.positionX + 'px';
  balls.style.top = balls.positionY + 'px';
}

function createBall(){
  console.log("I'm in createBall");
  const multiBalls = document.createElement("div");
  multiBalls.zIndex = 5;
  multiBalls.style.zIndex= multiBalls.zIndex;
  multiBalls.style.position='absolute';
  multiBalls.positionX = 0;
  multiBalls.style.left=multiBalls.positionX + 'px';
  multiBalls.positionY = 0;
  multiBalls.style.top= multiBalls.positionY + 'px';
  multiBalls.width= 50;
  multiBalls.style.width= multiBalls.width +  'px';
  multiBalls.height = 50;
  multiBalls.style.height = multiBalls.height + 'px';
  multiBalls.borderRadius = 50;
  multiBalls.style.borderRadius = multiBalls.borderRadius + '%';
  multiBalls.background = 'orange';
  multiBalls.style.background= multiBalls.background;
  multiBalls.velocityX = 5;
  multiBalls.velocityY = 3;
  multiBalls.right = true;
  multiBalls.down = true;
  multiBalls.Xmin=0;
  multiBalls.Xmax=500;
  multiBalls.Ymin=0;
  multiBalls.Ymax=400;
  document.getElementById("area").appendChild(multiBalls);
  setInterval(moveBall, 50 ,multiBalls);
}

document.addEventListener("click", createBall);