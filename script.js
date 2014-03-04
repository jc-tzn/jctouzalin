var xRef = 1366;
var yRef = 643;

$(document).ready(function () {
	
	$('#loading').css({"top" : ($(window).height() - 40)/2 + 'px', "left" : ($(window).width() - 40)/2 + 'px'}).show();
	
	$(window).resize(function() {
		reLayout();
	});
	
	$('.lang').click(function () {
		if (!$(this).hasClass('selected')) {
			$('#french').removeClass('selected');
			$('#english').removeClass('selected');
			$(this).addClass('selected');
			if ($(this).attr('id') == 'french') {
				$('.en').hide();
				$('.fr').show();
			} else {
				$('.fr').hide();
				$('.en').show();
			}
		}
	});
	
	$('.switch').click(function () { switchContent($(this).attr('id').replace('switch-', ''));});
	$('#arrow').click(function () { switchContent('beach');});
	
	$( document ).tooltip({
		items: "[title]",
		content: function() {
			var element = $( this );
			if ( element.is( "[title]" ) ) {
				return element.attr( "title" );
			}
		}
	});
	
	$('#trips').click(function () {
		$('#maps').fadeIn(1000);
	});
	
	$('#maps').click(function (event) {
		if (event.target == this) {
			$('#maps').fadeOut(500);
		}
	});
	
	$('[title]').css({'cursor' : 'auto'});
	
	$('#beach').load(function() {
		
		reLayout();
		$('#loading').hide();
		$("#beach").fadeIn(2000);
		$("#overlay").fadeIn(2000);
		
		setTimeout(function() { startAnimation();}, 2000);
	})
})

function startAnimation()
{
	$('#main').css({"top" : -4*$(window).height()/5 + 'px'}).show().animate({ top: $(window).height()/10 + 20}, 200).animate({ top: $(window).height()/10 - 10}, 150)
			  .animate({ top: $(window).height()/10}, 80);
	$('#lang').show();
}

function reLayout() 
{
	$('#loading').css({"top" : ($(window).height() - 40)/2 + 'px', "left" : ($(window).width() - 40)/2 + 'px'}).show();
	
	$(".bg-img").each(function () {
		if ($(this).width()/$(window).width() > $(this).height()/$(window).height()) {
			$(this).css({"width" : $(this).width()*$(window).height()/$(this).height(), "height" : $(window).height() + 'px'});
		} else {
			$(this).css({"height" : $(this).height()*$(window).width()/$(this).width(), "width" : $(window).width() + 'px'});
		}
		$(this).css({"top" : ($(window).height() - $(this).height())/2 + 'px', "left" : ($(window).width() - $(this).width())/2 + 'px'});
	});
	
	$('#main').css({"width" : 3*$(window).width()/4 + 'px', "height" : 4*$(window).height()/5 + 'px', 
					"left" : $(window).width()/8 + 'px', "top" : $(window).height()/10 + 'px'});
	$('#data').css({'width' : $('#main').width() + 'px', 'top' : 23*Math.pow($(window).height()/yRef,2) + 'px'});
	var ratio = $(window).height()/yRef;
	if (ratio < 1) { ratio = Math.pow(ratio,2);}
	$("#data td").css({'padding-left' : 60*Math.pow($(window).width()/xRef,2) + 'px',
				 'padding-top' : 23*ratio + 'px',
				 'padding-bottom' : 23*ratio + 'px'
	});
	$('#main').css({'font-size' : 14*$(window).width()/xRef + 'px'});
	
	var height = 60*Math.pow(yRef/$(window).height(),0.3);
	if (height > 60) { height = 60;}
	$('#contact').css({'bottom' : height + 'px', 'left' : 0.1*$('#main').width() + 'px'});
	$('.title').css({'font-size' : 20*$(window).width()/xRef + 'px'});
	
	$('#maps').css({'height' : $(window).height() + 'px'});
	$('#iframe-map').css({'height' : 2*$(window).height()/3 + 'px', 'width' : 2*$(window).width()/3 + 'px'});
	$('#wrap-iframe').css({'height' : 2*$(window).height()/3 + 'px', 'width' : 2*$(window).width()/3 + 'px', 'top' : $(window).height()/6 + 'px', 'left' : $(window).width()/6 + 'px'});
	
	$('.logo').css({'width' : 150*$(window).width()/xRef + 'px'});
	$('#logo-2moro').css({'width' : 250*$(window).width()/xRef + 'px'});
	$('#logo-snecma').css({'width' : 250*$(window).width()/xRef + 'px'});
	$('.content-title').css({'top' : 20*$(window).height()/yRef + 'px', 'width' : $('#main').width() + 'px'});
	
	$('.div-content').css({'top' : 70*$(window).height()/yRef + 'px', 'bottom' : 20*$(window).height()/yRef + 'px', 'right' : 30*$(window).width()/xRef + 'px', 'left' : 30*$(window).width()/xRef + 'px', });
	
}

function switchContent(content) 
{
	var previous = $('.current').attr('id');
	$('.current').removeClass('current');
	$('[id=' + content + ']').addClass('current').fadeIn(1500);
	$('#main').animate({ top: -4*$(window).height()/5}, 500);
	
	setTimeout(function() { 
		if (content != 'beach') {
			$('#data').hide();
			$('#contact').hide();
			$('#resume').hide();
			$('#recommendations').hide();
			$('#arrow').show();
			$('[id=content-' + content + ']').show();
		} else {
			$('#data').show();
			$('#contact').show();
			$('#resume').show();
			$('#recommendations').show();
			$('#arrow').hide();
			$('[id=content-' + previous + ']').hide();
		}
		startAnimation();
	}, 1500);
	if (previous != content) {
		setTimeout(function() { $('[id=' + previous + ']').hide();}, 2000);
	}
	
}







