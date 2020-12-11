// sombra NAV

let nav =  document.getElementById('nav')

  window.addEventListener("scroll", (event) => {
    if(window.pageYOffset > 710){
      nav.style.boxShadow = "0 2px 10px -1px rgba(87, 97, 100, 0.35)"
    }else{
      nav.style.boxShadow = "none"
    }
})


//Botão flutuante
let buttonFloat =  document.getElementById('botao-flutuante')
// const buttonLink = document.querySelectorAll('.scroll-botao-flutuante a[href^="#"]')
  window.addEventListener("scroll", (event) => {
    if(window.pageYOffset > 0){
      buttonFloat.classList.add('botao-flutuante')
    }else{
      buttonFloat.classList.remove('botao-flutuante')
    }
})


//SCROLL

const menuItems = document.querySelectorAll('.navbar-collapse a[href^="#"]')

menuItems.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick)
})

function getScrollTopByHref(element){
    const id = element.getAttribute('href')
    return to = document.querySelector(id).offsetTop
}

function scrollToIdOnClick(event){
    event.preventDefault()
    const to = getScrollTopByHref(event.target) - 50
    
    scrollToPosition(to)
}
function scrollToPosition(to){
    // window.scroll({
    //     top: to,
    //     behavior: "smooth"
    // })
    smoothScrollTo(0, to);
}


// Caso deseje suporte a browsers antigos / que não suportam scroll smooth nativo
/**
 * Smooth scroll animation
 * @param {int} endX: destination x coordinate
 * @param {int) endY: destination y coordinate
    * @param {int} duration: animation duration in ms
    */
   function smoothScrollTo(endX, endY, duration) {
     const startX = window.scrollX || window.pageXOffset;
     const startY = window.scrollY || window.pageYOffset;
     const distanceX = endX - startX;
     const distanceY = endY - startY;
     const startTime = new Date().getTime();
   
     duration = typeof duration !== 'undefined' ? duration : 400;
   
     // Easing function
     const easeInOutQuart = (time, from, distance, duration) => {
       if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
       return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
     };
   
     const timer = setInterval(() => {
       const time = new Date().getTime() - startTime;
       const newX = easeInOutQuart(time, startX, distanceX, duration);
       const newY = easeInOutQuart(time, startY, distanceY, duration);
       if (time >= duration) {
         clearInterval(timer);
       }
       window.scroll(newX, newY);
     }, 1000 / 60); // 60 fps
   };