	function Base(game,side,health){
		var _this = this;
		this.game = game;
		this.side = side;
		this.health = health;
		this.oghealth=health;
		this.healthbox=$("<div/>").css({position:'absolute',top:340,"border":"black 2px solid", "height":"30px",backgroundColor:'red','width':250,zIndex:20,borderRadius:15});
 		this.healthbar=$("<div/>").css({'width':'100%',height:30,backgroundColor:'black',zIndex:21,borderRadius:15});
		this.healthbox.append(this.healthbar);
		
		this.elem = document.createElement('canvas');
		$(this.elem)
			.css({zIndex:2,top:600-200,position:'absolute'})
			.attr({height:200, width:200});
		this.game.elem.append(this.healthbox);
		this.game.elem.append(this.elem);
		
		this.addedFront = 0;
		if(this.side == "player1"){
			this.addedFront = $(this.elem).attr('width');
		}else{
			this.addedFront = 0;
		}
		
		this.ctx = this.elem.getContext('2d');

		this.moveToRight = function(){
			$(this.elem).css({left: 1250-parseInt($(this.elem).attr('width'))});
			$(this.healthbox).css({left: 1248-parseInt($(this.healthbox).css('width'))});

		}
//		this.moveToRight();
		this.draw = function(ctx){
		///	crateArray = [sprite1,sprite2];
			ctx.beginPath();
			ctx.fillStyle = 'pink';
			ctx.fillRect(0,0,200,200);

		}
		this.drawBase = function(ctx){

		}
		this.takeDmg = function(dmg){
			this.health = this.health-dmg;
			var percentage= (this.health/this.oghealth)*100
			console.log(percentage);
			$(this.healthbar).css({'width':percentage+'%'});
			if(this.health <= 0){
				this.game.endGame();
				$(_this.game.endScreen.screen).css({"display":"block"});
			}
		}

	}
