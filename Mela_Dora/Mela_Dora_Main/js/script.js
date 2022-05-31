const done=()=>{
  $(".preloader").hide()
}

$(".owl-carousel").owlCarousel({
   responsive: {
      0 :{
          items:1, 
      },
      600:{
          items:1,           
      },
      768:{
          items:1,           
      },
      992:{
          items:1,           
      },
      1200:{
          items:2,           
      },
      1400:{
          items:3,
      }
   }
});
