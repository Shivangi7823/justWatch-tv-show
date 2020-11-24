import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../views/Dashboard";
import SearchResult from "../views/SearchResult";
import ShowDetail from "../views/ShowDetail";
import Shows from "../views/Shows";
import PageNotFound from "../views/PageNotFound";

Vue.use(VueRouter);

const routes = [{
  path: '/',
  name: 'Home',
  component: Dashboard
},
{
  path: '/shows/:query',
  name: 'Shows',
  component: Shows
},
{
  path: '/search/:query',
  name: 'SearchResult',
  component: SearchResult
},
{
  path: '/showdetail/:id',
  name: 'ShowDetail',
  component: ShowDetail
},
{
  path: '*',
  name: 'not-found',
  component: PageNotFound
}
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  }
});

export default router;
