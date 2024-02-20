import "../css/style.css";
import "./mode"
import request from "./request";
import { crateAboutInfo } from "./updateUI";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString)
const country = urlParams.get('country')
const countryAPI = `https://restcountries.com/v3.1/name/${country}`

request(countryAPI)
    .then((data) => {
        crateAboutInfo(data[0])
    })
    .catch((err) => {
        alert(err.message)
    })