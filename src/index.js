const heading = require('../src/js/elements/heading');
const searchPanel = require('./js/elements/searchPanel');
const fetcher = require('../src/js/fetch');
const interface = require('../src/js/elements/userInterface');


heading.createHeader();
interface.createSections();
searchPanel.createForm();
searchPanel.createButton();



fetcher.fetchCompanyInfo('GOOG')  
    .then(company => {

            let name = document.createElement('h1');  
            name.innerText = company.companyName;  
            let rightSection = document.getElementById('right-section');
            rightSection.appendChild(name);

            let ind = document.createElement('h1');  
            ind.innerText = company.industry;  
            rightSection.appendChild(ind);
            }
        );