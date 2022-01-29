<script setup lang="ts">
import { reactive } from "vue";
import api from "@/api/api";

const props = defineProps({
  index: { type: Number, default: 0 },
  id: { type: String, default: "" },
  image: { type: String, default: "" },
  mahasiswaNIM: { type: Number, default: 0 },
  name: { type: String, default: "" },
  point_TAK: { type: Number, default: 0 },
  tingkatan: { type: String, default: "" },
  verifed_status: { type: Boolean, default: false },
  displayTAK: {
    type: Function,
    default() {
      return {};
    },
  },
});

//validate TAK
const dataValidateTAK = reactive({
  pointTAK: props.point_TAK,
});

async function validateTAK() {
  const response = await api({
    method: "PATCH",
    url: `/tak/validate/${props.id}`,
    headers: {
      Authorization: localStorage.getItem("token") ?? "",
    },
    data: {
      pointTak: dataValidateTAK.pointTAK,
      status: true,
    },
  });
  if (response) {
    alert(response.data.message);
  }
  props.displayTAK();
}
</script>

<template>
  <div
    class="modal fade"
    :id="`viewDetail-${id}`"
    tabindex="-1"
    aria-labelledby="detailTAKModal"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="detailTAKModal">Detail TAK</h5>
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
              <form @submit.prevent="validateTAK">
                <div class="form-floating mb-3">
                  <input
                    disabled
                    class="form-control"
                    id="inputNIM"
                    type="text"
                    placeholder="input nim"
                    v-model="mahasiswaNIM"
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
                  <label for="inputNIM">Nama Kegiatan</label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    class="form-control"
                    id="inputTingkatan"
                    type="text"
                    placeholder="input email"
                    v-model="tingkatan"
                  />
                  <label for="inputEmail">Tingkatan</label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    class="form-control"
                    id="inputPass"
                    type="number"
                    placeholder="input nim"
                    v-model="dataValidateTAK.pointTAK"
                  />
                  <label for="inputPass">Point TAK</label>
                </div>
                <label class="mb-2" for="inputDoc">Gambar</label>
                <img :src="image" class="img-fluid" :alt="name" />
                <div
                  class="d-flex align-items-center justify-content-md-end mt-4 mb-0"
                >
                  <button class="btn btn-primary" data-bs-dismiss="modal">
                    Validate
                  </button>
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
    <td>{{ name }}</td>
    <td>{{ point_TAK }}</td>
    <td>{{ tingkatan }}</td>
    <td>{{ verifed_status }}</td>
    <td>
      <button
        data-bs-toggle="modal"
        :data-bs-target="`#viewDetail-${id}`"
        type="button"
        class="btn btn-dark btn-sm"
      >
        <i class="txt-white fas fa-eye"></i>
      </button>
    </td>
  </tr>
</template>
