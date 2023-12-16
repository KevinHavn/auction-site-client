import { apiUrl } from "../constants.mjs";
import * as storage from "../storage/index.mjs";

const action = "auction/auth/login";
const method = "post";

export async function login(profile) {
	console.log("works");
	const loginUrl = apiUrl + action;
	const body = JSON.stringify(profile);

	const response = await fetch(loginUrl, {
		headers: { "Content-Type": "application/json" },
		method,
		body,
	});

	const { accessToken, ...user } = await response.json();

	storage.save("token", accessToken);
	storage.save("profile", user);
	alert("Login complete!");
}
