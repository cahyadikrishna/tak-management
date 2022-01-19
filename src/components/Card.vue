<script setup lang="ts">
const props = defineProps({
  title: { type: String, default: "" },
  description: { type: String, default: "" },
});
</script>
<template>
  <div class="row">
    <div class="col-xl-4 col-md-8">
      <div class="card bg-transparent text-black mb-3">
        <div class="card-body">{{ title }}</div>
        <div class="card-footer d-flex justify-content-between">
          <p>{{ description }}</p>
          <a style="cursor: pointer" class="text-red">Delete</a>
        </div>
      </div>
    </div>
  </div>
</template>
