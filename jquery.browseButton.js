(function($){
	$.fn.browseButton = function(options) {
		var options = $.extend({}, $.fn.browseButton.defaults, options);
		
		if( !$(this).is('input[type=file]') ) {
			return;
		}
		
		var $inputFile = $(this);
		var $button = null;
		
		var type = typeof(options.button)
		
		if( type == 'object' && options.button.is('button') ) {
			$button = options.button;
		} else if( type == 'string' ) {
			console.log('ici');
			$button = $(options.button);
			
			if(  $button.length == 0 ) {
				throw new Error("$("+options.button+") not found");
			}
		} else {
			var tabIndex = $inputFile.attr('tabindex');
			
			// Create the button, put it the tabindex of the inputFile
			$button = $('<button />').html('browse...')
				.attr('tabindex', tabIndex);
			
			// Puts the button after the input file in the dom
			$inputFile.after($button);
		}
		
		// Make sure input file has not tabindex
		$inputFile.attr('tabindex', '-1')
			.css({
				'position': 'absolute',
				'top': '-2000px',
				'left': '-2000px'
			});
		
		$button.click(function(){
			$inputFile.click();
		});
	};
	
	$.fn.browseButton.defaults = {};
}(jQuery))