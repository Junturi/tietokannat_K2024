const prompt = require('prompt-sync')();

//Tehtävä 16

//A) Tee Javascriptilla ohjelma, joka kysyy käyttäjältä kaksi lukua ja ilmoittaa niistä suuremman.
function compare(a,b){
    if(a > b){
        return a;
    }
    if (b > a){
        return b;
    }
    return 'Luvut ovat yhtä suuret';
}

//Pyydetään käyttäjältä kaksi lukua, kutsutaan funktiota compare
//Lopuksi tulostetaan konsoliin palautettu arvo.

const luku1 = prompt('Anna ensimmäinen luku: ');
const luku2 = prompt('Anna toinen luku: ');

const tulos = compare(luku1,luku2);
console.log(tulos);

