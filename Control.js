function Control(game){
	var _this=this;
	//FIELDS--------------------------------------------------------
	this.game=game;
	//METHODS--------------------------------------------------------
		this.leftPlayerControl=(function(){return leftPlayerControl();}());
		this.rightPlayerControl=(function(){return rightPlayerControl();}());
		this.leftTurretDisplay=(function(){return leftTurretDisplay();}());
		this.rightTurretDisplay=(function(){return rightTurretDisplay();}());
		this.draw=function(){
			var wrapper= $("<div/>");
			$(wrapper).append(_this.leftPlayerControl);
			$(wrapper).append(_this.rightPlayerControl);
			$(wrapper).append(_this.leftTurretDisplay);
			$(wrapper).append(_this.rightTurretDisplay);
			return wrapper;
			
		}
	//CREATING--------------------------------------------------------
		function leftPlayerControl(){
			var leftPlayerControl=$("<div/>").css({"height":"50px", "width":"400px", "position":"absolute", "top":"10px","left":"5px", "background-color":"lightyellow","border":"2px solid black","z-index":2});
			var leftCharacterButton1=$("<img>")
				.attr({"src":"goblinmelee.jpg"})

				.css({"height":"45px", "width":"45px", "position":"absolute", "left":"10px", "border":"1px solid black"})
				.click(
					function(){
						_this.game.buyCharacter();
					}
				);
			var leftCharacterButton2=$("<img>")
				.attr({"src":"goblinarcher.jpg"})
				.css({"height":"45px", "width":"45px", "position":"absolute", "left":"110px", "border":"1px solid black"});
			var leftCharacterButton3=$("<img>")
				.attr({"src":"goblingiant.jpg"})
				.css({"height":"45px", "width":"45px", "position":"absolute", "left":"210px", "border":"1px solid black"});
			var leftTurretsBox=$("<img>")
				.attr({"src":"turret.png"})
				.css({"height":"45px", "width":"45px", "position":"absolute", "left":"310px", "border":"1px solid black"})
				.click(
					function(){
						$(_this.leftPlayerControl).css("visibility", "hidden");
						$(_this.leftTurretDisplay).css("visibility", "visible");
					}
				);
			$(leftPlayerControl).append(leftCharacterButton1);
			$(leftPlayerControl).append(leftCharacterButton2);
			$(leftPlayerControl).append(leftCharacterButton3);
			$(leftPlayerControl).append(leftTurretsBox);
			return leftPlayerControl;
	}
		function rightPlayerControl(){
			var rightPlayerControl=$("<div/>").css({"height":"50px", "width":"400px", "position":"absolute", "top":"10px","left":"840px", "background-color":"lightyellow","border":"2px solid black","z-index":2});
			var rightCharacterButton1=$("<img>")
				.attr({"src":"alienmelee.jpg"})
				.css({"height":"45px", "width":"45px", "position":"absolute", "left":"10px", "border":"1px solid black"})
				.click(
					function(){
						_this.game.buyCharacter();
					}
				);
			var rightCharacterButton2=$("<img>")
				.attr({"src":"alienshooter.jpg"})
				.css({"height":"45px", "width":"45px", "position":"absolute", "left":"110px", "border":"1px solid black"});
			var rightCharacterButton3=$("<img>")
				.attr({"src":"alienboss.jpg"})
				.css({"height":"45px", "width":"45px", "position":"absolute", "left":"210px", "border":"1px solid black"});
			var rightTurretsBox=$("<img>")
				.attr({"src":"turret.png"})
				.css({"height":"45px", "width":"45px", "position":"absolute", "left":"310px", "border":"1px solid black"})
				.click(
					function(){
						$(_this.rightPlayerControl).css("visibility", "hidden");
						$(_this.rightTurretDisplay).css("visibility", "visible");
					}
				);
			$(rightPlayerControl).append(rightCharacterButton1);
			$(rightPlayerControl).append(rightCharacterButton2);
			$(rightPlayerControl).append(rightCharacterButton3);
			$(rightPlayerControl).append(rightTurretsBox);
			return rightPlayerControl;
	}
	function leftTurretDisplay(){
		var leftTurretControl=$("<div/>").css({"height":"50px", "width":"300px", "position":"absolute", "top":"10px","left":"5px", "background-color":"lightblue","border":"2px solid black","visibility":"hidden"});
		var leftTurretButton1=$("<img>")
			.attr({"src":"goblinturret1.png"})
			.css({"height":"45px", "width":"45px", "position":"absolute", "left":"10px", "border":"1px solid black"})
			.click(
				function(){
				}
			);
		var leftTurretButton2=$("<img>")
			.attr({"src":"goblinturret2.jpg"})
			.css({"height":"45px", "width":"45px", "position":"absolute", "left":"110px", "border":"1px solid black"});
		var exitButton=$("<img>")
			.attr({"src":"X.png"})
			.css({"height":"45px", "width":"45px", "position":"absolute", "left":"210px", "border":"1px solid black"})
			.click(
				function(){
					$(_this.leftPlayerControl).css("visibility", "visible");
					$(_this.leftTurretDisplay).css("visibility", "block");
				}
			);
		$(leftTurretControl).append(leftTurretButton1);
		$(leftTurretControl).append(leftTurretButton2);
		$(leftTurretControl).append(exitButton);
		return leftTurretControl;
	}
	function rightTurretDisplay(){
		var rightTurretControl=$("<div/>").css({"height":"50px", "width":"300px", "position":"absolute", "top":"10px","left":"840px", "background-color":"lightblue","border":"2px solid black","visibility":"hidden"});
		var rightTurretButton1=$("<img>")
			.attr({"src":"alienturret1.jpg"})
			.css({"height":"45px", "width":"45px", "position":"absolute", "left":"10px", "border":"1px solid black"})
			.click(
				function(){
				}
			);
		var rightTurretButton2=$("<img>")
			.attr({"src":"alienturret2.jpg"})
			.css({"height":"45px", "width":"45px", "position":"absolute", "left":"110px", "border":"1px solid black"});
		var exitButton=$("<img>")
			.attr({"src":"X.png"})
			.css({"height":"45px", "width":"45px", "position":"absolute", "left":"210px", "border":"1px solid black"})
			.click(
				function(){
					$(_this.rightPlayerControl).css("visibility", "visible");
					$(_this.rightTurretDisplay).css("visibility", "block");
				}
			);
		$(rightTurretControl).append(rightTurretButton1);
		$(rightTurretControl).append(rightTurretButton2);
		$(rightTurretControl).append(exitButton);
		return rightTurretControl;
	}
}