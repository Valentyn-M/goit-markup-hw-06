"use strict";

document.addEventListener("click", documentActions);

function documentActions(event) {
	const targetElement = event.target;

	// Open menu
	if (targetElement.closest(".header__menu-burger")) {
		const menuMobile = document.querySelector('.menu-mobile');
		menuMobile.classList.add("is-open");
	}

	// Close menu
	if (targetElement.closest(".menu-mobile__button-close")) {
		const menuMobile = document.querySelector('.menu-mobile');
		menuMobile.classList.remove("is-open");
	}
}

