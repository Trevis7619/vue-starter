import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/index'
Vue.use(Router)


export default new Router({

    model: history,

    routes:[
        {
            path:'/',
            name:'',
            component:index
        }
    ]

})