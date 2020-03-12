function Teacher() {
    this.r=400
    this.x=width
    this.y=10
  
    this.move = function(){
      this.x -= 4;
      
    }
  
    this.show = function() {
    image(teacher_img,this.x,this.y,this.r,this.r)
  };
}