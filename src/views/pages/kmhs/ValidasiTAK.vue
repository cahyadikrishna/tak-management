<script setup lang="ts">
import { ref } from "vue";
import { IDataTAK } from "@/interfaces/TAK";
import TableValidasiTAK from "@/views/content/tables/TableValidasiTAK.vue";
import api from "@/api/api";

const validasiTAK = ref<IDataTAK[]>([]);

async function displayTAK() {
  const response = await api({
    method: "GET",
    url: "/tak?status=false",
    headers: {
      Authorization: localStorage.getItem("token") ?? "",
    },
  });
  validasiTAK.value = response.data;
}
displayTAK();
</script>

<template>
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
            v-for="(data, index) in validasiTAK"
            :index="index"
            :dataTAK="data"
            :displayTAK="displayTAK"
          />
        </tbody>
      </table>
    </div>
  </div>
</template>
