	function BigArrow(loc,game,dmg,range,side){
	//	console.log(loc[1]+"h"+loc[0]);
		var _this = this;
		
		Projectile.apply(this,arguments);
		
		this.game = game;
		this.elem = $('<div/>')
			.css({height:10,width:20,position:'absolute',top:parseInt(loc[1])+27,left:loc[0]})
			.append(
				$('<img/>')
					.attr({'src':'arrowSprite.png'})
					.css({'maxHeight':35,'width':35})	
			);
		this.timer;
		this.xSpd = 2000;
		this.dmg = dmg;
		this.broken = false;
		this.range = range;
		this.moving = false;
		this.projectile = true;
		this.side = side;
	
		this.animate = function(){
			if(this.moving == false){
				_this.move(parseInt($(_this.elem).css('left'))+parseInt(_this.range));
				this.moving=true;
			}
        	if(_this.broken == false){
    	       requestAnimationFrame(_this.animate);
            }else{
            	this.game.destroy(_this.elem);
            }
		}
			
		this.move = function(destination){
			$(this.elem).animate({left: destination}, this.xSpd,function(){
				_this.game.destroy(_this.elem);
				}
			);
		}

		this.animate();
	}