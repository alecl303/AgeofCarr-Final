function Laser(loc,game,dmg,range,side){
	var _this = this;
	Projectile.apply(this,arguments);
	this.game = game;
	this.elem = $('<div/>')
		.css({height:10,width:10,position:'absolute',top:parseInt(loc[1])+30,left:parseInt(loc[0])+45,backgroundColor:'blue'});
	this.timer;
	this.xSpd = 2000;
	this.dmg = dmg;
	this.broken = false;
	this.range = range;
	this.moving = false;
	this.projectile = true;
	this.side = side;
	this.width = parseInt($(this.elem).css('width'));
	this.animate = function(){
		setTimeout(
			function(){
				if(_this.width < Math.abs(_this.range)+2){

				_this.width += 2;
				$(_this.elem)
						.css({width:_this.width});
				}else{
					_this.game.destroy(_this.elem);
				}

				requestAnimationFrame(_this.animate);
			},25);
	};
	this.move = function(destination){
		$(this.elem).animate({left: destination}, this.xSpd,function(){
			_this.game.destroy(_this.elem);
			}
		);
	};
	this.animate();
}
