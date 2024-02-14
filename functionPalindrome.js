const prompt = require('prompt-sync')();

//Tehtävä 16

//B) Tee Javascriptilla ohjelma, joka tutkii, onko sana palindromi.
//Sana on palindromi jos se on sama etu- ja takaperin

function checkPalindrome(str){
    //Tarkistetaan syötetyn sanan pituus
    const len = string.length;

    //Loopin sisällä käydään läpi puolet sanan merkeistä
    for (let i = 0; i < len / 2; i++){
        //Tarkistetaan täsmäävätkö ensimmäinen ja viimeinen merkki
        //Seuraavalla kierroksella tarkistetaan toinen vs toiseksi viimeinen merkki jne.
        //Jos merkit eivät täsmää, palautetaan viesti
        if (string[i] !== string[len -1-i]){
            return 'Sana ei ole palindromi';
        }
    }

    //Jos tarkistukset menevät läpi, sana on palindromi ja palautetaan viesti
    return 'Sana on palindromi'
}

//Pyydetään käyttäjältä sana, kutsutaan funktiota checkPalindrome
//Lopuksi tulostetaan konsoliin palautettu arvo.
const string = prompt('Anna sana: ');

const value = checkPalindrome(string);
console.log(value);