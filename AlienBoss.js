function AlienBoss(game,side){
	var _this = this;
	Character.apply(this,arguments);
    this.elem=document.createElement("canvas");
	$(this.elem)
		.css({zIndex:600,position:'absolute',top:parseInt(game.elem.css('height'))-120,left:1200})
		.attr({height:160,width:1280/8});
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
    sheet.src="alienboss.png";
     var fps = 20;
    var spritePosition=0;
     var spriteWidth=1280/8;
     var spriteHeight=160;
     var spriteCount=8;

     this.health = 300;
	this.xSpd = 10000;
	this.range = -20;
	this.dmg = 35;
	this.side=side;
	this.moving = true;
	this.inRange = false;
	this.attacking = false;
	this.attackTimer;
	this.weapon = new PlasmaBall([parseInt($(this.elem).css('left')),parseInt($(this.elem).css('top'))+35],game,this.dmg);
	this.game.elem.append(this.elem);
		this.animateMove = function(){
            setTimeout(function(){

                if(_this.health>0){
                   if(_this.inRange == false){
					   	if(_this.moving == false){
							_this.move(0);
							_this.moving = true;
						}

						_this.weapon.elem.stop();

						$(_this.weapon.elem).css({display:'none'});
				   }
				   else if(_this.inRange){
					   	if(_this.moving == true){
							$(_this.elem).stop();
							_this.moving = false;
						}
						_this.attack();
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
		$(_this.weapon.elem).css({left:parseInt($(_this.elem).css('left'))-20, top:parseInt($(_this.elem).css('top'))+60,display:'block' })
		$(_this.weapon.elem)
			.animate({opacity:0}
			,3300
			,function(){
				$(_this.weapon.elem).css({opacity:100});

			}
		);
	}

	sheet.onload=function(){
        _this.animateMove();
     }
	 this.addWep();
	_this.move(0);
}
