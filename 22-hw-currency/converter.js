const base_url = 'https://api.apilayer.com/fixer';
const api_key = '4QHV6P8Jh85woZ3ex6LCQA5UPukGQaAW';

var myHeaders = new Headers();
myHeaders.append("apikey", api_key);

var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
};

fetch("https://api.apilayer.com/fixer/symbols", requestOptions)
    .then(response => response.json())
    .then(data => {
        const fromCurrency = document.getElementById('fromCurrency');
        const toCurrency = document.getElementById('toCurrency');

        for (const currencyCode in data.symbols) {
            const option = document.createElement('option');
            option.value = currencyCode;
            option.textContent = `${currencyCode}`;
            fromCurrency.appendChild(option.cloneNode(true));
            toCurrency.appendChild(option.cloneNode(true));
        }
    })
    .catch(error => console.log('error', error));


convert.onclick = () => {
    fetch(`${base_url}/convert?from=${fromCurrency.value.trim()}&to=${toCurrency.value.trim()}&amount=${sum.value.trim()}`, {
        headers: {
            apikey: api_key
        }
    })
        .then(result => result.json())
        .then(data => data.result)
        .then(res => {
            const h1 = document.createElement('h1');
            h1.append(`Result: ${res.toFixed(2)}`)
            if (result.firstElementChild) {
                result.replaceChild(h1, result.firstElementChild)
            } else {
                result.append(h1);
            }
        })
        .catch(e => {
            const h1 = document.createElement('h1');
            h1.append(`Error`)
            if (result.firstElementChild) {
                result.replaceChild(h1, result.firstElementChild)
            } else {
                result.append(h1);
            }
        })
}