import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

const router = new Router({
  scrollBehavior: function () {
    return { y: 0 }
  },
  routes: [
    {
      path: '/:filter',
      name: 'home',
      component: Home,
      props: true
    }
  ]
})

function beforeEachRouter (to, from, next) {
  if (['all', 'active', 'completed'].some(function (record) {
    return record === to.params.filter
  })) {
    return next()
  } else {
    return next('/all')
  }
  return next('/all')
}
router.beforeEach(function (to, from, next) { return beforeEachRouter(to, from, next) })

export default router
