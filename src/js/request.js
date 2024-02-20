const loaderEl = document.querySelector('.loader');

const request = async (resource) => {
    loaderEl.classList.remove('hidden');
    const req = await fetch(resource);
    if(!req.ok){
        loaderEl.classList.add('hidden');
        throw new Error('Qandaydir xatolik sodir bo`ldi');
    }
    const data = await req.json()
    loaderEl.classList.add('hidden');
    return data;
}

export default request;