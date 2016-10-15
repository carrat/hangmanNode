//main.js will contain the logic of your app. Running it in Terminal/Bash will start the game.
//The app should end when a player guesses the correct word or runs out of guesses.

// Includes
var game = require("./game.js");
var wordJS = require("./word.js");
//var letterJS = require("./letter.js");
var inquirer = require('inquirer');

// Variables
var mysteryWords = ['SIBERIAN TIGER', 'FLYING SQUIRREL', 'EMPEROR PENGUIN', 'CHIMPANZEE', 'AFRICAN ELEPHANT', 'DUCKBILLED PLATYPUS', 'GROUNDHOG', 'PRAIRIE DOG', 'HIPPOPOTAMUS', 'ZEBRA', 'RINGTAILED LEMUR', 'AARDVARK', 'HEDGEHOG', 'SLOTH', 'RHINOCEROS', 'SEA TURTLE', 'LONGHORN', 'GECKO', 'YELLOW JACKET', 'UNICORN', 'PORCUPINE', 'POLAR BEAR', 'KANGAROO', 'GIANT PANDA' ];

// load form into terminal to get player selection
function ask(word) {
		inquirer.prompt([
			{
			name: 'guess',
			type:'input' ,
			message: 'Enter a letter to guess'
			}
		]).then(function(data) {
			// They submitted the form, check their entry
			word.input(data.guess, word);
		})
		.then(function(data) {
			// check to see if the game is over
			if (word.victory == 0) {
				if (word.strikes < 10) {
				ask(word);
				}

				else {
					console.log("Game Over");
				}
			}
			else {
				console.log("You Won!");
			};
		});
}

// will output the instructions
function outputInstructions() {
	console.log("Welcome to Hangmanimal!");
	console.log("---------------------------------------");
	console.log("Each mystery word is an animal. Guess a letter that might appear in the name of the animal.")
	console.log("10 wrong guesses and the game is over!")
}

function startGame(word) {
	// select a word to start the game
	var correctGuesses = []; //array of correct letters guessed
	var incorrectGuesses = []; // array of incorrect letters guessed
	var allGuesses = []; // array of all letters guessed
	// output the instructions
	outputInstructions();
	// Create the Word object
	word = new wordJS.Word(word, correctGuesses, incorrectGuesses, allGuesses, mysteryWordSpaces, 0, 0);
	console.log("Word: " + word.word);
	// Output the gameboard
	word.gameboard(this.word);
	// Start the prompt
	ask(word);
}

// start the game
startGame(game.selectWord(mysteryWords));