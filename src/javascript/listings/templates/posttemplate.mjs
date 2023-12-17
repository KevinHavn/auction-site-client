import { getPosts } from "../retrieve.mjs";

export function createPostsTemplate() {
    const container = document.querySelector("#listingsGrid");
    getPosts().then((posts) => {
        posts.forEach((post) => {
            if (post.media && post.media.length > 0) {
                const postCard = document.createElement("div");
                postCard.classList.add(
                    "card",
                    "g-col-4",
                    "mx-4",
                    "d-flex",
                    "flex-column",
                    "justify-content-between"
                );
                postCard.id = post.id;

                const postImg = document.createElement("img");
                postImg.src = post.media[0];
                postImg.alt = post.title;
                postImg.classList.add("card-img-top", "img-fluid");
                postCard.appendChild(postImg);

                const postBody = document.createElement("div")
                postBody.classList.add("card-body")
                postCard.appendChild(postBody)

                const postTitle = document.createElement("h2");
                postTitle.textContent = post.title;
                postTitle.classList.add("card-title");
                postBody.appendChild(postTitle);

                const postDescription = document.createElement("p");
                postDescription.textContent = post.description;
                postDescription.classList.add("card-text");
                postBody.appendChild(postDescription);

                const postFooter = document.createElement("div");
                postFooter.classList.add("card-footer", "d-flex", "flex-row", "justify-content-between");
                postCard.appendChild(postFooter);

                const postAuthor = document.createElement("p");
                postAuthor.textContent = "Posted by " + post.seller.name;
                postFooter.appendChild(postAuthor);

                const postBids = document.createElement("p");
                postBids.textContent = post._count.bids + " bids placed";
                postFooter.appendChild(postBids);

                const postEndTime = document.createElement("p");
                const date = new Date(post.endsAt);
                const readableTime = date.toLocaleString();
                postEndTime.textContent = "Ends at " + readableTime;
                postFooter.appendChild(postEndTime);

                container.appendChild(postCard);
            }
        });
    });
}
