import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'Hello',
//       component: resolve => require(['../components/Home.vue'], resolve),
//     }
//   ]
// })

export default new Router({
	mode: 'history',
  routes: [{
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: resolve => require(['../components/Home.vue'], resolve)
    },
    {
      path: '/reader/:id',
      name: 'reader',
      component: resolve => require(['../components/Reader.vue'], resolve)
    },
    {
      path: '/books/:id',
      name: 'books',
      component: resolve => require(['../components/BookDetail.vue'], resolve)
    },
    {
      path: '/books/:book_id/cheapters/:chapter_id',
      name: 'chapter',
      component: resolve => require(['../components/Chapter.vue'], resolve)
    },
    {
      path: '/category',
      name: 'category',
      component: resolve => require(['../components/Category.vue'], resolve)
    },
  ]
})
