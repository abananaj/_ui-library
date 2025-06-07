import Tooltip from './theatrum-ui/tooltip';
import Dropdown from './theatrum-ui/dropdown';

// create tooltip
// const tooltip = new Tooltip(document.querySelector('.tooltip'));
// tooltip.init();

// CREATE TOOLTIP
const tooltip = new Tooltip(document.querySelector(".tooltip"));

tooltip.init();

// CREATE DROPDOWNS
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const instance = new Dropdown(dropdown);
    instance.init();
})