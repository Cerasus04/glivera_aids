const menu = () => {
	// open menu
	const burger = document.querySelector('.headerBurgerBtn');
	const header = document.querySelector('.header');
	const closeBtn = document.querySelector('.headerCloseBtn');

	const openList = () => {
		header.classList.add('header--open');
	};
	const closeList = () => {
		header.classList.remove('header--open');
	};
	burger.addEventListener('click', openList);
	closeBtn.addEventListener('click', closeList);
};

export { menu };
