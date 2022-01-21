<script setup lang="ts">
import { ref } from "vue";
import Nav from "@/components/Nav.vue";
import SideNav from "@/components/SideNav.vue";
import Footer from "@/components/Footer.vue";
import TableValidasiTAK from "@/views/content/widgets/tables/TableValidasiTAK.vue";
import api from "@/api/api";

interface IValidasiTAK {
  id: string;
  image: string;
  mahasiswaNIM: number;
  name: string;
  point_TAK: number;
  tingkatan: string;
  verifed_status: boolean;
}

const validasiTAK = ref<IValidasiTAK[]>([]);

async function displayTAK() {
  const response = await api({
    method: "GET",
    url: "/tak?status=false",
    headers: {
      Authorization: localStorage.getItem("token") ?? "",
    },
  });
  const dataTAK = response.data;
  validasiTAK.value = dataTAK;
}
displayTAK();
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
            <h1 class="mt-4">Validasi TAK</h1>
            <ol class="breadcrumb mb-4">
              <li class="breadcrumb-item active">validasitak</li>
            </ol>
            <div class="card mb-4">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">No</th>
                    <th scope="col">Nama Kegiatan</th>
                    <th scope="col">Poin TAK</th>
                    <th scope="col">Tingkatan</th>
                    <th scope="col">Status</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <TableValidasiTAK
                    v-for="data in validasiTAK"
                    :id="data.id"
                    :name="data.name"
                    :point_TAK="data.point_TAK"
                    :tingkatan="data.tingkatan"
                    :verifed_status="data.verifed_status"
                  />
                </tbody>
              </table>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  </div>
</template>
