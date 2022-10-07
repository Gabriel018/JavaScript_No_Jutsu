
const grid = Array.from(document.querySelector(".grid")?.children);
const estilo_btn = document.querySelectorAll(".estilo")
const Btn = document.querySelector(".card");
const juju = document.querySelector(".jutsu");
const modal = document.getElementById("mymodal");
let modalActive = false; 
const clicados = [];

const fire = ['Dog', 'Galo', 'Porco']


function btn_estilo(){
grid.forEach(card =>{(console.log(card))})


}
console.log(clicados)
const mostrar = async (clicked, ev) => {
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