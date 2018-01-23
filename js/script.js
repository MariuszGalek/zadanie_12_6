var url = 'https://restcountries.eu/rest/v2/name/';
var countriesList = $('#countries');

$('#search').click(searchCountries);

function searchCountries() {
  	var countryName = $('#country-name').val();
  	if(!countryName.length) countryName = 'Poland';
  	$.ajax({
  		url: url + countryName,
  		method: 'GET',
  		success: showCountriesList
  	});
}

function showCountriesList(resp) {
  	countriesList.empty();
  	resp.forEach(function(item) {
   		$('<li>').addClass('country').append(item.name).appendTo(countriesList);
      $('<li>').append('<span>Capital</span>' + ":  " + item.capital).appendTo(countriesList);
      $('<li>').append('<span>Area (km&sup2;)</span>' + ":  " + item.area).appendTo(countriesList);
      $('<li>').append('<span>Population</span>' + ":  " + item.population).appendTo(countriesList);
      $('<li>').append('<span>Currency</span>' + ":  " + item.currencies[0].name).appendTo(countriesList);
      $('<li>').addClass('bottom-line').appendTo(countriesList);
	});
}
