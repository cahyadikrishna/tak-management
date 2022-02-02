<script setup lang="ts">
import { PropType } from "vue";
import { IMahasiswaData } from "@/interfaces/Mahasiswa";

const props = defineProps({
  dataMahasiswa: { type: Object as PropType<IMahasiswaData>, default: null },
});
console.log(props);
</script>

<template>
  <div class="card-body">
    <h1>TEST</h1>
    <p>{{ dataMahasiswa.nim }}</p>
    <p>{{ dataMahasiswa.name }}</p>
  </div>
</template>
