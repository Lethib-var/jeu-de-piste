const positions = {
    1: 1,  2: 6,  3: 7,  4: 1,  5: 5,
    6: 8,  7: 2,  8: 9,  9: 4,  10: 10
};

const correctAnswer = "motclef";
const index = 1;
const position = positions[index];

document.getElementById('enigme-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const response = document.getElementById('reponse').value.trim().toLowerCase();

    if (response === correctAnswer && !localStorage.getItem('letter_' + position)) {
        localStorage.setItem('letter_' + position, response.charAt(0));
        alert('Réponse correcte ! La lettre à la position ' + position + ' a été enregistrée.');
        window.close(); // Ferme la popup après une réponse correcte
    } else if (response !== correctAnswer) {
        alert('Réponse incorrecte, essayez encore.');
    } else {
        alert('Cette lettre est déjà enregistrée.');
    }
});
