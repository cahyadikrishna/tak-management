<script setup lang="ts">
defineProps({
  name: { type: String, default: "" },
  tingkatan: { type: String, default: "" },
  point_TAK: { type: Number, default: 0 },
  verifed_status: { type: Boolean, default: false },
});
</script>

<template>
  <!-- modal -->
  <div
    class="modal fade"
    id="viewTAK"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Detail TAK</h5>
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
              <form @submit.prevent="">
                <div class="form-floating mb-3">
                  <input
                    class="form-control"
                    id="inputNIM"
                    type="text"
                    placeholder="input nim"
                  />
                  <label for="inputNIM">NIM</label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    class="form-control"
                    id="inputNama"
                    type="text"
                    placeholder="input nama"
                  />
                  <label for="inputNIM">Nama</label>
                </div>
                <!-- <div class="form-floating mb-3">
                            <Datepicker
                              v-model="dataRegisterMahasiswa.birthDate"
                            ></Datepicker>
                          </div> -->
                <div class="form-floating mb-3">
                  <input
                    class="form-control"
                    id="inputEmail"
                    type="text"
                    placeholder="input email"
                  />
                  <label for="inputEmail">Email</label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    class="form-control"
                    id="inputAkt"
                    type="number"
                    placeholder="input angkatan"
                  />
                  <label for="inputAkt">Angkatan</label>
                </div>

                <div class="form-floating mb-3">
                  <input
                    class="form-control"
                    id="inputPass"
                    type="text"
                    placeholder="input nim"
                  />
                  <label for="inputPass">Password</label>
                </div>
                <div class="d-flex align-items-center justify-content-md-end mt-4 mb-0">
                  <button class="btn btn-primary">Save</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <tr>
    <th>1</th>
    <td>{{ name }}</td>
    <td>{{ tingkatan }}</td>
    <td>{{ point_TAK }}</td>
    <td>{{ verifed_status }}</td>
    <td>
      <button
        data-bs-toggle="modal"
        data-bs-target="#viewTAK"
        type="button"
        class="btn btn-dark btn-sm"
      >
        <i class="txt-white fas fa-eye"></i>
      </button>
    </td>
  </tr>
</template>
