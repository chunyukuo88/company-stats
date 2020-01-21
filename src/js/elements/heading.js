module.exports = {

    createHeader(){
        const root = document.getElementById('app');
        const heading = document.createElement('h1');
        heading.id = "heading";
        heading.innerText = "Kapital Vue"         
        root.appendChild(heading);
    }

}
