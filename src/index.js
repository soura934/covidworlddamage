import {listOfCountries} from './ressources/countries'


document.addEventListener("DOMContentLoaded",() => {


const searchCountriesEle = document.querySelector(".search-countries");
const searchField = document.getElementById("search-field");
const listCountries = document.querySelector(".list-countries");
function createList(){
    const numberOfCountries = listOfCountries.length;

    let i = 0, listId;

    listOfCountries.forEach((country, idx) => {
        if(idx % Math.ceil(numberOfCountries/numberOfUlLists) == 0){
            listId = `list-${i}`;
            listCountries.innerHTML += `<ul id='${listId}'></ul>`
            i++;
        }

        document.getElementById(`${listId}`)
        .innerHTML += `<li onclick="fetchData('${country.name}')" id="${country.name}">
            ${country.name}
        </li>`;
    })
}
    let numberOfUlLists = 4;
    createList();

    listCountries.addEventListener("click", function(){
        listCountries.classList.toggle("hide");
    })
    
    searchField.addEventListener("input", function(){
        let value = searchField.value.toUpperCase();
    
        listOfCountries.forEach(country => {
            if (country.name.toUpperCase().startsWith(value)) {
                document.getElementById(country.name).classList.remove("hide");
            } else {
                document.getElementById(country.name).classList.add("hide");
            }
        })
    })
});

