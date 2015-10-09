function passoire() {
	$('#passoire').css('background', 'url("/static/passoire-js/img/passoir.svg") center center repeat');	
	$('#passoire').css('background-size', 'cover');	
	$('#passoire').css('width', '100%');	
	$('#passoire').css('height', '100%');	
	$('#passoire img').css('margin-left', '88%');	
	$('#passoire').attr('data-situation', 'passoire');

};
$('#passoire').click(function() {
    if($('#passoire').attr('data-situation') == 'passoire') {
	    $('#passoire').css('background', 'none');	 
	    $('#passoire').attr('data-situation', 'clair');	 
	$('#passoire').css('height', '100px');	
	$('#passoire').css('width', '100px');	
	$('#passoire').css('right', '10px');	
	$('#passoire img').css('margin-left', '0%');	
    } else {
	     passoire();
    }
});

