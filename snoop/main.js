import './style.css'
let startButton = document.getElementById('startbutton');
var bouncyArray = [];

startButton.addEventListener("click", launch);

class Bouncy{
  constuctor(){
    this.el;
    this.xPos;
    this.yPos;
    this.speed;
    this.xDirection = 1;
    this.yDirection = 1;
  }
}

function launch(){
  console.log("launching")

  //fade out
 var interval = setInterval(() => {
      var opacity = startButton.style.opacity;
      if (opacity > 0) {
         opacity -= 0.1;
         startButton.style.opacity = opacity;
      }  else {
        clearInterval(interval);
        startButton.style.display = 'none';
     }
   }, 400);
  
  //create bouncy
  for(let i = 0; i < 22; i++){
    var bouncy = new Bouncy();
    bouncy.el = document.createElement('img');
    bouncy.el.setAttribute('src', `${i+1}.PNG`);
    bouncy.el.style.position = 'absolute';
    bouncy.el.style.width = '150px';
    bouncy.el.style.height = 'auto';
    document.getElementById("container").appendChild(bouncy.el);
    bouncy.xPos = Math.floor(Math.random() * (window.innerWidth - 150));
    bouncy.yPos = Math.floor(Math.random() * (window.innerHeight - 150));
    bouncy.speed = Math.floor(Math.random() * 4) + 1;
    bouncy.xDirection = Math.floor(Math.random() < 0.5 ? -1 : 1);
    bouncy.yDirection = Math.floor(Math.random() < 0.5 ? -1 : 1);
    bouncyArray.push(bouncy);
  }
}

//adapted from chatGPT

function updatePosition() {
  for(let i = 0; i < 22; i++){
    bouncyArray[i].xPos += bouncyArray[i].speed * bouncyArray[i].xDirection;
    bouncyArray[i].yPos += bouncyArray[i].speed * bouncyArray[i].yDirection;
  
    if (bouncyArray[i].xPos + bouncyArray[i].el.clientWidth > window.innerWidth || bouncyArray[i].xPos < 0) {
      bouncyArray[i].xDirection *= -1; // Reverse horizontal direction at container boundaries
    }
  
    if (bouncyArray[i].yPos + bouncyArray[i].el.clientHeight > window.innerHeight || bouncyArray[i].yPos < 0) {
      bouncyArray[i].yDirection *= -1; // Reverse vertical direction at container boundaries
    }
  
    bouncyArray[i].el.style.left = bouncyArray[i].xPos + 'px';
    bouncyArray[i].el.style.top = bouncyArray[i].yPos + 'px';
  }
}

setInterval(updatePosition, 50); // Adjust the interval as needed
