<script setup lang="ts">
import { PropType } from "vue";
import { IAdminData } from "@/interfaces/Admin";
import api from "@/api/api";

const props = defineProps({
  index: { type: Number, default: 0 },
  dataAdmin: { type: Object as PropType<IAdminData>, default: null },
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
    url: `admin/${props.dataAdmin.nidn}`,
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
    <td>{{ dataAdmin.nidn }}</td>
    <td>{{ dataAdmin.name }}</td>
    <td>{{ dataAdmin.email }}</td>
    <td>
      <button type="button" class="btn btn-warning btn-sm me-2">
        <i style="color: white" class="fas fa-pencil-alt"></i>
      </button>
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
