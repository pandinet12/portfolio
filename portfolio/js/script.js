// evant pada saat link di klick 

// about
$(window).on('load', function(){
	$('.kiri').addClass('Kview');
	$('.kanan').addClass('Kview');
});

$('.page-scroll').on('click', function(e) {

	// ambil isi href
	var flow = $(this).attr('href');

	//tangkap element ybs
	var elemenflow = $(flow);

	$('html,body').animate({
		scrollTop: elemenflow.offset().top - 50
	}, 1000, 'swing');

	e.preventDefault();

});


// paralax
	$(window).scroll(function(){

		var flowscroll = $(this).scrollTop();

		$('.jumbotron img').css({
			'transform' : 'translate(0px, '+ flowscroll/4 +'%)'
	});
		$('.jumbotron h1').css({
			'transform' : 'translate(0px, '+ flowscroll/2 +'%)'
		});

		$('.jumbotron p').css({
			'transform' : 'translate(0px, '+ flowscroll/1.2 +'%)'
		});

		// portfolio
		if( flowscroll > $('.portfolio').offset().top - 250){
			$('.portfolio .img-rounded').each(function(i){
				setTimeout(function() {
					$('.portfolio .img-rounded').eq(i).addClass('muncul');
				}, 300 * (i+1));
			});
		}
	});