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
        changes.style.color = (changes.innerText > 0) ? 'chartreuse' : 'red';
        let changesPercentage = document.getElementById('data-label-17');
    changesPercentage.innerText = company.changesPercentage;
    changesPercentage.style.color = (changesPercentage.innerText.includes('+')) ? 'chartreuse' : 'red';
    let exchange = document.getElementById('data-label-19');
    exchange.innerText = company.exchange;
    let industry = document.getElementById('data-label-21');
    industry.innerText = company.industry;
        let website = document.getElementById('company-website');
        website.href = company.website;
        website.target = "_blank";
        website.innerText = company.website;
    let description = document.getElementById('data-label-25');
    description.innerText = company.description;
    let ceo = document.getElementById('data-label-27');
    ceo.innerText = company.ceo;
    let sector = document.getElementById('data-label-29');
    sector.innerText = company.sector;
    let logo = document.getElementById('image');
    logo.src = company.image;
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
    form.id = 'form';
        const inputSpace = document.createElement('input');
        inputSpace.id = 'input';
        inputSpace.placeholder = 'Stock symbol';
        inputSpace.type = 'text';
        form.appendChild(inputSpace);
    let leftSection = document.getElementById('left-section');
    leftSection.appendChild(form);
}

function createIntro(){
    const intro = document.createElement('p');
    intro.id = 'intro';
    intro.innerText = 'Welcome to Capital Vue 2.0! This site is an homage to a previous employer also involved in the financial data market. Enter in the stock ticker symbol of a publicly traded company to see its latest price data and more!';
    let leftSection = document.getElementById('left-section');
    leftSection.appendChild(intro);
}

module.exports = {
    createForm,
    createButton,
    createIntro
  };