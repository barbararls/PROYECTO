addEventListener('DOMContentLoaded', () => {
	const btn_menu = document.querySelector('.menu')
	if (btn_menu){
		btn_menu.addEventListener('click', () => {
			const menu_items = document.querySelector('.botonera')
			menu_items.classList.toggle('show')
		})
	}
})