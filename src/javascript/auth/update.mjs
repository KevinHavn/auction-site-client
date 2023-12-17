import { apiUrl } from "../constants.mjs";
import * as storage from "../storage/index.mjs";

export async function updateAvatar(avatarUrl) {
	const profile = storage.load("profile");
	const accessToken = storage.load("token");

	if (!profile || !profile.name) {
		alert("Profile data is missing. Please log in again.");
		console.error("Profile data is missing");
		return;
	}

	const action = `auction/profiles/${profile.name}/media`; // Adjust this to your API's endpoint
	const method = "PUT";

	const updateUrl = apiUrl + action;
	const body = JSON.stringify({
		name: profile.name,
		avatarUrl: avatarUrl,
	});

	try {
		const response = await fetch(updateUrl, {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${accessToken}`,
			},
			method: method,
			body,
		});

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const updatedUserData = await response.json();
		storage.save("profile", updatedUserData);

		alert("Avatar updated successfully!");
		console.log("Avatar updated successfully!");
		// Update the UI or inform the user as needed
	} catch (error) {
		alert("Failed to update avatar. Please try again later.");
		console.error("Failed to update avatar:", error);
	}
}
