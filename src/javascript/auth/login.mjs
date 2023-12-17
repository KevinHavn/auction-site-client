import { apiUrl } from "../constants.mjs";
import { loginHtml } from "../listings/templates/loginhtml.mjs";
import * as storage from "../storage/index.mjs";

const action = "auction/auth/login";
const method = "post";

export async function login(profile) {
	const loginUrl = apiUrl + action;
	const body = JSON.stringify(profile);

	try {
		const response = await fetch(loginUrl, {
			headers: { "Content-Type": "application/json" },
			method,
			body,
		});

		if (!response.ok) {
			if (response.status === 401) {
				alert("Login failed: Incorrect credentials.");
			} else {
				alert("Login failed: An error occurred. Please try again later.");
			}
			return;
		}

		const { accessToken, credits, ...user } = await response.json();

		if (accessToken) {
			storage.save("token", accessToken);
			storage.save("credits", credits);
			storage.save("profile", user);
			alert("Login complete!");
			loginHtml();
		} else {
			alert("Login failed: No access token received.");
		}
	} catch (error) {
		console.error("An error occurred during login:", error);
		alert("Login failed: Unable to connect to the server.");
	}
}
