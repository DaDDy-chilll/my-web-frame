const menuicon = document.querySelector('.menuicon');
const lines = document.querySelectorAll('.line');
const menulist = document.querySelector('.menulist');

menuicon.addEventListener('click',()=>{
    console.log('hi');
    menulist.classList.toggle('menulistactive');
    for (let i = 0; i < lines.length; i++) {
        const element = lines[i];
        element.classList.toggle(`line${i+1}active`)
    }
    
})