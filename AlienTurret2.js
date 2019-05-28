function AlienTurret2(game,side){
	Character.apply(this,arguments);
	var _this=this;
	this.game=game;
	this.side=side;
	this.inRange = false;
	this.attacking = false;
	this.attackTimer;
	var fps=5;
	this.range = -500;
	this.dmg=50;
	this.addedFront = 0;
	this.elem=document.createElement("div");
	$(this.elem).css({height:75,width:75, position:"absolute", left:"1100px", top: "525px",zIndex:"20"})
		.append($('<img/>').attr({'src':'at2.png'}).css({maxHeight:75,maxWidth:75}));
	this.attack = function(){
		console.log("A");
		var loc = [$(this.elem).css('left'),$(this.elem).css('top')];
		var ball = new BallProjectile(loc,this.game,this.dmg,this.range,this.side);
		game.elem.append(ball.elem);
		game.weapons[side].push(ball);
	}
	this.respond = function(){
		setTimeout(function(){
			console.log("run");
			if(_this.inRange == true && _this.attacking ==false){
                _this.attackTimer = setInterval(function(){_this.attack();},400,'linear');
                _this.attacking = true;
            }
            if(_this.inRange == false){
				clearInterval(_this.attackTimer);
				_this.attacking =false;
			}
			requestAnimationFrame(_this.respond);
        }, 1000 / fps);
   };
    _this.respond();
}
