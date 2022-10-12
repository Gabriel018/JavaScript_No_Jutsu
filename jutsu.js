
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
   imgs.style.transform  = `translateX(${-dmx * 190}px)`
}
setInterval(carrosel_jutsu,200)


function mostrar_img(){
  img_info.style.display = "block"

}
function fechar_img(){
   img_info.style.display = "none"
}


console.log(clicados)
const mostrar = async (clicked, ev) => {
   if (modalActive) return;
   const audio = new Audio('img/Fire_jutsu.mp3');
   ev.classList.add("active");
   console.log(clicked)
   clicados.push(clicked)
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
