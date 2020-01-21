module.exports = {

    createButton(){
        const button = document.createElement('button');
        button.id = "button";
        button.innerText = "Search"
        button.onclick = () => {
            console.log("clicked!");
            //try {save the input as a variable to be passed to the fetch() call}
            //catch {"Stock symbol not found."}
        }  
        let leftSection = document.getElementById('left-section');
        leftSection.appendChild(button);
    },

    createForm(){
        const form = document.createElement('form');
        form.id = "form";
        form.innerText = "Stock symbol";
        const inputSpace = document.createElement('input');
        inputSpace.type = 'text';
        form.appendChild(inputSpace);
        let leftSection = document.getElementById('left-section');
        leftSection.appendChild(form);
    }

}
