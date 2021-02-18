

console.log('hello');
const nameOfCountry = document.querySelector(".name");
const casesOfCountry = document.querySelector(".cases .number");
const newCasesOfCountry = document.querySelector(".cases .new-number");
const deathOfCountry = document.querySelector(".death .number");
const newDeathOfCountry = document.querySelector(".death .new-number");
const recoverOfCountry = document.querySelector(".recover .number");
const newRecoverOfCountry = document.querySelector(".recover .new-number");

// const ctx = document.getElementById("graph").getContext("2d");

let dataApp,
    cases ,
    displayCountry,
    recovered,
    deaths,
    date;


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
	}).then(response => {
        return response.json();
    }).then(data => {
        // console.log(data.cases, data.country);
        console.log(data);
        // // all = Object.keys(data)
        cases = data.cases;
        deaths = data.deaths;
        recovered = data.recovered
        displayCountry = data.country;
    }).then( () => {
        updateHTML();
    }).catch( error => {
        console.log(error);
    })
}

fetchData(countryName);

function updateHTML(){
    updateNumbers();
    // updateChart();
}

function updateNumbers(){
    nameOfCountry.innerHTML = displayCountry;
    casesOfCountry.innerHTML = cases;
    recoverOfCountry.innerHTML = recovered
    deathOfCountry.innerHTML = deaths;
}