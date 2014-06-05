$(document).ready(function() {
	// Get GDP
	
	$.getJSON('http://jsonp.jit.su/?callback=&url=http%3A%2F%2Fapi.worldbank.org%2Fcountries%2Fall%2Findicators%2FNY.GDP.MKTP.CD%3Fdate%3D2000%26format%3Djson%26per_page%3D300', function(data){
	  $.each(data[1],function(i,value){
	  	$('#country')
			.append($('<option></option>')
			.attr('value',i)
			.text(value.country['value'])); 
			$('select').trigger('chosen:updated');
	  });
	});

	$.getJSON('http://jsonp.jit.su/?callback=&url=https%3A%2F%2Fapi.angel.co%2F1%2Fstartups%3Ffilter%3Draising', function(data){
	  $.each(data['startups'],function(i,value){
	  	$('#startup')
			.append($('<option></option>')
			.attr('value',i)
			.text(value['name'])); 
			$('select').trigger('chosen:updated');
	  });
	});

	// var startupWorth = 0,
	//     chosenStartup = 0;

	
	// $("select").chosen({no_results_text: "Oops, nothing found!"}); 

	// // Add options to select menu 
 //  function appendName(fileName) {
 //  	$.getJSON('_/js/' + fileName + '.json', function(json) {
	// 		$.each(json,function(i, value){
	// 			$('#' + fileName)
	// 			.append($("<option></option>")
	// 			.attr("value",i)
	// 			.text(value.itemName)); 
	// 			$("select").trigger("chosen:updated");
	// 		});
	// 	});
 //  }

	// appendName('country');
	// appendName('startup');

	// function findWorth(selected) {
	// 	//optSelect = $('#startup option:selected');
	// 	//chosenStartup = $("option:selected", this).val();
		
	// 	value = chosen.val();
	// 	$('body').addClass('selected');

	// 	if ( whatItWas == 'startup' ) {
	// 		//Grab value.raised
	// 		$.getJSON('_/js/startup.json', function(json) {
	// 			startupWorth = json[value].raised;
	// 		});

	// 		$.getJSON('_/js/country.json', function(json) {
	// 			$.each(json, function(index, item) {
						
	// 				if ( parseFloat(item.gdp.replace(/,/g, '')) < (parseFloat(startupWorth.replace(/,/g, ''))) ) {
	// 					$('#results').append('<li>' + item.itemName + '</li>');
	// 				}

	// 			});
	// 		});
	// 		$('#test').text( chosen.text() + ' is valued more than');

	// 	} else {
	// 		// Grab value.raised
	// 		$.getJSON('_/js/country.json', function(json) {
	// 			countryWorth = json[value].gdp;
	// 		});

	// 		$.getJSON('_/js/startup.json', function(json) {
	// 			$.each(json, function(index, item) {
						
	// 				if ( parseFloat(item.raised.replace(/,/g, '')) > (parseFloat(countryWorth.replace(/,/g, ''))) ) {
	// 					$('#results').append('<li>' + item.itemName + '</li>');
	// 				}

	// 			});
	// 		});

	// 		$('#test').text( chosen.text() + ' has less than');
	// 	}		
	// }

	// // When an item is selected, show the value
	// $('select').change(function(){
	// 	$('#results').html('');
	// 	chosen = $("option:selected", this)
	// 	whatItWas = $(this).attr("id");
	// 	findWorth();
	// });
});