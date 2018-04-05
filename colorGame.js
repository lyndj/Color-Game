var numOfSquares = 6;
var colors = generateRandomColors(numOfSquares);
var square = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

for (var i = 0; i < modeButtons.length; i++){
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numOfSquares = 3: numOfSquares = 6;
		// if(this.textContent === "Easy") {
		// 	numOfSquares = 3;
		// } else {
		// 	numOfSquares = 6;
		// }
		reset();
	} )
};

function reset(){
	colors = generateRandomColors(numOfSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	//change colors of square
	for (var i = 0; i < square.length; i++) {
		if(colors[i]){
			square[i].style.display = "block";
			square[i].style.backgroundColor = colors[i];
		} else {
			square[i].style.display = "none";	
		}
	}
	h1.style.backgroundColor = "pink";
};
// easyBtn.addEventListener("click", function(){
// 	hardBtn.classList.remove("selected");
// 	easyBtn.classList.add("selected");
// 	numOfSquares = 3
// 	colors = generateRandomColors(numOfSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i = 0; i < square.length; i++){
// 		if(colors[i]){
// 			square[i].style.backgroundColor = colors[i];
// 		} else {
// 			square[i].style.display = "none";
// 		}
// 	}
// })

// hardBtn.addEventListener("click", function(){ 
// 	hardBtn.classList.add("selected");
// 	easyBtn.classList.remove("selected");
// 	numOfSquares = 6
// 	colors = generateRandomColors(numOfSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i = 0; i < square.length; i++){
// 			square[i].style.backgroundColor = colors[i];
// 			square[i].style.display = "block";
// 	}
// })

colorDisplay.textContent = pickedColor;

resetButton.addEventListener("click", function() {
	reset();
});

	for (var i = 0; i < square.length; i++){
	//add initial colors to squares
	square[i].style.backgroundColor = colors[i]; 
	//add click listeners to squares
	square[i].addEventListener("click", function() {
	// grab color of clicked square
	var clickedColor = this.style.backgroundColor;
	//compare color of pickedColor
	if(clickedColor === pickedColor) {
		messageDisplay.textContent = "Correct!";
		resetButton.textContent = "Play Again?";
		changeColors(clickedColor);
		h1.style.backgroundColor = clickedColor;
	} else {
		this.style.backgroundColor = "#232323";
		messageDisplay.textContent = "Try Again";
	}
	}); 
}  

function changeColors(color){
	//loop through all squares
	for (var i = 0; i < square.length; i++) {
	//change each color to match given color
	square[i].style.backgroundColor = color;	
	}
};

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random]; 
}

function generateRandomColors(num) {
	//make an array
	var arr = [];
	//repeat num times
	for(var i = 0; i < num; i++){
//get random color and push into arr
		arr.push(randomColor()); 
	}
	//return that array
	return arr;
}

function randomColor(){
	//pick a red from 0 - 255
	var r = Math.floor (Math.random() * 256);
	//pick a green from 0 - 255
	var g = Math.floor (Math.random() * 256);
	//pick a blue form 0 - 255
	var b = Math.floor (Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}