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

	appendName('country');
	appendName('startup');

	function findWorth(selected) {
		//optSelect = $('#startup option:selected');
		//chosenStartup = $("option:selected", this).val();

		
		value = chosen.val();

		if ( whatItWas == 'startup' ) {
			// Grab value.raised
			$.getJSON('_/js/startup.json', function(json) {
				startupWorth = json[value].raised;
			});

			$.getJSON('_/js/country.json', function(json) {
				$.each(json, function(index, item) {
						
					if ( parseFloat(item.gdp.replace(/,/g, '')) < (parseFloat(startupWorth.replace(/,/g, ''))) ) {
						$('#results').append('<li>' + item.itemName + '</li>');
					}

				});
			});
			$('#test').text( chosen.text() + ' is worth more than');

		} else {
			// Grab value.raised
			$.getJSON('_/js/country.json', function(json) {
				countryWorth = json[value].gdp;
			});

			$.getJSON('_/js/startup.json', function(json) {
				$.each(json, function(index, item) {
						
					if ( parseFloat(item.raised.replace(/,/g, '')) > (parseFloat(countryWorth.replace(/,/g, ''))) ) {
						$('#results').append('<li>' + item.itemName + '</li>');
					}

				});
			});

			$('#test').text( chosen.text() + ' is worth less than');
		}		
	}

	// When an item is selected, show the value
	$('select').change(function(){
		$('#results').html('');
		chosen = $("option:selected", this)
		whatItWas = $(this).attr("id");
		findWorth();
	});
});