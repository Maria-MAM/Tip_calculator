let input = document.querySelector('input');
let valCalitate = document.querySelector('#dropQ');
let valBacsis = document.getElementById('val-bacsis');
let valTotala = document.getElementById('val-totala');
let eroare = document.getElementById('eroare');

// function onlyNumber(event){
//   if ((event.keyCode<96 || event.keyCode>105) && 
//       (event.keyCode<48 || event.keyCode>57) && 
//       (event.keyCode!==110) && (event.keyCode!==190) && 
//      (event.keyCode!==8) && (event.keyCode!==9)) {
//     eroare.innerHTML="Trebuie sa introduceti doar cifre!"
//     eroare.style.color='red';
//     input.style.borderColor='red';
//   }
//   else {eroare.innerHTML="";
//         input.style.borderColor='grey';}
// }

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

function calcul(event) {
  let valCalitateServiciu = valCalitate.options[valCalitate.selectedIndex].value;

  if (valCalitateServiciu == "bun" && !isNaN(input.value)) {
    valBacsis.innerHTML = Math.round((input.value / 10) * 100) / 100;
    valTotala.innerHTML = Math.round((parseFloat(input.value / 10) + parseFloat(input.value)) * 100) / 100;
  } else
    if (valCalitateServiciu == "mediu" && !isNaN(input.value)) {
      valBacsis.innerHTML = Math.round((input.value / 20) * 100) / 100;
      valTotala.innerHTML = Math.round((parseFloat(input.value / 20) + parseFloat(input.value)) * 100) / 100;
    } else
      if (((valCalitateServiciu == "prost") || (valCalitateServiciu == "default")) && !isNaN(input.value)) {
        valBacsis.innerHTML = "0.00";
        valTotala.innerHTML = Math.round((input.value) * 100) / 100;
      } else {
        valBacsis.innerHTML = "Valoare introdusa gresita!";
        valBacsis.style.color = '#FFB5B5';
        valTotala.innerHTML = "Valoare introdusa gresita!";
        valTotala.style.color = '#FFB5B5';
      }
}

valCalitate.addEventListener('input', calcul);
