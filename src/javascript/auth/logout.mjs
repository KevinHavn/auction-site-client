import { loginHtml } from "../listings/templates/loginhtml.mjs";

export function logout() {
	localStorage.clear();
	loginHtml();
}
