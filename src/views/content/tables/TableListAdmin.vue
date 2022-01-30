<script setup lang="ts">
import api from "@/api/api";

const props = defineProps({
  index: { type: Number, default: 0 },
  nidn: { type: Number, default: 0 },
  name: { type: String, default: "" },
  email: { type: String, default: "" },
  displayListAdmin: {
    type: Function,
    default() {
      return {};
    },
  },
});

async function deleteAdmin() {
  const response = await api({
    method: "DELETE",
    url: `admin/${props.nidn}`,
    headers: {
      Authorization: localStorage.getItem("token") ?? "",
    },
  });
  if (response) {
    alert(response.data.message);
  }
  props.displayListAdmin();
}
</script>

<template>
  <tr>
    <th>{{ index + 1 }}</th>
    <td>{{ nidn }}</td>
    <td>{{ name }}</td>
    <td>{{ email }}</td>
    <td>
      <button type="button" class="btn btn-warning btn-sm">
        <i style="color: white" class="fas fa-pencil-alt"></i>
      </button>
      &nbsp
      <button
        type="button"
        class="btn btn-danger btn-sm"
        @click="deleteAdmin()"
      >
        <i class="txt-white fas fa-trash"></i>
      </button>
    </td>
  </tr>
</template>
