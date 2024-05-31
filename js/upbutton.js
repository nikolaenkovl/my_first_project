$(function() 
{
    if ($(window).width() >= 768)
    {
        $(window).scroll(function()
        {
            if($(this).scrollTop() > 100) 
            {
                $('.upbutton').fadeIn();
            } 
            else 
            {
                $('.upbutton').fadeOut();
            }
        });
        $('.upbutton').click(function() 
        {
            $('body,html').animate({scrollTop:0},300);
        });
    }
 
});