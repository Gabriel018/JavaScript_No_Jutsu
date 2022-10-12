
const grid = Array.from(document.querySelector(".grid")?.children);
const estilo_btn = document.querySelectorAll(".estilo")
const Btn = document.querySelector(".card");
const juju = document.querySelector(".jutsu");
const modal = document.getElementById("mymodal");

const imgs = document.getElementById("img")
const img  = document.querySelectorAll("#img img")

let = dmx = 0

const img_info = document.querySelector(".img_info")
let modalActive = false; 
const clicados = [];

const fire = ['snake', 'dragon', 'rabbit','tiger']

function carrosel(){
   dmx++
   if(dmx > img.length -1){
   }
   imgs.style.transform  = `translateX(${-dmx * 110}px)`
}
setInterval(carrosel,400)


function mostrar_img(){
  img_info.style.display = "block"

}
function fechar_img(){
   img_info.style.display = "none"
}

function btn_estilo(){
const audio1 = new Audio('img/Jutsu-Style.mp3')
audio1.play()
}
console.log(clicados)
const mostrar = async (clicked, ev) => {
   carrosel()
   if (modalActive) return;
   const audio = new Audio('img/itachi_Jutsu.mp3');

   ev.classList.add("active");
   console.log(clicked)

   clicados.push(clicked)
   if (JSON.stringify(clicados) == JSON.stringify(fire)) {
      modalActive = true;
      modal.style.display = "block";

      clicados.length = 0;
      await audio.play();
      setTimeout(function () {
         modal.style.display = "none";
         modalActive = false;
         grid.forEach(card => {
            if (card.classList.value.includes("active")) {
               card.classList.remove("active");
            };
         });
         console.log("time")
      }, 3000);
   };
   console.log(clicados);
};