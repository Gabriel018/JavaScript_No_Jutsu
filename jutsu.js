
const grid = Array.from(document.querySelector(".grid")?.children);
const estilo_btn = document.querySelector(".estilo")
const juju = document.querySelector(".jutsu");
const modal = document.getElementById("mymodal");
const modal2 = document.getElementById("mymodal2");
const carrosel_jujtsu = document.querySelector(".carrocel")
const imgs = document.getElementById("img")
const img  = document.querySelectorAll("#img img")

let = dmx = 0

let modal_jutus  = false

const img_info = document.querySelector(".img_info")
const img_info2 = document.querySelector(".img_info2")

let modalActive = false; 
const clicados = [];

const fire = ['snake', 'dragon', 'rabbit','tiger']

const light = ['boar','sheep','snake','horse','dragon']

function carrosel_jutsu(){
   dmx++
   if(dmx > img.length -1){
      dmx = 0
   }
   imgs.style.transform  = `translateX(${-dmx * 190}px)`
}
setInterval(carrosel_jutsu,200)


//Mostra  info jutsu estilo fogo
function mostrar_img(){
  img_info.style.display = "block"

}
function fechar_img(){
   img_info.style.display = "none"
}

//Mostra  info jutsu estilo Raio
function mostrar_img2(){
   img_info2.style.display = "block"
 
 }
 function fechar_img2(){
    img_info2.style.display = "none"
 }


//mostra invocaçao

function mostrar_img3(){
   
}

console.log(clicados)
const mostrar = async (clicked, ev) => {
   if (modalActive) return;
   ev.classList.add("active");
   console.log(clicked)
   clicados.push(clicked)

   if( JSON.stringify(clicados) == JSON.stringify(light)){
      const audio = new Audio('img/Chidori.mp3')
      modal2.style.display = "block";
      audio.play()

      setTimeout(function(){
      modal2.style.display = "none";
      grid.forEach(card => {
         if (card.classList.value.includes("active")) {
            card.classList.remove("active");
         };
      });
      },12000)

   }

   if (JSON.stringify(clicados) == JSON.stringify(fire)) {
      carrosel_jujtsu.style.display = "block"
      const audio = new Audio('img/Fire_jutsu.mp3');
      audio.play()

      setTimeout(function(){
      
      if( carrosel_jujtsu.style.display = "none"){
         modalActive = true;
         modal.style.display = "block";
   
         setTimeout(function () {
   
            carrosel_jujtsu.style.display = "none"
            modal.style.display = "none";
            modalActive = false;
            audio.pause()
            grid.forEach(card => {
               if (card.classList.value.includes("active")) {
                  card.classList.remove("active");
               };
            });
            console.log("time")
         }, 7000);
          
      }   

      },1100)
      clicados.length = 0;

   };

};
