var gotas = []; 
var nGotas = 1000;


function setup() {
  createCanvas(windowWidth, windowHeight);
  for(var i = 0; i < nGotas; i++){
    gotas[i] = new Gota();
  }
}


function draw() {
  background('white');
    for(var i = 0; i < nGotas; i++){
      gotas[i].fall();
      gotas[i].showGota();
  }

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
