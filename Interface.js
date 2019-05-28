function Interface(game,control) {
	var _this=this;
	this.game = game;
	this.control=control;
	this.elem= $("<div/>").css({"height":"50px", "width":"100%","backgroundColor":"transparent"});
	$(_this.elem).append(_this.control.draw);
};
