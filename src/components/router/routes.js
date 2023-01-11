import Home from "@/views/Home";
import Blog from "@/views/Blog";
import Project from "@/views/Project";
import Message from "@/views/Message";
import About from "@/views/About";



export default [
  { path: '/', component: Home },
  { path: '/blog', component: Blog },
  { path: '/message', component: Message },
  { path: '/project', component: Project },
  { path: '/about', component: About },
];