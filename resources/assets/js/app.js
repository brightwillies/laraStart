
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
//2a  this one checks errors
import { Form, HasError, AlertError } from 'vform'

// 3a importng moment
import moment from 'moment';

//4a import the progress bar
import VueProgressBar from 'vue-progressbar'
Vue.use(VueProgressBar, {
    color: 'rgb(143, 255, 199)',
    failedColor: 'red',
    height: '30px'
  })



//5a import sweetalert
// ES6 Modules or TypeScript

import swal from 'sweetalert2'
window.swal = swal;

const toast = swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});

window.toast = toast;

//2b
window.Form =Form; 
//2c  how to use the components
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)

//using the vue 
import VueRouter from 'vue-router'
Vue.use(VueRouter)
/* all of our routes will be here */

let routes = [
    { path: '/dashboard', component: require('./components/Dashboard.vue')},
    { path: '/developer', component: require('./components/Developer.vue')},
    { path: '/profile', component: require('./components/Profile.vue')},
    { path: '/users', component: require('./components/Users.vue') },
  ]


  const router = new VueRouter({
    mode: 'history',
    routes // shor  for routes: routes
  })


  //we used filter
  Vue.filter('upText', function(text){
   // return text.toUpperCase();
    return text.charAt(0).toUpperCase() + text.slice(1)
  });

  // date filter
  Vue.filter('myDate',function(created){
   return moment(created).format('MMMM Do YYYY');
  })
//how to lear the application refrs

window.Fire = new Vue();


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */


 //from passport
 Vue.component(
  'passport-clients',
  require('./components/passport/Clients.vue')
);

Vue.component(
  'passport-authorized-clients',
  require('./components/passport/AuthorizedClients.vue')
);

Vue.component(
  'passport-personal-access-tokens',
  require('./components/passport/PersonalAccessTokens.vue')
);
 //ending passprot
Vue.component('example-component', require('./components/ExampleComponent.vue'));

const app = new Vue({
    el: '#app',
    router
});
