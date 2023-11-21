'use strick';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnclosemodal = document.querySelector('.close-modal');
const btnopenmodal = document.querySelectorAll('.show-modal');

const Openmodel = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closemodel = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

// Open the "I'm a modal window 😍"
for(let i=0; i<btnopenmodal.length; i++)
btnopenmodal[i].addEventListener('click',Openmodel);
// close the "I'm a modal window 😍"
btnclosemodal.addEventListener('click',closemodel);

document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if(e.key === 'Escape'){
    if(!modal.classList.contains('hidden')){
        closemodel();
    }
  }
})