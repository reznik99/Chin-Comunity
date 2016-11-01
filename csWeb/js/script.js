$(document).ready(function(){
  setInterval(function() {
    changeSlide();
  }, 3500);//Call function every 3500ms or 3.5 seconds

  var changeSlide = function(){//function to change slide
    var currentSlide = $("li.visible");
    var nextSlide = currentSlide.next();
    var roundcounter = $('.highlight');
    var nextroundcounter = roundcounter.next();
    if(nextSlide.length == 0){
      nextSlide = $('.slidegallery').children().first();
      nextroundcounter = $('.dot_div').children().first();
    }
    $("li.visible").hide().removeClass('visible');
    nextSlide.fadeIn().addClass('visible');
    roundcounter.removeClass('highlight');
    nextroundcounter.addClass('highlight');
  }

  var open_contact = function(){//function opens the contact information div
    var target = $('.contact_div');
    target.animate({
      width: '100%',
      height: '100%'
    },function(){$('.contact_div').animate({backgroundColor: 'rgba(200,200,200,0.8)'},function(){$('.contact_info').fadeIn();$('.contact_info').css("padding","10px")})})
    target.fadeIn();
  }
  var close_contact = function(){// function closes the contact informaton div
    $('.contact_div').fadeOut();
  }

  //Event Listeners/Handlers
  $('.contact_open').click(open_contact);
  $('.contact_close').click(close_contact);
});
