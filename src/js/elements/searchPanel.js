const fetcher = require('./fetch');


function populateDataZone(company){
    let name = document.getElementById('data-label-1');
    name.innerText = company.companyName;
    let price = document.getElementById('data-label-3');
    price.innerText = ('$' + company.price);
    let beta = document.getElementById('data-label-5');
    beta.innerText = company.beta;
    let volAvg = document.getElementById('data-label-7');
    volAvg.innerText = company.volAvg;
    let mktCap = document.getElementById('data-label-9');
    mktCap.innerText = company.mktCap;
    let lastDiv = document.getElementById('data-label-11');
    lastDiv.innerText = company.lastDiv;
    let range = document.getElementById('data-label-13');
    range.innerText = company.range;
    let changes = document.getElementById('data-label-15');
    changes.innerText = company.changes;
    let changesPercentage = document.getElementById('data-label-17');
    changesPercentage.innerText = company.changesPercentage;
    changesPercentage.style.color = (changesPercentage.innerText.includes('+')) ? 'green' : 'red';
    let exchange = document.getElementById('data-label-19');
    exchange.innerText = company.exchange;
    let industry = document.getElementById('data-label-21');
    industry.innerText = company.industry;
    let website = document.getElementById('data-label-23');
    website.innerText = company.website;
    let description = document.getElementById('data-label-25');
    description.innerText = company.description;
    let ceo = document.getElementById('data-label-27');
    ceo.innerText = company.ceo;
    let sector = document.getElementById('data-label-29');
    sector.innerText = company.sector;
    let image = document.getElementById('data-label-31');
    image.innerText = company.image;
}

function createButton(){
    const button = document.createElement('button');
    button.id = "button";
    button.innerText = "Search"
    button.onclick = () => {
        let stock = document.getElementById('form').elements[0].value;
        fetcher.fetchCompanyInfo(stock)
            .then(company => {
                              populateDataZone(company);
                             }
                 )
        }  
    let leftSection = document.getElementById('left-section');
    leftSection.appendChild(button);
}

function createForm(){
    const form = document.createElement('form');
    form.id = "form";
    form.innerText = "Stock symbol";
        const inputSpace = document.createElement('input');
        inputSpace.id = 'input';
        inputSpace.type = 'text';
        form.appendChild(inputSpace);
    let leftSection = document.getElementById('left-section');
    leftSection.appendChild(form);
}

module.exports = {
    createForm,
    createButton
  };