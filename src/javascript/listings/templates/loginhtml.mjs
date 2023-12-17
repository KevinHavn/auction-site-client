import * as storage from "../../storage/index.mjs";

const userInfoElement = document.querySelector("#userInfo");
const coinInfoElement = document.querySelector("#coinsTotal");
const logoutMenuElement = document.querySelector("#logoutMenu");
const loginMenuElement = document.querySelector("#loginMenu");
const registerMenuElement = document.querySelector("#registerMenu");
const listingsFieldset = document.querySelector("#listingFieldset");
const logoutWarning = document.querySelector("#notLoggedError");
const avatar = document.querySelector("#userAvatar");
const avatarMenuElement = document.querySelector("#avatarMenu");

export function loginHtml() {
	const profile = storage.load("profile");
	const credits = storage.load("credits");

	if (profile && credits !== null) {
		userInfoElement.innerText = profile.name;
		if (profile.avatar && profile.avatar.trim() !== "") {
			avatar.setAttribute("src", profile.avatar);
			avatar.classList.replace("d-none", "d-block");
		} else {
			avatar.setAttribute("src", "../../../../img/avatar_placeholder.png");
			avatar.classList.replace("d-none", "d-block");
		}

		coinInfoElement.classList.remove("d-none");
		coinInfoElement.innerText = credits + " credits";

		logoutWarning.classList.add("d-none");

		listingsFieldset.disabled = false;

		loginMenuElement.classList.add("d-none");
		registerMenuElement.classList.add("d-none");
		logoutMenuElement.classList.remove("d-none");
		avatarMenuElement.classList.remove("d-none");
	} else {
		userInfoElement.innerText = "User Information";
		coinInfoElement.classList.add("d-none");
		logoutMenuElement.classList.add("d-none");
		avatarMenuElement.classList.add("d-none");
		logoutWarning.classList.add("d-block");
		listingsFieldset.disabled = true;
		loginMenuElement.classList.replace("d-none", "d-block");
		registerMenuElement.classList.replace("d-none", "d-block");
		avatar.classList.replace("d-block", "d-none");
	}
}
