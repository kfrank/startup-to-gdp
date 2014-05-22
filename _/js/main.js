$(document).ready(function() {
	var startupWorth = 0,
	    chosenStartup = 0;

	// Add options to select menu 
  function appendName(fileName) {
  	$.getJSON('_/js/' + fileName + '.json', function(json) {
			$.each(json,function(i, value){
				$('#' + fileName)
				.append($("<option></option>")
				.attr("value",i)
				.text(value.itemName)); 
			});
		});
  }

	appendName('countries');
	appendName('startups');

	// When an item is selected, show the value
	$('select').change(function(){
		  optSelect = $('#startups option:selected');
			chosenStartup = optSelect.text();

			$('#test').text( chosenStartup + ' is worth more than');
			value = optSelect.val();

			// Grab value.raised
			$.getJSON('_/js/startups.json', function(json) {
				startupWorth = json[value].raised;
			});

			$.getJSON('_/js/countries.json', function(json) {
				$.each(json, function(index, item) {
						
					if ( parseFloat(item.gdp.replace(/,/g, '')) < (parseFloat(startupWorth.replace(/,/g, ''))) ) {
						$('#test').append('<li>' + item.itemName + '</li>');
					}

				});
			});
	});
});