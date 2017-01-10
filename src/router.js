/**
 * Created by yongsheng.kuang on 17/1/3.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.use(VueRouter)
const Hello = lazyComponent('Hello')
const Test = lazyComponent('Test')
const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/', component: App,name:'home',
      children: [
        {path: '/hello',name:'home.hello', component: Hello},
        {path: '/test',name:'home.test', component: Test}
      ]
    }

  ]
})

router.beforeEach((to, from, next)=> {
  // console.log('router beforeEach',to,from)
  next()
})

router.afterEach((r)=>{
  // console.log('router afterEach',r)
})

export default router
function lazyComponent(path) {
  return function (resolve) {
    require.ensure([], () => {
      resolve(require('./components/' + path + '.vue'))
    })
  }
}
