<script setup lang="ts">
import { reactive } from "vue";
import apiFetch from "@/api/api2";

const dataFormTAK = reactive({
  name: "",
  nim: localStorage.getItem("nim"),
  tingkatan: "",
  image: null,
});

const options = {
  tingkatanOptions: [
    { text: "Provinsi", value: "PROVINSI" },
    { text: "Kota", value: "KOTA" },
    { text: "Nasional", value: "NASIONAL" },
    { text: "International", value: "INTERNASIONAL" },
  ],
};

function onFileChange(event: any) {
  dataFormTAK.image = event.target.files[0];
}

function clearForm() {
  dataFormTAK.name = "";
  dataFormTAK.tingkatan = "";
  dataFormTAK.image = null;
}

async function uploadTak() {
  try {
    const formData = new FormData();
    formData.append("name", dataFormTAK.name);
    formData.append("nim", dataFormTAK.nim ?? "");
    formData.append("tingkatan", dataFormTAK.tingkatan);
    formData.append("image", dataFormTAK.image ?? "");

    const response = await apiFetch("/tak", {
      method: "POST",
      headers: {
        Authorization: localStorage.getItem("token") ?? "",
      },
      body: formData,
    });
    if (response) {
      alert("Berhasil");
    }
    clearForm();
  } catch (error: any) {
    console.log(error.message);
  }
}
</script>

<template>
  <div class="container-fluid px-4">
    <h1 class="mt-4">Upload TAK</h1>
    <ol class="breadcrumb mb-4">
      <li class="breadcrumb-item active">uploadtak</li>
    </ol>
    <div class="row">
      <div class="card-body">
        <form @submit.prevent="uploadTak" enctype="multipart/form-data">
          <div class="form-floating mb-3">
            <select
              id="inputTk"
              class="form-select"
              aria-label="Default select example"
              v-model="dataFormTAK.tingkatan"
            >
              <option disabled value="">Pilih</option>
              <option
                v-for="option in options.tingkatanOptions"
                :value="option.value"
              >
                {{ option.text }}
              </option>
            </select>
            <label for="inputTk">Pilih Tingkatan</label>
          </div>
          <div class="form-floating mb-3">
            <input
              class="form-control"
              id="inputName"
              type="text"
              placeholder="input dokument="
              v-model="dataFormTAK.name"
            />
            <label for="inputName">Nama Kegiatan</label>
          </div>
          <div class="form mb-3">
            <label class="mb-2" for="inputDoc">Upload Dokumen</label>
            <input
              class="form-control form-control-lg"
              id="inputDoc"
              type="file"
              accept="image/*"
              @change="onFileChange"
            />
          </div>
          <div
            class="d-flex align-items-center justify-content-md-end mt-4 mb-0"
          >
            <button type="submit" class="btn btn-primary me-2">Upload</button>
            <button @click="clearForm" class="btn btn-outline-primary">
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
