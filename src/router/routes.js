
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/home', component: () => import('pages/home/Index.vue') },
      { path: '/account', component: () => import('pages/account/Index.vue') },
      { path: '/account/login', component: () => import('pages/account/login/Index.vue') },
      { path: '/account/register', component: () => import('pages/account/register/Index.vue') },
      { path: '/account/addresses', component: () => import('pages/account/addresses/Index.vue') },
      { path: '/cart', component: () => import('pages/cart/Index.vue') },
      { path: '/products/:productId', component: () => import('pages/products/Index.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
