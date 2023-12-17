import { loadPosts } from "./listings/test.mjs";
import { createPostsTemplate } from "./listings/templates/posttemplate.mjs";
import { setRegisterFormListener } from "./handlers/register.mjs";
import { setLoginFormListener } from "./handlers/login.mjs";
import { setLogoutListener } from "./handlers/logout.mjs";
import { setUpdateFormListener } from "./handlers/update.mjs";

loadPosts();
createPostsTemplate();
setRegisterFormListener();
setLoginFormListener();
setLogoutListener();
setUpdateFormListener(); 
