	function HumanTurret2(game,side) {
		Character.apply(this,arguments);
		var _this=this;
		this.game=game;
		this.side=side;
		this.inRange = false;
		this.attacking = false;
		this.attackTimer;
		var fps=5;
		this.range = 1200;
		this.addedFront = 0;
		this.dmg = 30;
		this.elem=document.createElement("div");
		$(this.elem).css({height:75,width:75, position:"absolute", left:"100px", top: "525px",zIndex:"20"})
			.append($('<img/>').attr({'src':'crossbow.png'}).css({maxHeight:75,maxWidth:75,zIndex:20}));
			
		this.attack = function(){
			var loc = [$(this.elem).css('left'),$(this.elem).css('top')];
			var arr = new BigArrow(loc,this.game,this.dmg,this.range,this.side);
			game.elem.append(arr.elem);
			game.weapons[side].push(arr);
		}
		this.respond = function(){
			setTimeout(function(){
				if(_this.inRange == true && _this.attacking ==false){
					_this.attackTimer = setInterval(function(){_this.attack();},1500,'linear');
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