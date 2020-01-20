module.exports = {

    async fetchCompanyInfo(stockSymbol){

        const url = "https://financialmodelingprep.com/api/v3/company/profile/" 
                    + stockSymbol;
        const options = { method: "GET", 
                          headers: { "Content-type": "application/JSON" } 
                        };
        
        let companyStats = {};
        
        await fetch(url, options)
                        .then(res => res.json())
                        .then(data => {
                            console.log("The goods:\n\n" + data.profile.price);
                            companyStats = data.profile;
                        })
                        .catch("Fetch failed");


        return companyStats;
    }

}