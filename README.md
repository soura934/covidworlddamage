# Covid Stats

## Background 
World Covid Stats is an app that shows the number of damage caused by covid around the word.

## Technologies
- Vanilla JavaScript
- Canvas
- HTML & CSS
- Webpack to bundle

## Functionality & MVP
- The app will show the covid stats of each country of the world
- The app will contain a graph 
- The app will provide the number of people who recover from covid around the world

## Features

### Search Bar
- Search Bar contains all countries in the word
- As you start typing letters from a country, suggestions will pop up from the help of the folling code
```
document.addEventListener("DOMContentLoaded",() => {
const searchField = document.getElementById("search-field");
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
```

### Graph

<!-- ![alt text](https://github.com/soura934/covidworlddamage/blob/main/src/images/Frame.png) -->

## Implementation Timeline
- Day 1: Research for an API and probably more technology to use like D3.js
- Day 2: Fetch API with the info needed  
- Day 3: Go over the functionality of the app and if more is needed
- Day 4: Build the graph
- Day 5: Styling fix bugs
