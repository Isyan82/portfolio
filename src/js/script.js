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

	setTimeout(() => {
		openMenu(menuClose)
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
	modalText = document.querySelector('.modal__text'),
	modalClose = document.querySelector('.modal__close');
//=================================================================//

// функция закрытия элемента модального окна
const closeModalElement = (modalSelector) => {
	modalSelector.classList.remove('active');
}

// функция показа модального окна с объявлением
const showModal = (text) => {
	modalText.innerHTML = text
	overlay.classList.add('active');
	modal.classList.add('active');
}
// функция показа крестика
const showModalClose = () => {
	setTimeout(() => {
		modalClose.classList.add('active')
	}, 1000);
}

// функция отправки формы
form.addEventListener('submit', (evt) => {
	evt.preventDefault();

	const formData = new FormData(form);
	fetch('#',
		{
			method: 'POST',
			body: formData,
		})
		.then((response) => {
			if (response.ok === true) {
				// Объявление об успешной оправке формы
				showModal('Спасибо за вашу заявку! <br /> Я скоро с вами свяжусь.');
				showModalClose();
				setTimeout(() => {
					closeModalElement(overlay);
					closeModalElement(modal);
					closeModalElement(modalClose)
				}, 6000);
				form.reset();
			} else {
				// Объявление о неуспешной оправке формы
				showModal('Что-то пошло не так, <br/> пожалуйста, напишите мне на почту.')
				showModalClose();
				setTimeout(() => {
					closeModalElement(overlay);
					closeModalElement(modal);
					closeModalElement(modalClose)
				}, 6000);
				form.reset();
			}
		})
		.catch(() => {
			showModal('Попробуйте позже, <br/>что-то пошло не так.')
			showModalClose();
			setTimeout(() => {
				closeModalElement(overlay);
				closeModalElement(modal);
				closeModalElement(modalClose)
			}, 6000);
			form.reset();
		})
})

// modal close script
modalClose.addEventListener('click', () => {
	closeModalElement(overlay);
	closeModalElement(modal);
	closeModalElement(modalClose)
})
// событие закрывания модального окна клавишей ESC
document.addEventListener('keydown', (e) => {
	if (e.code === "Escape") {
		closeModalElement(overlay);
		closeModalElement(modal);
		closeModalElement(modalClose)
	}
});






// page up script

const pageup = document.querySelector('.pageup');
window.addEventListener('scroll', () => {
	if (window.scrollY > 1300) {
		pageup.classList.add('active')
	} else {
		pageup.classList.remove('active')
	}
})

// плавная прокрутка по ссылкам
const anchors = document.querySelectorAll('a[href^="#"]')

for (let anchor of anchors) {
	anchor.addEventListener('click', function (e) {
		e.preventDefault()

		const blockID = anchor.getAttribute('href').substring(1)

		document.getElementById(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	})
}