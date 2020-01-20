const fetcher = require('../src/js/fetch');

let enterprise;

fetcher.fetchCompanyInfo('GOOG')  
    .then(company => {
            console.log("PRICE:" + company.price); 

            let app = document.getElementById('app');  
            let element = document.createElement('p');  

            element.innerText = company.companyName;  
            app.append(element);
            }
        );