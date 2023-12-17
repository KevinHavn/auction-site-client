import { createListing } from "../auth/post.mjs";

export function setListingFormListener() {
	const form = document.querySelector("#listingForm");

	form.addEventListener("submit", (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);
		const listingData = Object.fromEntries(formData.entries());
		console.log(listingData);
		createListing(listingData);
	});
}
