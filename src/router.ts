import { createWebHistory, createRouter } from "vue-router";
import { RouteRecordRaw } from "vue-router";
import LoginAdmin from "@/views/pages/auth/LoginAdmin.vue";
import Login from "@/views/pages/auth/LoginMahasiswa.vue";
import Layout from "@/views/pages/Layout.vue";
import Dashboard from "@/views/pages/Dashboard.vue";
import ValidasiTAK from "@/views/pages/kmhs/ValidasiTAK.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: LoginAdmin,
    // children: [
    //   {
    //     path: "/dashboard",
    //     name: "dashboard",
    //     component: Dashboard,
    //   },
    //   {
    //     path: "/validasitak",
    //     name: "validasitak",
    //     component: ValidasiTAK,
    //   },
    // ],
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  // {
  //   path: "/admin",
  //   name: "admin",
  //   component: LoginAdmin,
  // },
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
  },
  {
    path: "/validasitak",
    name: "validasitak",
    component: ValidasiTAK,
  },
  // {
  //   path: "/add",
  //   name: "add",
  //   component: () => import("./components/AddTutorial.vue"),
  // },
  // {
  //   path: "/:pathMatch(.*)*",
  //   name: "NotFound",
  //   component: () => import("./components/NotFound.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
