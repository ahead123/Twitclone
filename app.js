var main = function(){
    $('.btn').click(function(){
        var post = $('.status-box').val();
        $('<li>').html(post).prependTo('.posts');
    });
};

$(document).ready(main);
