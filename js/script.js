// event pada saat link di klik
$(document).ready(function() {


	
$('.page-scroll').on('click', function(e){

	// ambil isi href
	var tujuan = $(this).attr('href');
	// tangkap elemen ybs
	var elemenTujuan = $(tujuan);

	// pindahkan scroll
	$('body').animate({
		scrollTop: elemenTujuan.offset().top - 50
	}, 1250, 'easeInOutExpo');

	e.preventDefault();

});

// parallax tulisan bergeser
$(window).on('load', function(){
	$('.pace').addClass('pace-go');
	$('.mace').addClass('mace-go')
});

$(window).scroll(function(){
	var wScroll = $(this).scrollTop();

	$('.jumbotron img').css({
		'transform': 'translate(0px, '+ wScroll / 4 +'%)'
	});

	$('.jumbotron h1').css({
		'transform': 'translate(0px, '+ wScroll / 2 +'%)'
	});

	$('.jumbotron p').css({
		'transform': 'translate(0px, '+ wScroll / 1.2 +'%)'
	});


	// portfolio
	if( wScroll > $('.portfolio').offset().top - 100 ) {
		
		$('.portfolio .napi').each(function(i) {
			setTimeout(function() {
				$('.portfolio .napi').eq(i).addClass('muncul');
			}, 180 * (i+1))

		});

	}

});
new Typed('#typed',{
  strings : ['HTML','CSS','BOOTSTRAP','JAVASCRIPT'],
  typeSpeed : 100,
  delaySpeed : 100,
  loop : true
});


$('#slideToggle').click(function(){
	$('#footer').slideToggle(2000);
});


});



