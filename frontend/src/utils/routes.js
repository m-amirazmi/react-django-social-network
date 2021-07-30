import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Post } from "../pages/Post";
import { Profile } from "../pages/Profile";
import { Register } from "../pages/Register";

export const routes = [

    // GENERAL PAGES
    { path: '/', name: 'Home', component: Home, showOnNav: true, isProtected: false },
    { path: '/login', name: 'Login', component: Login, showOnNav: true, isProtected: false, restricted: true },
    { path: '/register', name: 'Register', component: Register, showOnNav: false, isProtected: false, restricted: true },
    { path: '/post/:id', name: 'Post', component: Post, showOnNav: false, isProtected: false },
    { path: '/profile/:id', name: 'Profile', component: Profile, showOnNav: false, isProtected: false },
]