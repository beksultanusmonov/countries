import "../css/style.css";
import "./mode"
import request from "./request";
import { createCountry } from "./updateUI";
import './filter';

const API = 'https://restcountries.com/v3.1/all';

request(API)
    .then((data) => {
        createCountry(data)
    })
    .catch((err) => {
        alert(err.message)
    })