// DATAS
const reponsesQ1 = [
    {
        text: "22",
        bonneRep: 1,
    },
    {
        text: "23",
        bonneRep: 0,
    },
    {
        text: "16",
        bonneRep: 0,
    },
    {
        text: "20",
        bonneRep: 0,
    },
]

const reponsesQ2 = [
    {
        text: "Orange Vélodrome",
        bonneRep: 1,
    },
    {
        text: "Stade de Marseille",
        bonneRep: 0,
    },
    {
        text: "Parc des sports",
        bonneRep: 0,
    },
    {
        text: "Parc des Princes",
        bonneRep: 0,
    },
]

const reponsesQ3 = [
    {
        text: "Didier Deschamps",
        bonneRep: 1,
    },
    {
        text: "Zinédine Zidane",
        bonneRep: 0,
    },
    {
        text: "Aimé Jacquet",
        bonneRep: 0,
    },
    {
        text: "Guy Roux",
        bonneRep: 0,
    },
]

const reponsesQ4 = [
    {
        text: "Faux",
        bonneRep: 1,
    },
    {
        text: "Vrai",
        bonneRep: 0,
    },
]

const reponsesQ5 = [
    {
        text: "Vrai",
        bonneRep: 1,
    },
    {
        text: "Faux",
        bonneRep: 0,
    },
]

// Mélange les éléments d'un tableau donné
function shuffle(answers) {
    // Variable qui récupèrera le résultat
    let shuffledAnswers = []
    // Nombre d'éléments du tableau
    let answerCount = answers.length
    // Nombre d'éléments restant a mélanger
    let leftToShuffle = answerCount

    for (let i = 0; i<answerCount; i++) {
        // Valeur qui servira de sélecteur d'élément
        let randomSelector = Math.floor(Math.random() * leftToShuffle)
        // Récupère un élément de l'array donné en paramètre (en le retirant de cet array)
        let oneAnswer = answers.splice(randomSelector, randomSelector + 1)
        // Ajoute cet élément dans le résultat
        shuffledAnswers = shuffledAnswers.concat(oneAnswer)
        // Désincrémente le nombre d'éléments restant à mélanger
        leftToShuffle--
    }

    // Renvoie un array avec les éléments mélangés
    return shuffledAnswers;
}

// Mélange de chaque tableau de réponses
const shuffledRepQ1 = shuffle(reponsesQ1)
const shuffledRepQ2 = shuffle(reponsesQ2)
const shuffledRepQ3 = shuffle(reponsesQ3)
const shuffledRepQ4 = shuffle(reponsesQ4)
const shuffledRepQ5 = shuffle(reponsesQ5)

// Affiche les propositions de réponse d'une question
function showReponses(numQuestion) {
    // Récupération de la div contenant les inputs
    let divInput = document.getElementById(`question${numQuestion}`);

    // Selection de l'array de reponses correspondant a la question demandée en paramètre
    let reponses
    switch(numQuestion) {
        case 1: 
            reponses = shuffledRepQ1
            break;
        case 2: 
            reponses = shuffledRepQ2
            break;
        case 3: 
            reponses = shuffledRepQ3
            break;
        case 4: 
            reponses = shuffledRepQ4
            break;
        case 5: 
            reponses = shuffledRepQ5
            break;    
    }

    // Boucle pour créer un input par proposition de réponse
    for (let i = 0; i < reponses.length; i++) {
        // Création de l'input
        const input = document.createElement('input');
        
        // Ajout de l'attribut "type" de type "radio"
        input.type = 'radio';
        input.name = `reponsesQ${numQuestion}`
        
        // Ajout de la valeur de la proposition de réponse
        input.value = reponses[i].text;
        
        // Création de l'étiquette pour l'input
        const label = document.createElement('label');
        label.appendChild(input);
        label.appendChild(document.createTextNode(reponses[i].text));
        
        // Ajout de l'étiquette à la div
        divInput.appendChild(label);
        divInput.appendChild(document.createElement("br"));
    }
} 

// Affiche les propositions de réponse de chaque questions sur la page
showReponses(1)
showReponses(2)
showReponses(3)
showReponses(4)
showReponses(5)

// Renvoie les réponses de l'utilisateur sur une question
function getReponse(numQuestion) {
    // Liste des propositions de réponse sur la page 
    const listReponses = document.getElementsByName(`reponsesQ${numQuestion}`)

    // Cherche parmi cette liste la réponse cochée
    for (let i = 0; i < listReponses.length; i++) {
        if (listReponses[i].checked) { var reponse = listReponses[i].value}
    }
    // Renvoie le résultat
    return reponse
}

// Eléments bouton de la page 
const btnSubmit = document.getElementById('submit');
const btnDivs = document.getElementById('next');
const btnReset = document.getElementById('reset');
const textTimer = document.getElementById('textTimer');

// Vérifie les réponses et calcule le score de l'utilisateur 
function verifReponses() {
    // Arrete le timer et le masque, ainsi que le bouton 'Soumettre'
    if (timerInterv) {
        clearInterval(timerInterv) 
        textTimer.hidden = true
    }
    btnSubmit.hidden = true

    // Récupère les réponses de l'utilisateur sur chaque question puis sélectionne l'élément correspondant dans les array DATAS
    const reponse1 = shuffledRepQ1.find(element => element.text == getReponse(1))
    const reponse2 = shuffledRepQ2.find(element => element.text == getReponse(2))
    const reponse3 = shuffledRepQ3.find(element => element.text == getReponse(3))
    const reponse4 = shuffledRepQ4.find(element => element.text == getReponse(4))
    const reponse5 = shuffledRepQ5.find(element => element.text == getReponse(5))
    // Initialisation du score à 0
    let score = 0

    // CALCUL DU SCORE 
    // SI une réponse a été cochée ET cette réponse est la bonne ALORS on ajoute 1 au score (sinon le score ne change pas)
    score = (!(typeof reponse1 === 'undefined') && reponse1.bonneRep) ? score + 1 : score
    score = (!(typeof reponse2 === 'undefined') && reponse2.bonneRep) ? score + 1 : score
    score = (!(typeof reponse3 === 'undefined') && reponse3.bonneRep) ? score + 1 : score
    score = (!(typeof reponse4 === 'undefined') && reponse4.bonneRep) ? score + 1 : score
    score = (!(typeof reponse5 === 'undefined') && reponse5.bonneRep) ? score + 1 : score

    // Envoie le score à la fonction qui affiche le score 
    afficherScore(score)
}

// Masque les questions et affiche le score sur la page
function afficherScore(score) {
    // Récupère les éléments <div> contenant les questions
    let divQuestions = []
    for (let i = 1; i <= 5; i++) {
        divQuestions.push(document.getElementById(`question${i}`));
    }

    // Récupération du div contenant le score
    let divScore = document.getElementById('score')

    // Création d'un élément affichant la valeur du score
    let textScore = document.createElement('h2')
    textScore.textContent = (score == 5) ? `${score} / 5 , bravo !` : `${score} / 5`

    // Ajoute cet élément à l'élément div du score
    divScore.appendChild(textScore)

    // Masque les questions 
    divQuestions.forEach(item => item.hidden = 'true')
    // Affiche la section 'Score'
    divScore.hidden = false
}

// Variable servant d'identifiant pour l'interval
let timerInterv

// Démarre un timer, 'time' est la durée du timer et 'mode' permet d'identifier si on passe a la question suivante ou si on termine le quizz
function startTimer(time, mode) {
    // Element du décompte timer
    let decompte = document.getElementById("timer")
    // Initialisation du texte du timer 
    decompte.textContent = time
    
    // Lancement du timer
    timerInterv = setInterval(() => {
        // Si le temps restant est supérieur à 0, on désincrémente de 1
        if (time > 0) {
            time--
            decompte.textContent = time
        }

        // Le temps s'est écoulé
        else {
            // Stoppe l'interval pour économiser des ressources
            clearInterval(timerInterv)
            
            // Si on est en mode 'next' alors on passe à la question suivante
            if (mode == 'next') {
                afficherQSuivante()
            }
            // Si on est en mode 'end' alors on appelle la fonction qui calcule le score, et on masque le timer
            else if (mode == 'end') {
                verifReponses()
                textTimer.hidden = true
            }
        }
    // Délai a 1000 ms, la fonction s'éxécutera donc toutes les secondes
    }, 1000);
}

// Index de la question à afficher
let indexQuestion = 0

// Gère l'affichage des questions
function afficherQSuivante(){
    // Arrete le timer
    if (timerInterv) {
        clearInterval(timerInterv) 
    }

    // Cache toutes les questions
    let divQuestions = []
    for (let i = 1; i <= 5; i++) {
        divQuestions.push(document.getElementById(`question${i}`));
    }
    divQuestions.forEach(item => item.hidden = 'true')

    // Valeur de temps du timer
    let timeValue = 10

    switch (indexQuestion) {
        // Première question : On lance et affiche le timer en mode 'next', le bouton 'Recommencer' et la question, et on change le text du bouton 'Commencer' en 'Suivant'
        case 0:
            textTimer.hidden = false
            btnDivs.textContent = 'Suivant'
            btnReset.hidden = false
            divQuestions[indexQuestion].hidden = false;
            startTimer(timeValue, 'next')
            break;

        // Questions 2, 3 et 4 : on affiche la question et on lance un timer en mode 'next'
        case 1:
        case 2:
        case 3:
            divQuestions[indexQuestion].hidden = false;
            startTimer(timeValue, 'next')
            break;

        // Dernière question : on lance le timer en mode 'end', on masque le bouton 'Suivant' et on affiche à la place le bouton 'Soumettre'
        case 4:
            divQuestions[indexQuestion].hidden = false;
            startTimer(timeValue, 'end')
            btnDivs.hidden = true
            btnSubmit.hidden = false
            break;
    }

    // Incrémente l'index de la question
    indexQuestion++
}


// TESTS DE FRANKLIN

// let i = 0;
// afficherDivsBtn.addEventListener('click', () => {
//   const interval = setInterval(() => {
    
//     if (i === divQuestions.length) {
//       clearInterval(interval);
//     }
//   }, 1500);
// });



//const container = document.querySelector('.container');
//const contents = document.querySelectorAll('.content');
// const bouton = document.querySelector('#bouton');
// let index = 0;

// bouton.addEventListener('click', () => {
//   container.style.display = 'flex';
//   setInterval(() => {
//     if (index >= contents.length) {
//       index = 0;
//     }
//     for (let i = 0; i < contents.length; i++) {
//       if (i === index) {
//         contents[i].style.display = 'block';
//       } else {
//         contents[i].style.display = 'none';
//       }
//     }
//     index++;
//   }, 15000);
// });

