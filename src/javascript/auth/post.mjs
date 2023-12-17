import { apiUrl } from "../constants.mjs";
import * as storage from "../storage/index.mjs";

const action = "auction/listings";
const method = "post";

export async function createListing(listingData) {
	const createListingUrl = apiUrl + action;
	const token = storage.load("token");

	if (!token) {
		alert("You must be logged in to create a listing.");
		return;
	}

	const body = JSON.stringify(listingData);

	try {
		const response = await fetch(createListingUrl, {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			method: method,
			body,
		});

		if (!response.ok) {
			alert("Failed to create listing: " + response.statusText);
			return;
		}

		const result = await response.json();
		console.log("Listing created successfully:", result);

		alert("Listing created successfully!");
	} catch (error) {
		console.error("An error occurred during listing creation:", error);
		alert("Failed to create listing: Unable to connect to the server.");
	}
}
