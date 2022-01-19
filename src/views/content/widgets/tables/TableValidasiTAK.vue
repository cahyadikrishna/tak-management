<script setup lang="ts">
defineProps({
  name: { type: String, default: "" },
  point_TAK: { type: Number, default: "" },
  tingkatan: { type: String, default: "" },
  verifed_status: { type: Boolean, default: "" },
});
</script>

<template>
  <tr>
    <th>1</th>
    <td>{{ name }}</td>
    <td>{{ point_TAK }}</td>
    <td>{{ tingkatan }}</td>
    <td>{{ verifed_status }}</td>
    <td>
      <button type="button" class="btn btn-dark btn-sm">
        <i class="txt-white fas fa-eye"></i>
      </button>
    </td>
  </tr>
</template>
