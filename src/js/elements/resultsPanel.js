module.exports = {

    createWithId(HtmlElementType, id){
        let result = document.createElement(HtmlElementType);
        result.id = id;
    },

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

        let imageContainer = document.getElementById('data-label-31');
        let image = document.createElement('img');
        image.id = 'image';
        imageContainer.appendChild(image);

        let site = document.createElement('a');
        site.id = 'company-website';
        let siteContainer = document.getElementById('data-label-23');
        siteContainer.appendChild(site);
    },

    createLabel(IdNumber, labelName){
        let label = document.getElementById('data-label-' + IdNumber);
        label.innerText = labelName;
        return label;
    },

    affixLabels(){
        companyName = this.createLabel(0, 'Company Name');
        price       = this.createLabel(2, 'Price');
        beta        = this.createLabel(4, 'Beta');
        volAvg      = this.createLabel(6, 'Average Volume');
        mktCap      = this.createLabel(8, 'Market Cap');
        lastDiv     = this.createLabel(10, 'Last Dividend');
        range       = this.createLabel(12, 'Range');
        changes     = this.createLabel(14, 'Changes');
        changesPercentage = this.createLabel(16, 'Change (%)');
        exchange    = this.createLabel(18, 'Exchange');
        industry    = this.createLabel(20, 'Industry');
        website     = this.createLabel(22, 'Website');
        description = this.createLabel(24, 'Description');
        ceo         = this.createLabel(26, 'Chief Executive');
        sector      = this.createLabel(28, 'Sector');
        logo        = this.createLabel(30, 'Logo');
    }
}