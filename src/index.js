const fetcher = require('../src/js/fetch');

let company = fetcher.fetchCompanyInfo('AAPL');
console.log(company);