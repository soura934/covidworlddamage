

const nameOfCountry = document.querySelector(".name");
const casesOfCountry = document.querySelector(".cases .number");
const deathOfCountry = document.querySelector(".death .number");
const recoverOfCountry = document.querySelector(".recover .number");
const ctx = document.getElementById("graph").getContext("2d");

let dataApp,
    cases ,
    displayCountry,
    recovered,
    deaths,
    date;



let countryName;
listOfCountries.forEach( country => {
        countryName = country.name;
});


function fetchData(countryName){
    fetch(`https://disease.sh/v3/covid-19/countries/${countryName}`, {
		"method": "GET"
	}).then(response => {
        return response.json();
    }).then(data => {
        // console.log(data.cases, data.country);
        console.log(new Date(data.updated));
        // all = Object.keys(data)
        cases = data.cases;
        deaths = data.deaths;
        recovered = data.recovered
        displayCountry = data.country;
        date = data.updated

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
    casesOfCountry.innerHTML = cases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    recoverOfCountry.innerHTML = recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    deathOfCountry.innerHTML = deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

let chart;
function updateChart() {
    chart = new Chart(ctx, {
        type: 'line',
        data: {
            datasets: [{
                label: 'First dataset',
                data: 0
            }],
            labels: 0,
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
}