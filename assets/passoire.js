function passoire() {
	$('body').css('background', 'url("../img/passoire.svg") center center repeat');	
	$('body').css('background-size', 'cover');	
	$('body').attr('data-situation', 'passoire');	
};
$('#passoire').click(function() {
    if($('body').attr('data-situation') == 'passoire') {
	    $('body').css('background', 'none');	 
	    $('body').attr('data-situation', 'clair');	 
    } else {
	     passoire();
    }
});

