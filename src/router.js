import  vue from 'vue'
import  router from 'vue-router'
import Home from '@/components/Home'

vue.use(router)

export default new router({
    mode:'history',
    routes:[
        {
            path:'/',
            component: Home
        },
        {
            path: '/todos',
            component: ()=> import ('./components/Todos.vue')
        }
    ]
})
