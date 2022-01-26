<script setup lang="ts">
defineProps({
  nim: { type: Number, default: "" },
  email: { type: String, default: "" },
  name: { type: String, default: "" },
});
</script>

<template>
  <tr>
    <th>1</th>
    <td>{{ nim }}</td>
    <td>{{ name }}</td>
    <td>{{ email }}</td>
    <td>
      <button type="button" class="btn btn-dark btn-sm">
        <i class="txt-white fas fa-eye"></i>
      </button>
      &nbsp
      <button type="button" class="btn btn-danger btn-sm">
        <i class="txt-white fas fa-trash"></i>
      </button>
    </td>
  </tr>
</template>
