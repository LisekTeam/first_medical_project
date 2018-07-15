$(document).ready(initAll);

function initAll() {
  /*tu umieszczajmy wywołania*/
  atfHeight();
  movingMenu();
  servicesLayer();
  burgerMenu();
  closeBurger();
  upToDate();
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
  var categories = [];
  var heights = [];
  var firstClick = true;
  $('.layer-open').each(function(i) {
    $(this).on('click', function(event) {
      $(this).closest('body').find('#services-list-layer').removeClass('fadeOut');
      $(this).closest('body').find('#services-list-layer').addClass('open');
      $(this).closest('body').find('#services-list-layer').addClass('fadeIn');

      //----------------------początek testu wysokości
      $('.acordeon-category-container').each(function(i){
        var catNum = i + 1;
        var catName = "serviceCategory" + catNum;
        $(this).addClass(catName);
        var catHeight = $(this).find('.acordeon-category-header').height() + $(this).find('.category-sublist').height();
        if(firstClick == true) {
          categories.push(catName);
          heights.push(catHeight);
        }
      });
      event = event || window.event;
      var targetCat = "#" + event.currentTarget.id + "-container";
      $(targetCat).addClass('open');
      var containerClass = categories[i];
      var containerHeight = heights[i];
      $('.'+containerClass).css('height',containerHeight+'px');
      $('.'+containerClass).find('.acordeon-open-arrow').addClass('rotate');
      firstClick = false;
      //------------------------koniec testu wysokości

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
          $('.acordeon-category-container').each(function() {
            $(this).removeClass('open');
            $(this).css('height','6rem');
            $(this).find('.acordeon-open-arrow').removeClass('rotate');
          });
        }, 500);
      }
    }
  });

/*  $('.layer-open').each(function(i) {
    $(this).on('click', function(event) {
      ;
    });
  }); */

  $('.acordeon-open-arrow').each(function(j) {
    $(this).on('click', function() {
      var containerClass2 = categories[j];
      var containerHeight2 = heights[j];
      if ($(this).closest('.acordeon-category-container').hasClass('open')) {
        $(this).closest('.acordeon-category-container').css('height','6rem');
        $(this).closest('.acordeon-category-container').removeClass('open');
        $(this).closest('.acordeon-category-container').find('.acordeon-open-arrow').removeClass('rotate');
      } else {
        $('.acordeon-category-container').each(function() {
          $(this).css('height','6rem');
          $(this).find('.acordeon-open-arrow').removeClass('rotate');
          $(this).removeClass('open');
          $(this).closest('.acordeon-categories').find('.'+containerClass2).css('height',containerHeight2+'px');
          $(this).closest('.acordeon-categories').find('.'+containerClass2).find('.acordeon-open-arrow').addClass('rotate')
        });

        $(this).closest('.acordeon-category-container').addClass('open');
      }
    });
  });
  $('.acordeon-close-button').on('click', function() {
    $('#services-list-layer').removeClass('fadeIn');
    $('#services-list-layer').addClass('fadeOut');
    $('.acordeon-category-container').each(function() {
      $(this).removeClass('open');
      $(this).css('height','6rem');
      $(this).find('.acordeon-open-arrow').removeClass('rotate');
    });
    /*$('#services-layer-container').addClass('fadeOutUp');*/
    setTimeout(function(){
      $('#services-list-layer').removeClass('open');
      /*$('#services-layer-container').removeClass('fadeOutUp');*/
    }, 1000);
  });

}

function upToDate() {
  var d = new Date();
  var curYear = d.getFullYear().toString();
  $('#current-year').html(curYear);
}
