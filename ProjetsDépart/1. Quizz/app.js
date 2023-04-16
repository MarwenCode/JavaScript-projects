const form = document.querySelector(".form-quizz");
const reponses = ['c','a','b','a','c'];
const emojis = ['✔️','✨','👀','😭','👎'];
let tableauResultats =  [];
let verifTableau = [];
const titreResultat = document.querySelector('.resultats h2');
const noteResultat = document.querySelector('.note');
const aideResultat = document.querySelector('.aide');
const toutesLesQuestions = document.querySelectorAll('.question-block');


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

    for(let a = 0; a <5 ; a ++) {
        if(tableauResultats[a] === reponses[a]) {
            verifTableau.push(true)
        }else {
            verifTableau.push(false)
        }

    }

    console.log(verifTableau)
    afficherResultats(verifTableau)
    couleursFunction(verifTableau)
   verifTableau = []

}

const afficherResultats = (tabCheck) => {
    const nbrDeFautes = tabCheck.filter(element => element !== true).length;
    console.log(nbrDeFautes)

      switch(nbrDeFautes) {

        case 0:
            titreResultat.innerText = `✔️ Bravo, c'est un sans faute ! ✔️`
            aideResultat.innerText = ''
            noteResultat.innerText = '5/5'
            break;
        case 1:
            titreResultat.innerText = `✨ Vous y êtes presque ! ✨`
            aideResultat.innerText = 'Retentez une autre réponse dans la case rouge, puis re-validez !'
            noteResultat.innerText = '4/5'
            break;
        case 2:
            titreResultat.innerText = `✨ Encore un effort ... 👀`
            aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
            noteResultat.innerText = '3/5'
            break;
        case 3:
            titreResultat.innerText = `👀 Il reste quelques erreurs. 😭`
            aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
            noteResultat.innerText = '2/5'
            break;
        case 4:
            titreResultat.innerText = `😭 Peux mieux faire ! 😭`
            aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
            noteResultat.innerText = '1/5'
            break;
        case 5:
            titreResultat.innerText = `👎 Peux mieux faire ! 👎`
            aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
            noteResultat.innerText = '0/5'
        break;

        default:
            'Wops, cas innatendu.';

    }
}


const couleursFunction = (verifTab) => {

    for(let i = 0; i < verifTab.length; i++) {

        if(verifTab[i] === true){
            toutesLesQuestions[i].style.background = 'lightgreen';
        } else {
            toutesLesQuestions[i].style.background = '#ffb8b8';
            toutesLesQuestions[i].classList.add('echec');
            

        //   setTimeout(() => {
        //     toutesLesQuestions[i].classList.remove('echec')
        //   },500)




        }



    }

}

toutesLesQuestions.forEach(item => {
    item.addEventListener('click', () => {
        item.style.background = "white";
    })
})