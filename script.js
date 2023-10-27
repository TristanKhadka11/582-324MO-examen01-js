// Veuillez écrire votre JavaScript ici
const choixgeneral = document.getElementById('choix');


const img = document.querySelectorAll('img');
img.src = '';
img.alt = '';

const choix0 = document.getElementById('choix0');
const image2 = document.createElement('img');
image2.src = `./ne_pas_modifier/images/cyberpunk.jpg`;
choix0.appendChild(image2);

const choix1 = document.getElementById('choix1');
const image3 = document.createElement('img');
image3.src = `./ne_pas_modifier/images/starfield.jpg`;
choix1.appendChild(image3);

const choix2 = document.getElementById('choix2');
const image4 = document.createElement('img');
image4.src = `./ne_pas_modifier/images/baldurs-gate.jpg`;
choix2.appendChild(image4);

function afficherBouton1() {
    const bouton = document.getElementById("bouton");
    bouton.className = 'afficher';
    let rep = false;
}

const afficher1 = document.getElementById('choix0');
afficher1.addEventListener("click", afficherBouton1);

function afficherBouton2() {
    const bouton = document.getElementById("bouton");
    bouton.className = 'afficher';
    let rep = false;
    console.log(rep);
}

const afficher2 = document.getElementById('choix1');
afficher2.addEventListener("click", afficherBouton2);

function afficherBouton3() {
    const bouton = document.getElementById("bouton");
    bouton.className = 'afficher';

    let rep = true;
    console.log(rep);
}

const afficher3 = document.getElementById('choix2');
afficher3.addEventListener("click", afficherBouton3);

function validerChoix() {
    const bouton2 = document.getElementById("bouton");
    bouton2.className = 'hidden';

    if (rep = true) {
        const texte = document.getElementById("reponse");
        texte.className = 'afficher';

        const nouvelElementText = document.createElement("p");
        nouvelElementText.textContent = "C'est la bonne réponse. Bravo!";
        texte.appendChild(nouvelElementText);
        document.body.style.backgroundColor = 'green';

    } else {

        const texte = document.getElementById("reponse");
        texte.className = 'afficher';

        const nouvelElementText2 = document.createElement("p");
        nouvelElementText2.textContent = "Hélas, ce n'est pas la bonne réponse.";
        texte.appendChild(nouvelElementText2);
        document.body.style.backgroundColor = 'red';
    }

}

const bouton1 = document.getElementById('bouton');
bouton1.addEventListener("click", validerChoix);