$('.square').hover(
	function()
		{
			$('.square').not(this).css('filter', 'blur(5px)');
			$('#paiaso').css('filter', 'blur(5px)');
			//$('.test').css('filter', 'blur(0px) !important');
			var mql = window.matchMedia("(orientation: portrait)");
			$('.textu').mouseenter(
				function()
					{
						$(this).css('height', '80%');
						if (mql.matches) { $(this).css('margin-top', '15%'); }
						else { $(this).css('margin-top', '5%'); }
						$('.test').css('top', '5%').delay(300);
					});
			
			$('.textu').mouseleave(
				function()
					{
						$(this).css('height', '');
						$(this).css('margin-top', '');				
						$('.test').css('top', '');
					});
		},
	function()
		{
			$('.square').not(this).css('filter', '');
			$('#paiaso').css('filter', '');
		}
);