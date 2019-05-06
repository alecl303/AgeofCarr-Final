	function Sword(loc,game,dmg){
		
		this.elem = $('<div/>')
			.css({height:10,width:20,backgroundColor:'pink',position:'absolute', left:loc[0], top:loc[1],zIndex:10,display:'none'})
			.append($('<img/>').attr({'src':'sword2.png'}).css({maxHeight:20,maxWidth:20}));
	
	
	}