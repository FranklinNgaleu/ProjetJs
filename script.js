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

showReponses(1)
showReponses(2)
showReponses(3)
showReponses(4)
showReponses(5)

function getReponse(numQuestion) {
    const listReponses = document.getElementsByName(`reponsesQ${numQuestion}`)

    for (let i = 0; i < listReponses.length; i++) {
        if (listReponses[i].checked) { var reponse = listReponses[i].value}
    }
    return reponse
}

function verifReponses() {
    const reponse1 = shuffledRepQ1.find(element => element.text == getReponse(1))
    const reponse2 = shuffledRepQ2.find(element => element.text == getReponse(2))
    const reponse3 = shuffledRepQ3.find(element => element.text == getReponse(3))
    const reponse4 = shuffledRepQ4.find(element => element.text == getReponse(4))
    const reponse5 = shuffledRepQ5.find(element => element.text == getReponse(5))
    let score = 0

    score = (!(typeof reponse1 === 'undefined') && reponse1.bonneRep) ? score + 1 : score
    score = (!(typeof reponse2 === 'undefined') && reponse2.bonneRep) ? score + 1 : score
    score = (!(typeof reponse3 === 'undefined') && reponse3.bonneRep) ? score + 1 : score
    score = (!(typeof reponse4 === 'undefined') && reponse4.bonneRep) ? score + 1 : score
    score = (!(typeof reponse5 === 'undefined') && reponse5.bonneRep) ? score + 1 : score

    afficherScore(score)
}


function afficherScore(score) {
    let divQuestions = []
    for (let i = 1; i <= 5; i++) {
        divQuestions.push(document.getElementById(`question${i}`));
    }
    let btnSoumettre = document.getElementById('submit')

    let divScore = document.getElementById('score')

    let textScore = document.createElement('h2')
    textScore.textContent = (score == 5) ? `${score} / 5 , bravo !` : `${score} / 5`

    divScore.appendChild(textScore)

    divQuestions.forEach(item => item.hidden = 'true')
    divScore.hidden = false
    btnSoumettre.textContent = "Recommencer"
    btnSoumettre.setAttribute('onclick', 'window.location.reload()')
}