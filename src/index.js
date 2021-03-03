// import {listOfCountries} from './ressources/countries';


document.addEventListener("DOMContentLoaded",() => {
    const searchField = document.getElementById("search-field");
    const listCountries = document.querySelector(".list-countries");
    const casesEle = document.querySelector(".cases");
    const deathEle = document.querySelector(".death");
    const recoverEle = document.querySelector(".recover");
    const imgEle = document.querySelector(".img");

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
        searchField.value = "";
        listCountries.classList.toggle("hide");
        nameOfCountry.classList.remove("hide");
        casesEle.classList.remove("hide");
        deathEle.classList.remove("hide");
        recoverEle.classList.remove("hide");        
        imgEle.classList.remove("hide");        
    })

    
    searchField.addEventListener("input", function(){
        listCountries.classList.remove("hide");
    })
    searchField.addEventListener("input", function(){
        if (searchField.value === "") {
            listCountries.classList.toggle("hide");
        }
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
