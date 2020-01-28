const fetcher = require('./fetch');

function addInnerText(id, company, categoryFromSite){
    let result = document.getElementById(id);
    result.innerText = categoryFromSite;
    return result;
}

function populateDataZone(company){
    let name    = addInnerText('data-label-1', company, company.companyName);
    let price   = addInnerText('data-label-3', company, ('$' + company.price));
    let beta    = addInnerText('data-label-5', company, company.beta);
    let volAvg  = addInnerText('data-label-7', company, company.volAvg);
    let mktCap  = addInnerText('data-label-9', company, company.mktCap);
    let lastDiv = addInnerText('data-label-11', company, company.lastDiv);
    let range   = addInnerText('data-label-13', company, company.range);
    let changes = addInnerText('data-label-15', company, company.changes);
        changes.style.color = (changes.innerText > 0) ? 'chartreuse' : 'red';
    let changesPercentage = addInnerText('data-label-17', company, company.changesPercentage);
        changesPercentage.style.color = (changesPercentage.innerText.includes('+')) ? 'chartreuse' : 'red';
    let exchange = addInnerText('data-label-19', company, company.exchange);
    let industry = addInnerText('data-label-21', company, company.industry);
    let website = addInnerText('company-website', company, company.website);
        website.href = company.website;
        website.target = "_blank";
        website.innerText = company.website;
    let description = addInnerText('data-label-25', company, company.description);
    let ceo = addInnerText('data-label-27', company, company.ceo);
    let sector = addInnerText('data-label-29', company, company.sector);
    
    let logo = document.getElementById('image');
        logo.src = company.image;
    let imageAnchor = document.createElement('a');
        imageAnchor.href = company.website;
    imageAnchor.appendChild(logo);
    let imageSlot = document.getElementById('data-label-31');
    imageSlot.appendChild(imageAnchor)
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