import Vue from 'vue'
import Router from 'vue-router'
import attention from '@/components/attention'
import article from '@/components/article'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'article',
      component: article
    },
    {
      path: '/attention',
      name: 'attention',
      component: attention
    }
  ]
})
