var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons(){
	//mode button event listeners
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares=3: numSquares = 6;
			reset();
		});
	}
}

function setupSquares(){
	for(var i = 0;i < squares.length; i++ ){
	//add initial colors to the squares
		squares[i].style.backgroundColor = colors[i];

		//add event listeners to the squares
		squares[i].addEventListener("click", function(){
			//grab the color of the clicked square
			var clickedColor = this.style.backgroundColor;
			//Compare color to the pickedColor
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again?";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
			}else{
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again!";
			}
		});
	}
}
function reset(){
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match the picked color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent="";

	// change colors of squares
	for(var i = 0;i < squares.length; i++ ){
	//add initial colors to the squares
	if(colors[i]){
		squares[i].style.display="block";
		squares[i].style.backgroundColor = colors[i];
	}else{
		squares[i].style.display="none";
	}
	
	}
	h1.style.backgroundColor="steelblue";
}

resetButton.addEventListener("click", function(){
	reset();
});

function changeColors(color){
	//loop through all squares
	//change each color to match given color
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//Make an array
	var arr = [];
	//add num random colors to array
	for(var i = 0; i < num; i++){
		//get random color and push into array
		arr.push(randomColor());		
	}
	//return the array
	return arr;
}

function randomColor(){
	//pick red, green and blue from 0 to 255
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	
	return "rgb(" + r + ", " + g + ", " + b +")";
}