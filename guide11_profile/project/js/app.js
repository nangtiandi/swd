// slider with slick
$('#slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow:3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
//   using vanilla js
VanillaTilt.init(document.querySelectorAll(".services-card"), {
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 1,
});

// scroll navbar height
let screenHeight = $(window).height();
// console.log(screenHeight);
$(window).scroll(function(){
  let currentPosition = $(this).scrollTop();
  console.log(currentPosition);
    if(currentPosition > screenHeight - 600){
      $('.header-nav').addClass('header-nav-scroll');
    }else{
      $('.header-nav').removeClass('header-nav-scroll');
      SetActive('home');
    }
})
// menu active
function SetActive(current){
  $('.nav-link').removeClass('active');
  $(`.nav-link[href="#${current}"]`).addClass('active');
}
function scrollNav(){
  let currentSection = $('section[id]');
  currentSection.waypoint(function(direction){
      
      if(direction === "down"){
          let currentId =  $(this.element).attr('id');
          SetActive(currentId);
      }
  },{
      offset : '25%'
  });
  currentSection.waypoint(function(direction){
      
      if(direction === "up"){
          let currentId =  $(this.element).attr('id');
          SetActive(currentId);
      }
  },{
      offset : '25%'
  });
}
scrollNav();
// lader
$(window).on('load',function(){
  $('.loading').fadeOut(100,function(){
    $(this).remove();
  })
})