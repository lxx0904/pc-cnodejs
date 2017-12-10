import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home'
import Getstart from '@/views/getstart'
import Api from '@/views/api'
import About from '@/views/about'
import New from '@/views/new'
import Signin from '@/views/signin'
import Topic from '@/views/topic'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/getstart', name: 'Getstart', component: Getstart },
    { path: '/api', name: 'Api', component: Api },
    { path: '/about', name: 'About', component: About },
    { path: '/new', name: 'New', component: New },
    { path: '/signin', name: 'Signin', component: Signin },
    { path: '/topic', name: 'Topic', component: Topic }
  ]
})
