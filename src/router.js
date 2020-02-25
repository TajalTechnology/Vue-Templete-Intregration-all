/*System Importing*/
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "./components/Home";
import Blog from "./components/Layout/Blog";
import Post from "./components/Layout/Post";
import Contact from "./components/Layout/Contact";



/*Inserting VueRouter to the Vue Framework*/
Vue.use(VueRouter);

/*Array of Paths*/
const routes = [

    {path: '/', component: Home, name: 'Home'},
    {path: '/blog', component: Blog, name: 'Blog'},
    {path: '/post', component: Post, name: 'Post'},
    {path: '/contact', component: Contact, name: 'Contact'}


];

/*Exporting Array of Paths*/
export const router = new VueRouter({
    mode: 'history',
    // hides hash in url after localhost:8080
    routes: routes
});


