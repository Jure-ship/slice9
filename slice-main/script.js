window.addEventListener("scroll", function() {
    const distance = window.scrollY;
    
    document.querySelector(
      ".box11"
    ).style.transform = `translateY(${distance * 1}px)`;
    setTimeout(() => {
      document.querySelector("#sec2").classList.add(".cont1");
    }, 400);
  });


  const mainMenu=document.querySelector('.menu-btn');
  const openMenu=document.querySelector('.main_menu');

  const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;

  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
    
  }
});


const links = document.querySelectorAll(".main_menu li");

mainMenu.addEventListener('click', ()=> {
  openMenu.classList.toggle('open1');
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});