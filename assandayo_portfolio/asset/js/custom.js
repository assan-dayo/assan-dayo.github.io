$(document).ready(function(){

// -----Initialize
  // AOS option
  AOS.init({
    duration: 400,
    easing: 'ease'
  })
  // Materialize option
  $('.button-collapse').sideNav()
  $('.modal').modal({
    startingTop: '0%',
    endingTop: '5%'
  })

// -----Scroll to hogehoge
  $('a[href*=\\#about-this-site]').click(function(event){
    event.preventDefault()
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1000);
  })
  $('a[href*=\\#about-me]').click(function(event){
    event.preventDefault()
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1000);
  })
  $('a[href*=\\#profile]').click(function(event){
    event.preventDefault()
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1000);
  })
  $('a[href*=\\#skills]').click(function(event){
    event.preventDefault()
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1000);
  })
  $('a[href*=\\#projects]').click(function(event){
    event.preventDefault()
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1000);
  })
  $('a[href*=\\#services]').click(function(event){
    event.preventDefault()
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1000);
  })
  $('a[href*=\\#contact]').click(function(event){
    event.preventDefault()
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1000);
  })
  // Scroll to top
  $('.scroll-to-top-btn').click(function(event){
    event.preventDefault()
    $('html, body').animate({scrollTop : 0},1000)
    return false
  })
  $('.scroll-to-top-li').click(function(event){
    event.preventDefault()
    $('html, body').animate({scrollTop : 0},1000)
    return false
  })

// -----Add sequence number to modal content
  var modalContents = $('#projects div .modal')
  var modalTriggers = $('#projects a.modal-trigger')
  for (var i = 0; i < modalContents.length; i++) {
    $(modalContents[i]).attr('id', 'modal' + i)
    $(modalTriggers[i]).removeAttr('href')
    $(modalTriggers[i]).attr('href', '#modal' + i)
    var remainder = i % 3
    switch (remainder) {
      case 0:
        $(modalTriggers[i]).parent().attr('data-aos-duration', 500)
        break;
      case 1:
        $(modalTriggers[i]).parent().attr('data-aos-duration', 700)
        break;
      case 2:
        $(modalTriggers[i]).parent().attr('data-aos-duration', 900)
        break;
    }
  }

// -----Add the closing modal button
  $('.modal').append('<div class="close-button"><a href="#!" class="btn-floating waves-effect waves-light"><i class="material-icons">close</i></a></div>')

// -----Close modal window
  $('.modal .close-button').click(function(event){
    event.preventDefault()
    var $targetModal = $(this).closest("[id^=modal]").attr('id')
    $('#' + $targetModal).modal('close')
  })

// -----Change image when clicking thumbnails
  $('.thumbnails img').click(function(){
    var $thisModalId = $(this).closest("[id^=modal]").attr('id')
    var $thisImg = $(this).attr('src')
    var $thisAlt = $(this).attr('alt')
    $('#' + $thisModalId + ' .mainImage img').attr({src:$thisImg, alt:$thisAlt})
    if ($(this).hasClass('z-depth-2')) {
      $('#' + $thisModalId + ' .thumbnails img').not('.z-depth-2').addClass('z-depth-2')
      $(this).removeClass('z-depth-2')
    }
  })

})
