document.addEventListener('DOMContentLoaded', function() {
  EventListeners();
  darkMode();
});

function darkMode(){

  const changeMode = window.matchMedia('(prefers-color-scheme: dark)');

  if(changeMode.matches){
    document.body.classList.add('dark-btn');
  }else{
    document.body.classList.remove('dark-btn');
  }


  changeMode.addEventListener('change', function(){
    if(changeMode.matches){
      document.body.classList.add('dark-btn');
    }else{
      document.body.classList.remove('dark-btn');
    }
  });

  const btnDark = document.querySelector('.dark-mode');

  btnDark.addEventListener('click', function(){
    document.body.classList.toggle('dark-btn');


  });
}

function EventListeners(){
  const mobileMenu = document.querySelector('.navegacion-mobil');

  mobileMenu.addEventListener('click', navegacionResponsive);
}


function navegacionResponsive(){
  const navegacion = document.querySelector('.navegation');

  navegacion.classList.toggle('mostrar');
}