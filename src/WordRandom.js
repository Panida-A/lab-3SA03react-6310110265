function randomWord() {

    let ranObj = wordList[Math.floor(Math.random() * wordList.length)];
    let word = ranObj.word;

    console.log(word);

    let html = "";
    for(let i = 0; i < word.length; i++) {
        html += ''
    }
}

const wordList = [
    {word: "apple"},
    {word: "python"},
    {word: "guitar"},
    {word: "travel"},
    {word: "engineer"}
]

randomWord();