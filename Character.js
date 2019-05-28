function Character(game,side){
	this.game = game;
	this.xSpd = '?';
	this.health = '?';
	this.cost = '?';
	this.damage = '?';
	this.side = side;
	this.elem;
	this.addedFront;
	this.move = function(destination){
		$(this.elem).animate({left: destination}, {duration : this.xSpd});
	}
	this.takeDmg = function(dmg){
		this.health = this.health - dmg;
	}
	this.addWep = function(){
		this.game.elem.append(this.weapon.elem);
		this.game.addWeapon(this.weapon,side);
	}
}
