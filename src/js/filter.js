const searchForm = document.querySelector('form');

searchForm.search.addEventListener('input', () => {
    const search = searchForm.search.value.toLowerCase();
    const informTitle = document.querySelectorAll('.inform .title');
    const allCountryEl = document.querySelectorAll('.allCountry');
    informTitle.forEach((title, i) => {
        if(title.textContent.toLowerCase().includes(search)){
            allCountryEl[i].style.display = 'block'
        }else{
            allCountryEl[i].style.display = 'none'
        }
    })
})


import request from "./request";
import { createCountry } from "./updateUI";

const filterTitle = document.querySelector('.fil span');
const filterRegions = document.querySelectorAll('.choosen li');

filterRegions.forEach((li) => {
    li.addEventListener('click', () => {
        filterTitle.textContent = li.textContent;
        let filterApi;

        if(li.textContent == 'All'){
            filterApi = 'https://restcountries.com/v3.1/all'
        }else{
            filterApi = `https://restcountries.com/v3.1/region/${li.textContent}`
        }

        request(filterApi)
            .then((data) => {
                createCountry(data)
            })
            .catch((err) => {
                alert(err.message)
            })

    })
})