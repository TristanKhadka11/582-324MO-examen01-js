// Veuillez écrire votre JavaScript ici

const image1 = document.querySelectorAll('img')
image1.src = ``;







function afficherBouton() {
    const bouton = document.getElementById("bouton");
    bouton.className = 'afficher'

  
  }
  
  const afficher = document.getElementById('choix')
  afficher.addEventListener("click", afficherBouton);



  function validerChoix() {
    const bouton2 = document.getElementById("bouton");
    bouton2.className = 'hidden'


  }
  
  const bouton1 = document.getElementById('bouton')
  bouton1.addEventListener("click", validerChoix);




