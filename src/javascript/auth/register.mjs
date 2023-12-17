import { apiUrl } from "../constants.mjs";

const action = "auction/auth/register";
const method = "post";

export async function register(profile) {
	const registerURL = apiUrl + action;
	const body = JSON.stringify(profile);

	try {
		const response = await fetch(registerURL, {
			headers: { "Content-Type": "application/json" },
			method,
			body,
		});

		if (!response.ok) {
			alert("Registration failed: " + response.statusText);
			return;
		}

		const result = await response.json();
		alert("Registration complete! Welcome aboard.");
		console.log(result);
	} catch (error) {
		console.error("An error occurred during registration:", error);
		alert("Registration failed: Unable to connect to the server.");
	}
}
