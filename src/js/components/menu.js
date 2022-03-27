const menu = () => {
	// open menu
	const burger = document.querySelector('.header__burger_btn');
	const header = document.querySelector('.header');
	const closeBtn = document.querySelector('.header__close_btn');

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
