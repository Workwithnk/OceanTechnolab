console.log("this is nk");
const togglerMenu = document.querySelector('.togglerMenu');

const toggleMenu = document.querySelector('.toggleMenu');
toggleMenu.addEventListener('click',()=>{
    if(togglerMenu.style.display === 'flex'){
        togglerMenu.style.display = 'none'
    }
    else{
        togglerMenu.style.display = 'flex'
    }
});
togglerMenu.addEventListener('click',()=>{
    togglerMenu.style.display = 'none';
});

const togglerA = document.querySelectorAll('.togglerA');
 togglerA.addEventListener('click',()=>{
     togglerMenu.style.display = 'none';
 });

 const contactBtn = document.querySelector('.contactBtn');
 contactBtn.addEventListener('click',(e)=>{
       e.preventDefault();
 });