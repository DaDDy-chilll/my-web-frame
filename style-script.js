const lines = document.querySelectorAll('.line');
const menuBtn = document.querySelector('.menubtn');


function menuActive(){
    for (let i = 0; i < lines.length; i++) {
        const e = lines[i];
        e.classList.toggle(`lineactive${i+1}`)
        
    }
}

menuBtn.addEventListener('click',menuActive)