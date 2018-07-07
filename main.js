$(document).ready(initAll);

function initAll() {
  /*tu umieszczajmy wywołania*/
  atfHeight();
  movingMenu();
  servicesLayer();
  acoMovements();
  burgerMenu();
  closeBurger();
  /*$.stellar({
    responsive: false,
    scrollProperty: 'scroll',
  });*/
  if ($(window).width() > 980) {
    rellax();
  }
}

function atfHeight() {
  $('#header-section').height($(window).innerHeight());
}

function movingMenu() {
jQuery('.menu-button').click(function(event){
       event = event || window.event;
       var sectionID = event.currentTarget.id + "-section";
       jQuery("html,body").animate({
           scrollTop: jQuery("#" + sectionID).offset().top
       }, 1000)
   });
}
function burgerMenu() {
 $('#nav-icon3').on('click', function() {
   if(!$('.mobile-menu-buttons').hasClass('open')) {
     $('#nav-icon3').addClass('open');
     $('.mobile-menu-buttons').addClass('open');
   } else {
     $('#nav-icon3').removeClass('open');
     $('.mobile-menu-buttons').removeClass('open');
   }
 });
}
function closeBurger() {
 $(window).scroll(function() {
   $('.mobile-menu-buttons').removeClass('open');
   $('#nav-icon3').removeClass('open');
 });
}
function rellax() {
  var rellax = new Rellax('.rellax', {
    callback: function(position) {
    }
  });
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
  $('.acordeon-close-button').on('click', function() {
    $('#services-list-layer').removeClass('fadeIn');
    $('#services-list-layer').addClass('fadeOut');
    $('.acordeon-category-container').each(function() {
      $(this).removeClass('open');
    });
    /*$('#services-layer-container').addClass('fadeOutUp');*/
    setTimeout(function(){
      $('#services-list-layer').removeClass('open');
      /*$('#services-layer-container').removeClass('fadeOutUp');*/
    }, 1000);
  });
}

function acoMovements() {
  $('.acordeon-open-arrow').each(function() {
    $(this).on('click', function() {
      if ($(this).closest('.acordeon-category-container').hasClass('open')) {
        $(this).closest('.acordeon-category-container').removeClass('open');
      } else {
        $('.acordeon-category-container').each(function() {
          $(this).removeClass('open');
        });
        $(this).closest('.acordeon-category-container').addClass('open');
      }
    });
  });
  $('.layer-open').each(function() {
    $(this).on('click', function(event) {
      event = event || window.event;
      var targetCat = "#" + event.currentTarget.id + "-container";
      $(targetCat).addClass('open');
    });
  });
}
