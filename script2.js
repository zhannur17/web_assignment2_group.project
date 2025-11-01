$(document).ready(function(){
  console.log("jQuery is ready!");
  
  $(window).on('scroll', function() {
    console.log("Прокрутка произошла"); 
    var scrollTop = $(window).scrollTop();
    var docHeight = $(document).height();
    var winHeight = $(window).height();
    var scrollPercent = (scrollTop / (docHeight - winHeight)) * 100;
    $('#progress-bar').css('width', scrollPercent + '%');
  });
});

$('#user-count').each(function() {
  var $this = $(this);
  var countTo = $this.attr('data-count');
  $({ countNum: $this.text() }).animate({
    countNum: countTo
  }, {
    duration: 3000,
    easing: 'swing',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
    }
  });
});

