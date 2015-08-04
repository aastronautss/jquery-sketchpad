$(document).ready(function() {
	var $square = $('<var class="gridsquare"></var>');
	var populateGrid = function(n) {
		$("#gridwrapper").html(''); // Empty grid
		
		for(var i = 0; i < n; i++) { // Rows
			for(var j = 0; j < n; j++){ // Row Elements
				$('#gridwrapper').append('<div class="gridsquare"></div>');
			}
			$('#gridwrapper').append('<div class="newrow"></div>');
		}
	}
	populateGrid(16);
});