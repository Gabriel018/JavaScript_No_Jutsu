
const grid = Array.from(document.querySelector(".grid")?.children);
const btn = document.querySelectorAll(".card");
const juju = document.querySelector(".jutsu");
const modal = document.getElementById("mymodal");

const clicados = []

const fire = ['Dog', 'Galo', 'Porco']

console.log(clicados)
const mostrar = (clicked, ev) => {

   const audio = new Audio('img/itachi_Jutsu.mp3');

   grid.forEach(card=> {
      if (card.classList.value.includes("active")) {
         card.classList.remove("active");
      };
   });
   ev.classList.add("active");
   console.log(clicked, ev)

   clicados.push(clicked)
   if (JSON.stringify(clicados) == JSON.stringify(fire)) {
      audio.play()
      modal.style.display = "block"
      setInterval(function () {
         modal.style.display = "none"
      }, 3000)
   }
   console.log(clicados)

};