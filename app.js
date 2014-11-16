var main = function(){


	// inserts an li with the attached status update on button click
    $('.btn').click(function(){
        var post = $('.status-box').val();
        $('<li class="text-info">').html(post).prependTo('.posts');
        $('.status-box').val('');
         $('.counter').text("140");
    });


    // updates the character count while typing in the status box
    $('.status-box').keyup(function() {
    	var postLength = $(this).val().length;
   		var charactersLeft = 140 - postLength;
    	$('.counter').text(charactersLeft);
  		if(charactersLeft < 0){
       	 	$('.btn').addClass('disabled');
    	} else if(charactersLeft === 140){
        	$('.btn').addClass('disabled');
    	} else{
        	$('.btn').removeClass('disabled');
    	};
  	});
  
  	$('.btn').addClass('disabled');
};

$(document).ready(main);
