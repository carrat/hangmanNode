//Your game.js file will randomly select a word for the player.

module.exports.selectWord = function(wordlist) {
	mysteryWordSpaces = []; // array to hold the spaces representing correct letters
	// Choose a mystery word for the active game
	activeMysteryWord = wordlist[Math.floor(Math.random() * wordlist.length)];
	// Find Index of Active Mystery Word
	activeMysteryWordIndex = wordlist.indexOf(activeMysteryWord);
	// add blank spaces to mysteryWordSpaces to generate gameboard
	for (var i=0; i < activeMysteryWord.length; i++) {
		if (activeMysteryWord[i] !== " ") {
		mysteryWordSpaces.push("_");
		} else if (activeMysteryWord[i] == " ") {
		mysteryWordSpaces.push(" ");
		}	
	}
	return activeMysteryWord;
}