// JavaScript Document



var controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({triggerHook: 0, duration: "100%"})
	.setTween(TweenMax.to("#divHeaderImage .ccm-image-slider", 1, {top: "300px", ease: Linear.easeNone}))
	//.addIndicators()
	.addTo(controller);
	
	/*
	new ScrollMagic.Scene({triggerHook: 0, duration: "100%"})
	.setTween(TweenMax.to("#divHeaderImage .img", 1, {top: "460", ease: Linear.easeNone}))
	.addIndicators()
	.addTo(controller);
	
	*/
	
	
	
	
/*
	DROP DOWN MAIN NAV
*/

$('#divSiteNav ul:first-of-type li').mouseenter ( function () {
	var el = $(this).children( 'ul' )
	TweenLite.set(el, {height:"auto"})
	TweenLite.from(el, 0.3, {
		height: 0,
		ease: Power1.easeOut
	});
});

$('#divSiteNav ul:first-of-type li').mouseleave ( function () {
	var el = $(this).children( 'ul' )
	TweenLite.to(el, 0.1, {
		height: 0,
		ease: Power1.easeIn
	});
});

