$(document).ready(function() {
	var $square = $('<var class="gridsquare"></var>');
	function populateGrid(n) {
		$("#gridwrapper").html(''); // Empty grid
		
		for(var i = 0; i < n; i++) { // Rows
			for(var j = 0; j < n; j++){ // Row Elements
				$('#gridwrapper').append('<div class="gridsquare"></div>');
			}
			$('#gridwrapper').append('<div class="newrow"></div>');
		}
		
		var dim = 592 / n; // Resize squares to fit
		$('.gridsquare').css('height', dim);
		$('.gridsquare').css('width', dim);
	}
	
	populateGrid(16);
	
	$('.gridsquare').on('mouseenter', function() {
		$(this).css("background-color", '#fff');
	});
	
	$('#resize').on('click', function() {
		var value = +$('#number').val();
		if(value >= 1 && value <= 128) populateGrid(value);
		else alert("Invalid input.");
	});
});