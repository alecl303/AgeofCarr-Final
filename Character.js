	function Character(game,direction){
		this.game = game;
		this.xSpd = '?';
		this.direction = '?';
		this.health = '?';
		this.cost = '?';
		this.damage = '?';
		this.elem; 
		
		this.move = function(destination){
			$(this.elem).animate({left: destination}, this.xSpd);
		//	console.log("movingin");
		}
	
	
	}