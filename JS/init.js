/**
 * GENERALS
 */

 	var type = "";

	/** 
	 * @description evalua una variable y determina si tiene contenido 
	 * @version 1.0
	 * @param {*} value  variable para evaluar 
	 * @returns true or false
	 */
	function object_exist(value)
	{
		if (value != undefined && value != "" && value != "null")
			return true;
		else
			return false;
	}

	/** 
	 * @description calcula la dimension de la pagina y asigna un font-size
	 * @version 1.0
	 * @returns undefined
	 */
	function font_()
	{
			var width_ = $(window).width();

			i = 17;

			if(width_ > 450)
					i = 13

			if(width_ > 500)
					i = 12

			if(width_ > 600)
					i = 10

			if(width_ > 700)
					i = 9

			if (width_ > 992 && type == "landscape")
					var i = 5.5;

			var font_ = width_ * i / 400;
			$("body").css("font-size", font_+"px"); 
	}

	
	 /** 
	 * @description calcula la dimension de la pagina y determina si es landscape o portrait
	 * @version 1.0
	 * @returns undefined
	 */
	function windows_()
	{
			var windows_w = $(window).width();
			var windows_h = $(window).height();
		
			var n_windows_w = (windows_w * 0.1) + windows_w;
			if (n_windows_w < windows_h)
			{
					$("body").removeClass('landscape');
					$("body").addClass('portrait');
					type = 'portrait';
			}
			else
			{
					$("body").removeClass('portrait');
					$("body").addClass('landscape');
					type = 'landscape';
			}
	}

	/**
	 * EVENTS
	 */

	$(window).resize(function()
	{
		windows_(); 
		font_();
	});

	/**
	 * RUN
	 */
	setTimeout(function()
	{ 
		windows_(); 
		setTimeout(function()
		{ 
			font_(); 
		}, 100);
	}, 50);

