	function Goku(game,side){
		var _this = this;
		Character.apply(this,arguments);
		
        this.elem=document.createElement("canvas");
		$(this.elem)
			.css({position:'absolute',top:parseInt(game.elem.css('height'))-62,left:800})
			.attr({height:73,width:580/8});
		this.game.elem.append(this.elem);
		
		if(this.side == "player1"){
			this.addedFront = $(this.elem).attr('width');
		}else{
			this.addedFront = 0;
		}
		
		this.ctx = this.elem.getContext('2d');
		this.ctx.translate(0,0);
		this.ctx.beginPath();
		
        var sheet=new Image();
        sheet.src="gunnerRight.png";
		
        var fps = 15;
		
        var spritePosition=0;
        var spriteWidth=580/8;
        var spriteHeight=73;
        var spriteCount=8;
        
        this.health = 100;
		this.xSpd = 10000;
		this.range = 200;
		this.dmg = 5000;
		this.side=side;
		this.moving = true;
		this.inRange = false;
		this.attacking = false;
		this.attackSpeed =2500;
		this.attackTimer;
		
		this.animateMove = function(){
            setTimeout(function(){
				if(_this.health>0){
					if(_this.inRange == true && _this.attacking ==false){
                    	_this.attackTimer = setInterval(function(){_this.attack();},_this.attackSpeed,'linear');
                    	//_this.attack();
                    	_this.attacking = true;
						_this.moving = false;
						$(_this.elem).stop();
                    }
                   if(_this.inRange == false){
						
					   	if(_this.moving == false){
							_this.move(1200);
							clearInterval(_this.attackTimer);
							_this.attacking =false;
							_this.moving = true;
						}
				   }
				   
						requestAnimationFrame(_this.animateMove);

                }
                // Drawing code goes here
                _this.ctx.clearRect(0,0,$(_this.elem).attr('width'),$(_this.elem).attr('height'));
                _this.ctx.drawImage(sheet,spritePosition*spriteWidth,0,spriteWidth,spriteHeight,0,0,spriteWidth,spriteHeight);
				//img, x coordinate where starting on spritesheet, sprite sheet y coordinate, width of clipped image, height, x, y , width, height
                spritePosition++;

                if(spritePosition>spriteCount-1){
                    spritePosition=0;
                }

            }, 1000 / fps);
        };

		this.attack = function(){
			var loc = [$(this.elem).css('left'),$(this.elem).css('top')];
			var laser = new Laser(loc,this.game,5,this.range+2,this.side);
			game.elem.append(laser.elem);
			game.weapons[side].push(laser);
		
		}

		sheet.onload=function(){
            _this.animateMove();

        }
		_this.move(1200);
	}