function Control(game){
	var _this=this;
	//FIELDS--------------------------------------------------------
	this.game=game;
	//METHODS--------------------------------------------------------
		this.body=(function(){return body();}());
	//CREATING--------------------------------------------------------
		function body(){
		var wrapper= $("<div/>");
		var LeftPlayerControl=$("<div/>").css({"height":"50px", "width":"400px", "position":"absolute", "top":"10px","left":"5px", "background-color":"lightyellow","border":"2px solid black"});
		var leftCharacterButton1=$("<img>")
						.css({"height":"45px", "width":"45px", "position":"absolute", "left":"10px", "border":"1px solid black"})
						.click(
							function(){
								_this.game.buyCharacter();
							}
						);
		var leftCharacterButton2=$("<img>")
						.css({"height":"45px", "width":"45px", "position":"absolute", "left":"110px", "border":"1px solid black"});
		var leftCharacterButton3=$("<img>")
						.css({"height":"45px", "width":"45px", "position":"absolute", "left":"210px", "border":"1px solid black"});
		var leftWeaponBox=$("<img>")
						.css({"height":"45px", "width":"45px", "position":"absolute", "left":"310px", "border":"1px solid black"});
		$(LeftPlayerControl).append(leftCharacterButton1);
		$(LeftPlayerControl).append(leftCharacterButton2);
		$(LeftPlayerControl).append(leftCharacterButton3);
		$(LeftPlayerControl).append(leftWeaponBox);
		
		var RightPlayerControl=$("<div/>").css({"height":"50px", "width":"400px", "position":"absolute", "top":"10px","left":"840px", "background-color":"lightyellow","border":"2px solid black"});
		var RightCharacterButton1=$("<img>")
						.css({"height":"45px", "width":"45px", "position":"absolute", "left":"10px", "border":"1px solid black"})
						.click(
							function(){
								_this.game.buyCharacter();
							}
						);
		var RightCharacterButton2=$("<img>")
						.css({"height":"45px", "width":"45px", "position":"absolute", "left":"110px", "border":"1px solid black"});
		var RightCharacterButton3=$("<img>")
						.css({"height":"45px", "width":"45px", "position":"absolute", "left":"210px", "border":"1px solid black"});
		var RightWeaponBox=$("<img>")
						.css({"height":"45px", "width":"45px", "position":"absolute", "left":"310px", "border":"1px solid black"});
		$(RightPlayerControl).append(RightCharacterButton1);
		$(RightPlayerControl).append(RightCharacterButton2);
		$(RightPlayerControl).append(RightCharacterButton3);
		$(RightPlayerControl).append(RightWeaponBox);
		
		$(wrapper).append(RightPlayerControl);
		$(wrapper).append(LeftPlayerControl);
		return wrapper;
	}
}