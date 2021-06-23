function sortLetters(word) {
    word = word.split('').sort().join('')
    console.log(word)
}

sortLetters('konexio');


function countEach(word){
    for (i = 0; i < word.length; i++) {

        console.log( word.charAt(i))
}}