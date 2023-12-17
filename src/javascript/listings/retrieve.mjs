import { apiUrl } from "../constants.mjs";

export async function getPosts() {
	const response = await fetch(`${apiUrl}auction/listings?_seller=true`);
	if (response.ok) {
		return await response.json();
	}

	throw new Error(response.statusText);
}
