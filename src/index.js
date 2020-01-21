const heading = require('../src/js/elements/heading');
const fetcher = require('../src/js/fetch');

heading.createHeader();

let root = document.getElementById('app');
let wrapper = document.createElement('wrapper');
wrapper.classList.add("wrapper");

let leftSection = document.createElement('wrapper');
leftSection.id = 'left-section';
let rightSection = document.createElement('wrapper');
rightSection.id = 'right-section';



fetcher.fetchCompanyInfo('GOOG')  
    .then(company => {

            let name = document.createElement('h1');  
            name.innerText = company.companyName;  
            leftSection.appendChild(name);

            let ind = document.createElement('h1');  
            ind.innerText = company.industry;  
            rightSection.appendChild(ind);
            }
        );

wrapper.appendChild(leftSection);
wrapper.appendChild(rightSection);
root.append(wrapper);