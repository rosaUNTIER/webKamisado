var board = document.getElementById('board');
var ctx = board.getContext('2d');

//how big is one field in pixels
const FIELD = 80;
//where those fields are
var xPos = 0,
    yPos = 0;

var color = [
	"#000000",	//black
	"#FFFFFF"	//white
];

for (j=0; j<8; j++){
	for (i=0; i<8; i++) {
		ctx.beginPath();
		ctx.rect(FIELD*i, FIELD*j, FIELD, FIELD);
		if ((i+j)%2==0){
			ctx.fillStyle="#000000";
			ctx.fill();
			console.log("bing");
		}
		else {
			ctx.fillStyle="#FFFFFF";
			ctx.fill();	
			console.log("bong");
		}
	}
}

pieces = new Image();
pieces.src = 'https://rosauntier.github.io/webGames/grafics/chess/chess.png';
ctx.drawImage(pieces, 0, 64, 64, 83, 10, 10, 60, 60);
ctx.drawImage(pieces, 84, 64, 86, 83, 90, 10, 60, 60);

var storeX = 0; 
var storeY = 0; 
function getCoordinates(event) {
    var x = event.offsetX;
    var y = event.offsetY;
    storeX = x;
    storeY = y;
    console.log("x coords: " + storeX + ", y coords: " + storeY);
    document.getElementById("printXY").innerHTML = "x coords: " + storeX + ", y coords: " + storeY;
}




