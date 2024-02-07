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
   }, 2000);

  for(i = 0; i < 18; i++){
    var bouncy = new Bouncy();
    bouncy.el = document.createElement('img');
    bouncyArray.push(bouncy);
  }
}
