	function Goblin(game){
		var _this = this;
		Character.apply(this,arguments);
        this.elem=document.createElement("canvas");
		$(this.elem).css({position:'absolute',top:200,height:55,width:55});
		console.log($(this.elem).css('height'));
		this.ctx = this.elem.getContext('2d');
		
		this.ctx.translate(0,0);
		this.ctx.beginPath();
		console.log($(this.elem).css('width')+$(this.elem).height)
	//	game.elem.append(this.elem);
        var spritePosition=0;
        var spriteWidth=467/7;
        var spriteHeight=62;
        var spriteCount=7;
        this.health = 100;
		this.xSpd = 2000;
		
			this.game.elem.append(this.elem);
		this.ctx.fillStyle = 'pink';
		this.ctx.fillRect(0,0,spriteWidth*2,spriteHeight*2);
        var sheet=new Image();
        sheet.src="pictures/goblin.png";
        var fps = 15;
		this.animateMove = function(){
            setTimeout(function(){
				_this.move(500);
                if(_this.health>0){
                    requestAnimationFrame(_this.animateMove);
                }

                // Drawing code goes here
                _this.ctx.clearRect(0,0,_this.elem.width,_this.elem.height);
                _this.ctx.drawImage(sheet,spritePosition*spriteWidth,0,spriteWidth,spriteHeight,0,0,spriteWidth*5,spriteHeight*2.5);
				//img, x coordinate where starting on spritesheet, sprite sheet y coordinate, width of clipped image, height, x, y , width, height 
                spritePosition++;
				
                if(spritePosition>spriteCount-1){
                    spritePosition=0;
                }

            }, 1000 / fps);
        };
	
		sheet.onload=function(){
            _this.animateMove();
			
        }
	
	
	}