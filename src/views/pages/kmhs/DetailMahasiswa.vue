<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";
import { IMahasiswaData } from "@/interfaces/Mahasiswa";
import { IDataTAK } from "@/interfaces/TAK";
import { useLoading } from "@/store/Loading";
import TableAdminTAK from "@/views/content/tables/TableAdminTAK.vue";
import Loader from "@/components/Loader.vue";
import apiFetch from "@/api/api2";

const router = useRoute();
const load = useLoading();

const detailMahasiswaData = ref<IMahasiswaData | null>(null);
const listTak = ref<IDataTAK[]>([]);

async function displayDetailMahasiswa() {
  load.doUpdateLoading(true);
  const response = await apiFetch(`/mahasiswa/${router.params.nim}`, {
    method: "GET",
    headers: {
      Authorization: localStorage.getItem("token") ?? "",
    },
  });
  detailMahasiswaData.value = { ...response };
  listTak.value = { ...response.tak };
  load.doUpdateLoading(false);
}
displayDetailMahasiswa();
</script>

<template>
  <div class="container-fluid px-4">
    <h1 class="mt-4">Detail Mahasiswa</h1>
    <ol class="breadcrumb mb-4">
      <li class="breadcrumb-item active">detailmahasiswa</li>
    </ol>
    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
      <router-link
        to="/listmahasiswa"
        class="btn btn-primary mb-3"
        type="button"
      >
        Back
      </router-link>
    </div>
    <div class="card mb-4">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">NIM</th>
            <th scope="col">Nama Mahasiswa</th>
            <th scope="col">Email</th>
            <th scope="col">Jenis Kelamin</th>
            <th scope="col">Angkatan</th>
          </tr>
          <td colspan="6">
            <Loader v-if="load.loading" class="loader" />
          </td>
        </thead>
        <tbody>
          <tr>
            <th>{{ detailMahasiswaData?.nim }}</th>
            <td>{{ detailMahasiswaData?.name }}</td>
            <td>{{ detailMahasiswaData?.email }}</td>
            <td>{{ detailMahasiswaData?.gender ?? "Belum diisi" }}</td>
            <td>{{ detailMahasiswaData?.angkatan ?? "Belum diisi" }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 class="mt-4">Data TAK</h3>
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
          <TableAdminTAK
            v-for="(data, key, index) in listTak"
            :index="index"
            :dataTAK="data"
            :displayTAK="displayDetailMahasiswa"
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
