<script setup lang="ts">
import api from "@/api/api";

const props = defineProps({
  index: { type: Number, default: 0 },
  nim: { type: Number, default: 0 },
  name: { type: String, default: "" },
  email: { type: String, default: "" },
  angkatan: { type: Number, default: 0 },
  gender: { type: String, default: "" },
  prodi: { type: String, default: "" },
  birth_date: { type: String, default: "" },
  displayListMahasiswa: {
    type: Function,
    default() {
      return {};
    },
  },
});

//delete mahasiswa
async function deleteMahasiswa() {
  const response = await api({
    method: "DELETE",
    url: `/mahasiswa/${props.nim}`,
    headers: {
      Authorization: localStorage.getItem("token") ?? "",
    },
  });
  if (response) {
    alert(response.data.message);
  }
  props.displayListMahasiswa();
}
</script>

<template>
  <!-- modal detail mahasiswa -->
  <div
    class="modal fade"
    :id="`detailMahasiswa-${nim}`"
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
                    v-model="nim"
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
                    v-model="name"
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
                    v-model="birth_date"
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
                    v-model="email"
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
                    v-model="angkatan"
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
                    v-model="gender"
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
                    v-model="prodi"
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
    <td>{{ nim }}</td>
    <td>{{ name }}</td>
    <td>{{ email }}</td>
    <td>
      <button
        data-bs-toggle="modal"
        :data-bs-target="`#detailMahasiswa-${nim}`"
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
