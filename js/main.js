//Main Processes
$(document).ready(function(){

  //homepage effects
  $("#transition").addClass("overlay");

	$(".hero-unit").hide().delay(2000).fadeIn(1000);

	//nav active
	$(".nav li a").click(navActive);

	//header scroll
	$(window).scroll(headerScroll);


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


});


// header scroll function
function headerScroll() {
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
function navActive(e) {
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


