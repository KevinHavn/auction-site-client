import { updateAvatar } from "../auth/update.mjs";


export function setUpdateFormListener() {
    const form = document.querySelector("#updateForm"); 

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const updateData = Object.fromEntries(formData.entries());
        console.log(updateData)

        updateAvatar(updateData);
    });
}