<script setup lang="ts">
import { ref } from "vue";
import TableListTAK from "@/views/content/tables/TableListTAK.vue";

import api from "@/api/api";

interface IListTAK {
  id: string;
  mahasiswaNIM: number;
  name: string;
  image: string;
  tingkatan: string;
  point_TAK: number;
  verifed_status: boolean;
}

const listDataTAK = ref<IListTAK[]>([]);

async function displayListTAK() {
  const response = await api({
    method: "GET",
    url: `/mahasiswa/${localStorage.getItem("nim")}`,
    headers: {
      Authorization: localStorage.getItem("token") ?? "",
    },
  });
  listDataTAK.value = response.data.tak;
}
displayListTAK();
</script>

<template>
  <main>
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
          </thead>
          <tbody>
            <TableListTAK
              v-for="(data, index) in listDataTAK"
              :index="index"
              :id="data.id"
              :name="data.name"
              :image="data.image"
              :tingkatan="data.tingkatan"
              :point_TAK="data.point_TAK"
              :verifed_status="data.verifed_status"
              :displayListTAK="displayListTAK"
            />
          </tbody>
        </table>
      </div>
    </div>
  </main>
</template>
