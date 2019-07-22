import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
//  mode:'history',
  routes: [
    {
      path: "/",
      name: "news",
      component: () => import("./script/template/News.vue"),
      children:[
            {
      path:'/post/:id',
      name:'posts',
      component: () => import("./script/template/Posts.vue"),
      props: {info:true},
   
    },
      ]
    },
    {
      path: "/about",
      name: "about",
      component: () => import("./script/template/About.vue")
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("./script/template/Contact.vue")
    },
    {
      path: "/coruption",
      name: "coruption",
      component: () => import("./script/template/Coruption.vue")
    },
    {
      path: "/sends",
      name: "sends",
      component: () => import("./script/template/Sends.vue")
    },
    {
      path:'/admin',
      name:'admin',
      component: () => import("./script/template/Admin.vue"),
     
    },
      {
        path: '/loginIn',
        name: 'loginIn',
        component: () => import("./script/template/Login.vue"),

      },
    {
      path:'/*',
      name:'404',
      component: () => import("./script/template/404.vue"),
 
    },
 
  ]
});
