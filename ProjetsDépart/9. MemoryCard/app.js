const cartes = document.querySelectorAll('.carte');

let carteRetournee = false;
let premiereCarte, secondeCarte;
let verouillage = false;

const retourneCarte = (event) => {
  let childNode = event.currentTarget.childNodes;
  if (verouillage === true) {
    return;
  }
  childNode[1].classList.toggle('active');

  if (!carteRetournee) {
    carteRetournee = true;
    premiereCarte = event.currentTarget; // use event.currentTarget instead of childNode
    return;
  }

  carteRetournee = false;
  secondeCarte = event.currentTarget; // use event.currentTarget instead of childNode

  console.log(event.currentTarget);

  correspondance();
};

// Event Listener
cartes.forEach(carte => {
  carte.addEventListener('click', retourneCarte);
});

// Correspondance
const correspondance = () => {
  if (premiereCarte.getAttribute('data-attr') === secondeCarte.getAttribute('data-attr')) {
    premiereCarte.removeEventListener('click', retourneCarte);
    secondeCarte.removeEventListener('click', retourneCarte);
  } else {
    verouillage = true;
    setTimeout(() => {
      premiereCarte.childNodes[1].classList.remove('active');
      secondeCarte.childNodes[1].classList.remove('active');
      verouillage = false;
    }, 1500);
  }
};



//display card in different ways 
function aleatoire(){
  cartes.forEach(card => {
      let randomPos = Math.floor(Math.random() * 12);
      card.style.order = randomPos;
  })
}
aleatoire();


