module.exports = {

    async fetchCompanyInfo(stockSymbol){

        const url = "https://financialmodelingprep.com/api/v3/company/profile/" 
                    + stockSymbol;
        const options = { method: "GET", 
                          headers: { "Content-type": "application/JSON" } 
                        };
        
        let companyStats = [];
        
        await fetch(url, options)
                        .then(res => res.json())
                        .then(data => {
                            companyStats = data;
                        })
                        .catch("Fetch failed");


        return companyStats;
    }

}