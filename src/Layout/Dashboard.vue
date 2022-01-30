<script setup lang="ts">
import Nav from "@/components/Nav.vue";
import SideNav from "@/components/SideNav.vue";
import Footer from "@/components/Footer.vue";
import Home from "@/views/pages/kmhs/Home.vue";
</script>

<template>
  <div class="sb-nav-fixed">
    <Nav />
    <div id="layoutSidenav">
      <div id="layoutSidenav_nav">
        <SideNav />
      </div>
      <div id="layoutSidenav_content">
        <router-view />
        <Footer />
      </div>
    </div>
  </div>
</template>
