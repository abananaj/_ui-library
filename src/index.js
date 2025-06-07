import Tooltip from './theatrum-ui/tooltip';
import Dropdown from './theatrum-ui/dropdown';
import Tabs from './theatrum-ui/tabs';
import Snackbar from './theatrum-ui/snackbar';

// CREATE TOOLTIP
const tooltip = new Tooltip(document.querySelector(".tooltip"));
tooltip.init();

// CREATE DROPDOWNS
const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown => {
    const instance = new Dropdown(dropdown);
    instance.init();
})

// CREATE TABS
const tabs = new Tabs(document.querySelector('.tabs'));
tabs.init();

// CREATE SNACKBAR
const snackbar = new Snackbar();
snackbar.init();

const button = document.querySelector('button');
button.addEventListener('click', () => {
    snackbar.show('you clicked me');
})