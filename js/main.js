jQuery(document).ready(function($){

	var finalDate = '2018/07/29';

  	$('div#counter').countdown(finalDate)
    	.on('update.countdown', function(event) {

      	$(this).html(event.strftime('<span>%D</span>' + 
                         '<span>%H</span>' + 
                         '<span>%M</span>' +
                         '<span>%S</span>'));

   });  
})