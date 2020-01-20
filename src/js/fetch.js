module.exports = {

    fetchCompanyInfo(stockSymbol){
        const url = "https://financialmodelingprep.com/api/v3/company/profile/" + stockSymbol;
        const options = { method: "GET", headers: { "Content-type": "application/JSON" }};     
     
        return fetch(url, options)
                        .then(res => res.json())
                        .then(data => data.profile)
                        .catch("Fetch failed");
    }



}