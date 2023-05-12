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




// ajout des propositions de réponse de la 1er question sous forme de checkbox 
// Récupération de la div contenant les inputs
let divInput1 = document.getElementById('question1');
// Boucle pour créer un input par proposition de réponse
for (let i = 0; i < shuffledRepQ1.length; i++) {
    // Création de l'input
    const input = document.createElement('input');
    
    // Ajout de l'attribut "type" de type "checkbox"
    input.setAttribute('type', 'checkbox');
    
    // Ajout de la valeur de la proposition de réponse
    input.value = shuffledRepQ1[i].text;
    
    // Création de l'étiquette pour l'input
    const label = document.createElement('label');
    label.appendChild(input);
    label.appendChild(document.createTextNode(shuffledRepQ1[i].text));
    
    // Ajout de l'étiquette à la div
    divInput1.appendChild(label);
    divInput1.appendChild(document.createElement("br"));
}

// ajout des propositions de réponse de la 2e question sous forme de checkbox 
// Récupération de la div contenant les inputs
let divInput2 = document.getElementById('question2');
// Boucle pour créer un input par proposition de réponse
for (let i = 0; i < shuffledRepQ2.length; i++) {
    // Création de l'input
    const input = document.createElement('input');
    
    // Ajout de l'attribut "type" de type "checkbox"
    input.setAttribute('type', 'checkbox');
    
    // Ajout de la valeur de la proposition de réponse
    input.value = shuffledRepQ2[i].text;
    
    // Création de l'étiquette pour l'input
    const label = document.createElement('label');
    label.appendChild(input);
    label.appendChild(document.createTextNode(shuffledRepQ2[i].text));
    
    // Ajout de l'étiquette à la div
    divInput2.appendChild(label);
    divInput2.appendChild(document.createElement("br"));
}

// ajout des propositions de réponse de la 3e question sous forme de checkbox 
// Récupération de la div contenant les inputs
let divInput3 = document.getElementById('question3');
// Boucle pour créer un input par proposition de réponse
for (let i = 0; i < shuffledRepQ3.length; i++) {
    // Création de l'input
    const input = document.createElement('input');
    
    // Ajout de l'attribut "type" de type "checkbox"
    input.setAttribute('type', 'checkbox');
    
    // Ajout de la valeur de la proposition de réponse
    input.value = shuffledRepQ3[i].text;
    
    // Création de l'étiquette pour l'input
    const label = document.createElement('label');
    label.appendChild(input);
    label.appendChild(document.createTextNode(shuffledRepQ3[i].text));
    
    // Ajout de l'étiquette à la div
    divInput3.appendChild(label);
    divInput3.appendChild(document.createElement("br"));
}
// ajout des propositions de réponse de la 4e question sous forme de checkbox 
// Récupération de la div contenant les inputs
let divInput4 = document.getElementById('question4');
// Boucle pour créer un input par proposition de réponse
for (let i = 0; i < shuffledRepQ4.length; i++) {
    // Création de l'input
    const input = document.createElement('input');
    
    // Ajout de l'attribut "type" de type "checkbox"
    input.setAttribute('type', 'checkbox');
    
    // Ajout de la valeur de la proposition de réponse
    input.value = shuffledRepQ4[i].text;
    
    // Création de l'étiquette pour l'input
    const label = document.createElement('label');
    label.appendChild(input);
    label.appendChild(document.createTextNode(shuffledRepQ4[i].text));
    
    // Ajout de l'étiquette à la div
    divInput4.appendChild(label);
    divInput4.appendChild(document.createElement("br"));
}

// ajout des propositions de réponse de la 5e question sous forme de checkbox 
// Récupération de la div contenant les inputs
let divInput5 = document.getElementById('question5');
// Boucle pour créer un input par proposition de réponse
for (let i = 0; i < shuffledRepQ5.length; i++) {
    // Création de l'input
    const input = document.createElement('input');
    
    // Ajout de l'attribut "type" de type "checkbox"
    input.setAttribute('type', 'checkbox');
    
    // Ajout de la valeur de la proposition de réponse
    input.value = shuffledRepQ5[i].text;
    
    // Création de l'étiquette pour l'input
    const label = document.createElement('label');
    label.appendChild(input);
    label.appendChild(document.createTextNode(shuffledRepQ5[i].text));
    
    // Ajout de l'étiquette à la div
    divInput5.appendChild(label);
    divInput5.appendChild(document.createElement("br"));
}