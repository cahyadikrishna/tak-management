<script setup lang="ts">
import api from "@/api/api";

const props = defineProps({
  nim: { type: Number, default: "" },
  email: { type: String, default: "" },
  name: { type: String, default: "" },
  displayListMahasiswa: {
    type: Function,
    default() {
      return {};
    },
  },
});

//delete mahasiswa
async function deleteMahasiswa(nim: any) {
  const response = await api({
    method: "DELETE",
    url: `mahasiswa/${props.nim}`,
    headers: {
      Authorization: localStorage.getItem("token") ?? "",
    },
  });
  if (response) {
    alert(response.data.message);
  }
  props.displayListMahasiswa();
}
</script>

<template>
  <tr>
    <th>1</th>
    <td>{{ nim }}</td>
    <td>{{ name }}</td>
    <td>{{ email }}</td>
    <td>
      <button type="button" class="btn btn-dark btn-sm me-2">
        <i class="txt-white fas fa-eye"></i>
      </button>
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
