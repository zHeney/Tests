
( function( $ ) {
$( document ).ready(function() {


// ----------------------------------- TEXT EFFECT

const text = document.querySelectorAll(".moving_effect1");
const halfX = window.innerWidth / 2;
const halfY = window.innerHeight / 2;

text.forEach((el, i) => {
  TweenMax.to(el, 1, {
    z: 1 * (i + 8) });

});

document.addEventListener("mousemove", e => {
  text.forEach((el, i) => {
    TweenMax.to(el, 2.0, {
      x: (e.clientX - halfX) * (i + 1) * 0.001,
      y: (e.clientY - halfY) * (i + 1) * 0.001 });
  });
});


// ----------------------------------- TEXT EFFECT

const text2 = document.querySelectorAll("#ican");
const halfX2 = window.innerWidth / 2;
const halfY2 = window.innerHeight / 2;

text2.forEach((el, i) => {
  TweenMax.to(el, 1, {
    z: 1 * (i + 8) });

});

document.addEventListener("mousemove", e => {
  text2.forEach((el, i) => {
    TweenMax.to(el, 2.0, {
      x: (e.clientX - halfX2) * (i + 1) * 0.015,
      y: (e.clientY - halfY2) * (i + 1) * 0.015 });
  });
});



// SCROLL MAGIC

// ---------------------------------- Scene - blur SOC

var controller = new ScrollMagic.Controller();

var Scene0 = new ScrollMagic.Scene({
    triggerElement: "#socials",
    duration: "65%",
    triggerHook: 0.4

  })
  .setClassToggle(".socials", "m-socials")
  // .addIndicators()
  .addTo(controller);

// ---------------------------------- Scene - increase size SOC section

var controller = new ScrollMagic.Controller();
// build tween
var tween = TweenMax.to("#socials",
    0.5, {
    scale: 1.2,
    repeat:1,
    yoyo: true
    });
// var tween = gsap.to("#socials", {duration:2, scale: 1.1,yoyo: true});

var scene = new ScrollMagic.Scene({
    triggerElement: "#socials",
    duration: "130%",
    offset: -300

    })
    .setTween(tween)
    // .addIndicators()
    .addTo(controller);

// ---------------------------------- Scene - change BG

// WebDesign
var BG = new ScrollMagic.Scene({
    triggerElement: "#WebDesign",
    triggerHook: 0.7

  })
  .setClassToggle("#home", "greyBody")
  // .addIndicators()
  .addTo(controller);

// animations
var BG = new ScrollMagic.Scene({
    triggerElement: "#animations",
    triggerHook: 0.7

  })
  .setClassToggle("#home", "whiteBody")
  // .addIndicators()
  .addTo(controller);

/*// frontend
var BG = new ScrollMagic.Scene({
    triggerElement: "#frontend",
    triggerHook: 0.7

  })
  .setClassToggle("#home", "brownBody")
  // .addIndicators()
  .addTo(controller);*/

// graphdesign
var BG = new ScrollMagic.Scene({
    triggerElement: "#graphdesign",
    triggerHook: 0.9

  })
  .setClassToggle("#home", "blackBody")
  // .addIndicators()
  .addTo(controller);


// ---------------------------------- Scene - undelining WebDesign

$('.category').each(function(){

  // console.log(this);

  var Scene4 = new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 0.7,
      duration: "90%"
      // reverse: false

    })
    .setClassToggle(this, "undrline-active")
    // .addIndicators()
    .addTo(controller);
});

// ---------------------------------- Scene - scrolling fade opacity to 1


$('.category').each(function(){

  var Scene4 = new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 1,
      // reverse: false

    })
    .setClassToggle(this, "fadeup-category")
    // .addIndicators()
    .addTo(controller);
});

// ---------------------------------- Scene - translateY to up thumbs

$('.projects_thumbs').each(function(){

  // console.log(this);

  var Scene4 = new ScrollMagic.Scene({
      triggerElement: this.children[0],
      triggerHook: 1,
      // reverse: false

    })
    .setClassToggle(this, "fadeup")
    // .addIndicators()
    .addTo(controller);
});

// ---------------------------------- Scene - translateY to up I CAN DO

  var Skills = new ScrollMagic.Scene({
      triggerElement: ".skills_wrap",
      triggerHook: 0.8,
      // duration: "90%"
      // reverse: false

    })
    .setClassToggle(".skills_wrap", "fadeup")
    // .addIndicators()
    .addTo(controller);


// ---------------------------------- Scene - scrolldown

var controller = new ScrollMagic.Controller();

var Scene0 = new ScrollMagic.Scene({
    triggerElement: ".about",
    // duration: "15%",
    triggerHook: 0.4

  })
  .setClassToggle(".scroll-down lottie-player, .about a", "blur")
  // .addIndicators()
  .addTo(controller);

// ---------------------------------- Scene - graphdesign section effect

var controller = new ScrollMagic.Controller();
var tween = TweenMax.to("#graphdesign_cont", 0.5, {
  autoAlpha:1,
  // y: 0,
  // x: 0,
  yoyo: true
});

var scene = new ScrollMagic.Scene({
  triggerElement: "#graphdesign",
  triggerHook: 0,
  duration: "55%"
  // offset: 1
})

  .setTween(tween)
  // .addIndicators()
  .addTo(controller);


// ----------------------------------- SLICK SLIDER

$('.thumbnails').slick({
  asNavFor: '.main_image',
  adaptiveHeight: 'true',
  respondTo: 'min',
  variableWidth: 'true',
  // mobileFirst: 'true',
  rtl: 'true',
  slidesToShow: 10,
  slidesToScroll: 1,
  dots: false,
  centerMode: false,
  focusOnSelect: true
});

  $('.main_image').slick({
    asNavFor: '.thumbnails',
    adaptiveHeight: true,
    draggable: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    fade: true
  });

//  with arrows

$('.thumbs_mob').slick({
  asNavFor: '.main_image_mob',
  adaptiveHeight: 'true',
  respondTo: 'min',
  variableWidth: 'true',
  // mobileFirst: 'true',
  rtl: 'true',
  slidesToShow: 9,
  slidesToScroll: 1,
  dots: false,
  centerMode: false,
  focusOnSelect: true
});

  $('.main_image_mob').slick({
    asNavFor: '.thumbs_mob',
    draggable: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    fade: true,

    responsive: [
      {
        breakpoint: 720,
        settings: {
          arrows: false
        }
      }
    ]

  });

$('#graphdesign_cont').slick({
  mobileFirst: 'true',
  infinite: true,
  speed: 900,
  slidesToShow: 1,
  centerMode: true,
  arrows: false,
  variableWidth: true
});


$('.thumbnails').css({
  'height':'80px'
});



// ----------------------------------- SMOOTH SCROLL

$('.smooth').click(function(event) {

  // $(this).mousedown(function(){
  //   setTimeout(function(){ $(this).mouseup(); }, 5000);
  // });

  event.preventDefault();
  var href=$(this).attr('href');
  var target=$(href);
  var top=target.offset().top;

  $('html,body').delay(100).animate({
    scrollTop: top
  }, 800);

});



//----------------------------------- Popup about

$(".about_trigger").click(function() {
  $('.project_wrap').toggleClass('about_show');
});
$(".close_popup").click(function() {
  $('.project_wrap').removeClass('about_show');
});
$(".project-background").click(function() {
  $('.project_wrap').removeClass('about_show');
});


$(".a").hover(function() {
  $('.b').toggleClass('c');
});


$(".about_trigger").click(
  function () {
    $("body").css("overflow-y", "hidden");
});
$(".close_popup").click(
  function () {
    $("body").css("overflow-y", "");
});
$(".project-background").click(
  function () {
    $("body").css("overflow-y", "");
});


});
} )( jQuery );



// ------------------- LOTTIE

// var animation = bodymovin.loadAnimation({
//   container: document.getElementById('scroll-down'),
//   renderer: 'svg',
//   loop: true,
//   autoplay: true,
//   path: 'assets/scroll-down-icon.json'
// })



// ------- Toggle class (add/delete)

/*
$("#button").click(function() {
  $('.transform').toggleClass('class');
});
*/


// ------- add class on hover to thumbs

// $(".h").hover(
//   function () {
//     $(this).addClass('hover');
//     // $(this).css("background-color", "yellow");
//   },
//   function () {
//     $(this).removeClass('hover');
//     // $(this).css("background-color", "initial");
//   },
//   );


//------- Disable hover OnScroll on the Body

// var timer;
// var scrolled = false;
// $(document).scroll(function(){
//     if(scrolled == false){
//         scrolled = true;
//         $(".h").addClass('disable-hover');
//     }

//     clearTimeout(timer);
//     timer = setTimeout(function(){
//         $(".h").removeClass('disable-hover');
//         scrolled = false;
//      },150);
// });


// ------- Velocity JS

/* $("#anchortop")
      .velocity("transition.slideUpIn", { stagger: 250 }, 1250)
      .delay(650);
*/
