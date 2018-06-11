var url = 'https://restcountries.eu/rest/v1/name/';
var flags1 = 'http://www.countryflags.io/';
var flags2 = '/flat/64.png';
var flag = $('#flag');
var header = $('#properties');
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
		success: showCountries
	});
}

function showFlag(codeString) {
	header.empty(); 
	codeString.forEach(function(codeString){
		$("#flag").attr("src",flags1+codeString+flags2);
	});
}


function showHeaders(resp) {
	header.empty(); 
	resp.forEach(function(){
		$('<li>').text('Code: ' ).appendTo(header);
		$('<li>').text('Name of country: ' ).appendTo(header);
		$('<li>').text('Capital: ').appendTo(header);
		$('<li>').text('Area: ').appendTo(header);
		$('<li>').text('Population: ').appendTo(header);
		$('<li>').text('Region: ').appendTo(header);
	 });
}


function showCountriesList(resp) {
	countriesList.empty(); //wyczyszczenie listy krajow po porz. zapytaniu
	resp.forEach(function(item){
		$('<li>').text(item.alpha2Code).appendTo(countriesList);
		$( 'ul>first-of-type').addClass('txt');
		$('<li>').text(item.name).appendTo(countriesList);
		$('<li>').text(item.capital).appendTo(countriesList);
		$('<li>').text(item.area).appendTo(countriesList);
		$('<li>').text(item.population).appendTo(countriesList);
		$('<li>').text(item.region).appendTo(countriesList);
		//Ten kod wykona się na kazdym elemencie kolekcji. Kazdy item jest ukryty w zmiennej.
		//dodajemy element do listy
	 });
}

var code = document.getElementsByClassName("txt").innerHTML;
var codeString = JSON.stringify(code);



function showCountries(resp) {
	showHeaders(resp);
	showCountriesList(resp);
	showFlag(resp);
}

// function showCountriesList(resp) {
// 	countriesList.empty(); //wyczyszczenie listy krajow po porz. zapytaniu
// 	resp.forEach(function(item){
// 		$('<tr>').appendTo(countriesList);
// 		$('<td>').text(item.name).appendTo(?????);
// 		$('<td>').text(item.capital).appendTo(countriesList);
// 		//Ten kod wykona się na kazdym elemencie kolekcji. Kazdy item jest ukryty w zmiennej.
// 		//dodajemy element do listy
// 	 });
// }