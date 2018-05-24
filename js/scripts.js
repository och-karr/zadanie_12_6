var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries'); //lista ul z id countries

$('#search').click(searchCountries); //po kliknieciu buttona z id search 
//wywolujemy funkcje searchCountries

function searchCountries() {
	var countryName = $('#country-name').val();
	//val - pobieramy wartosc wpisana przez uzytkownika i przypisujemy ja do zmiennej
	if(!countryName.length) countryName = 'Poland';
	//jezeli pole tekstowe bedzie puste - wartosc domyslna - Poland
	$.ajax({
		url: url + countryName,
		method: 'GET',
		success: showCountriesList
	});
}

function showCountriesList(resp) {
	countriesList.empty(); //wyczyszczenie listy krajow po porz. zapytaniu
	resp.forEach(function(item){
		$('<li>').text(item.name).appendTo(countriesList);
		//Ten kod wykona się na kazdym elemencie kolekcji. Kazdy item jest ukryty w zmiennej.
		//dodajemy element do listy
	 });
}
