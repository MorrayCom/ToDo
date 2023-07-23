import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/TodoList',
    name: 'TodoList',
    // route level code-splitting
    // this generates a separate chunk (TodoList.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "TodoList" */ '../views/TodoList.vue')
  },
  {
    path: '/IssueList',
    name: 'IssueList',
    // route level code-splitting
    // this generates a separate chunk (IssueList.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "IssueList" */ '../views/IssueList.vue')
  },
  {
    path: '/TodosIssues',
    name: 'TodosIssues',
    // route level code-splitting
    // this generates a separate chunk (TodosIssues.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "TodosIssues" */ '../views/TodosIssues.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
