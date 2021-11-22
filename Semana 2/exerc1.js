/* requer ''npm install prompt-sync */

function numeroVogais(palavra) {
    vogal = palavra.match(/[aeiou]/gi)
    return vogal === null ? 0 : vogal.length 
};

const prompt = require('prompt-sync')();
let palavra = prompt('Digite uma frase: ').toLowerCase()

console.log(`O número de vogais é ${numeroVogais(palavra)}`);
