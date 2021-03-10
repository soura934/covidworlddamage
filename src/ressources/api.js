

const nameOfCountry = document.querySelector(".name");
const casesOfCountry = document.querySelector(".cases .number");
const deathOfCountry = document.querySelector(".death .number");
const recoverOfCountry = document.querySelector(".recover .number");
const flagOfCountry = document.getElementById("flag");
const ctx = document.getElementById("graph").getContext("2d");

let dataApp = [],
    cases = [],
    displayCountry = [],
    recovered = [],
    deaths = [],
    dates = [],
    // flagUrl = [],
    population = [];



let countryName;
listOfCountries.forEach( country => {
        countryName = country.name;
});
// https://disease.sh/v3/covid-19/countries/${countryName}

function fetchData(countryName){
    fetch(`https://disease.sh/v3/covid-19/historical/${countryName}`, {
		"method": "GET"
	}).then(response => {
        return response.json();
    }).then(data => {
        console.log(data);
        console.log(Object.keys(data.timeline.cases));
        timeline = data.timeline;
        cases = Object.values(timeline.cases);
        deaths = Object.values(timeline.deaths);
        recovered = Object.values(timeline.recovered);
        displayCountry = data.country;
        dates = Object.keys(timeline.cases);
        // flagUrl = data.countryInfo.flag;
        // population = data.population;

    }).then( () => {
        updateHTML();
    }).catch( error => {
        console.log(error);
    })
}

fetchData(countryName);

function updateHTML(){
    updateNumbers();
    updateChart();
}

function updateNumbers(){
    nameOfCountry.innerHTML = displayCountry;
    casesOfCountry.innerHTML = cases[cases.length -1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    recoverOfCountry.innerHTML = recovered[recovered.length -1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    deathOfCountry.innerHTML = deaths[deaths.length -1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    // flagOfCountry.innerHTML = `<img src="${flagUrl}"></img>`;

}

let chart;
function updateChart() {
    chart = new Chart(ctx, {
        type: 'line',
        data: {
            datasets: [{
                label: 'Total Cases',
                data: cases,
                fill: false,
                borderColor: 'white',
                backgroundColor:'white',
                borderWidth: 1
            },
            {
                label: 'Recovered',
                data: recovered,
                fill: false,
                borderColor: 'green',
                backgroundColor:'green',
                borderWidth: 1
            },
            {
                label: 'Death',
                data: deaths,
                fill: false,
                borderColor: 'red',
                backgroundColor:'red',
                borderWidth: 1
            }],
            labels: dates,
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
}