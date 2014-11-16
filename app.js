var main = function(){


	// inserts an li with the attached status update on button click
    $('#poster').click(function(){
        var post = $('.status-box').val();
        $('<li class="text-info">').html(post).prependTo('.posts');
        // $('<button id="bye" class="btn btn-danger">').html('Delete').prependTo('.posts');
        $('.status-box').val('');
        $('.counter').text("140");
        $('.#poster').addClass('disabled');
    });

    // updates the character count while typing in the status box
    $('.status-box').keyup(function() {
    	var postLength = $(this).val().length;
   		var charactersLeft = 140 - postLength;
    	$('.counter').text(charactersLeft);
  		if(charactersLeft < 0){
       	 	$('#poster').addClass('disabled');
    	} else if(charactersLeft === 140){
        	$('#poster').addClass('disabled');
    	} else{
        	$('#poster').removeClass('disabled');
    	};
  	});
  
  	$('#poster').addClass('disabled');
};

$(document).ready(main);
