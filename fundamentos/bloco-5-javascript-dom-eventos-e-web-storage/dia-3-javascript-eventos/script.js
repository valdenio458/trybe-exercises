function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  // Exercicio 1:
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;
  let listaDias = document.getElementById('days');
  for (let index in dezDaysList){
    let elementLi = document.createElement('li');
    elementLi.innerHTML = dezDaysList[index];
    elementLi.classList.add('day');
    listaDias.appendChild(elementLi);

    if (dezDaysList[index] == 24 || dezDaysList[index] == 25 || dezDaysList[index] == 31){
    elementLi.classList.add('holiday')
}
    if(dezDaysList[index] == 4 || dezDaysList[index] == 11 || dezDaysList[index] == 18 || dezDaysList[index] == 25){
      elementLi.classList.add('friday') 
    }
  }
  // Exercicio 2:
  function holidays(button){
    let buttonBox = document.querySelector('.buttons-container');
    let newButton = document.createElement("button");
    newButton.id = 'btn-holiday';
    buttonBox.appendChild(newButton);
    newButton.innerHTML = button;
  }
holidays('Feriados');

 // Exercicio 3:
 let buttonFeriados = document.getElementById('btn-holiday');
 let getFeriados = document.getElementsByClassName('holiday');
 let corAtual = "rgb(238,238,238)";
 let novaCor = 'yellow';
 buttonFeriados.addEventListener('click', mudaCor);
 function mudaCor(){
   for(let i = 0; i < getFeriados.length; i += 1){
     if(getFeriados[i].style.backgroundColor === novaCor){
       getFeriados[i].style.backgroundColor = corAtual;
     }else{
      getFeriados[i].style.backgroundColor = novaCor;
     }
    
   }
   
 }
 // Exercício 4:
 function friday(day){
   let fridayBox = document.querySelector(".buttons-container");
   let buttonFriday = document.createElement('button');
   buttonFriday.id = "btn-friday";
   fridayBox.appendChild(buttonFriday);
   buttonFriday.innerHTML = day;
   
 }
 friday("Sexta-feira");

 // Exercício 5:
 let buttonFridays = document.getElementById('btn-friday');
 let getFridays = document.getElementsByClassName('friday');
 //let corFiday = "rgb(238,238,238)";
 //let novaCorFriday = 'yellow';
 buttonFridays.addEventListener('click', mudaCorFriday);

 function mudaCorFriday(){
  for(let i = 0; i < getFridays.length; i += 1){
    if(getFridays[i].style.backgroundColor === novaCor){
      getFridays[i].style.backgroundColor = corAtual;
    }else{
     getFridays[i].style.backgroundColor = novaCor;
    }
   
  }

 }

  