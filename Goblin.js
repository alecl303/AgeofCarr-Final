	function Goblin(game,side){
		var _this = this;
		Character.apply(this,arguments);
        this.elem=document.createElement("canvas");
		$(this.elem)
			.css({position:'absolute',top:200,left:0})
			.attr({height:62,width:55});
	//	console.log($(this.elem).css('height'));
		this.ctx = this.elem.getContext('2d');
		this.ctx.translate(0,0);
		this.ctx.beginPath();
		//console.log($(this.elem).attr('width')+$(this.elem).height)
	//	game.elem.append(this.elem);
        var spritePosition=0;
        var spriteWidth=385/7;
        var spriteHeight=62;
        var spriteCount=7;
        this.health = 100;
		this.xSpd = 10000;
		this.range = 20;
		this.dmg = 5;
		this.health = 100;
		this.moving = true;
		this.game.elem.append(this.elem);
		this.ctx.fillStyle = 'pink';
		this.ctx.fillRect(0,0,spriteWidth*2,spriteHeight*2);
        var sheet=new Image();

        sheet.src="goblinLeft.png";

        var fps = 15;
		
		this.weapon = new Sword([parseInt($(this.elem).css('left')),parseInt($(this.elem).css('top'))+35],game);
		this.inRange = false;

		this.animateMove = function(){
            setTimeout(function(){
				
                if(_this.health>0){
					
					//   requestAnimationFrame(_this.animateMove);
                   if(_this.inRange == false){
					   	if(_this.moving == false){
							_this.move(1200);
						}
					   requestAnimationFrame(_this.animateMove);
					   
				   }else{
					   	if(_this.moving == true){
							$(_this.elem).stop();
							
						}
							_this.attack();
					}
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
		
			$(this.weapon.elem).css({left:parseInt($(this.elem).css('left'))+20, top:parseInt($(this.elem).css('top'))+35,display:'block' })
			$(this.weapon.elem)
				
				.animate({left:parseInt($(_this.weapon.elem).css('left'))+parseInt(_this.range)}
				,500
				,function(){
					$(_this.weapon.elem).css({left:parseInt($(_this.elem).css('left'))+20});
					if(_this.health > 0){
						_this.attack();
					}else{
						console.log("dead");
						_this.game.characters[side].splice(_this.elem);
						_this.game.destroy($(_this.elem));
						_this.game.weapons[side].splice(_this.weapon);
						_this.game.destroy($(_this.weapon.elem));
					}
				}
			);
		}
		
		sheet.onload=function(){
            _this.animateMove();
		
        }
		this.addWep();
		_this.move(1200);
	}