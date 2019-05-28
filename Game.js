function Game(){
	var _this = this;

	this.background	= document.createElement('canvas');
	$(this.background)
		.css({zIndex:2,position:'absolute',top:0,left:0,backgroundColor:"skyblue"})
		.attr({height:600, width:1250});

	this.drawBackground = function(){
		var ctx = this.background.getContext('2d');

		//tree left
		ctx.beginPath();
		ctx.fillStyle="brown";
		ctx.fillRect(490,400,50,400);

		//tree leaves (mid)
		ctx.beginPath();
    ctx.arc(515, 370, 50, 0, 2 * Math.PI);
    ctx.fillStyle = "green";
    ctx.fill();
		//leaf bot
		ctx.beginPath();
		ctx.arc(515, 410, 30, 0, 2 * Math.PI);
		ctx.fillStyle = "green";
		ctx.fill();
		//leaf top
		ctx.beginPath();
		ctx.arc(515, 330, 30, 0, 2 * Math.PI);
		ctx.fillStyle = "green";
		ctx.fill();
		//left top
		ctx.beginPath();
		ctx.arc(480, 350, 30, 0, 2 * Math.PI);
		ctx.fillStyle = "green";
		ctx.fill();
		//left bot
		ctx.beginPath();
		ctx.arc(480, 390, 30, 0, 2 * Math.PI);
		ctx.fillStyle = "green";
		ctx.fill();
		//right top
		ctx.beginPath();
		ctx.arc(550, 350, 30, 0, 2 * Math.PI);
		ctx.fillStyle = "green";
		ctx.fill();
		//right bot
		ctx.beginPath();
		ctx.arc(550, 390, 30, 0, 2 * Math.PI);
		ctx.fillStyle = "green";
		ctx.fill();


		//tree left
		ctx.beginPath();
		ctx.fillStyle="brown";
		ctx.fillRect(765,400,50,400);

		//tree leaves (mid)
		ctx.beginPath();
		ctx.arc(790, 370, 50, 0, 2 * Math.PI);
		ctx.fillStyle = "green";
		ctx.fill();
		//leaf bot
		ctx.beginPath();
		ctx.arc(790, 410, 30, 0, 2 * Math.PI);
		ctx.fillStyle = "green";
		ctx.fill();
		//leaf top
		ctx.beginPath();
		ctx.arc(790, 330, 30, 0, 2 * Math.PI);
		ctx.fillStyle = "green";
		ctx.fill();
		//left top
		ctx.beginPath();
		ctx.arc(755, 350, 30, 0, 2 * Math.PI);
		ctx.fillStyle = "green";
		ctx.fill();
		//left bot
		ctx.beginPath();
		ctx.arc(755, 390, 30, 0, 2 * Math.PI);
		ctx.fillStyle = "green";
		ctx.fill();
		//right top
		ctx.beginPath();
		ctx.arc(825, 350, 30, 0, 2 * Math.PI);
		ctx.fillStyle = "green";
		ctx.fill();
		//right bot
		ctx.beginPath();
		ctx.arc(825, 390, 30, 0, 2 * Math.PI);
		ctx.fillStyle = "green";
		ctx.fill();

		//cloud left
		//left 1
		ctx.beginPath();
		ctx.arc(100, 170, 30, 0, 2 * Math.PI);
		ctx.fillStyle = "white";
		ctx.fill();
		//left 2
		ctx.beginPath();
		ctx.arc(150, 170, 50, 0, 2 * Math.PI);
		ctx.fillStyle = "white";
		ctx.fill();
		//mid
		ctx.beginPath();
		ctx.arc(200, 170, 60, 0, 2 * Math.PI);
		ctx.fillStyle = "white";
		ctx.fill();
		//right 2
		ctx.beginPath();
		ctx.arc(250, 170, 50, 0, 2 * Math.PI);
		ctx.fillStyle = "white";
		ctx.fill();
		//right 1
		ctx.beginPath();
		ctx.arc(300, 170, 30, 0, 2 * Math.PI);
		ctx.fillStyle = "white";
		ctx.fill();


		//cloud right
		//left 1
		ctx.beginPath();
		ctx.arc(800, 170, 30, 0, 2 * Math.PI);
		ctx.fillStyle = "white";
		ctx.fill();
		//left 2
		ctx.beginPath();
		ctx.arc(850, 170, 50, 0, 2 * Math.PI);
		ctx.fillStyle = "white";
		ctx.fill();
		//mid
		ctx.beginPath();
		ctx.arc(900, 170, 60, 0, 2 * Math.PI);
		ctx.fillStyle = "white";
		ctx.fill();
		//right 2
		ctx.beginPath();
		ctx.arc(950, 170, 50, 0, 2 * Math.PI);
		ctx.fillStyle = "white";
		ctx.fill();
		//right 1
		ctx.beginPath();
		ctx.arc(1000, 170, 30, 0, 2 * Math.PI);
		ctx.fillStyle = "white";
		ctx.fill();

		//sun
		ctx.beginPath();
		ctx.arc(1200, 100, 30, 0, 2 * Math.PI);
		ctx.fillStyle = "yellow";
		ctx.fill();

		//grass ()
		ctx.beginPath();
		ctx.fillStyle = 'green';
		ctx.strokeStyle = "darkgreen";
		ctx.fillRect(0,580,1250,30);



		//bush 1 (left)
		//right bush
		ctx.beginPath();
    ctx.arc(500, 580, 30, 0, 2 * Math.PI);
    ctx.fillStyle = "green";
    ctx.fill();
		//middle bush
		ctx.beginPath();
    ctx.arc(450, 580, 50, 0, 2 * Math.PI);
    ctx.fillStyle = "green";
    ctx.fill();
		//left bush
		ctx.beginPath();
    ctx.arc(400, 580, 35, 0, 2 * Math.PI);
    ctx.fillStyle = "green";
    ctx.fill();


		//bush 2 (right)
		//right bush
		ctx.beginPath();
		ctx.arc(900, 580, 30, 0, 2 * Math.PI);
		ctx.fillStyle = "green";
		ctx.fill();
		//middle bush
		ctx.beginPath();
		ctx.arc(850, 580, 50, 0, 2 * Math.PI);
		ctx.fillStyle = "green";
		ctx.fill();
		//left bush
		ctx.beginPath();
		ctx.arc(800, 580, 25, 0, 2 * Math.PI);
		ctx.fillStyle = "green";
		ctx.fill();




	}
	this.drawBackground();

	this.elem = $("<div/>").css({zIndex:50,margin:'auto',position: 'relative',border: 'black 2px solid',height:600, width:1250,backgroundColor:'red'});

	this.elem.append(this.background);

	this.winner="";

	this.control=new Control(this);
	this.UIinterface= new Interface(this,this.control);
	this.startScreen = new StartScreen(this);
	this.instructions = new Instructions(this);
	this.objectiveAndRules = new ObjectiveAndRules(this);
	this.endScreen = new EndScreen(this);

	this.characters = {player1:[],player2:[]};

	this.store = new Store(this.characters,this);
	this.keys = new KeyControls($(window),this.store,this);
//	=======
	this.weapons = {player1:[],player2:[]};
	this.collisionTimer;
	this.inRangeTimer;
	this.goldTimer;




	this.draw = function(target){

		this.elem.append(this.UIinterface.elem);

		this.elem.append(this.startScreen.screen);
		this.elem.append(this.instructions.screen);
		this.elem.append(this.objectiveAndRules.screen);
		this.elem.append(this.endScreen.screen);
	//	this.elem.append(this.drawBackground);
		target.append(this.elem);
	}


	this.background.append(this.drawBackground);


	this.startGoldTimer = function(){
		this.goldTimer = setInterval(function(){
			//any amount income
			var income = 5;
			//humanbase
			_this.characters.player1[0].addToGold(income);
			_this.characters.player1[0].updateGoldBar();
			//alienbase
			_this.characters.player2[0].addToGold(income);
			_this.characters.player2[0].updateGoldBar();
		},1000);
	}

	this.openEndScreen = function(){
		$(this.endScreen.gameOver.html("Game Over<br>"+_this.winner+" won!"));
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
			if(((leftLocChar <= weaponLeft && rightLocChar >= weaponLeft) || (leftLocChar <= weaponRight && rightLocChar >= weaponRight)) && weapon.elem.css("opacity")>0.99){
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
	this.createBases = function(arrP1,arrP2,game){
		var base1 = new HumanBase(game,'player1',1000,800);
		var base2 = new Alien(game,'player2',1000,800);
		arrP1.push(base1);
		arrP2.push(base2);
	}

	this.startGame = function(){
		this.playing = true;
		this.createBases(this.characters.player1,this.characters.player2,this);
		this.startGoldTimer();
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

	}, 250);

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
		this.playing = false;
		clearInterval(this.goldTimer);
		this.destroy(this.characters.player1[0].healthbox);
		this.destroy(this.characters.player1[0].healthbox);

		this.destroy(this.characters.player2[0].healthbox);
		this.destroy(this.characters.player2[0].healthbox);

		this.destroyArr(this.characters.player1);
		this.destroyArr(this.characters.player2);

		this.destroyArr(this.weapons.player1);
		this.destroyArr(this.weapons.player2);
	}
	this.destroyArr = function(arr){
		for(var i = arr.length-1; i >= 0; i--){
			$(arr[i].elem).stop();
			if(arr[i].attackTimer!=null){
				clearInterval(arr[i].attackTimer);
			}
			this.destroy($(arr[i].elem));
			arr.pop();
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
	this.openEndScreen = function(){
		$(this.endScreen.gameOver.html("Game Over<br>"+this.winner+" won!"));
	}
	this.getP1Base = function(){
		return this.characters.player1[0];
	}
	this.getP2Base = function(){
		return this.characters.player2[0];
	}


}
