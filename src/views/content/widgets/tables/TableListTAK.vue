<script setup lang="ts">
import { reactive } from "vue";
import api from "@/api/api";

const props = defineProps({
  index: { type: Number, default: 0 },
  id: { type: String, default: "" },
  name: { type: String, default: "" },
  image: { type: String, default: "" },
  tingkatan: { type: String, default: "" },
  point_TAK: { type: Number, default: 0 },
  verifed_status: { type: Boolean, default: false },
  displayListTAK: {
    type: Function,
    default() {
      return {};
    },
  },
});

// edit TAK
const editedTAK = reactive({
  name: props.name,
  tingkatan: props.tingkatan,
});

const options = reactive({
  tingkatanOptions: [
    { text: "Provinsi", value: "PROVINSI" },
    { text: "Kota", value: "KOTA" },
    { text: "Nasional", value: "NASIONAL" },
    { text: "International", value: "INTERNATIONAL" },
  ],
});

async function editTAK() {
  const response = await api({
    method: "PATCH",
    url: `/tak/${props.id}`,
    headers: {
      Authorization: localStorage.getItem("token") ?? "",
    },
    data: { ...editedTAK },
  });
  if (response) {
    alert(response.data.message);
  }
  props.displayListTAK();
}

//delete TAK
async function deleteTAK(id: any) {
  const response = await api({
    method: "DELETE",
    url: `/tak/${props.id}`,
    headers: {
      Authorization: localStorage.getItem("token") ?? "",
    },
  });
  if (response) {
    alert(response.data.message);
  }
  props.displayListTAK();
}
</script>

<template>
  <!-- modal -->
  <div
    class="modal fade"
    :id="`viewEdit-${id}`"
    tabindex="-1"
    aria-labelledby="detailTAKModal"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="detailTAKModal">Edit TAK</h5>
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
              <form @submit.prevent="editTAK">
                <div class="form-floating mb-3">
                  <input
                    class="form-control"
                    id="inputName"
                    type="text"
                    placeholder="input nama"
                    v-model="editedTAK.name"
                  />
                  <label for="inputName">Nama Kegiatan</label>
                </div>
                <div class="form-floating mb-3">
                  <select
                    id="inputTk"
                    class="form-select"
                    aria-label="Default select example"
                    v-model="editedTAK.tingkatan"
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
                    disabled
                    class="form-control"
                    id="inputPoint"
                    type="number"
                    placeholder="input nim"
                    v-model="point_TAK"
                  />
                  <label for="inputPoint">Point TAK</label>
                </div>
                <label class="mb-2" for="img">Gambar</label>
                <img id="img" :src="image" class="img-fluid" :alt="name" />
                <div
                  class="d-flex align-items-center justify-content-md-end mt-4 mb-0"
                >
                  <button
                    v-if="verifed_status === false"
                    class="btn btn-primary"
                    data-bs-dismiss="modal"
                  >
                    Edit
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
    <td>{{ tingkatan }}</td>
    <td>{{ point_TAK }}</td>
    <td>{{ verifed_status }}</td>
    <td>
      <button
        data-bs-toggle="modal"
        :data-bs-target="`#viewEdit-${id}`"
        type="button"
        class="btn btn-warning btn-sm me-2"
      >
        <i style="color: white" class="fas fa-pencil-alt"></i>
      </button>
      <button
        v-if="props.verifed_status === false"
        type="button"
        class="btn btn-danger btn-sm"
        @click="deleteTAK(id)"
      >
        <i class="txt-white fas fa-trash"></i>
      </button>
    </td>
  </tr>
</template>
