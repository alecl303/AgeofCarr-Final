	function KeyControls(elem,store){
		var _this = this;
		this.store = store;
		$(elem).keydown(function(evt){
			if(evt.which == 81){
				console.log("q");
				_this.store.buySwordGoblin();
			}
			if(evt.which == 87){
				console.log("w");
				_this.store.buyArcherGoblin();
			}
			if(evt.which == 69){
				console.log("e");
				_this.store.buyGoku();
			}
			if(evt.which == 65){
				console.log("a");
				$(_this.store.control.leftPlayerControl).css("visibility", "hidden");
				$(_this.store.control.leftTurretDisplay).css("visibility", "visible");
			}
			if(evt.which == 83){
				console.log("s");
			}
			if(evt.which == 68){
				console.log("d");
			}
			if(evt.which == 90){
				console.log("z");
				$(_this.store.control.leftPlayerControl).css("visibility", "visible");
				$(_this.store.control.leftTurretDisplay).css("visibility", "block");
			}
			if(evt.which == 73){
				console.log("i");
				_this.store.buyAlien();
			}
			if(evt.which == 79){
				console.log("o");
				_this.store.buyGunner();
			}
			if(evt.which == 80){
				console.log("p");
			}
			if(evt.which == 74){
				console.log("j");
				$(_this.store.control.rightPlayerControl).css("visibility", "hidden");
				$(_this.store.control.rightTurretDisplay).css("visibility", "visible");
			}
			if(evt.which == 75){
				console.log("k");
			}
			if(evt.which == 76){
				console.log("l");
			}
			if(evt.which == 78){
				console.log("n");
				$(_this.store.control.rightPlayerControl).css("visibility", "visible");
				$(_this.store.control.rightTurretDisplay).css("visibility", "block");
			}
			//windows
			if(evt.which == 103){
				console.log("7");
				_this.store.buyAlien();
			}
			if(evt.which == 104){
				console.log("8");
				_this.store.buyGunner();
			}
			if(evt.which == 105){
				console.log("9");
				_this.store.buyAlienBoss();
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
			///mac
			if(evt.which == 55){
				console.log("7");
				_this.store.buyAlien();
			}
			if(evt.which == 56){
				console.log("8");
				_this.store.buyGunner();
			}
			if(evt.which == 57){
				console.log("9");
				_this.store.buyAlienBoss();
			}
			if(evt.which == 52){
				console.log("4");
				$(_this.store.control.rightPlayerControl).css("visibility", "hidden");
				$(_this.store.control.rightTurretDisplay).css("visibility", "visible");
			}
			if(evt.which == 53){
				console.log("5");
			}
			if(evt.which == 54){
				console.log("6");
			}
			if(evt.which == 49){
				console.log("1");
				$(_this.store.control.rightPlayerControl).css("visibility", "visible");
				$(_this.store.control.rightTurretDisplay).css("visibility", "block");
				_this.store.destroyChars();
			}
			
		});
		
	
	}