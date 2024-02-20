const countriesEl = document.querySelector('.countries');

export const createCountry = (data) => {
    countriesEl.innerHTML = '';
    data.forEach((country) => {
        const {population, name, capital, region, flags} = country
        countriesEl.innerHTML += `
        <a href="about.html?country=${name.common}" class="allCountry">
            <div class="card">
                <div class="image">
                    <img src=${flags.svg} alt="">
                </div>
                <div class="inform">
                    <h1 class="title">${name.common}</h1>
                    <div class="info">
                        <h2>Population:</h2>
                        <p>${population}</p>
                    </div>
                    <div class="info">
                        <h2>Capital:</h2>
                        <p>${capital}</p>
                    </div>
                    <div class="info">
                        <h2>region:</h2>
                        <p>${region}</p>
                    </div>
                </div>
            </div>
        </a>
        `;
    })
}

/*

<a href="about.html">
    <div class="card">
        <div class="image">
            <img src="https://flagcdn.com/er.svg" alt="">
        </div>
        <div class="inform">
            <h1 class="title">Germany</h1>
            <div class="info">
                <h2>Population:</h2>
                <p>10203526</p>
            </div>
            <div class="info">
                <h2>Capital:</h2>
                <p>Island</p>
            </div>
            <div class="info">
                <h2>region:</h2>
                <p>Asia</p>
            </div>
        </div>
    </div>
</a>

*/



// about ui
const showEl = document.querySelector('.show');

export const crateAboutInfo = (data) => {
    const {capital, population, region, flags, tld, fifa} = data
    showEl.innerHTML = '';
    const comonName = data.name.common;
    const nativeName = Object.values(data.name.nativeName)[0].official;
    const currency = Object.values(data.currencies)[0].name;
    const language = Object.values(data.languages);
    console.log(data)
    showEl.innerHTML = `
    <div class="images">
        <img src=${flags.svg} alt="">
    </div>
    <div class="info">
        <h1 class="info__title">${comonName}</h1>
        <div class="info__data">
            <span>Native Name:</span>
            <p>${nativeName}</p>
        </div>
        <div class="info__data">
            <span>Population:</span>
            <p>${population}</p>
        </div>
        <div class="info__data">
            <span>Region:</span>
            <p>${region}</p>
        </div>
        <div class="info__data">
            <span>Capital:</span>
            <p>${capital}</p>
        </div>
        <div class="info__data">
            <span>Top Level Domain:</span>
            <p>${tld}</p>
        </div>
        <div class="info__data">
            <span>Curriencies:</span>
            <p>${currency}</p>
        </div>
        <div class="info__data">
            <span>Languages:</span>
            <p>${language}</p>
        </div>
        <div class="info__data">
            <span>FIFA name:</span>
            <p>${fifa}</p>
        </div>
    </div>
    `;
}



/*



<div class="images">
    <img src="https://flagcdn.com/er.svg" alt="">
</div>
<div class="info">
    <h1 class="info__title">Germany</h1>
    <div class="info__data">
        <span>Native Name:</span>
        <p>Lorem</p>
    </div>
    <div class="info__data">
        <span>Population:</span>
        <p>Lorem</p>
    </div>
    <div class="info__data">
        <span>Region:</span>
        <p>Lorem</p>
    </div>
    <div class="info__data">
        <span>Capital:</span>
        <p>Lorem</p>
    </div>
    <div class="info__data">
        <span>Top Level Domain:</span>
        <p>Lorem</p>
    </div>
    <div class="info__data">
        <span>Curriencies:</span>
        <p>Lorem</p>
    </div>
    <div class="info__data">
        <span>Languages:</span>
        <p>Lorem</p>
    </div>
    <div class="info__borders">
        <h1>Borders: </h1>
        <span>Uzb</span>
        <span>Tjk</span>
        <span>Kgz</span>
    </div>
</div>
    

*/