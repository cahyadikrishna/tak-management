<script setup lang="ts">
import { ref } from "vue";
import { IDataTAK } from "@/interfaces/TAK";
import { useLoading } from "@/store/Loading";
import TableValidasiTAK from "@/views/content/tables/TableValidasiTAK.vue";
import Loader from "@/components/Loader.vue";
import apiFetch from "@/api/api2";

const load = useLoading();
const validasiTAK = ref<IDataTAK[]>([]);

async function displayTAK() {
  load.doUpdateLoading(true);
  const response = await apiFetch("/tak?status=false", {
    method: "GET",
    headers: {
      Authorization: localStorage.getItem("token") ?? "",
    },
  });
  validasiTAK.value = response;
  load.doUpdateLoading(false);
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
          <td colspan="6">
            <Loader v-if="load.loading" class="loader" />
          </td>
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

<style scoped>
.loader {
  height: 80px !important;
}
</style>
