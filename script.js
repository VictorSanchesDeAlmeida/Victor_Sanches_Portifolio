  
  const btnMenu = document.getElementById('menu');

  function tuggleMenu(){
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
  }
  
  btnMenu.addEventListener('click', tuggleMenu);
  
  
  //Digitando

  
  function ativaLetra(elemento) {
    const arrTexto = elemento.innerHTML.split('');
      elemento.innerHTML = '';
      arrTexto.forEach((letra, i)=>{
          setTimeout(()=>{
              elemento.innerHTML += letra;
          }, 100 * i);
      });


  }

  const titulo = document.querySelector('.digitar');
  ativaLetra(titulo);

  //portifolio
  

  const btnMostrarMais = document.getElementById('mostrar');
  const btnMostrarMenos = document.getElementById('esconder');
  const projetosEscondido1 = document.getElementById('escondido1');
  const projetosEscondido2 = document.getElementById('escondido2');
  const projetosEscondido3 = document.getElementById('escondido3');

  function toggle(){
    btnMostrarMais.classList.toggle('active');
    btnMostrarMenos.classList.toggle('active');
    projetosEscondido1.classList.toggle('desactive');
    projetosEscondido2.classList.toggle('desactive');
    projetosEscondido3.classList.toggle('desactive');
  }

  btnMostrarMais.addEventListener('click', toggle);
  btnMostrarMenos.addEventListener('click', toggle);

  //--------------------------------------------------------------------


  //copiar redes sociais


  const btnTheme = document.getElementById('Thema');
  const discTheme = document.getElementById('selector');

  function slider_theme(){
      discTheme.classList.toggle('selector')
      discTheme.classList.toggle('selector-light');
    
  }

  btnTheme.addEventListener('click', slider_theme);