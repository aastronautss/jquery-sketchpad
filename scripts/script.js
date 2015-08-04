$(document).ready(function() {
    var $row = $('<tr></tr>');
    var $square = $('<td class="gridsquare"></td>');
    function populateGrid(n) {
        for(var i = 0; i <= n; i++) {
            console.log("row " + i);
            $('#grid').prepend($row);
        }
        
        for(var i = 0; i < n; i++) {
            console.log(i);
            $('#grid').find('tr').append($square);
        }
    }
    
    populateGrid(16);
});