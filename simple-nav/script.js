const menuIcon = document.querySelector('.menuicon');
const menuList =  document.querySelector('.menulist');

menuIcon.addEventListener('click',()=>{
    menuList.classList.toggle('hide')
})