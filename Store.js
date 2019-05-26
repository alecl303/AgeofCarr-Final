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
	
	
	}