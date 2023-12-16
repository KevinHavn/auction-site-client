import { apiUrl } from "../constants.mjs";

const action = "auction/auth/register";
const method = "post";

export async function register(profile) {
	const registerURL = apiUrl + action;
	console.log(profile);
	const body = JSON.stringify(profile);

	const response = await fetch(registerURL, {
		headers: { "Content-Type": "application/json" },
		method,
		body,
	});
	const result = await response.json();
	alert("Registration complete!");
	console.log(result);
}
