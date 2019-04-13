let input=document.querySelector('input');
let valCalitate = document.querySelector('#dropQ');


function onlyNo(event){
  if ((event.keyCode<96 || event.keyCode>105) && 
      (event.keyCode<48 || event.keyCode>57) && 
      (event.keyCode!==110) && (event.keyCode!==190) && 
     (event.keyCode!==8)){
    document.getElementById('eroare').innerHTML="Trebuie sa introduceti doar cifre!"
    document.getElementById('eroare').style.color='red';
    document.querySelector('input').style.borderColor='red';
  }
  else {document.getElementById('eroare').innerHTML="";
        document.querySelector('input').style.borderColor='grey';}
}

input.addEventListener('keydown', onlyNo);



function calcul(event){
  if (dropQ.options[dropQ.selectedIndex].value == "bun" ) {
    document.getElementById('val-bacsis').innerHTML= Math.round((input.value / 10)*100)/100;
    document.getElementById('val-totala').innerHTML = Math.round((parseFloat(input.value / 10) + parseFloat(input.value))*100)/100;
  } else 
      if (dropQ.options[dropQ.selectedIndex].value == "mediu" ) {
         document.getElementById('val-bacsis').innerHTML= Math.round((input.value / 20)*100)/100;
         document.getElementById('val-totala').innerHTML = Math.round((parseFloat(input.value / 20) + parseFloat(input.value))*100)/100;
  } else {
    document.getElementById('val-bacsis').innerHTML= "0.00";
    document.getElementById('val-totala').innerHTML = Math.round((input.value)*100)/100;
  }
}


dropQ.addEventListener('click', calcul);