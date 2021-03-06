<script setup lang="ts">
import { ref, reactive } from "vue";
import { IMahasiswaData } from "@/interfaces/Mahasiswa";
import TableListMahasiswa from "@/views/content/tables/TableListMahasiswa.vue";
import Loader from "@/components/Loader.vue";
import apiFetch from "@/api/api2";
import { useLoading } from "@/store/Loading";

const load = useLoading();

const listMahasiswa = ref<IMahasiswaData[]>([]);

async function displayListMahasiswa() {
  load.doUpdateLoading(true);
  const response = await apiFetch("/mahasiswa", {
    method: "GET",
    headers: {
      Authorization: localStorage.getItem("token") ?? "",
    },
  });
  listMahasiswa.value = response;
  load.doUpdateLoading(false);
}
displayListMahasiswa();

//register mahasiswa
const dataRegisterMahasiswa = reactive({
  nim: null,
  name: "",
  email: "",
  password: "",
  angkatan: null,
  gender: "",
  prodi: "",
  birthDate: "",
});

const options = {
  genOptions: [
    { text: "Laki - laki", value: "PRIA" },
    { text: "Perempuan", value: "WANITA" },
  ],
  aktOptions: [
    { text: "Sistem Informasi", value: "SI" },
    { text: "Sistem Informasi Akutansi", value: "SIA" },
    { text: "Informatika", value: "IF" },
  ],
};

async function registerMahasiswa() {
  const response = await apiFetch("/mahasiswa/register", {
    method: "POST",
    headers: {
      Authorization: localStorage.getItem("token") ?? "",
    },
    body: { ...dataRegisterMahasiswa },
  });
  if (response) {
    alert(response.message);
  }
  displayListMahasiswa();
}
</script>

<template>
  <div class="container-fluid px-4">
    <h1 class="mt-4">Manage Mahasiswa</h1>
    <ol class="breadcrumb mb-4">
      <li class="breadcrumb-item active">listmahasiswa</li>
    </ol>

    <!-- modal button-->
    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
      <button
        data-bs-toggle="modal"
        data-bs-target="#newMahasiswa"
        class="btn btn-primary mb-3"
        type="button"
      >
        New Mahasiswa
      </button>
    </div>

    <!-- modal -->
    <div
      class="modal fade"
      id="newMahasiswa"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">New Mahasiswa</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="card-body">
                <form @submit.prevent="registerMahasiswa">
                  <div class="form-floating mb-3">
                    <input
                      class="form-control"
                      id="inputNIM"
                      type="number"
                      placeholder="input nim"
                      v-model="dataRegisterMahasiswa.nim"
                    />
                    <label for="inputNIM">NIM</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                      class="form-control"
                      id="inputNama"
                      type="text"
                      placeholder="input nama"
                      v-model="dataRegisterMahasiswa.name"
                    />
                    <label for="inputNIM">Nama</label>
                  </div>
                  <div class="form-floating mb-3">
                    <Datepicker
                      v-model="dataRegisterMahasiswa.birthDate"
                    ></Datepicker>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                      class="form-control"
                      id="inputEmail"
                      type="text"
                      placeholder="input email"
                      v-model="dataRegisterMahasiswa.email"
                    />
                    <label for="inputEmail">Email</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                      class="form-control"
                      id="inputAkt"
                      type="number"
                      placeholder="input angkatan"
                      v-model="dataRegisterMahasiswa.angkatan"
                    />
                    <label for="inputAkt">Angkatan</label>
                  </div>
                  <div class="form-floating mb-3">
                    <select
                      id="inputGen"
                      class="form-select"
                      aria-label="Default select example"
                      v-model="dataRegisterMahasiswa.gender"
                    >
                      <option disabled value="">Pilih</option>
                      <option
                        v-for="option in options.genOptions"
                        :value="option.value"
                      >
                        {{ option.text }}
                      </option>
                    </select>
                    <label for="inputGen">Jenis Kelamin</label>
                  </div>
                  <div class="form-floating mb-3">
                    <select
                      id="inputProd"
                      class="form-select"
                      aria-label="Default select example"
                      v-model="dataRegisterMahasiswa.prodi"
                    >
                      <option disabled value="">Pilih</option>
                      <option
                        v-for="option in options.aktOptions"
                        :value="option.value"
                      >
                        {{ option.text }}
                      </option>
                    </select>
                    <label for="inputProd">Prodi</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                      class="form-control"
                      id="inputPass"
                      type="text"
                      placeholder="input nim"
                      v-model="dataRegisterMahasiswa.password"
                    />
                    <label for="inputPass">Password</label>
                  </div>
                  <div
                    class="d-flex align-items-center justify-content-md-end mt-4 mb-0"
                  >
                    <button class="btn btn-primary" data-bs-dismiss="modal">
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card mb-4">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">NIM</th>
            <th scope="col">Nama</th>
            <th scope="col">Email</th>
            <th scope="col">Actions</th>
          </tr>
          <td colspan="6">
            <Loader v-if="load.loading" class="loader" />
          </td>
        </thead>
        <tbody>
          <TableListMahasiswa
            v-for="(data, index) in listMahasiswa"
            :index="index"
            :dataMahasiswa="data"
            :displayListMahasiswa="displayListMahasiswa"
          />
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.loader {
  height: 80px !important;
}
</style>
