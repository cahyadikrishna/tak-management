<script setup lang="ts">
import Nav from "@/components/Nav.vue";
import SideNav from "@/components/SideNav.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div class="sb-nav-fixed">
    <Nav />
    <div id="layoutSidenav">
      <div id="layoutSidenav_nav">
        <SideNav />
      </div>
      <div id="layoutSidenav_content">
        <main>
          <div class="container-fluid px-4">
            <h1 class="mt-4">Dashboard</h1>
            <ol class="breadcrumb mb-4">
              <li class="breadcrumb-item active">Dashboard</li>
            </ol>
            <div class="row h-100 justify-content-center align-items-center">
              <div class="col text-center">
                <img
                  src="/media/logos/bigprimakara.png"
                  height="90"
                  width="auto"
                  alt="Primakara Logo"
                />
                <h3
                  class="font-weight-bolder text-center font-size-h4 font-size-h1-lg mt-7"
                >
                  TAK Management System
                </h3>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  </div>
</template>
