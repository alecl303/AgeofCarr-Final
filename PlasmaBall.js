	function PlasmaBall(loc,game,dmg){
		this.dmg = dmg;
		this.elem = $('<div/>')
			.css({height:10,width:20,position:'absolute', left:loc[0], top:loc[1],zIndex:10,display:'none'})
			.append($('<img/>').attr({'src':'plasmaball.png'}).css({maxHeight:20,maxWidth:20}));
	}