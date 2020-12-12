const navSlide=()=>{
    const burger=document.querySelector('nav .menu')
    const nav=document.querySelector('nav ul');

     burger.addEventListener('click', ()=>{
         nav.classList.toggle("nav-active")
     })


}
navSlide();