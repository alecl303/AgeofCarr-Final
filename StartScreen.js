function StartScreen(){
		this.screen = $("<div/>")
			.css({position: 'absolute',top:0,border: 'black 2px solid',height:600, width:1250,backgroundColor:'blue',zIndex:100});
		
		this.play = $("<div/>")
			.css({backgroundColor: "yellow",zIndex:101,height:60,width:200,fontWeight: "bold",fontSize:'4em',margin:"auto",textAlign:"center",position:'relative',top:200,padding:5})
			.text("PLAY");
			
		this.instructions = $("<div/>")
			.css({backgroundColor: "yellow",zIndex:101,height:60,width:520,fontWeight: "bold",fontSize:'4em',margin:"auto",textAlign:"center",position:'relative',top:250,padding:5})
			.text("INSTRUCTIONS");
						
		this.draw = function(){
			$(this.screen).append(this.play);
			$(this.screen).append(this.instructions);
		
		
		}
		this.draw();
	}