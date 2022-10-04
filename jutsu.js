
const btn = document.querySelectorAll(".card")
const juju = document.querySelector(".jutsu")
const modal = document.getElementById("mymodal")

const clicados = []

const fire = ['Dog','Galo','Porco']

console.log(clicados)
function mostrar(clicked){
   
   var audio = new Audio('img/itachi_Jutsu.mp3')
   console.log(clicked)
 
   clicados.push(clicked) 
   if(JSON.stringify(clicados)==JSON.stringify(fire)){ 
    audio.play()  
    modal.style.display="block"
    setInterval(function(){
    modal.style.display="none"  
    },3000)
   }
   console.log(clicados)
   
    }

    
   