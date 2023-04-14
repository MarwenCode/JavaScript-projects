const form = document.querySelector(".form-quizz");
const reponses = ['c','a','b','a','c'];
const emojis = ['✔️','✨','👀','😭','👎'];
let tableauResultats =  [];
let verifTableau = [];
const titreResultat = document.querySelector('.resultats h2');
const textResultat = document.querySelector('.note');
const aideResultat = document.querySelector('.aide');
const touteslesQuestion = document.querySelectorAll('.question-block');


form.addEventListener("submit", (e) => {
    e.preventDefault();

    for(i= 1; i < 6; i++) {
        tableauResultats.push(document.querySelector(`input[name="q${i}"]:checked`).value)
    }

    console.log(tableauResultats);
    verifFunction(tableauResultats)
    tableauResultats = []


})

const verifFunction = (tableauResultats) => {

    for(let a = 1; a <6 ; a ++) {
        if(tableauResultats[a] === reponses[a]) {
            verifTableau.push(true)
        }else {
            verifTableau.push(false)
        }

    }

    console.log(verifTableau)
   verifTableau = []

}