import { getPosts } from "../retrieve.mjs";

export function createPostsTemplate() {
	const posts = getPosts();
	const container = document.querySelector("#listingsGrid");
	getPosts().then((posts) => {
		posts.forEach((post) => {
			const postCard = document.createElement("div");
			postCard.classList.add("card", "g-col-4", "mx-4");
			postCard.id = post.id;

			const postImg = document.createElement("img");
			postImg.src = post.media[0];
			postImg.alt = post.title;
			postImg.classList.add("object-fit-contain", "rounded");
			postImg.onerror = () => {
				postImg.classList.add("placeholder");
			};
			postCard.appendChild(postImg);

			const postTitle = document.createElement("h2");
			postTitle.textContent = post.title;
			postTitle.classList.add("card-title");
			postCard.appendChild(postTitle);

			const postDescription = document.createElement("p");
			postDescription.textContent = post.description;
			postDescription.classList.add("card-text");
			postCard.appendChild(postDescription);

			container.appendChild(postCard);
		});
	});
}
