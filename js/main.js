var hang_word = new HangWord();

if (hang_word.word === null) {
    hang_word.getWord(function (word) {

        var start_game = new StartGuess(word.word, word.hints,word.guess_count);
        start_game.start();
    });
}