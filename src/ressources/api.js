


const nameOfCountry = document.querySelector(".name");
const casesOfCountry = document.querySelector(".cases .number");
const deathOfCountry = document.querySelector(".death .number");
const recoverOfCountry = document.querySelector(".recover .number");


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
        // console.log(data);
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
}

function updateNumbers(){
    nameOfCountry.innerHTML = displayCountry;
    casesOfCountry.innerHTML = cases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    recoverOfCountry.innerHTML = recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    deathOfCountry.innerHTML = deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}