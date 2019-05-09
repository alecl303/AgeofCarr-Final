	function KeyControls(elem,game){
		var _this = this;
		this.g = game;
		$(elem).keydown(function(evt){
			if(evt.which == 81){
				console.log("q");
				_this.g.buySwordGoblin();
			}
			if(evt.which == 87){
				console.log("w");
			}
			if(evt.which == 69){
				console.log("e");
			}
			if(evt.which == 65){
				console.log("a");
			}
			if(evt.which == 83){
				console.log("s");
			}
			if(evt.which == 68){
				console.log("d");
			}
			if(evt.which == 90){
				console.log("z");
			}
			if(evt.which == 103){
				console.log("7");
			}
			if(evt.which == 104){
				console.log("8");
			}
			if(evt.which == 105){
				console.log("9");
			}
			if(evt.which == 100){
				console.log("4");
			}
			if(evt.which == 101){
				console.log("5");
			}
			if(evt.which == 102){
				console.log("6");
			}
			if(evt.which == 97){
				console.log("1");
			}
			
		});
		
	
	}