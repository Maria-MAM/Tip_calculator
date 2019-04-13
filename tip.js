let input = document.querySelector('input');
let valCalitate = document.querySelector('#dropQ');
let valBacsis = document.getElementById('val-bacsis');
let valTotala = document.getElementById('val-totala');
let eroare = document.getElementById('eroare');
let procentBacsis=document.querySelector('#procent-bacsis');
let calitateProcentBacsis = [
  {
    calitate: 'default',
    bacsis: 0
  },
 
  {
    calitate: 'mediu',
    bacsis: 5
  },
  {
    calitate: 'prost',
    bacsis: 0
  },
  {
    calitate: 'execrabil',
    bacsis: -5
  },
  {
    calitate: 'bun',
    bacsis: 10
  }
]

function onlyNumber() {
  if (isNaN(input.value)) {
    eroare.innerHTML = "Trebuie sa introduceti doar cifre!"
    eroare.style.color = 'red';
    input.style.borderColor = 'red';
  }
  else {
  eroare.innerHTML = "";
    input.style.borderColor = 'grey';
  }
}

input.addEventListener('keyup', onlyNumber);

function calcul() {
  let valCalitateServiciu = valCalitate.options[valCalitate.selectedIndex].value; 
for (let i = 0; i < calitateProcentBacsis.length; i++) {
  if ((valCalitateServiciu == calitateProcentBacsis[i].calitate) && (!isNaN(input.value))) {
    valBacsis.innerHTML = parseFloat(input.value * (calitateProcentBacsis[i].bacsis / 100)).toFixed(2);
    valTotala.innerHTML = parseFloat((input.value * (calitateProcentBacsis[i].bacsis / 100)) + parseFloat(input.value)).toFixed(2);
    procentBacsis.innerHTML = 'procent bacsis: ' + calitateProcentBacsis[i].bacsis + '%';
    procentBacsis.style.color = 'green';
    } else
    if (isNaN(input.value)) {
      valBacsis.innerHTML = "Valoare introdusa gresita!";
      valBacsis.style.color = '#FFB5B5';
      valTotala.innerHTML = "Valoare introdusa gresita!";
      valTotala.style.color = '#FFB5B5';
      procentBacsis.innerHTML = ''
    } 
  }
}

valCalitate.addEventListener('input', calcul);
