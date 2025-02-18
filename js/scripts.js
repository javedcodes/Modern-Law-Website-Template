jQuery(document).ready(function($){
	$('a.showmenu').on('click', function(){
		$('.header_menu').fadeIn();
	});
	$('a.hidemenu').on('click', function(){
		$('.header_menu').fadeOut();
	});


	$('nav ul li').click(function() {
		var getwindowwidth = $(window).width();
		if(getwindowwidth < 900){
			$('.header_menu').fadeOut('slow');
		}
	});

	inPageItems = [];
	$('nav ul li a').each(function(i, item){
		var elem = $(this);
		item = {
			refElement: $(elem.attr('href')),
			parent: elem.parent()
		}
		inPageItems.push(item);
	});
	$('nav ul li a, a.logo').click(function(event){
		event.preventDefault();
		var target = $(this).attr('href');
		$('html,body').animate({scrollTop: ($(target).offset().top-50)}, 'slow');
	});
	$(window).scroll(function(){
		var top = $(document).scrollTop();
		$.each(inPageItems, function(i, item){
			if(top > item.refElement.offset().top-52){
				if(!item.parent.hasClass('active')){
					$('nav ul li').removeClass('active');
					item.parent.addClass('active');
				}
			}else{
				item.parent.removeClass('active');
			}
		});
	});
});