const menuIcon = document.querySelector('.menuicon');
const menuList = document.querySelector('.menulist');
const menuLine = document.querySelectorAll('.line');
menuIcon.addEventListener('click',()=>{
    // menuList.style.height='340px'
    if(menuList.className !== 'menulist active'){
        menuList.classList.add('active');
        menuList.style.height='340px'
        for (let i = 1; i < line.length; i++) {
            const element = line[i];
            element.classList.add(`lineactive${i}`)
        }
    }else{
        menuList.classList.remove('active');
        menuList.style.height='0px'
    }
})