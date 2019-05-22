	function Laser(loc,game,dmg,range,side){
	//	console.log(loc[1]+"h"+loc[0]);
		var _this = this;
		
		Projectile.apply(this,arguments);
		
		this.game = game;
		this.elem = $('<div/>')
			.css({height:10,width:10,position:'absolute',top:parseInt(loc[1])+20,left:parseInt(loc[0])+72,backgroundColor:'blue'});
			//.append(
				//$('<img/>')
				//	.attr({'src':'bullet.png'})
				//	.css({'maxHeight':20,'width':20})	
		//	);
		this.timer;
		this.xSpd = 2000;
		this.dmg = dmg;
		this.broken = false;
		this.range = range;
		this.moving = false;
		this.projectile = true;
		this.side = side;
		this.width = parseInt($(this.elem).css('width'));
		//$(_this.elem).css('left')-parseInt(_this.range);
	
		this.animate = function(){
			if(_this.width < Math.abs(_this.range)){
			
			_this.width += 5;
				$(_this.elem)
					.css({width:_this.width});
            }else{
            	_this.game.destroy(_this.elem);
            }
            
    	    requestAnimationFrame(_this.animate);
		}
			
		this.move = function(destination){
			$(this.elem).animate({left: destination}, this.xSpd,function(){
				_this.game.destroy(_this.elem);
				}
			);
		//	console.log("movingin");
		}

		this.animate();
	}