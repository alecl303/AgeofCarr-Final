function ObjectiveAndRules(game){
  var _this = this;

  this.game = game;
  this.screen = $("<div/>")
    .css({position: 'absolute',top:0,border: 'black 2px solid',height:600, width:1250,backgroundColor:'blue',zIndex:102,'display':'none'});

  this.rulesTitle = $("<div/>")
    .css({height:"60",width:"auto",fontWeight:"bold",margin:10,padding:10,backgroundColor:"#DAF7A6",fontSize:60,textAlign:"center"})
    .text("Rules");

  this.rulesBox = $("<div/>")
    .css({top:100,backgroundColor:"#33FFBD",margin:10,padding:10,fontSize:35,height:"auto",width:"auto"})
    .html("<b>Rules & Description</b> <br> <ul> <li>On the left and right side of map are the bases.</li> <li>At the top center of the screen is the player's current amount of gold.</li> <li>If enemies come too close, they will deplete your health bar (located above its corresponding base) and cause you to lose the game.</li> <li>Each character/unit has a different cost.</li> </ul><b>Objective:</b> Destroy your opponent's base while defending your own.")

  this.backBut = $("<div/>")
    .css({position:"absolute",top:500,left:630,fontWeight:"bold",height:"auto",width:"145",padding:10,backgroundColor:"yellow",fontSize:50,textAlign:'center'})
    .text("BACK")
  	.click(function(){
      $(_this.screen).css({"display":'none'});
    });

  this.playBut = $("<div/>")
    .css({position:"absolute",top:500,left:430,fontWeight:"bold",height:"auto",width:"145",padding:10,backgroundColor:"yellow",fontSize:50,textAlign:'center'})
    .text("PLAY")
  	.click(function(){
		$(_this.screen).css({"display":"none"});
		$(_this.game.startScreen.screen).css({"display":"none"});
		_this.game.startGame();
//      $(_this.game.endScreen.screen).css({"display":"block"});

    });

  this.draw = function(){
    $(this.screen).append(this.rulesTitle);

    $(this.screen).append(this.rulesBox);

    $(this.screen).append(this.backBut);

    $(this.screen).append(this.playBut);
  }
  this.draw();
}
