	function Base(game){
		this.game = game;
		
		this.elem = document.createElement('canvas');
		
		$(this.elem)
			.css({height:200, width:500,zIndex:2,top:600-200,position:'absolute'});
		this.game.elem.append(this.elem);
		this.ctx = this.elem.getContext('2d');
		
		this.moveToRight = function(){
			$(this.elem).css({left: 1250-parseInt($(this.elem).css('width'))});
				
		}
//		this.moveToRight();
		this.draw = function(ctx){
		///	crateArray = [sprite1,sprite2];
			ctx.beginPath();
			ctx.fillStyle = 'pink';
			ctx.fillRect(0,0,150,500);
			
		}
		this.drawBase = function(ctx){
			ctx.beginPath();
				ctx.moveTo(0,50);
				ctx.lineTo(0,150);
				ctx.lineTo(100,150);
				ctx.lineTo(80,50);
				ctx.closePath();
		//	ctx.lineTo(50,50);
			ctx.fillStyle = 'blue';
			ctx.fill();
			ctx.strokeStyle = "black";
			ctx.lineWidth = 5;
			//ctx.stroke();
		}
	
		this.draw(this.ctx);
		this.drawBase(this.ctx);
	}