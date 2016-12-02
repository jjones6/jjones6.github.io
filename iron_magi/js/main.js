$(document).ready(function(){
      $(".ipad_container").mouseenter(function(){
        $(".ipad_container img").animate({

            height: '+=20px',
            width: '+=20px'
        });
    });
     $(".ipad_container").mouseleave(function(){
        $(".ipad_container img").animate({

            height: '-=20px',
            width: '-=20px'
        });
    });

    $(".iron_magi_logo").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});


 $("#weapon-selector").click(function() {
  $("html, body").animate({ scrollTop: 840 }, "slow");
  return false;
});
$("#weapon-selector").mouseenter(function(){
$("#weapon-selector img").animate({

            height: '+=20px',
            width: '+=20px'
        });
});

$("#weapon-selector").mouseleave(function(){
$("#weapon-selector img").animate({

            height: '-=20px',
            width: '-=20px'
        });
});

$("#spell-selector").mouseenter(function(){
$("#spell-selector img").animate({

            height: '+=20px',
            width: '+=20px'
        });
});

$("#spell-selector").mouseleave(function(){
$("#spell-selector img").animate({

            height: '-=20px',
            width: '-=20px'
        });
});

 $("#spell-selector").click(function() {
  $("html, body").animate({ scrollTop: 2540 }, "slow, ease");
  return false;
});


    $('form').submit(function(event){
        var formData = $(this).serialize();
        //jQuery's ajax function sends the form's data to the server and handles the things that it will return
    $.ajax({
        type: 'POST',
        url: 'https://web2-product-page.herokuapp.com/subscribers',
        data: formData, //form field values to send
        dataType: 'json' //what type of data do we expect back from the server
    }).done (function(data){
        //done()is called when a successful request is completed
        console.log(data);
        $('#confirmed').text("Your parcel has been sent!");
        $('#confirmed')
        $('#error').text("");
        $('input[name=email]').val("");
        


    }).fail(function (data){
        //fail() is called if there's an error created while executing the request
        console.log(data);
        var errorMessage = JSON.parse(data.responseText).email[0];

        $('#error').text(errorMessage);
        $('#confirmed').hide();
    });
    //Stop the form from submitting the normal way and halt screen refresh.
    event.preventDefault();
    
    });
});


    // (".ipad_container").mouseenter(function(){
    //     (".ipad_container img").animate({

    //     height: '+=150px',
    //     width: '+=150px'
    // });
    // });



   