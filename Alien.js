function Alien(game,side,health){
  Base.apply(this,arguments);
  this.moveToRight();
  this.drawBase = function(ctx){
    ctx.beginPath();
      ctx.fillStyle = "black";
      ctx.fillRect(10,100,190,100);
    ctx.beginPath();
      ctx.arc(75, 75, 50, 0, 2 * Math.PI);
      ctx.fillStyle = "chocolate";
      ctx.fill();
    ctx.beginPath();
      ctx.fillStyle = "green";
      ctx.fillRect(26,65,98,20);
   ctx.beginPath();
      ctx.fillStyle = "yellow";
      ctx.fillRect(10,65,70,20);
  ctx.beginPath();
      ctx.arc(75, 75, 20, 0, 2 * Math.PI);
      ctx.beginPath();
        ctx.arc(75, 75, 10, 0, 2 * Math.PI);
        ctx.fillStyle = "blue";
        ctx.fill();
  }
  this.draw(this.ctx);
  this.drawBase(this.ctx);
}
