function StartScreen(game){
	var _this = this;
	this.game = game;
	this.screen = $("<div/>")
		.css({position: 'absolute',top:0,border: 'black 2px solid',height:600, width:1250,backgroundColor:'blue',zIndex:100});
	this.title = $("<div/>")
		.text("Age of Carr")
		.css({position:'absolute',left:370,top:50,fontSize:100,color:'orange',padding:5});
	this.break = $("<div/>")
		.text("~~~~~~~~~~~")
		.css({position:'absolute',left:320,top:150,fontSize:100,color:'white',padding:5});
	this.play = $("<div/>")
		.css({backgroundColor: "yellow",zIndex:101,height:60,width:200,fontWeight: "bold",fontSize:'4em',margin:"auto",textAlign:"center",position:'relative',top:300,padding:5})
		.text("PLAY")
		.click(function(){
			_this.game.openObjectiveAndRules();
		});
	this.instructions = $("<div/>")
		.css({backgroundColor: "yellow",zIndex:101,height:60,width:520,fontWeight: "bold",fontSize:'4em',margin:"auto",textAlign:"center",position:'relative',top:350,padding:5})
		.text("INSTRUCTIONS")
		.click(	function(){
				_this.game.openInstructions();
		}	);
	this.draw = function(){
		$(this.screen).append(this.title);
		$(this.screen).append(this.break);
		$(this.screen).append(this.play);
		$(this.screen).append(this.instructions);
	}
	this.draw();
}
