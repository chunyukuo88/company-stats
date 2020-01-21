module.exports = {

    createSections(){

    let root = document.getElementById('app');
    let wrapper = document.createElement('wrapper');
    wrapper.classList.add("wrapper");
    
    let leftSection = document.createElement('wrapper');
    leftSection.id = 'left-section';
    
    let rightSection = document.createElement('wrapper');
    rightSection.id = 'right-section';
    
    wrapper.appendChild(leftSection);
    wrapper.appendChild(rightSection);
    root.append(wrapper);
    
    }
    
}