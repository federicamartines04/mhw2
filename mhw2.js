//NON usare 'var', USARE 'const' quando possibile, sennò 'let' se dobbiamo riassegnare una variabile
//meglio usare '' e non ""
//usare sempre === e !==, non == e !=

// Seleziona gli elementi necessari
const menuIcon = document.querySelector('.header_second_utilities_icone');
const sideMenu = document.querySelector('#side-menu');
const closeBtn = document.querySelector('#close-menu');

// Aggiungi un listener per l'icona del menu
menuIcon.addEventListener('click', function() {
  sideMenu.classList.add('show');
});

// Aggiungi un listener per il pulsante di chiusura
closeBtn.addEventListener('click', function() {
  sideMenu.classList.remove('show');
});


/*
//+
const plusButtons = document.querySelectorAll('.plus');
const extraContents = document.querySelectorAll('.extra-content');

for (let i = 0; i < plusButtons.length; i++) {
  plusButtons[i].addEventListener('click', function() {
    const extraContent = extraContents[i]; 
    
    if (extraContent.classList.contains('show')) {
      extraContent.classList.remove('show');
    } else {
      extraContent.classList.add('show');
    }
  });
}
*/




//cambia immagine myImage quando ci clicco sopra
const myImage = document.getElementById('myImage');

const alternativeImage = "https://assets.hermes.com/is/image/hermesedito/P_169_AH24_E_EDITOCONTENT_CHEVAL_2?fit=wrap%2C0&wid=1920"; //nuova immagine

let isOriginalImage = true;

myImage.addEventListener('click', function() {
  // Se l'immagine è quella originale, cambiamo con l'alternativa
  if (isOriginalImage) {
    myImage.src = alternativeImage;  // Cambia l'immagine
  } else {
    myImage.src = "https://assets.hermes.com/is/image/hermesedito/P_169_PE25_PS1_HOME?fit=wrap%2C0&wid=1920";  // Torna all'immagine originale
  }
  
  isOriginalImage = !isOriginalImage;
});




//conservare informazioni negli attributi data-*
const items = document.querySelectorAll('.item');

items.forEach(function(item) {
  const infoBox = item.querySelector('.info');

  item.addEventListener('mouseover', function() {
    const descrizione = item.dataset.descrizione;

    infoBox.textContent = descrizione;

    infoBox.style.display = 'block';
  });

  item.addEventListener('mouseout', function() {
    infoBox.style.display = 'none';
  });
});


