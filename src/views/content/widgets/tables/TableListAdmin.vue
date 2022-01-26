<script setup lang="ts">
defineProps({
  nidn: { type: Number, default: "" },
  name: { type: String, default: "" },
  email: { type: String, default: "" },
});
</script>

<template>
  <tr>
    <th>1</th>
    <td>{{ nidn }}</td>
    <td>{{ name }}</td>
    <td>{{ email }}</td>
    <td>
      <button type="button" class="btn btn-warning btn-sm">
        <i style="color: white" class="fas fa-pencil-alt"></i>
      </button>
      &nbsp
      <button type="button" class="btn btn-danger btn-sm">
        <i class="txt-white fas fa-trash"></i>
      </button>
    </td>
  </tr>
</template>
