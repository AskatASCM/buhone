// Slider
$(document).ready(function () {
  $('.intro-slider').slick({
    dots: true,
    appendArrows: $('.intro-control .intro-arrows'),
    appendDots: $('.intro-control .intro-dots'),
    speed: 1000,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
  });
  $('.clients-slider').slick({
    slidesToShow: 4,
    infinite: false,
    dots: true,
    appendArrows: $('.clients-control .arrows'),
    appendDots: $('.clients-control .dots'),
    responsive: [{
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  })
  $('.review-slider').slick({
    slidesToShow: 1,
    infinite: false,
    dots: true,
    appendArrows: $('.review-control .arrows'),
    appendDots: $('.review-control .dots')
  })
});
// Slider



// ScrollTop btn
const scrollTopBtn = document.querySelector('.scroll-top');

function showBtn() {
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
      scrollTopBtn.classList.add('show');
    } else {
      scrollTopBtn.classList.remove('show');
    }
  })

}
showBtn()

scrollTopBtn.addEventListener('click', function ScrollTop() {
  if (window.pageYOffset > 0) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
  return
})


// ScrollTop btn

// FIXED NAV
const FixedNAv = document.querySelector('.fixed-nav');

function showNav() {
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 110) {
      FixedNAv.classList.add('fixed');
    } else if (window.pageYOffset == 0) {
      FixedNAv.classList.remove('fixed');
    }
  })
}
showNav();
// FIXED NAV

// BURGER-MENU
const openMenu = document.querySelector('.burger');
const mobileMenu = document.querySelector('.header-right');
const closeMenu = document.querySelector('.close-menu'); 


openMenu.addEventListener('click', () =>{
  mobileMenu.style.display = 'block';
  document.querySelector('body').classList.add('scroll-lock');
})
closeMenu.addEventListener('click', () =>{
  mobileMenu.style.display = 'none';
  document.querySelector('body').classList.remove('scroll-lock');
})
// BURGER-MENU

// cursor
const mouse = document.querySelector('.cursor');
let links = document.getElementsByTagName('a');
let btns  = document.getElementsByTagName('button');
window.addEventListener('mousemove', cursor);
function cursor(e) {
  mouse.style.top = e.pageY + 'px';
  mouse.style.left = e.pageX + 'px';
};
for(let li = 0; li < links.length; li++) {
  links[li].addEventListener('mouseover', () => {
    mouse.classList.add('link-grow');
  });
  links[li].addEventListener('mouseout', () => {
    mouse.classList.remove('link-grow');
  })
}
for(let btn = 0; btn < btns.length; btn++) {
  btns[btn].addEventListener('mouseover', () => {
    mouse.classList.add('link-grow');
  });
  btns[btn].addEventListener('mouseout', () => {
    mouse.classList.remove('link-grow');
  })
}

// cursor