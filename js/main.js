//Main Processes
$(document).ready(function(){

  //run slider
  var slider = brianSlider();

	//nav active
	$(".nav li a").click(navActive);

	//header scroll
	$(window).scroll(headerScroll);

  // Start of accordion
  var allPanels = $('.accordion > dd').hide();
  
  $('.accordion > dd').first().show();

  $('.accordion > dt > span').click(function() {
      allPanels.slideUp();
      
      if($(this).parent().next().is(':hidden'))
      {
          $(this).parent().next().slideDown();
      }
      
      return false;
  });

  //if mobile is less than 480 pixels hide the header for a few to focus on hero image

  if ($(window).width() < 480) {
     $("header").hide().delay(2000).slideDown(400);
  }

  // start of navigation
  var navigation = responsiveNav("#nav");

  // start of flowtype
  $('body').flowtype({
      minimum   : 500,
      maximum   : 2000,
      minFont   : 14,
      maxFont   : 22,
      fontRatio : 30,
      lineRatio : 1.45
  });

  // start of fancybox
  $('.fancybox').fancybox();
  /* This is basic - uses default settings */
  
  $("a#single_image").fancybox();
  
  /* Using custom settings */
  
  $("a#inline").fancybox({
      'hideOnContentClick': true
  });

  /* Apply fancybox to multiple items */
  
  $("a.group").fancybox({
      'transitionIn'  :   'elastic',
      'transitionOut' :   'elastic',
      'speedIn'       :   600, 
      'speedOut'      :   200, 
      'overlayShow'   :   false
  });


});


// header scroll function
var headerScroll = function() {
	if ($(this).scrollTop() > 5){  
		$('.banner').addClass("collapsed");
	} 
	else{
   		$('.banner').removeClass("collapsed");
	}

	if ($(this).scrollTop() > 700){
		$('.banner').addClass("change");
	}
	else{
		$('.banner').removeClass("change");
	}

  //wonder if toggle class would work
  if($(this).scrollTop() > 480){
    $('#home_nav').removeClass("active");
    $('#about_nav').addClass("active");
  }
  else{
    $('#about_nav').removeClass("active");
    $('#home_nav').addClass("active");
  }
}

//nav active
var navActive = function(e) {
	e.preventDefault;
	$(".active").removeClass("active");
	$(this).addClass("active");

  var defaultAnchorOffset = 89;
  
  var $anchor = $('#' + this.hash.substring(1));
          
  var anchorOffset = $anchor.attr('data-anchor-offset');
  if (!anchorOffset) // for when anchor does have the offset attribute like Section 4
      anchorOffset = defaultAnchorOffset; 
      e.preventDefault();

  $('html,body').animate({ 
      scrollTop: $anchor.offset().top - anchorOffset
  }, 1500);  
  
}

//start of slider 

var brianSlider = function() {

  //step 1: hide hero unit on load for 2000 then fade in
  $(".hero-unit").hide().delay(2000).fadeIn(1000);

  //homepage effects
  $("#transition").addClass("overlay");

  //Set the background array
  var slideBackgrounds = [
    'images/grandparents_bg.jpg',
    'images/another_bg.jpg'
  ];

  //Set the slider array
  var slideContent = [
    'This is Content',
    'This is Content 2'
  ];

  $("#homepage").css("background", slideBackgrounds[0]);
  

  var currentSlide = 0;

  var nextSlide = function(){
    //puts the current background / slide
    $("#homepage").css("background", slideBackgrounds[currentSlide]);

    //move to the next slide
    currentSlide = currentSlide +1;
  }

  //if we wanted a next button

};

