import Vue from 'vue'
import Router from 'vue-router'
import BlogHome from './views/BlogHome.vue'
import Home from './views/Home.vue'
import Projects from './views/Projects.vue'
import Resume from './views/Resume.vue'

Vue.use(Router)

import BlogEntries from './statics/data/blogs.json';

const blogRoutes = Object.keys(BlogEntries).map(section => {
  const children = BlogEntries[section].map(child => ({
    path: child.id,
    name: child.id,
    component: () => import(`./markdowns/${section}/${child.id}.md`)
  }))
  return {
    path: `/blog/${section}`,
    name: section,
    component: () => import('./views/Blog.vue'),
    children
  }
})

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/blog',
      name: 'BlogHome',
      component: BlogHome
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/cv',
      name: 'Resume',
      component: Resume
    },
    ...blogRoutes
  ]
})
