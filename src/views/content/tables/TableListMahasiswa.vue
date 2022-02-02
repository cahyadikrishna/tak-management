<script setup lang="ts">
import { PropType } from "vue";
import { IMahasiswaData } from "@/interfaces/Mahasiswa";
import apiFetch from "@/api/api2";

const props = defineProps({
  index: { type: Number, default: 0 },
  dataMahasiswa: { type: Object as PropType<IMahasiswaData>, default: null },
  displayListMahasiswa: {
    type: Function,
    default() {
      return {};
    },
  },
});

//delete mahasiswa
async function deleteMahasiswa() {
  const response = await apiFetch(`/mahasiswa/${props.dataMahasiswa.nim}`, {
    method: "DELETE",
    headers: {
      Authorization: localStorage.getItem("token") ?? "",
    },
  });
  if (response) {
    alert(response.message);
  }
  props.displayListMahasiswa();
}
</script>

<template>
  <tr>
    <th>{{ index + 1 }}</th>
    <td>{{ dataMahasiswa.nim }}</td>
    <td>{{ dataMahasiswa.name }}</td>
    <td>{{ dataMahasiswa.email }}</td>
    <td>
      <router-link
        :to="`/detailmahasiswa/${dataMahasiswa.nim}`"
        type="button"
        class="btn btn-dark btn-sm me-2"
      >
        <i class="txt-white fas fa-eye"></i>
      </router-link>
      <button
        type="button"
        class="btn btn-danger btn-sm"
        @click="deleteMahasiswa"
      >
        <i class="txt-white fas fa-trash"></i>
      </button>
    </td>
  </tr>
</template>
