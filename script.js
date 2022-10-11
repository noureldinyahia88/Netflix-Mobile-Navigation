const openbtn = document.querySelector('.open-btn') 
const closebtn = document.querySelector('.close-btn')
const nav = document.querySelectorAll('.nav')

openbtn.addEventListener('click',()=>{
    nav.forEach(e=>e.classList.add('visible'))
})

closebtn.addEventListener('click',()=>{
    nav.forEach(e=>e.classList.remove('visible'))
})