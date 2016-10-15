//Both letter.js and word.js should be constructor files:
//word.js should contain all of the methods which will check the letters guessed versus the random word selected.

module.exports.Word = function(word, allGuesses, spaces, strikes, victory) {
	this.word = word;
	this.allGuesses = allGuesses;
	this.spaces = spaces;
	this.strikes = strikes;
	this.victory = victory;

	this.check = function(guess, word) {
		// Have they already guesssed that letter?
        if (this.allGuesses.indexOf(guess) > -1) {
        	console.log("You Already Guessed That! Guess Again");
        } 
        else {
        	// Does the user guess appear in the mystery word?
        	if (this.word.indexOf(guess) > -1) {
	        	// let them know
	            console.log("Correct!");
	            //update the arrays
	            this.allGuesses.push(guess);
	            //update the board
	            for (i=0; i < this.word.length; i++) {
					if (guess == this.word[i]) {
						// Update board with correct letters filled in
						this.spaces[i] = guess;	// replace '_' with the correct letter			
					}	
				}

				if (this.spaces.indexOf("_") > -1) {	
				// if gameboard still contains '_" then they have not solved it		
				}
				else {
					this.victory = 1;    
	        	}

	        	word.updateBoard(word);
	        } 
	        else {
	        	// incorrect guess, let them know and reload the form
	            console.log("Nope! Try Again");
	            // update the arrays
	            this.allGuesses.push(guess);
	            this.strikes = parseInt(this.strikes) + 1;
	            console.log("Strikes: " + this.strikes);
	            //update the board
	            word.updateBoard(word);
	        }
        }
    };

    this.input = function(guess, word){
    	var myGuess = guess.toUpperCase();
    	//console.log("My Guess: " + myGuess);
    	if (/[A-Z]/.test(myGuess)) {
			// They did enter a letter so process
			word.check(myGuess, word);
		} 
		else { // whatever they entered was not a letter
			console.log("That's not a letter! Try again!");
		}
    };

    this.updateBoard = function(word) {

		var newBoard = '';
		for (i=0; i<this.spaces.length; i++) {
			newBoard = newBoard + this.spaces[i] + ' ';
		}
		// return the spaces array as a string for easy output
		console.log("------------------------------------------------")
        console.log("Mystery Word:");
        console.log(" ");
        console.log(newBoard);
        console.log(" ");
        console.log("------------------------------------------------")
        console.log(" ");

        var missBoard = '';
        for (i=0; i<this.allGuesses.length; i++) {
			missBoard = missBoard + this.allGuesses[i] + ' ';
		}
        console.log("Letters Guessed: " + missBoard);
        console.log("Strikes: " + this.strikes + "/10");
        console.log(" ");
        console.log(" ");
	}     
}