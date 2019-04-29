function Interface(game) {
	var _this=this;
	//FIELDS-----------------------------------------------------------------------------------------------------------------------------------
	this.game = game;
	//METHODS----------------------------------------------------------------------------------------------------------------------------------
	this.body=(function(){return body();}());
	//CREATING---------------------------------------------------------------------------------------------------------------------------------s
	function body(){
		var body=$("<div/>").css({"height":"50px", "width":"400px", "position":"absolute", "top":"10px","left":"5px", "background-color":"lightyellow","border":"2px solid black"});
		var characterBox1=$("<img>")
						.css({"height":"45px", "width":"45px", "position":"absolute", "left":"10px", "border":"1px solid black"})
						.click(
							function(){
								_this.game.buyCharacter();
							}
						);
		var characterBox2=$("<img>")
						.css({"height":"45px", "width":"45px", "position":"absolute", "left":"110px", "border":"1px solid black"});
		var characterBox3=$("<img>")
						.css({"height":"45px", "width":"45px", "position":"absolute", "left":"210px", "border":"1px solid black"});
		var weaponBox=$("<img>")
						.css({"height":"45px", "width":"45px", "position":"absolute", "left":"310px", "border":"1px solid black"});
		$(body).append(characterBox1);
		$(body).append(characterBox2);
		$(body).append(characterBox3);
		$(body).append(weaponBox);
		return body;
	}
}