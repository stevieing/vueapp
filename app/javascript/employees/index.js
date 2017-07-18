// app/assets/javascripts/employees.js

import Vue from 'vue';
import Employees from './components/Employees.vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

if (process.env.NODE_ENV == 'test') {
  // Vue generates warning if we aren't in the production environment
  // These clutter up the console, but we don't want to turn them off
  // everywhere as they may be useful if we ever end up accidentally
  // running production in development mode. Instead we turn them off
  // explicitly
  Vue.config.productionTip = false
}


document.addEventListener('DOMContentLoaded', () => {
  /*
   * Eventually this will get loaded as a component of a SPA, or at the very least
   * as part of a whole page Vue app.
   */
  if ( document.getElementById('employees') ) {

    /* The files-list element isn't on all pages. So only initialize our
    * Vue app if we actually find it */
    var app = new Vue({
      el: '#employees',
      render: h => h(Employees)
    });
  }
})