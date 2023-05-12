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

console.log(shuffledRepQ1);
console.log(shuffledRepQ5);



  
        // ajout des propositions de réponse de la 1er question sous forme de checkbox 
        //let input1 = document.querySelectorAll('#q1');
        // input1.forEach((input1, index) => {
        //     input1.textContent = shuffledRepQ1[index].text;
        //     input1.value = shuffledRepQ1[index].bonneRep;
        // });