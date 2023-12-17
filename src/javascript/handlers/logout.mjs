import { logout } from "../auth/logout.mjs";

export function setLogoutListener() {
    const logoutButton = document.querySelector("#logoutButton")

    logoutButton.addEventListener("click", () => {
        logout();
    })
}