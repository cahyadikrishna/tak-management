<script setup lang="ts">
import { ref } from "vue";
import "./assets/js/scripts.js";
import "./assets/css/styles.css";
import Loader from "@/components/Loader.vue";

const loading = ref(false);
function doUpdateLoading(status: boolean) {
  loading.value = status;
}
</script>

<template>
  <Loader v-if="loading" />
  <div v-show="loading === false">
    <router-view @loadingStatus="doUpdateLoading" />
  </div>
</template>
