module.exports = {

    createDataZone(){
        const dataZone = document.getElementById('right-section');
        
        const dataGrid = document.createElement("wrapper");   
        dataGrid.id = "dataGrid";    
        dataZone.appendChild(dataGrid);

        /* There are 16 data points.*/
        for (let index = 0; index < 32; index++) {
            const dataSlot = document.createElement("p");
            dataSlot.classList.add('data-slots');
            dataSlot.id = ('data-label-' + index);
            dataGrid.appendChild(dataSlot);
        }
    },

    affixLabels(){
        // These variable names are the same the object field names of the API.
        const companyName = document.getElementById('data-label-0');
        companyName.innerText = 'Company Name';
        const price = document.getElementById('data-label-2');
        price.innerText = 'Price';
        const beta = document.getElementById('data-label-4');
        beta.innerText = 'Beta';
        const volAvg = document.getElementById('data-label-6');
        volAvg.innerText = 'Average Volume:';
        const mktCap = document.getElementById('data-label-8');
        mktCap.innerText = 'Market Cap';
        const lastDiv = document.getElementById('data-label-10');
        lastDiv.innerText = 'Last Dividend';
        const range = document.getElementById('data-label-12');
        range.innerText = 'Range';
        const changes = document.getElementById('data-label-14');
        changes.innerText = 'Changes';
        const changesPercentage = document.getElementById('data-label-16');
        changesPercentage.innerText = 'Change (%)';

        const exchange = document.getElementById('data-label-18');
        exchange.innerText = 'Exchange';
        const industry = document.getElementById('data-label-20');
        industry.innerText = 'Industry';
        const website = document.getElementById('data-label-22');
        website.innerText = 'Website';
        const description = document.getElementById('data-label-24');
        description.innerText = 'Description';
        const ceo = document.getElementById('data-label-26');
        ceo.innerText = 'Chief Executive';
        const sector = document.getElementById('data-label-28');
        sector.innerText = 'Sector';
        const image = document.getElementById('data-label-30');
        image.innerText = 'Logo';

    }


}