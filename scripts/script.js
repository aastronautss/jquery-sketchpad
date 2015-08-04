var currentOption = 0; // Init global option;

$(document).ready(function() {
	populateGrid(16, 0); // Initialize grid.
});

var resize = function() { // Resize the blocks.
	var value = +$('#number').val(); // Get text from field.
	if(value >= 1 && value <= 128) populateGrid(value, currentOption); // Check for invalid input.
	else alert("Invalid input."); // Throw error.
};

var optChange = function(option) {
	currentOption = option;
	var value = +$('#number').val();
	populateGrid(value, option);
};

function populateGrid(squareSize, option) { //Main function: 
	$("#gridwrapper").html(''); // Empty grid
	
	for(var i = 0; i < squareSize; i++) { // Rows
		for(var j = 0; j < squareSize; j++){ // Row Elements
			$('#gridwrapper').append('<div class="gridsquare"></div>');
		}
		$('#gridwrapper').append('<div class="newrow"></div>');
	}
	
	var dim = 592 / squareSize; // Resize squares to fit
	$('.gridsquare').css('height', dim);
	$('.gridsquare').css('width', dim);
	
	$('.gridsquare').on('mouseenter', function() {
		switch(option){
			case 0:
				$(this).css("background-color", '#fff');
				break;
			case 1:
				var opacity = $(this).css('opacity');
				if(opacity > 0) $(this).css('opacity', opacity - .1);
				break;
			case 2:
				var getColor = function() {return Math.floor(Math.random() * 256);};
				$(this).css('background-color', 'rgb(' + getColor() + ', ' + getColor() + ', ' + getColor() + ')');
				break;
		}
	});
}