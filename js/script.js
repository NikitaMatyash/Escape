const burger = document.querySelector('.burger'),
			nav = document.querySelector('.nav-adapt')

burger.addEventListener('click', toggleMenu)

function toggleMenu() {
	burger.classList.toggle('active')
	nav.classList.toggle('active')
	document.body.classList.toggle('lock')
}

const lastPostsButton = document.querySelector('.header__link');
lastPostsButton.addEventListener('click', viewLastPost);

function viewLastPost() {
	const sectionLastPosts = document.querySelector('#lastPosts');
	sectionLastPosts.scrollIntoView({
		block: 'center',
	});
}

const footer = document.querySelector('.footer');

let windowInnerWidth = window.innerWidth;
const headerTop = document.querySelector('.header__top');
let paddingProperty = (windowInnerWidth - headerTop.offsetWidth) / 2;

document.addEventListener('scroll', function scroll(e)  {
	const headerContent = document.querySelector('.header__content');
	const header = document.querySelector('header');
	if (windowInnerWidth <= 767) {
		headerContent.style.marginTop = `185px`;
		return
	} else {
		if (window.pageYOffset >= header.offsetHeight) {
			headerTop.style.cssText = `
				padding-left: ${paddingProperty}px;
				padding-right: ${paddingProperty}px;
			`;
			headerTop.classList.add('header__top-fixed');
			headerContent.style.marginTop = `185px`;
		} else {
			headerTop.style.cssText = `
				padding-left: ;
				padding-right: ;
			`;
			headerTop.classList.remove('header__top-fixed');
			headerContent.style.marginTop = '';
		}
	}
});


const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll(params) {
		for (var i = 0; i < animItems.length; i++) {
			const animItem = animItems[i];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active');
			} else {
				// if (!animItem.classList.contains('_anim-no-hide')) {
				// 	animItem.classList.remove('_active');
				// }
			}
		}
	};
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	};
	animOnScroll()
}