	function Base(game){
		this.game = game;

		this.elem = document.createElement('canvas');

		$(this.elem)
			.css({zIndex:0,top:600-200,position:'absolute'})
			.attr({height:200, width:200});
		this.game.elem.append(this.elem);
		this.ctx = this.elem.getContext('2d');

		this.moveToRight = function(){
			$(this.elem).css({left: 1250-parseInt($(this.elem).attr('width'))});

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

	}
