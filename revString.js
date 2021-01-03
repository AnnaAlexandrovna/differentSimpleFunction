function checkWord(word) {
    return word == [...word].reverse().join('');
}
console.log(checkWord('город дорог'));
console.log(checkWord('дорог'));
