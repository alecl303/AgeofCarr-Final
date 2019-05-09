	function ArcherGoblin(game,side){
		var _this = this;
		Character.apply(this,arguments);
        this.elem=document.createElement("canvas");
		$(this.elem)
			.css({position:'absolute',top:parseInt(game.elem.css('height'))-65,left:100})
			.attr({height:72,width:360/5});
	//	console.log($(this.elem).css('height'));
		this.ctx = this.elem.getContext('2d');
		this.ctx.translate(0,0);
		this.ctx.beginPath();
		//console.log($(this.elem).attr('width')+$(this.elem).height)
	//	game.elem.append(this.elem);
        var spritePosition=0;
        var spriteWidth=360/5;
        var spriteHeight=72;
        var spriteCount=5;
        this.health = 100;
		this.xSpd = 10000;
		this.range = 300;
		this.dmg = 5;
		this.health = 100;
		this.moving = true;
		this.game.elem.append(this.elem);
		this.ctx.fillStyle = '';
		this.ctx.fillRect(0,0,spriteWidth*2,spriteHeight*2);
        var sheet=new Image();

        sheet.src="goblinArcherSpreadSheet2.png";

        var fps = 15;
		this.inRange = false;

				this.animateMove = function(){
  			setTimeout(function(){

				if(_this.health>0){
					if(_this.inRange == true && _this.attacking ==false){
                    	attackTimer = setInterval(function(){_this.attack();},1000,'linear');
                    	_this.attacking = true;
                    }
					//   requestAnimationFrame(_this.animateMove);
                   if(_this.inRange == false){
					   	if(_this.moving == false){
							_this.move(1200);
							clearInterval(attackTimer);
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
		var i =0;
		this.attack = function(){
			//target.setHealth(this.dmg);
			var loc = [$(this.elem).css('left'),$(this.elem).css('top')];
			var arrow = new Arrow(loc,this.game,5,this.range);
			if(i==0){
				$(arrow.elem).css({backgroundColor:'pink'});
				i=1;
			}else{
				i=0;
			}
			game.elem.append(arrow.elem);
		//	console.log(side);
			game.weapons[side].push(arrow);
		}


		sheet.onload=function(){
            _this.animateMove();

        }
		_this.move(1200);
	}