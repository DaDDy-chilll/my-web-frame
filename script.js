const menuIcon = document.querySelector('.menuicon');
const menuList = document.querySelector('.menulist');
menuIcon.addEventListener('click',()=>{
    console.log(menuList.className);
    // menuList.style.height='340px'
    if(menuList.className !== 'menulist active'){
        menuList.classList.add('active');
        menuList.style.height='340px'
    }else{
        menuList.classList.remove('active');
        menuList.style.height='0px'
    }
})