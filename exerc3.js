/* requer ''npm install prompt-sync */
const prompt = require('prompt-sync')();
const name = prompt('Qual diretoria é melhor? ').toUpperCase();

if (name == 'COMERCIAL' || name == 'CMC') {
    console.log('comercial > marketing')
} else if (name == 'MARKETING' || name == 'MKT') {
    console.log('marketing > comercial')
} else {
    console.log('todos são melhores')
} ;
