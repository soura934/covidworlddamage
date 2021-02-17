

console.log('hello');
const nameOfCountry = document.querySelector(".country .name");
const casesOfCountry = document.querySelector(".cases .number");
const newCasesOfCountry = document.querySelector(".cases .new-number");
const deathOfCountry = document.querySelector(".death .number");
const newDeathOfCountry = document.querySelector(".death .new-number");
const recoverOfCountry = document.querySelector(".recover .number");
const newRecoverOfCountry = document.querySelector(".recover .new-number");

// const ctx = document.getElementById("graph").getContext("2d");

let dataApp = [],
    listOfCases = [],
    listOfRecover = [],
    listOfDeath = [],
    date = [];


let codeOfCountry = geoplugin_countryCode();
let countryName;
listOfCountries.forEach( country => {
    if (country.code == codeOfCountry) {
        countryName = country.name;
    }
});


function fetchData(countryName){
    fetch(`https://disease.sh/v3/covid-19/countries/${countryName}`, {
		"method": "GET"
	})
}