import { apiUrl } from "../constants.mjs";
import * as storage from "../storage/index.mjs";

export async function updateAvatar(avatarUrl) {
	const profile = storage.load("profile");
	const accessToken = storage.load("token");

	if (!profile || !profile.name) {
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

		// Assuming the response includes the updated user data
		const updatedUserData = await response.json();

		// Update local storage with new user data
		storage.save("profile", updatedUserData);

		console.log("Avatar updated successfully!");
		// Call any function here to update the UI or inform the user
	} catch (error) {
		console.error("Failed to update avatar:", error);
	}
}
