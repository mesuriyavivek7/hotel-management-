let navbar=document.querySelector('.header .navbar');
document.querySelector('#menu-btn').onclick = () =>{
	navbar.classList.toggle('active');
}
window.onscoll = () =>{
	navbar.classList.remove('active');
}

//home swiper js script
 var swiper = new Swiper(".home-slider", {
 	    loop:true,
 	    effect: "coverflow",
        grabCursor: true,
         coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
 });