<script setup lang="ts">
import { ref } from "vue";
import "./assets/js/scripts.js";
import "./assets/css/styles.css";
import Loader from "@/components/Loader.vue";
import { useLoading } from "@/store/Loading";

const load = useLoading();
</script>

<template>
  <Loader v-if="load.loading" />
  <div v-show="load.loading === false">
    <router-view />
  </div>
</template>
