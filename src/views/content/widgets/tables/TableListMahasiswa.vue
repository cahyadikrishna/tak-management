<script setup lang="ts">
defineProps({
  nim: { type: Number, default: "" },
  birth_date: { type: Number, default: "" },
  email: { type: String, default: "" },
  name: { type: String, default: "" },
  prodi: { type: String, default: "" },
  tak: { type: [], default: "" },
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
    </td>
  </tr>
</template>
