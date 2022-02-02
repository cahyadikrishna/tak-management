<script setup lang="ts">
import { ref } from "vue";
import { IDataTAK } from "@/interfaces/TAK";
import { useLoading } from "@/store/Loading";
import TableListTAK from "@/views/content/tables/TableListTAK.vue";
import Loader from "@/components/Loader.vue";
import apiFetch from "@/api/api2";

const load = useLoading();

const listDataTAK = ref<IDataTAK[]>([]);

async function displayListTAK() {
  load.doUpdateLoading(true);
  const response = await apiFetch(`/mahasiswa/${localStorage.getItem("nim")}`, {
    method: "GET",
    headers: {
      Authorization: localStorage.getItem("token") ?? "",
    },
  });
  listDataTAK.value = response.tak;
  load.doUpdateLoading(false);
}
displayListTAK();
</script>

<template>
  <div class="container-fluid px-4">
    <h1 class="mt-4">List TAK</h1>
    <ol class="breadcrumb mb-4">
      <li class="breadcrumb-item active">listtak</li>
    </ol>

    <div class="card mb-4">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Nama Kegiatan</th>
            <th scope="col">Tingkatan</th>
            <th scope="col">Poin TAK</th>
            <th scope="col">Status</th>
            <th scope="col">Actions</th>
          </tr>
          <td colspan="6">
            <Loader v-if="load.loading" class="loader" />
          </td>
        </thead>
        <tbody>
          <TableListTAK
            v-for="(data, index) in listDataTAK"
            :index="index"
            :dataTAK="data"
            :displayListTAK="displayListTAK"
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
