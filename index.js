
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
togglerA.forEach((item)=>{
    item.addEventListener('click',()=>{
        togglerMenu.style.display = 'none';
    });   
})



