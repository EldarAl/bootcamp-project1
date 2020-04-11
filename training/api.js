const usd = fetch('https://api.ratesapi.io/api/latest');

usd.then(res => res.json()).then(res => {
    console.log('USD =' + res.rates.GBP + 'GBP');
})