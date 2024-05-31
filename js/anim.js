
(function()
{

  $(document).ready(function()
  {
    let alpha=0;
    let timer=setInterval(function()
      {
        alpha++;
        $('section').css('background-image','linear-gradient('+ alpha +'deg,#9D1B2B, #171717')

      },30000/360);
  });

  

})();

