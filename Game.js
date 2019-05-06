	function Game(){
		var _this = this;
		this.elem = $("<div/>").css({margin:'auto',position: 'relative',border: 'black 2px solid',height:600, width:1250,backgroundColor:'red'});
	//	this.leftArea = $("<div/>")
		
		this.base = new Base(this);
		
		this.control=new Control(this);
		this.UIinterface= new Interface(this,this.control);
		this.characters = {player1:[],player2:[]};
	//	this.goblin = new Goblin(this,'player1');
		//this.characters.player1.push(this.goblin);
		this.archer = new Archer(this,'player2');
		
	//	=======
			
		this.characters.player2.push(this.archer);
		this.weapons = {player1:[],player2:[]};
		//this.weapons.player1.push(this.goblin.weapon);
		this.collisionTimer;
	//	console.log(_this.weapons.player2[0]);
		this.draw = function(target){
		
			///this.elem.append(this.base.elem);
			this.elem.append(this.base.elem);
			this.elem.append(this.UIinterface.elem);
			var s = new Sword([0,0],this);
			
		//	this.elem.append(this.goblin.weapon.elem);

			target.append(this.elem);
			
			//$('body').append(this.base.elem);
			//this.elem.append(this.goblin.elem);
		}
		
		this.buyCharacter = function(){
			var goblin = new Goblin(this,'player1');
			
			this.characters.player1.push(goblin);
		}
		this.destroy = function(obj){
			//this.elem.remove(obj);
		//	this.elem.removeChild(obj);
			$(obj).remove();
			
		}
		this.checkCollide = function(character, weapon){
			var leftLocChar = parseInt($(character.elem).css('left'));
			var weaponLoc = parseInt($(weapon.elem).css('left')) + parseInt($(weapon.elem).css('width'))/2;
		//	console.log(leftLocChar + "-" + weaponLoc + "-" + ( ($(character.elem).attr('width'))));
		//	console.log(parseInt($(character.elem).css('left')) +" -"+parseInt($(weapon.elem).css('left')));
			if(leftLocChar < weaponLoc && (leftLocChar +  parseInt($(character.elem).attr('width')) > weaponLoc)){
				//console.log('hit');
				character.takeDmg(weapon.dmg);
				if(weapon.projectile){	
					this.destroy(weapon.elem);
				}
			}
			
			
		}
				
		this.checkIfInRange = function(enemy, character){
			var enmLoc = parseInt($(enemy.elem).css('left'));
			//console.log(character);
			var charRange = character.range + parseInt($(character.elem).css('left'))+parseInt($(character.elem).attr('width'))/2;
		//	console.log(enmLoc);
			if(charRange > enmLoc && charRange < enmLoc+parseInt($(enemy.elem).attr('width'))){
				character.inRange = true;
			//	$(character.elem).stop();
	
			}else{
				
				character.inRange = false;
			};
		}
		this.collisionTimer = setInterval(
			function(){
			//	console.log(_this.characters.length);
				//for(var i = 0; i < _this.characters.player1.length+_this.characters.player2.length; i++){
					for(var f = 0; f < _this.characters.player1.length;f++){
						for(var j =0; j < _this.characters.player2.length; j++){
							_this.checkIfInRange(_this.characters.player2[j],_this.characters.player1[f]);
						}
					}
					for(var f = 0; f < _this.characters.player2.length;f++){
						for(var j =0; j < _this.characters.player1.length; j++){
							_this.checkIfInRange(_this.characters.player1[j],_this.characters.player2[f]);
						}
					}
					
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
				//}
		}, 100);
		this.addWeapon = function(wep, side){
			this.weapons[side].push(wep);
		}
	}