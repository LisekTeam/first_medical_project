$(document).ready(initAll);

function initAll() {
  /*tu umieszczajmy wywołania*/
  atfHeight();
  movingMenu();
  servicesLayer();
}

function atfHeight(){
  $('#header-section').height($(window).innerHeight());
}

function movingMenu(){
jQuery('.menu-button').click(function(event){
       event = event || window.event;
       var sectionID = event.currentTarget.id + "-section";
       jQuery("html,body").animate({
           scrollTop: jQuery("#" + sectionID).offset().top
       }, 1000)
   });
}

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function servicesLayer() {
  $('.layer-open').each(function() {
    $(this).on('click', function() {
      $(this).closest('body').find('#services-list-layer').removeClass('fadeOut');
      $(this).closest('body').find('#services-list-layer').addClass('open');
    $(this).closest('body').find('#services-list-layer').addClass('fadeIn');
    });
  });
  $('.sl-layer-cover').on('click', function(e) {
    if (e.target !== this) {
      return;
    } else {
      if($('#services-list-layer').hasClass('open')) {
        $('#services-list-layer').removeClass('fadeIn');
        $('#services-list-layer').addClass('fadeOut');
        setTimeout(function(){
          $('#services-list-layer').removeClass('open');
        }, 500);
      }
    }
  });
  $('.temporary-close-button').on('click', function() {
    $('#services-list-layer').removeClass('fadeIn');
    $('#services-list-layer').addClass('fadeOut');
    /*$('#services-layer-container').addClass('fadeOutUp');*/
    setTimeout(function(){
      $('#services-list-layer').removeClass('open');
      /*$('#services-layer-container').removeClass('fadeOutUp');*/
    }, 1000);
  });
}
