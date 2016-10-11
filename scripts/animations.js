			$(function() {
				$('a[href*=#]').on('click', function(e) {
					e.preventDefault();
					$('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
				});
			});
			
			var $animation_elements = $('.animated');
			var $window = $(window);
			
			$(function() {
				var pixels = $('#section01').height();
				$.each($('section'), function() {
					$(this).height(pixels);
				});
			});
			
			function check_if_in_view() {
			  var window_height = $window.height();
			  var window_top_position = $window.scrollTop();
			  var window_bottom_position = (window_top_position + window_height);
			 			
			
			  $.each($animation_elements, function() {
				var $element = $(this);
				var element_height = $element.outerHeight();
				var element_top_position = $element.offset().top;
				var element_bottom_position = (element_top_position + element_height);
			 
				//check to see if this current container is within viewport
				if ((element_bottom_position >= window_top_position) &&	(element_top_position <= window_bottom_position)) {
					if($element.hasClass('animated-right')){
						$element.addClass('fadeInRight');
					} else if($element.hasClass('animated-left')){
						$element.addClass('fadeInLeft');
					}
				} else {
					if($element.hasClass('animated-right')){
						$element.removeClass('fadeInRight');
					} else if($element.hasClass('animated-left')){
						$element.removeClass('fadeInLeft');
					}
				}
			  });
			}

	
			$window.on('scroll resize', check_if_in_view);
			$window.trigger('scroll');