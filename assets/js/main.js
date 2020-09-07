$(function () {
    var navbar = $(".desktop-nav");

    $(document).scroll(function () {        
        navbar.toggleClass('scrolled', $(this).scrollTop() > navbar.height());
    });

    $(navbar).hover(function () {        
        if (window.scrollY === 0) 
            navbar.removeClass('hovered');                    
        else
            navbar.toggleClass('hovered');
    });
});