	function Archer(game){
		var _this = this;
		Character.apply(this,arguments);
        this.elem=document.createElement("canvas");
		$(this.elem).css({position:'absolute',top:200,left:0,backgroundColor:'pink'}).attr({height:'55px',width:'55px'});
		this.ctx = this.elem.getContext('2d');
		
		this.ctx.translate(0,0);
		this.ctx.beginPath();
		
		this.ctx.fillStyle = 'purple';
		this.ctx.fillRect(0,0,parseInt($(this.elem).attr('width')),parseInt($(this.elem).attr('height')));
	//	game.elem.append(this.elem);
        this.health = 100;
		this.xSpd = 2000;
		this.attackTimer = null;
			this.game.elem.append(this.elem);
		this.attacking = false;
		this.inRange = true;
        var sheet=new Image();
   //     sheet.src="pictures/goblin.png";
        var fps = 15;
     //   attackTimer = setInterval(function(){_this.attack();},5000,'linear');
		this.animateMove = function(){
            setTimeout(function(){
				//_this.move(0);
                if(_this.health>0){
                    //requestAnimationFrame(_this.animateMove);
                    if(_this.inRange == true && _this.attacking ==false){
                    	        attackTimer = setInterval(function(){_this.attack();},1000,'linear');
                    	     	
                    	        _this.attacking = true;
                    }
                }

                // Drawing code goes here
           //     _this.ctx.clearRect(0,0,_this.elem.width,_this.elem.height);
           //     _this.ctx.drawImage(sheet,spritePosition*spriteWidth,0,spriteWidth,spriteHeight,0,0,spriteWidth*5,spriteHeight*2.5);
				//img, x coordinate where starting on spritesheet, sprite sheet y coordinate, width of clipped image, height, x, y , width, height 
           
		

            }, 1000 / fps);
        };
	
		//sheet.onload=function(){
            _this.animateMove();
			
       // }
       var i =0;
		this.attack = function(){
			//target.setHealth(this.dmg);
			var loc = [$(this.elem).css('left'),$(this.elem).css('top')];
			var arrow = new Arrow(loc,this.game);
			if(i==0){
				$(arrow.elem).css({backgroundColor:'pink'});
				i=1;
			}else{
				i=0;
			}
			game.elem.append(arrow.elem);
		}
		
	
	
	}