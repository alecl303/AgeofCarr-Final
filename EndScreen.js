function EndScreen(game){
  var _this = this;

  this.game = game;
  this.screen = $("<div/>")
    .css({position: 'absolute',top:0,border: 'black 2px solid',height:600, width:1250,backgroundColor:'blue',zIndex:102,'display':'none'});

  this.gameOver = $("<div/>")
    .css({fontSize:100,color: 'orange', textAlign:'center',zIndex:103})
    .text("GAME OVER");

  this.playAgainBut = $("<div/>")
    .css({position:'absolute',top:300,left:250,height:160,width:300,backgroundColor:'yellow',fontWeight:'bold',fontSize:70,textAlign:'center'})
    .text("PLAY AGAIN")
    .click(function(){
       $(_this.game.endScreen.screen).css({"display":"none"});
       $(_this.game.startScreen.screen).css({"display":"none"});
       $(_this.game.objectiveAndRules.screen).css({"display":"none"});
   });

  this.homeScreen = $("<div/>")
    .css({position:'absolute',top:300,left:600,height:160,width:300,backgroundColor:'yellow',fontWeight:'bold',fontSize:70,textAlign:'center'})
    .text("HOME SCREEN")
    .click(function(){
      $(_this.game.endScreen.screen).css({"display":"none"});
  }	);

  this.draw = function(){
    $(this.screen).append(this.playAgainBut);
    $(this.screen).append(this.gameOver);
    $(this.screen).append(this.homeScreen);

  }
  this.draw();
}
