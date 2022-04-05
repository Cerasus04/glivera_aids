// ------------------- imports
import $ from 'jquery';
import { GLOBAL_VARS } from 'utils/constants';
import { documentReady, pageLoad } from 'utils';
import pageWidgetInit from './dev_vendors/dev_widget';
// ------------------- imports###
// import { slider } from './components/slider';
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
	// slider();
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
// open menu
const page = document.querySelector('.page');
const burger = document.querySelector('.header__burger_btn');
const header = document.querySelector('.header');
const closeBtn = document.querySelector('.header__close_btn');

const openList = () => {
	header.classList.add('header--open');
	page.classList.add('hidden');
};
const closeList = () => {
	header.classList.remove('header--open');
	page.classList.remove('hidden');
};
burger.addEventListener('click', openList);
closeBtn.addEventListener('click', closeList);
