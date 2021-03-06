import { createWebHistory, createRouter } from "vue-router";
import { RouteRecordRaw } from "vue-router";
import Login from "@/views/pages/auth/LoginMahasiswa.vue";
import LoginAdmin from "@/views/pages/auth/LoginAdmin.vue";
import Dashboard from "@/layouts/Dashboard.vue";
import Home from "@/views/pages/kmhs/Home.vue";
import ValidasiTAK from "@/views/pages/kmhs/ValidasiTAK.vue";
import UploadTAK from "@/views/pages/kmhs/UploadTAK.vue";
import ListTAK from "@/views/pages/kmhs/ListTAK.vue";
import ManageMahasiswa from "@/views/pages/kmhs/ManageMahasiswa.vue";
import ManageAdmin from "@/views/pages/kmhs/ManageAdmin.vue";
import DetailMahasiswa from "@/views/pages/kmhs/DetailMahasiswa.vue";
import NotFound from "@/components/NotFound.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/dashboard",
    component: Dashboard,
    beforeEnter: (_, __, next) => {
      if (localStorage.getItem("token")) next();
      else next("/login");
    },
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        component: Home,
      },
      {
        path: "/validasitak",
        name: "validasitak",
        component: ValidasiTAK,
      },
      {
        path: "/uploadtak",
        name: "uploadtak",
        component: UploadTAK,
      },
      {
        path: "/listtak",
        name: "listtak",
        component: ListTAK,
      },
      {
        path: "/listadmin",
        name: "listadmin",
        component: ManageAdmin,
      },
      {
        path: "/listmahasiswa",
        name: "listmahasiswa",
        component: ManageMahasiswa,
      },
      {
        path: "/detailmahasiswa/:nim",
        name: "detailmahasiswa",
        component: DetailMahasiswa,
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    beforeEnter: (_, __, next) => {
      if (!localStorage.getItem("token")) next();
      else next("/dashboard");
    },
  },
  {
    path: "/admin",
    name: "admin",
    component: LoginAdmin,
    beforeEnter: (_, __, next) => {
      if (!localStorage.getItem("token")) next();
      else next("/dashboard");
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
