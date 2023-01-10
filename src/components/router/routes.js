import Home from "@/components/views/Home";
import Blog from "@/components/views/Blog";
import Message from "@/components/views/Message";
import Project from "@/components/views/Project";
import About from "@/components/views/About";



export default [
  { path: '/', component: Home },
  { path: '/blog', component: Blog },
  { path: '/message', component: Message },
  { path: '/project', component: Project },
  { path: '/about', component: About },
];