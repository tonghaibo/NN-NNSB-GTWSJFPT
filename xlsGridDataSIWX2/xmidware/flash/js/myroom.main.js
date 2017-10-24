jQuery(function(){
				
    // initialize of labels
    $('.labels a#label1').fadeIn(100).effect('bounce', { times:3 }, 300, function() {
        $('.labels a#label2').fadeIn(100).effect('bounce', { times:3 }, 300, function() {
            $('.labels a#label3').fadeIn(100).effect('bounce', { times:3 }, 300, function() {
                $('.labels a#label4').fadeIn(100).effect('bounce', { times:3 }, 300, function() {
                    $('.labels a#label5').fadeIn(100).effect('bounce', { times:3 }, 300, function() {
                        $('.labels a#label6').fadeIn(100).effect('bounce', { times:3 }, 300);
                    });
                });
            });
        });
    });

    // description close
    $('.description .close').click(function() {
        $(this).parent().fadeOut(500);
        return false;
    });

    // display description on click by labels
    $('.labels a').click(function() {
        $('.description p').html( $(this).find('p').html() ).parent().fadeIn(500);
        return false;
    });

    // close dialog on click outside
    $('.container').click(function() {
        $('.description').fadeOut(500);
    });
	
});