

const nameOfCountry = document.querySelector(".name");
const casesOfCountry = document.querySelector(".cases .number");
const deathOfCountry = document.querySelector(".death .number");
const recoverOfCountry = document.querySelector(".recover .number");
const flagOfCountry = document.getElementById("flag");
// const ctx = document.getElementById("graph").getContext("2d");

let dataApp = [],
    cases = [],
    displayCountry = [],
    recovered = [],
    deaths = [],
    date = [],
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
        console.log(data.timeline);
        cases = Object.values(data.timeline.cases);
        console.log(cases);
        deaths = data.deaths;
        recovered = data.recovered
        displayCountry = data.country;
        // flagUrl = data.countryInfo.flag;
        population = data.population;

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
    recoverOfCountry.innerHTML = recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    deathOfCountry.innerHTML = deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    // flagOfCountry.innerHTML = `<img src="${flagUrl}"></img>`;

}

// let chart;
// function updateChart() {
//     chart = new Chart(ctx, {
//         type: 'line',
//         data: {
//             datasets: [{
//                 label: 'Total Cases',
//                 data: cases.toString(),
//                 fill: false,
//                 borderColor: 'white',
//                 backgroundColor:'white',
//                 borderWidth: 1
//             },
//             {
//                 label: 'Recovered',
//                 data: recovered.toString(),
//                 fill: false,
//                 borderColor: 'green',
//                 backgroundColor:'green',
//                 borderWidth: 1
//             },
//             {
//                 label: 'Death',
//                 data: deaths.toString(),
//                 fill: false,
//                 borderColor: 'red',
//                 backgroundColor:'red',
//                 borderWidth: 1
//             }],
//             labels: population.toString(),
//         },
//         options: {
//             responsive: true,
//             maintainAspectRatio: false
//         }
//     });
// }