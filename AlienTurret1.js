function AlienTurret1(game,side) {
	Character.apply(this,arguments);
	var _this=this;
	this.g=game;
	this.side=side;
	this.inRange = false;
	this.attacking = false;
	this.attackTimer;
	var fps=5;
	this.range = -200;
	this.elem=document.createElement("canvas");
	$(this.elem).css({height:75,width:75, position:"absolute", left:"1050px", top: "525px",zIndex:"20", backgroundColor: "green"})
		.append($('<img/>').attr({'src':'at1.png'}).css({maxHeight:75,maxWidth:75}));
		
	this.attack = function(){
		console.log("A");
		var loc = [$(this.elem).css('left'),$(this.elem).css('top')];
		var bullet = new Bullet(loc,this.game,5,this.range,this.side);
		game.elem.append(bullet.elem);
		game.weapons[side].push(bullet);
	}
	this.respond = function(){
		setTimeout(function(){
				if(_this.inRange == true && _this.attacking ==false){
                    _this.attackTimer = setInterval(function(){_this.attack();},400,'linear');
                    _this.attacking = true;
                }
                if(_this.inRange == false){
						clearInterval(_this.attackTimer);
						_this.attacking =false;
				  }
				   
        }, 1000 / fps);
   };
	//_this.attackTimer = setInterval(function(){_this.attack();},400,'linear');
    _this.respond();
}