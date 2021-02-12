var MaxsY  = 10;
var MaxsX  = 3;
var MaxZ = 25;

class Gota {
  
  constructor(){
    this.x = random(0, width);
    this.y = random(height, -height/2);
    this.z = random(0, MaxZ);
    
    this.sX = map(this.z, 0, MaxZ, 0, MaxsX);
    this.sY = map(this.z, 0, MaxZ, 10, MaxsY);
    
    this.speed = map(this.z, 0, MaxZ, 5, 11);
  }
  
  fall(){
    
    this.y = this.y + this.speed;
    this.speed += 0.1;
    
    if(this.y >= height){
      this.y = random(-100);
      this.x = random(0, width);
      this.z = random(0, MaxZ);
      
      this.sX = map(this.z, 0, MaxZ, 0, MaxsX);
      this.sY = map(this.z, 0, MaxZ, 10, MaxsY);
    
      this.speed = map(this.z, 0, MaxZ, 5, 10);
    }
      
  }
  
  showGota(){
    strokeWeight(this.sX);
    stroke(7,120,148);
    line(this.x,this.y,this.x,this.y + this.sY);
  }
}
