const menu = () => {
	// open menu
	const $page = document.querySelector('.page');
	const $burger = $page.querySelector('.headerBurgerBtn');
	const header = $page.querySelector('.header');
	const $closeBtn = $page.querySelector('.headerCloseBtn');

	const openList = () => {
		header.classList.add('header--open');
		$page.classList.add('hidden');
	};
	const closeList = () => {
		header.classList.remove('header--open');
		$page.classList.remove('hidden');
	};
	$burger.addEventListener('click', openList);
	$closeBtn.addEventListener('click', closeList);
};

export default menu;
