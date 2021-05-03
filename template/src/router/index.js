import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
const About = () => import(/* webpackChunkName: "about" */ '../views/About.vue')
const Modal = () => import(/* webpackChunkName: "modal" */ '../views/Modal.vue')
const Input =  () => import(/* webpackChunkName: "input" */ '../views/Input.vue')
const Form = () => import(/* webpackChunkName: "form" */ '../views/Form.vue') 

Vue.use(VueRouter)

const appName = 'Your App Name'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      title: `Home - ${appName}`,
      metaTags:[
        {
          name: 'descritpion',
          content: 'The home page example'
        },
        {
          property: 'og:description',
          content: 'The home page example.'
        }
      ]
    }
  },
  {
    meta: {
      title: `About - ${appName}`,
      metaTags:[
        {
          name: 'About',
          content: 'About creator'
        },
        {
          property: 'og:description',
          content: 'About creator'
        }
      ]
    },
    path: '/about',
    name: 'About',
    component: About,
    
  },
  {
    meta: {
      title: `Modal - ${appName}`,
      metaTags:[
        {
          name: 'Modal',
          content: 'Modal example'
        },
        {
          property: 'og:description',
          content: 'Modal example'
        }
      ]
    },
    path: '/modal',
    name: 'Modal Example',
    component: Modal
  },
  {
    meta: {
      title: `Input - ${appName}`,
      metaTags:[
        {
          name: 'Input',
          content: 'Input example'
        },
        {
          property: 'og:description',
          content: 'Input example'
        }
      ]
    },
    path: '/input',
    name: 'Input Example',
    component: Input
  },
  {
    meta: {
      title: `Form - ${appName}`,
      metaTags:[
        {
          name: 'Form',
          content: 'Form example'
        },
        {
          property: 'og:description',
          content: 'Form example'
        }
      ]
    },
    path: '/form',
    name: 'Form Example',
    component: Form
  }
]

const router = new VueRouter({
  // mode: 'history',
  routes: routes
})

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // eg. if we have /some/deep/nested/route and /some, /deep, and /nested have titles, nested's will be chosen.
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
  // const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if(nearestWithTitle) document.title = nearestWithTitle.meta.title;

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

  // Skip rendering meta tags if there are none.
  if(!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta');

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });

    // We use this to track which meta tags we create, so we don't interfere with other ones.
    tag.setAttribute('data-vue-router-controlled', '');

    return tag;
  })
  // Add the meta tags to the document head.
  .forEach(tag => document.head.appendChild(tag));

  next();
})

export default router
