$(document).ready(function () {
  // Slider config
  $('.slider-wrap').slick({
    infinite      : true,
    slidesToShow  : 5,
    slidesToScroll: 5,
    autoplay      : true,
    autoplaySpeed : 2500,
    dots          : true,
    arrows        : false,
    responsive    : [
      {
        breakpoint: 1440,
        settings  : {
          slidesToShow  : 4,
          slidesToScroll: 1,
          infinite      : true,
          dots          : true
        }
      },
      {
        breakpoint: 1370,
        settings  : {
          slidesToShow  : 3,
          slidesToScroll: 1,
          infinite      : true,
          dots          : true
        }
      },
      {
        breakpoint: 968,
        settings  : {
          slidesToShow  : 3,
          slidesToScroll: 1,
          infinite      : true,
          dots          : true
        }
      },
      {
        breakpoint: 600,
        settings  : {
          slidesToShow  : 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings  : {
          slidesToShow  : 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  // Form
  $('#btnSubmit').click(function () {
    var sEmail = $('#inputEmail').val();
    if ($.trim(sEmail).length == 0) {
      $('#inputEmail').css("border-color", "red").tooltip('show');
    }
    if (validateEmail(sEmail)) {
      $('#inputEmail').tooltip('destroy');
      $('#modal').modal('show');

      //JSON
      var message = {
        email: sEmail
      };
      message.email = sEmail;
      $('#user-email').text(JSON.stringify(message));
    }
  });

});

function validateEmail(sEmail) {
  var filter = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
  if (filter.test(sEmail)) {
    return true;
  }
  else {
    return false;
  }
}
