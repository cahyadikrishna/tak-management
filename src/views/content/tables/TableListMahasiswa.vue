<script setup lang="ts">
import { PropType } from "vue";
import { IMahasiswaData } from "@/interfaces/Mahasiswa";
import apiFetch from "@/api/api2";

const props = defineProps({
  index: { type: Number, default: 0 },
  dataMahasiswa: { type: Object as PropType<IMahasiswaData>, default: null },
  displayListMahasiswa: {
    type: Function,
    default() {
      return {};
    },
  },
});

//delete mahasiswa
async function deleteMahasiswa() {
  const response = await apiFetch(`/mahasiswa/${props.dataMahasiswa.nim}`, {
    method: "DELETE",
    headers: {
      Authorization: localStorage.getItem("token") ?? "",
    },
  });
  if (response) {
    alert(response.message);
  }
  props.displayListMahasiswa();
}
</script>

<template>
  <!-- modal detail mahasiswa -->
  <div
    class="modal fade"
    :id="`detailMahasiswa-${dataMahasiswa.nim}`"
    tabindex="-1"
    aria-labelledby="detailMahasiswa"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="detailMahasiswa">Detail Mahasiswa</h5>
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
              <form>
                <div class="form-floating mb-3">
                  <input
                    disabled
                    class="form-control"
                    id="inputNIM"
                    type="number"
                    placeholder="input nim"
                    v-model="dataMahasiswa.nim"
                  />
                  <label for="inputNIM">NIM</label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    disabled
                    class="form-control"
                    id="inputNama"
                    type="text"
                    placeholder="input nama"
                    v-model="dataMahasiswa.name"
                  />
                  <label for="inputNIM">Nama</label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    disabled
                    class="form-control"
                    id="inputDate"
                    type="text"
                    placeholder="input nim"
                    v-model="dataMahasiswa.birth_date"
                  />
                  <label for="inputDate">Tanggal Lahir</label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    disabled
                    class="form-control"
                    id="inputEmail"
                    type="text"
                    placeholder="input email"
                    v-model="dataMahasiswa.email"
                  />
                  <label for="inputEmail">Email</label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    disabled
                    class="form-control"
                    id="inputAkt"
                    type="number"
                    placeholder="input angkatan"
                    v-model="dataMahasiswa.angkatan"
                  />
                  <label for="inputAkt">Angkatan</label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    disabled
                    class="form-control"
                    id="inputGen"
                    type="text"
                    placeholder="input email"
                    v-model="dataMahasiswa.gender"
                  />
                  <label for="inputGen">Jenis Kelamin</label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    disabled
                    class="form-control"
                    id="inputGen"
                    type="text"
                    placeholder="input email"
                    v-model="dataMahasiswa.prodi"
                  />
                  <label for="inputGen">Prodi</label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <tr>
    <th>{{ index + 1 }}</th>
    <td>{{ dataMahasiswa.nim }}</td>
    <td>{{ dataMahasiswa.name }}</td>
    <td>{{ dataMahasiswa.email }}</td>
    <td>
      <button
        data-bs-toggle="modal"
        :data-bs-target="`#detailMahasiswa-${dataMahasiswa.nim}`"
        type="button"
        class="btn btn-dark btn-sm me-2"
      >
        <i class="txt-white fas fa-eye"></i>
      </button>
      <button
        type="button"
        class="btn btn-danger btn-sm"
        @click="deleteMahasiswa"
      >
        <i class="txt-white fas fa-trash"></i>
      </button>
    </td>
  </tr>
</template>
