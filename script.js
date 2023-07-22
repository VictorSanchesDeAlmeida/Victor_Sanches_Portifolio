  
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
  const projetosEscondido = document.getElementById('escondido');

  function toggle(){
    btnMostrarMais.classList.toggle('active');
    btnMostrarMenos.classList.toggle('active');
    projetosEscondido.classList.toggle('desactive');
  }

  btnMostrarMais.addEventListener('click', toggle);
  btnMostrarMenos.addEventListener('click', toggle);

  //--------------------------------------------------------------------


  //copiar redes sociais