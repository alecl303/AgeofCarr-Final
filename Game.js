	function Game(){
		var _this = this;
		this.elem = $("<div/>").css({margin:'auto',position: 'relative',border: 'black 2px solid',height:600, width:1250,backgroundColor:'red'});

		this.humanBase = new HumanBase(this,'player1',1000);
		this.alien = new Alien(this,'player2',1000);
	
		
		this.control=new Control(this);
		this.UIinterface= new Interface(this,this.control);
		this.startScreen = new StartScreen(this);
		this.instructions = new Instructions(this);
		this.objectiveAndRules = new ObjectiveAndRules(this);
		this.endScreen = new EndScreen(this);
		//this.endScreen = new EndScreen(this);
		this.characters = {player1:[],player2:[]};
		this.characters.player1.push(this.humanBase);
		this.characters.player2.push(this.alien);
		
		this.store = new Store(this.characters,this);
		this.keys = new KeyControls($(window),this.store);
	//	=======
		this.weapons = {player1:[],player2:[]};
		this.collisionTimer;
		this.inRangeTimer;
		this.draw = function(target){

			this.elem.append(this.UIinterface.elem);

			this.elem.append(this.startScreen.screen);
			this.elem.append(this.instructions.screen);
			this.elem.append(this.objectiveAndRules.screen);
			this.elem.append(this.endScreen.screen);
			
			target.append(this.elem);
		}
	
		this.destroy = function(obj){
			$(obj).remove();
		}
		this.checkCollide = function(character, weapon){
			var leftLocChar = parseInt($(character.elem).css('left'));
			var rightLocChar = parseInt($(character.elem).css('left')) + parseInt($(character.elem).css('width'));
			if(weapon){
				var weaponLeft = parseInt($(weapon.elem).css('left'));
				var weaponRight = parseInt($(weapon.elem).css('left')) + parseInt($(weapon.elem).css('width'));
				if((leftLocChar <= weaponLeft && rightLocChar >= weaponLeft) || (leftLocChar <= weaponRight && rightLocChar >= weaponRight)){
					character.takeDmg(weapon.dmg);
				
					if(weapon.projectile){
						this.weapons[weapon.side].splice(this.weapons[weapon.side].indexOf(weapon),1);
						this.destroy(weapon.elem);
					
					}
				
					if(character.health < 0){
						if(character.attackTimer!=null){
							clearInterval(character.attackTimer);
						}
						this.characters[character.side].indexOf(character);
						this.characters[character.side].splice(this.characters[character.side].indexOf(character),1);
						this.destroy($(character.elem));
						if(character.weapon){
							weapon.elem.stop();
							this.weapons[character.side].splice(this.weapons[character.side].indexOf(character.weapon),1);
							this.destroy($(character.weapon.elem));
						}
					}
				}
			}
		}

		this.checkIfInRange = function(enemy, character){
			var enmLoc = parseInt($(enemy.elem).css('left'))+parseInt(enemy.addedFront);
		
			var charRange = character.range;
			var charLoc =parseInt($(character.elem).css('left'))+parseInt(character.addedFront);
			var dis = Math.abs(enmLoc - charLoc);
			if(dis < Math.abs(charRange)){
				return true;
			}else{
				return false;
			};
		}
	
		this.collisionTimer = setInterval(
			function(){
				for(var f = 0; f < _this.weapons.player1.length;f++){
					for(var j = 0; j < _this.characters.player2.length;j++){
						_this.checkCollide(_this.characters.player2[j],_this.weapons.player1[f]);
					}
				}
				for(var f = 0; f < _this.weapons.player2.length;f++){
					for(var j = 0; j < _this.characters.player1.length;j++){
						_this.checkCollide(_this.characters.player1[j],_this.weapons.player2[f]);
					}
				}
				
		}, 300);
		
		this.inRangeTimer = setInterval(
			function(){
				for(var f = 1; f < _this.characters.player1.length;f++){
						for(var j = 0; j < _this.characters.player2.length; j++){
							var temp = _this.checkIfInRange(_this.characters.player2[j],_this.characters.player1[f]);
							if(temp){
								_this.characters.player1[f].inRange = true;
								j =_this.characters.player2.length;
							}else{
								_this.characters.player1[f].inRange = false;
							}
						}
					}
					for(var f = 1; f < _this.characters.player2.length;f++){
						for(var j =0; j < _this.characters.player1.length; j++){
							var temp = _this.checkIfInRange(_this.characters.player1[j],_this.characters.player2[f]);
							if(temp){
								_this.characters.player2[f].inRange = true;
								j =_this.characters.player1.length;
							}else{
								_this.characters.player2[f].inRange = false;
							}
						}
					}				
			
			},100);
		
		this.addWeapon = function(wep, side){
			this.weapons[side].push(wep);
		}
		this.endGame = function(){
			console.log("pay");
			this.destroyArr(this.characters.player1);
			this.destroyArr(this.characters.player2);
			this.destroyArr(this.weapons.player1);
			this.destroyArr(this.weapons.player2);
		}
		this.destroyArr = function(arr){
			for(var i = 0; i < arr.length; i++){
				$(arr[i].elem).stop();
				this.destroy($(arr[i].elem));
			}
		}
		this.destroyChars = function(){
			var arr = this.characters.player1;
			for(var i = 1; i < arr.length; i++){
				if(arr[i].attackTimer!=null){
					clearInterval(arr[i].attackTimer);
				}
				$(arr[i].elem).stop();
				this.destroy($(arr[i].elem));
			}
			arr = this.characters.player2;
			for(var i = 1; i < arr.length; i++){
				if(arr[i].attackTimer!=null){
					clearInterval(arr[i].attackTimer);
				}
				$(arr[i].elem).stop();
				this.destroy($(arr[i].elem));
			}
		}
		this.openInstructions = function(){
			this.instructions.screen.css({'display':'block'});
		}
		this.openObjectiveAndRules = function(){
			this.objectiveAndRules.screen.css({'display':'block'});
		}
		
		
	}
