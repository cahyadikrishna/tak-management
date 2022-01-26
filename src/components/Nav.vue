<script setup lang="ts">
import { reactive } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const userLoginData = reactive({
  name: localStorage.getItem("name"),
  role: localStorage.getItem("role"),
  nim: localStorage.getItem("nim"),
});

function logOutMhs() {
  localStorage.removeItem("name");
  localStorage.removeItem("role");
  localStorage.removeItem("nim");
  localStorage.removeItem("token");

  router.push("/login");
}

function logOutAdm() {
  localStorage.removeItem("name");
  localStorage.removeItem("role");
  localStorage.removeItem("token");

  router.push("/admin");
}
</script>

<template>
  <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
    <!-- Navbar Brand-->
    <router-link class="navbar-brand ps-3" to="/dashboard">TAK Management</router-link>
    <!-- Sidebar Toggle-->
    <button
      class="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0"
      id="sidebarToggle"
      href="#!"
    >
      <i class="fas fa-bars"></i>
    </button>
    <!-- Navbar Search-->
    <form class="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
      <div class="input-group">
        <input
          class="form-control"
          type="text"
          placeholder="Search for..."
          aria-label="Search for..."
          aria-describedby="btnNavbarSearch"
        />
        <button class="btn btn-primary" id="btnNavbarSearch" type="button">
          <i class="fas fa-search"></i>
        </button>
      </div>
    </form>
    <!-- Navbar-->
    <ul class="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
      <li class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle"
          id="navbarDropdown"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          ><i class="fas fa-user fa-fw"></i
        ></a>
        <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
          <div class="container d-flex justify-content-center align-items-center">
            <div class="py-4 p-2">
              <div>
                <img src="https://i.imgur.com/EnANUqj.jpg" class="rounded" width="100" />
              </div>
              <div class="mt-3 d-flex flex-row justify-content-center">
                <h5>{{ userLoginData.name }}</h5>
                <span class="dots"><i class="fa fa-check"></i></span>
              </div>
              <span>{{ userLoginData.role }}</span>
            </div>
            <li><hr class="dropdown-divider" /></li>
          </div>
          <li v-if="userLoginData.role === 'mahasiswa'">
            <a class="dropdown-item" href="#!" @click.prevent="logOutMhs">Logout</a>
          </li>
          <li v-if="userLoginData.role === 'admin'">
            <a class="dropdown-item" href="#!" @click.prevent="logOutAdm">Logout</a>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.dots {
  height: 20px;
  width: 20px;
  margin-top: 4px;
  margin-left: 4px;
  background-color: #dc3545;
  border-radius: 50%;
  border: 2px solid #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 10px;
}

.list li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 13px;
  border-top: 1px solid #eee;
  cursor: pointer;
}
</style>
