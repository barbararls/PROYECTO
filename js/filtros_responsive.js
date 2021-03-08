addEventListener('DOMContentLoaded', () => {
	const btn_menu = document.querySelector('.filtroicono')
	if (btn_menu){
		btn_menu.addEventListener('click', () => {
			const menu_items = document.querySelector('.filtros')
			menu_items.classList.toggle('show')
		})
	}
})