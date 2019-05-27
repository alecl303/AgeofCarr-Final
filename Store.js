	function Store(characters, game){
		this.characters = characters;
		this.game = game;
		//player1 
		this.buySwordGoblin = function(base){
			var cost = 50;
			if(base.useGold(cost)){
				var temp = new Goblin(this.game,'player1');
				this.characters.player1.push(temp);
			}
		}
		this.buyArcherGoblin = function(base){
			var cost = 100;
			if(base.useGold(cost)){
				var temp = new ArcherGoblin(this.game,'player1');
				this.characters.player1.push(temp);
			}
		};
		this.buyGoku = function(base){
			var cost = 200;
			if(base.useGold(cost)){
				var temp = new Goku(this.game,'player1');
				this.characters.player1.push(temp);
			}
		}
		this.buyHumanTurret1 = function(base){
			var cost = 400;
			if(base.useGold(cost)){
				var turret = new HumanTurret1(this.game,'player1');		
				this.characters.player1.push(turret);	
				$(this.game.elem).append(turret.elem);
			}
		}
		this.buyHumanTurret2 = function(base){
			var cost = 1000;
			if(base.useGold(cost)){
				var turret = new HumanTurret2(this.game,'player1');		
				this.characters.player1.push(turret);	
				$(this.game.elem).append(turret.elem);
			}
		}
		//player2
		this.buyAlien = function(base){
			var cost = 50;
			if(base.useGold(cost)){
				var temp = new AlienMelee(this.game,'player2');
				this.characters.player2.push(temp);
			}
		}
		this.buyGunner = function(base){
			var cost = 100;
			if(base.useGold(cost)){
				var temp = new Gunner(this.game,'player2');
				this.characters.player2.push(temp);
			}
		}
		this.buyAlienBoss = function(base){
			var cost = 200;
			if(base.useGold(cost)){
				var temp = new AlienBoss(this.game,'player2');
				this.characters.player2.push(temp);
			}
		}
		this.buyAlienTurret1 = function(base){
			var cost = 400;
			if(base.useGold(cost)){
				var turret = new AlienTurret1(this.game,'player2');		
				this.characters.player2.push(turret);	
				$(this.game.elem).append(turret.elem);
			}
		}
		this.buyAlienTurret2 = function(base){	
			var cost = 1000;	
			if(base.useGold(cost)){	
				var turret = new AlienTurret2(this.game,'player2');			
				this.characters.player2.push(turret);		
				$(this.game.elem).append(turret.elem);	
			}	
		}
	
	}