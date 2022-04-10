const menu = () => {
	// open menu
	const $page = document.querySelector('.page');
	const $menuTrigger =	document.querySelector('.menuTrigger');
	const openMenu = () => {
		if ($page.classList.contains('menu_open')) {
			$page.classList.remove('menu_open');
			$menuTrigger.classList.remove('active_mod');
		} else {
			$page.classList.add('menu_open');
			$menuTrigger.classList.add('active_mod');
		}
	};
	$menuTrigger.addEventListener('click', openMenu);
};
export default menu;
