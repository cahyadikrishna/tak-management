<script setup lang="ts">
import { reactive } from "vue";

const user = reactive({
  role: localStorage.getItem("role"),
  name: localStorage.getItem("name"),
});
</script>

<template>
  <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
    <div class="sb-sidenav-menu">
      <div class="nav">
        <router-link class="nav-link" to="/dashboard">
          <div class="sb-nav-link-icon">
            <i class="fas fa-tachometer-alt"></i>
          </div>
          Dashboard
        </router-link>
        <div class="sb-sidenav-menu-heading">Menu</div>
        <router-link
          v-if="user.role === 'mahasiswa'"
          to="/uploadtak"
          class="nav-link"
        >
          <div class="sb-nav-link-icon">
            <i class="fas fa-upload"></i>
          </div>
          Upload TAK
        </router-link>
        <router-link
          v-if="user.role === 'mahasiswa'"
          to="/listtak"
          class="nav-link"
        >
          <div class="sb-nav-link-icon">
            <i class="fas fa-list"></i>
          </div>
          List TAK
        </router-link>
        <router-link
          v-if="user.role === 'admin'"
          to="/validasitak"
          class="nav-link"
        >
          <div class="sb-nav-link-icon">
            <i class="fas fa-check"></i>
          </div>
          Validasi TAK
        </router-link>
        <router-link
          v-if="user.role === 'admin'"
          to="/listmahasiswa"
          class="nav-link"
        >
          <div class="sb-nav-link-icon">
            <i class="fas fa-graduation-cap"></i>
          </div>
          Daftar Mahasiswa
        </router-link>
        <router-link
          v-if="user.role === 'admin'"
          to="/listadmin"
          class="nav-link"
        >
          <div class="sb-nav-link-icon">
            <i class="fas fa-users"></i>
          </div>
          Daftar Admin
        </router-link>
      </div>
    </div>
    <div class="sb-sidenav-footer">
      <div class="small">Logged in as:</div>
      {{ user.name }}
    </div>
  </nav>
</template>
