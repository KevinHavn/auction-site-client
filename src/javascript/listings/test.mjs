import { getPosts } from "./retrieve.mjs";
export async function loadPosts() {
    try {
        const posts = await getPosts();
        console.log(posts);
        // Do something with the posts
    } catch (error) {
        console.error('Failed to load posts:', error.message);
        // Handle the error appropriately
    }
}