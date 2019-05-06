function HumanBase(game){
  this.health = 1000;

  Base.apply(this,arguments);
  this.drawBase = function(ctx){
    ctx.beginPath();
      ctx.moveTo(0,90);
      ctx.lineTo(0,150);
      ctx.lineTo(100,150);
      ctx.lineTo(80,90);
      ctx.closePath();
  //	ctx.lineTo(50,50);
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 5;
    //ctx.stroke();
    ctx.beginPath();
      ctx.moveTo(0,50);
      ctx.lineTo(50,50);
      ctx.lineTo(20,25);
      ctx.closePath();
    ctx.fillStyle = 'yellow';
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 5;

    ctx.beginPath();
      ctx.fillStyle = "green";
      ctx.fillRect(0,60,100,20);

    ctx.beginPath();
      ctx.fillStyle = "black";
      ctx.fillRect(0,50,50,40);
    
  }
	this.draw(this.ctx);
  this.drawBase(this.ctx);
}
