const inpUtilisateur = document.querySelector('.form-groupe:nth-child(1) input');
const inpMail = document.querySelector('.form-groupe:nth-child(2) input');
const inpMdp = document.querySelector('.form-groupe:nth-child(3) input');
const inpConfirme = document.querySelector('.form-groupe:nth-child(4) input');
const allImg = document.querySelectorAll('.icone-verif');
const allSpan = document.querySelectorAll('span');
const allLigne = document.querySelectorAll('.ligne div');


//user name

inpUtilisateur.addEventListener('input', (e) => {

    if(e.target.value.lenght >=3 ) {
        allImg[0].style.display = "inline";
        allImg[0].src ="ressources/check.svg"
        allSpan[0].style.display = "none"

    } else {
        allImg[0].style.display = "inline";
        allImg[0].src ="ressources/error.svg"
        allSpan[0].style.display = "inline"

    }



});

// mail 

// inpMail.addEventListener('input', (e) => {

//     const regexEmail = /\S+@\S+\.\S+/;
    
//     if(e.target.value.search(regexEmail)  >= 0){

//         allImg[1].style.display = "inline";
//         allImg[1].src = "ressources/check.svg";
//         allSpan[1].style.display = "none";

//     } else  {

//         allImg[1].style.display = "inline";
//         allImg[1].src = "ressources/error.svg";
//         allSpan[1].style.display = "inline";

//     }

// })

inpMail.addEventListener('input', (e) => {

    const regexEmail = /\S+@\S+\.\S+/;
    
    if(e.target.value.search(regexEmail) === 0){

        allImg[1].style.display = "inline";
        allImg[1].src = "ressources/check.svg";
        allSpan[1].style.display = "none";

    } else if(e.target.value.search(regexEmail) === -1) {

        allImg[1].style.display = "inline";
        allImg[1].src = "ressources/error.svg";
        allSpan[1].style.display = "inline";

    }

})


// password 
let valeurInp;
const specialCar = /[^a-zA-Z0-9]/;
const alphabet = /[a-z]/i;
const chiffres = /[0-9]/;

let objValidation = {
    symbole : 0,
    lettre : 0,
    chiffre : 0
}


inpMdp.addEventListener('input', (e) => {

      valeurInp = e.target.value;

    if (valeurInp.search(specialCar) !== -1) {
        objValidation.symbole = 1 ;
    }
    if (valeurInp.search(alphabet) !== -1) {
        objValidation.lettre = 1 ;
    }
    if (valeurInp.search(chiffres) !== -1) {
        objValidation.chiffre = 1 ;
    }

    console.log(objValidation)


   if(e.inputType = 'deleteContentBackward'){
        if(valeurInp.search(specialCar) === -1){
            objValidation.symbole = 0;
        }
        if(valeurInp.search(alphabet) === -1){
            objValidation.lettre = 0;
        }
        if(valeurInp.search(chiffres) === -1){
            objValidation.chiffre = 0;
        }
    } 

    console.log(objValidation)







})





