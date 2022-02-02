<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";
import { IMahasiswaData } from "@/interfaces/Mahasiswa";
import CardMhs from "@/views/content/tables/CardMhs.vue";
import apiFetch from "@/api/api2";

const router = useRoute();
const detailMahasiswaData = ref<IMahasiswaData[] | null>(null);

async function displayDetailMahasiswa() {
  const response = await apiFetch(`/mahasiswa/${router.params.nim}`, {
    method: "GET",
    headers: {
      Authorization: localStorage.getItem("token") ?? "",
    },
  });
  console.log(typeof response.nim);
  detailMahasiswaData.value = { ...response };
}
displayDetailMahasiswa();
</script>

<template>
  <div class="container-fluid px-4">
    <h1 class="mt-4">Detail Mahasiswa</h1>
    <ol class="breadcrumb mb-4">
      <li class="breadcrumb-item active">detailmahasiswa</li>
    </ol>
    <div v-for="(data, i) in detailMahasiswaData" :key="i" class="row">
      <!-- <CardMhs :dataMahasiswa="data" /> -->
      <p>{{ data.nim }}</p>
    </div>
  </div>
</template>
