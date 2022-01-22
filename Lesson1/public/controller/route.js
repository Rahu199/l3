import { homepage } from "../viewpage/homepage.js";
import { about } from "../viewpage/about.js";

export const routePath = {
    HOME:'/' ,
    ABOUT: '/about'
}

export const routes = [
    {path: routePath.HOME, page: homepage},
    {path: routePath.ABOUT,page: about},
    
];

export function routing(pathname, hash) {
    const route = routes.find(element =>element.path ==pathname);
    if (route) route.page();
    else routes[0].page();
}