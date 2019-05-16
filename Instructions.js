function Instructions(){
		var _this = this;

		this.screen = $("<div/>")
			.css({position: 'absolute',top:0,border: 'black 2px solid',height:600, width:1250,backgroundColor:'blue',zIndex:102,'display':'none'});

		this.instructionsTitle = $("<div/>")
			.css({backgroundColor: "yellow",zIndex:101,height:70,fontWeight: "bold",fontSize:'4em',margin:"auto",textAlign:"center",position:'relative',top:0,padding:5})
			.text("Instructions");

		this.instructionsP1 = $("<div/>")
			.css({backgroundColor: "yellow",zIndex:101,height:60,width:520,fontWeight: "bold",fontSize:'50px',margin:"auto",textAlign:"center",position:'relative',top:30,padding:5,float:'left'})
			.text("Player 1 (Goblin)");

		this.instructions1Desc = $("<div/>")
			.css({backgroundColor: "pink",zIndex:101,height:"auto",width:520,fontSize:'40px',margin:"auto",position:'absolute',top:175,padding:5,float:'left'})
			.html("<b>Characters:</b> <br> Q - First Character <br> W - Second Character <br> E	- Third Character <br> <b>Turrents:</b> <br> A - Open Turrents Panel <br> S - First Turrent	<br> D - Second Turrent <br> Z - Exit Turrents Panel");

			this.instructionsP2 = $("<div/>")
				.css({backgroundColor: "yellow",zIndex:101,height:60,width:520,fontWeight: "bold",fontSize:'50px',margin:"auto",textAlign:"center",position:'relative',top:30,padding:5,float:'right'})
				.text("Player 2 (Alien)");

			this.backBut = $("<img/>")
				.attr("src","backBut.jpeg",{"id":"backBut"})
				.css({height:150, width:150, zIndex:101, position: 'absolute', top:300, left:550})
							.click(function(){	_this.screen.css({"display":'none'});			});

			this.instructions2Desc = $("<div/>")
				.css({backgroundColor: "skyblue",zIndex:101,height:"auto",width:520,fontSize:'40px',margin:"auto",position:'relative',top:25,padding:5,float:'right'})
				.html("<b>Characters:</b> <br> 7 - First Character <br> 8 -	Second Character <br> 9	- Third Character <br> <b>Turrents:</b>	<br> 4 - Open Turrents Panel <br> 5 - First Turrent <br> 6 - Second Turrent <br> 1 - Exit Turrents Panel");


		this.draw = function(){
			$(this.screen).append(this.instructionsTitle);

			$(this.screen).append(this.instructionsP1);
			$(this.screen).append(this.instructions1Desc);

			$(this.screen).append(this.instructionsP2);
			$(this.screen).append(this.instructions2Desc);

			$(this.screen).append(this.backBut);
		}
		this.draw();
	}
