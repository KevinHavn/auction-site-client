import { loadPosts } from "./listings/test.mjs";
import { createPostsTemplate } from "./listings/templates/posttemplate.mjs";
import { setRegisterFormListener } from "./handlers/register.mjs";
import { setLoginFormListener } from "./handlers/login.mjs";


loadPosts();
createPostsTemplate()
setRegisterFormListener();
setLoginFormListener();