function Projectile(loc,game,dmg,range,side){
	var _this = this;
	this.game = game;
	this.elem = $('<div/>')
		.css({height:5,width:10,position:'absolute',top:parseInt(loc[1])+10,left:loc[0]})
		.append(
			$('<img/>')
				.attr({'src':'bullet.png'})
				.css({'maxHeight':20,'width':20})
		);
	this.timer;
	this.xSpd = 1540;
	this.dmg = dmg;
	this.broken = false;
	this.range = range;
	this.moving = false;
	this.projectile = true;
	this.addedFront;
	if(this.side == "player1"){
		this.addedFront = $(this.elem).css('width');
	}else{
		this.addedFront = 0;
	};
}
