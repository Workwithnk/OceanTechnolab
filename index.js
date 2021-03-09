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

const togglerLi = document.querySelectorAll('.togglerMenu ul li');
togglerLi.addEventListener('click',()=>{
    togglerMenu.style.display = 'none';
});