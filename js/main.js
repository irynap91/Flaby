

// Owl caroussel
$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    center: true,
    mouseDrag: true,
    touchDrag: true,
    autoplay: true,
    autoplaySpeed: 700,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1.3
        }
    }
})


window.onload= function() {

var selectedOption = document.getElementsByClassName("price_option");
console.log(selectedOption);

for (j=0; j<3; j++) {

        selectedOption[j].onmouseover= function () {
          selectedOption[j].style.height=640+"px";
          selectedOption[j].style.marginTop=60+"px";
        }
        for (i=0; i<=j; i++) {
        selectedOption[i].onmouseout= function () {
          selectedOption[i].style.height=610+"px";
          selectedOption[i].style.marginTop=100+"px";
        }
        break;
// continue;
      }
      // continue;
    }
}
