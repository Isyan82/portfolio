// menu script
const gamburger = document.querySelector('.hanburger'),
	menu = document.querySelector('.menu'),
	menuClose = document.querySelector('.menu__close'),
	menuOverlay = document.querySelector('.menu__overlay');


const closeMenu = (modalSelector) => {
	modalSelector.classList.remove('active')
}
const openMenu = (modalSelector) => {
	modalSelector.classList.add('active')
}

gamburger.addEventListener('click', () => {
	openMenu(menu);
	// menu.classList.add('active');
	setTimeout(() => {
		openMenu(menuClose)
		// menuClose.classList.add('active');
	}, 1000)
})
menuClose.addEventListener('click', () => {
	closeMenu(menu)
	closeMenu(menuClose)
})
menuOverlay.addEventListener('click', () => {
	closeMenu(menu)
	closeMenu(menuClose)
})

document.addEventListener('keydown', (e) => {
	if (e.code === "Escape") {
		closeMenu(menu);
		closeMenu(menuClose)
	}
});



// progress script
const progressCounters = document.querySelectorAll('.progress__counter'),
	progressLevels = document.querySelectorAll('.progress__level');

progressCounters.forEach((item, index) => {
	progressLevels[index].style.width = item.textContent;
});



// form script
const overlay = document.querySelector('.overlay'),
	form = document.querySelector('.contacts__form'),
	modal = document.querySelector('.modal'),
	modalClose = document.querySelector('.modal__close');


const closeModal = (modalSelector) => {
	modalSelector.classList.remove('active');
}

form.addEventListener('submit', (evt) => {
	evt.preventDefault();
	overlay.classList.add('active');
	modal.classList.add('active')

	setTimeout(() => {
		modalClose.classList.add('active')
	}, 1000)

	setTimeout(() => {
		closeModal(overlay);
		closeModal(modal);
		closeModal(modalClose)
	}, 6000);

	form.reset();
})

modalClose.addEventListener('click', () => {
	closeModal(overlay);
	closeModal(modal);
	closeModal(modalClose)
})

document.addEventListener('keydown', (e) => {
	if (e.code === "Escape") {
		closeModal(overlay);
		closeModal(modal);
		closeModal(modalClose)
	}
});