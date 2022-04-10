// ------------------- imports
import $ from 'jquery';

import { GLOBAL_VARS } from 'utils/constants';
import { documentReady, pageLoad } from 'utils';
import pageWidgetInit from './dev_vendors/dev_widget';
// ------------------- imports###
import menu from './components/menu';
import slider from './components/slider';
// ------------------  import components

// ------------------  import components###

window.jQuery = $;
window.$ = $;

const styles = ['color: #fff', 'background: #cf8e1f'].join(';');
const message = 'Developed by Glivera-team https://glivera-team.com/';
// eslint-disable-next-line no-console
console.info('%c%s', styles, message);

// -------------------  dev widget

// -------------------  dev widget###

// -------------------  global variables

const readyFunc = () => {
	// console.log('ready');
	slider();
	menu();
};

const loadFunc = () => {
	// console.log('hello');
};

documentReady(() => {
	readyFunc();
});

pageLoad(() => {
	loadFunc();
});

$('.infoLink').on('click', () => {
	$('.list_link__item:nth-child(n+4)').slideToggle('');
	$('.page').toggleClass('open_popup');
});
