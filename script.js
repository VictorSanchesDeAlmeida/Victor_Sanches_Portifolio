  
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

  const btnPortifolio = document.getElementById('btnPortifolio');
  const btnPortifolio2 = document.getElementById('esconder_portifolio');

  function tugglePurtfolio(){
    const portifolio1 = document.getElementById('portifolio_exibir1');
    const portifolio2 = document.getElementById('portifolio_exibir2');
    const portifolio3 = document.getElementById('portifolio_exibir3');
    portifolio1.classList.toggle('card');
    portifolio2.classList.toggle('card');
    portifolio3.classList.toggle('card');

    const troca = document.getElementById('esconder_portifolio');
    troca.classList.toggle('active_btn');

    const troca1 =document.getElementById('btnPortifolio');
    troca1.classList.toggle('active_btn');

  }
  
  btnPortifolio.addEventListener('click', tugglePurtfolio);
  btnPortifolio2.addEventListener('click', tugglePurtfolio);
  
  //--------------------------------------------------------------------


  //copiar redes sociais