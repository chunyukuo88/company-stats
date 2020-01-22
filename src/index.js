const heading = require('../src/js/elements/heading');
const interface = require('../src/js/elements/userInterface');
const searchPanel = require('./js/elements/searchPanel');
const resultsPanel = require('./js/elements/resultsPanel');

heading.createHeader();
interface.createSections();

searchPanel.createIntro();
searchPanel.createForm();
searchPanel.createButton();

resultsPanel.createDataZone();
resultsPanel.affixLabels();