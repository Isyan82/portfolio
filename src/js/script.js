// menu script
const gamburger = document.querySelector('.hanburger'),
	menu = document.querySelector('.menu'),
	menuClose = document.querySelector('.menu__close');

gamburger.addEventListener('click', () => {
	menu.classList.add('active');
})
menuClose.addEventListener('click', () => {
	menu.classList.remove('active')
})



// progress script
const progressCounters = document.querySelectorAll('.progress__counter'),
	progressLevels = document.querySelectorAll('.progress__level');

progressCounters.forEach((item, index) => {
	progressLevels[index].style.width = item.textContent;
});
