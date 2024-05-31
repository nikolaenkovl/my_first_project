
(function()
{

	$(document).ready(function() 
	{
  		$(".accord .accord_head").click(function(e) 
  		{
	  		$(".accord .accord_body").slideUp(); 
    			if($(this).parent().find(".accord_body").is(":hidden"))
    			{ 
		  			$(this).parent().find(".accord_body").slideDown("fast"); 
	  			}
	  			else
	    			$(this).parent().find(".accord_body").slideUp("fast"); 
  		});
	});
  

})();

