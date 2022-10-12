
const grid = Array.from(document.querySelector(".grid")?.children);
const estilo_btn = document.querySelector(".estilo")
const juju = document.querySelector(".jutsu");
const modal = document.getElementById("mymodal");
const carrosel_jujtsu = document.querySelector(".carrocel")
const imgs = document.getElementById("img")
const img  = document.querySelectorAll("#img img")

let = dmx = 0

let modal_jutus  = false

const img_info = document.querySelector(".img_info")
let modalActive = false; 
const clicados = [];

const fire = ['snake', 'dragon', 'rabbit','tiger']


function carrosel_jutsu(){
   dmx++
   if(dmx > img.length -1){
      dmx = 0
   }
   imgs.style.transform  = `translateX(${-dmx * 110}px)`
}
setInterval(carrosel_jutsu,300)


function mostrar_img(){
  img_info.style.display = "block"

}
function fechar_img(){
   img_info.style.display = "none"
}


console.log(clicados)
const mostrar = async (clicked, ev) => {
   if (modalActive) return;
   const audio = new Audio('img/itachi_Jutsu.mp3');
   ev.classList.add("active");
   console.log(clicked)
   clicados.push(clicked)
   if (JSON.stringify(clicados) == JSON.stringify(fire)) {
      carrosel_jujtsu.style.display = "block"
      

      setTimeout(function(){
      
      if( carrosel_jujtsu.style.display = "none"){
         modalActive = true;
         modal.style.display = "block";
         audio.play()
          
      }   
         
      modalActive = true;
      modal.style.display = "block";
      audio.play()
       
      setTimeout(function () {
         carrosel_jujtsu.style.display = "none"
         modal.style.display = "none";
         modalActive = false;
         grid.forEach(card => {
            if (card.classList.value.includes("active")) {
               card.classList.remove("active");
            };
         });
         console.log("time")
      }, 1000);
      },1100)

      clicados.length = 0;
      
   };
   console.log(clicados);
};
