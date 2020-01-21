const fetcher = require('../src/js/fetch');


let app = document.getElementById('app');
let wrapper = document.createElement('wrapper');
wrapper.classList.add("wrapper");

let leftSection = document.createElement('section');
leftSection.id = 'left-section';
let rightSection = document.createElement('section');
rightSection.id = 'right-section';

wrapper.appendChild(leftSection);
wrapper.appendChild(rightSection);
app.append(wrapper);

fetcher.fetchCompanyInfo('GOOG')  
    .then(company => {

            let name = document.createElement('h1');  
            element.innerText = company.companyName;  
            leftSection.append(element);

            let ceo = document.createElement('h1');  
            element.innerText = company.ceo;  
            righttSection.append(element);
            }
        );
