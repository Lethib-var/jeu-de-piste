// Fonction pour vérifier si une lettre est déjà enregistrée
function checkLetterPosition(position) {
    return localStorage.getItem('letter_' + position) !== null;
}

// Fonction pour enregistrer la lettre dans le mot mystère
function saveLetter(position, letter) {
    localStorage.setItem('letter_' + position, letter);
}

// Fonction pour obtenir le mot mystère complet à partir du localStorage
function getMysteryWord() {
    let mysteryWord = '';
    for (let i = 1; i <= 10; i++) { // suppose qu'il y a 10 lettres
        mysteryWord += localStorage.getItem('letter_' + i) || '_';
    }
    return mysteryWord;
}
