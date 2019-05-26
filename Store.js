	function Store(characters, game){
		this.characters = characters;
		this.game = game;
		this.buySwordGoblin = function(){
			var temp = new Goblin(this.game,'player1');
			this.characters.player1.push(temp);
		}
		this.buyArcherGoblin = function(){
			var temp = new ArcherGoblin(this.game,'player1');
			this.characters.player1.push(temp);
		};
		this.buyGunner = function(){
			var temp = new Gunner(this.game,'player2');
			this.characters.player2.push(temp);
		}
		this.buyGoku = function(){
			var temp = new Goku(this.game,'player1');
			this.characters.player1.push(temp);
		}
		this.buyAlien = function(){
			var temp = new AlienMelee(this.game,'player2');
			this.characters.player2.push(temp);
		}
		this.buyAlienBoss = function(){
			var temp = new AlienBoss(this.game,'player2');
			this.characters.player2.push(temp);
		}
	
	
	}