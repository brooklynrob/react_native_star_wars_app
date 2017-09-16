const characterimageuris = {
	"Luke Skywalker": "https://pbs.twimg.com/profile_images/3105568793/b7137d145df3bbafe9c5f502df5ef6b9.jpeg",
	"R2-D2": "https://vignette.wikia.nocookie.net/starwars/images/1/1a/R2d2.jpg/revision/latest/scale-to-width-down/500?cb=20090524204255",
	"Darth Vader": "https://upload.wikimedia.org/wikipedia/en/7/76/Darth_Vader.jpg",
	"Obi-Wan Kenobi": "https://upload.wikimedia.org/wikipedia/en/3/32/Ben_Kenobi.png",
	"defaultpic": "http://img.lum.dolimg.com/v1/images/starwars_551c43f4.jpeg"
}

function fetchCharacterImageURI(name){
	if (characterimageuris[name]) { return characterimageuris[name]; } else { return characterimageuris["defaultpic"]; }
}

export { fetchCharacterImageURI }
