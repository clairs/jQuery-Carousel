(function($){   
$.fn.carousel = function(){
	var change = function(){
            var e = $('.carousel li:visible');
            e.fadeOut('fast',function(){
                var next = e.next();
                if (next.html() == null) {
                    next = e.siblings().first();
                }
                next.fadeIn();
            });
        };

        $('.carousel li').css('list-style-type','none');
        $('.carousel li').css('margin','0');
        $('.carousel li').css('padding','0');
        $('.carousel li').hide();
        $('.carousel li:first').show();
        setInterval("change()",10000);
})(jQuery);
