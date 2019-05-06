	function Game(){
		this.elem = $("<div/>").css({margin:'auto',position: 'relative',border: 'black 2px solid',height:600, width:1250,backgroundColor:'red'});
	//	this.leftArea = $("<div/>")
		
		this.base = new Base(this);
		this.control=new Control(this);
		this.UIinterface= new Interface(this,this.control);
		this.goblin = new Goblin(this);
		this.draw = function(target){
			this.elem.append(this.base.elem);
			this.elem.append(this.UIinterface.elem);
			
			target.append(this.elem);
			
			//$('body').append(this.base.elem);
			//this.elem.append(this.goblin.elem);
		}
		this.buyCharacter = function(){
			var goblin = new Goblin(this);
			
		}
	}