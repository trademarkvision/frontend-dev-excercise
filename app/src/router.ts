import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import TodoItem from './components/TodoItem.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        }, 
        {
            path: '/todo',
            name: 'Todoitem',
            component: TodoItem
        }
    ]
})
