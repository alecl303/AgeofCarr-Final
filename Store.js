	function Store(characters, game){
		this.characters = characters;
		this.game = game;
		this.buySwordGoblin = function(){
			var goblin = new Goblin(this.game,'player1');

			this.characters.player1.push(goblin);
		}
		this.buyGunner = function(){
			var gunner = new Gunner(this.game,'player2');

			this.characters.player2.push(gunner);
		}
		this.buyGoku = function(){
			var goku = new Goku(this.game,'player1');

			this.characters.player1.push(goku);
		}
		this.buyAlien = function(){
			var alien = new AlienMelee(this.game,'player2');
			this.characters.player2.push(alien);
		}
	
	
	
	}