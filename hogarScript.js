$(document).ready(function() {	

	// function animateFadeDiv() {
	// 	$('#bigDiv').hide();
	// 	setTimeout(function() {
	// 		$('#bigDiv').show();
	// 	}, 50)
	// 

	var hogarNumber = 0;

	function animateFadeDivOne() {
		$('#switchDiv').show( "blind", { direction: "left"  }, 200 );
		setTimeout(function() {
			$('#switchDiv').hide( "blind", { direction: "right"  }, 200 );
		}, 600);
	}

	function animateFadeDivTwo() {
		$('#switchDiv').show( "blind", { direction: "right"  }, 200 );
		setTimeout(function() {
			$('#switchDiv').hide( "blind", { direction: "left"  }, 300 );
		}, 600);
	}


	//Switch main div animation
	function fadeMainDivOne() {

		setTimeout(function() {
			
			$('#hogarTwoMainDiv').hide();
			$('#hogarOneMainDiv').show();
			$('#hogar').text('HOGAR 1');
			$('#bigDiv').css('background-image', 'url(Images/white-wall.png)');
			$('.sastav').css('color', '#3a3a3a');
			$('#hogar_svg_head').css('transform', 'scaleX(-1)');
			$('body').css('color', '#1b1b1b');
			$('#prikazTelefona').text('060 68 38 58 6');
			$('#map_img').attr('src', 'Images/HogarSvgMapOne.svg');
		}, 200)
	}

	function fadeMainDivTwo() {

		setTimeout(function() {
			
			$('#hogarOneMainDiv').hide();
			$('#hogarTwoMainDiv').show();
			$('#hogar').text('HOGAR 2');
			$('#bigDiv').css('background-image', 'url(Images/dark-wood.jpg)');
			$('.sastav').css('color', '#b5b5b5');
			$('#hogar_svg_head').css('transform', 'scaleX(1)');
			$('body').css('color', '#f2f2f2');
			$('#prikazTelefona').text('060 68 38 58 7');
			$('#map_img').attr('src', 'Images/HogarSvgMapTwo.svg');
		}, 200)
	}

	function hogarOneSwitch() {

		if(hogarNumber == 2 || hogarNumber == 0) { 
			fadeMainDivOne();

			setTimeout(function() {
				scrollToTop();
				$('#hogarOneSlideMenu').show();
				$('#hogarTwoSlideMenu').hide();
			$('#hogarOneBtnMobile, #hogarOneBtn').css('box-shadow', 'inset 0 5px #F55C22');
			$('#hogarTwoBtnMobile, #hogarTwoBtn').css('box-shadow', 'inset 0 -5px #F55C22');
			}, 200);

			$('#callIconFixed').attr('href', 'tel:+381606838586');
			$('#brojTelefona').attr('href', 'tel:+381606838586');

			hogarNumber = 1;
	  }
	}
	
	function hogarTwoSwitch() {

		if(hogarNumber == 1 || hogarNumber == 0){
			fadeMainDivTwo();

			setTimeout(function() {
				scrollToTop();
				$('#hogarOneSlideMenu').hide();
				$('#hogarTwoSlideMenu').show();
			$('#hogarOneBtnMobile, #hogarOneBtn').css('box-shadow', 'inset 0 -5px #F55C22');
			$('#hogarTwoBtnMobile, #hogarTwoBtn').css('box-shadow', 'inset 0 5px #F55C22');
			}, 200);
		
			$('#callIconFixed').attr('href', 'tel:+381606838587');
			$('#brojTelefona').attr('href', 'tel:+381606838587');
	
			hogarNumber = 2;
		}
	}
	
	//Prevents scrolling to top if menu is visible-
	//-when menu button is pressed
	function scrollToTop() {
		if($("#navMenu").is(':visible') === false) {
			// $('#toTopAnchor')[0].click();
			window.scrollTo(0, 0);
		} else if($("#navMenu").is(':visible') === true) {
			
		}
	}

	function btnTimeOut() {
		
		$('#mobileOverlayButtonOne').animate({
																					top: '0px',
																					'border-radius': '0px',
																					height: '50px',
																					width: '100%',
																					fontSize: '20px',
																					borderWidth: '0px',
																					marginRight: '30px',
																					margin: '0px'
																				}, 400);
		$('#mobileOverlayButtonTwo').animate({
																					top: '0px',
																					'border-radius': '0px',
																					height: '50px',
																					width: '100%',
																					fontSize: '20px',
																					borderWidth: '0px',
																					marginLeft: '30px',
																					margin: '0px'
																				}, 400);
																				
													
	}
	
	function hogarSvgSlide() {
		$('#mobileOverlayDiv').animate({bottom: '100vh'}, 400).hide(100);
	}
	
	function mobileAnimation() {
		
		$('#hogarOverlaySvg').animate({bottom: '-50vh'}, 300).hide(100);
		
		setTimeout(btnTimeOut, 280);
		setTimeout(hogarSvgSlide, 300);

		setTimeout(function() {
								$('#overlayBtnContainer').fadeOut()
								}, 550);
		setTimeout(function() {
								$('.mobileButtons').fadeTo(0, 1);
								}, 550);	
	};
	
  $("#hogarOneMainDiv").load("hogarOne.html");
	$('#hogarTwoMainDiv').load('hogarTwo.html');


	var botShadBol = true;

	function addBottomShadow() {
		$('#hogarOneBtnMobile').css('box-shadow', 'inset 0px -5px #F55C22');
		$('#hogarTwoBtnMobile').css('box-shadow', 'inset 0px -5px #F55C22');
	}

	function removeBottomShadow() {
		$('#hogarOneBtnMobile').css('box-shadow', 'none');
		$('#hogarTwoBtnMobile').css('box-shadow', 'none');
	}

	$('#mobileOverlayButtonOne').on('click', function() {	
		hogarOneSwitch();
		mobileAnimation();
		enableScroll();
	});
	
	$('#mobileOverlayButtonTwo').on('click', function() {		
		hogarTwoSwitch();
		mobileAnimation();
		enableScroll();
	});



	//toggle scrolling when menu is open
	//and turns burger to X
	function toggleScroll() {
		if($("#navMenu").is(':visible') === false) {
			$('#menuBtn').addClass('is-active');
			disableScroll();
		} else if($("#navMenu").is(':visible') === true) {
			$('#menuBtn').removeClass('is-active');
			enableScroll();
		}
	} 
	
	$('#menuBtn').on('click', function() {
		toggleScroll();
		$('#navMenu').toggle( "slide", { direction: "up"  }, 300 );
	});
	
	$('#navMenu').on('click', function() {
		$('#navMenu').slideToggle();
		toggleScroll();
	});
	
	$('#hogarOneBtn').on('click', function() {
		hogarOneSwitch();
		animateFadeDivOne();
	});
	
	$('#hogarTwoBtn').on('click', function() {
		hogarTwoSwitch();
		animateFadeDivTwo();
	});
	
	$('#hogarOneBtnMobile').on('click', function() {

		hogarOneSwitch();
		animateFadeDivOne();

	});
	
	$('#hogarTwoBtnMobile').on('click', function() {

		hogarTwoSwitch();
		animateFadeDivTwo();

	});
	
	function animatePozoviteShow() {
		$('#pozoviteAnimation').show( "blind", { direction: "left"  }, 200 );
	}
	
	function animatePozoviteHide() {
		$('#pozoviteAnimation').hide( "blind", { direction: "left"  }, 200 );
	}

	function timeoutPozoviteHideCss() {
			$("#callIconFixed").css('top', '70px');
			$("#toTopAnchor").css('top', '70px');
	}

	function timeoutPozoviteShowCss() {
			$("#callIconFixed").css('top', '0px');
			$("#toTopAnchor").css('top', '0px');
	}

	var callBtnDesc = false;
// 	scroll bottom icons appear
	var timeoutShowID;
	var timeoutHideID;

	var timeoutPozovite;

	$(window).on(' scroll', function() {

		if($("body").scrollTop() > 300) { 
      timeoutPozoviteShowCss();
			if(callBtnDesc == false)
			{
				timeoutShowID = setTimeout(animatePozoviteShow, 300);
				timeoutHideID = setTimeout(animatePozoviteHide, 3000);
				// $('#pozoviteArrow').css('animation-name', 'arrowMove');
				clearTimeout(timeoutPozovite);
				callBtnDesc = true;
			}
		} else if($("body").scrollTop() < 300) {
			if (callBtnDesc == true) {
				timeoutPozovite = setTimeout(timeoutPozoviteHideCss, 300);
			}

			clearTimeout(timeoutShowID);
			clearTimeout(timeoutHideID);
			animatePozoviteHide();
			callBtnDesc = false;
		}
    
  });

	//Code for disabling and enabling scrolling
	//Start
	// left: 37, up: 38, right: 39, down: 40,
	// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
	var keys = {37: 1, 38: 1, 39: 1, 40: 1};

	function preventDefault(e) {
	  e = e || window.event;
	  if (e.preventDefault)
	      e.preventDefault();
	  e.returnValue = false;  
	}

	function preventDefaultForScrollKeys(e) {
	    if (keys[e.keyCode]) {
	        preventDefault(e);
	        return false;
	    }
	}

	function disableScroll() {
	  if (window.addEventListener) // older FF
	      window.addEventListener('DOMMouseScroll', preventDefault, false);
	  window.onwheel = preventDefault; // modern standard
	  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
	  window.ontouchmove  = preventDefault; // mobile
	  document.onkeydown  = preventDefaultForScrollKeys;
	}

	function enableScroll() {
	    if (window.removeEventListener)
	        window.removeEventListener('DOMMouseScroll', preventDefault, false);
	    window.onmousewheel = document.onmousewheel = null; 
	    window.onwheel = null; 
	    window.ontouchmove = null;  
	    document.onkeydown = null;  
	}
 	//End

	
});
