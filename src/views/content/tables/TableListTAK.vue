<script setup lang="ts">
import { reactive, PropType } from "vue";
import { IDataTAK } from "@/interfaces/TAK";
import api from "@/api/api";

const props = defineProps({
  index: { type: Number, default: 0 },
  dataTAK: { type: Object as PropType<IDataTAK>, default: null },
  displayListTAK: {
    type: Function,
    default() {
      return {};
    },
  },
});

// edit TAK
const editedTAK = reactive({
  name: props.dataTAK.name,
  tingkatan: props.dataTAK.tingkatan,
});

const options = {
  tingkatanOptions: [
    { text: "Provinsi", value: "PROVINSI" },
    { text: "Kota", value: "KOTA" },
    { text: "Nasional", value: "NASIONAL" },
    { text: "International", value: "INTERNASIONAL" },
  ],
};

async function editTAK() {
  const response = await api({
    method: "PATCH",
    url: `/tak/${props.dataTAK.id}`,
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
async function deleteTAK() {
  const response = await api({
    method: "DELETE",
    url: `/tak/${props.dataTAK.id}`,
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
    :id="`viewEdit-${dataTAK.id}`"
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
                    v-model="dataTAK.point_TAK"
                  />
                  <label for="inputPoint">Point TAK</label>
                </div>
                <label class="mb-2" for="img">Gambar</label>
                <img
                  id="img"
                  :src="dataTAK.image"
                  class="img-fluid"
                  :alt="dataTAK.name"
                />
                <div
                  class="d-flex align-items-center justify-content-md-end mt-4 mb-0"
                >
                  <button
                    v-if="dataTAK.verifed_status === false"
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
    <td>{{ dataTAK.name }}</td>
    <td>{{ dataTAK.tingkatan }}</td>
    <td>{{ dataTAK.point_TAK }}</td>
    <td>{{ dataTAK.verifed_status }}</td>
    <td>
      <button
        data-bs-toggle="modal"
        :data-bs-target="`#viewEdit-${dataTAK.id}`"
        type="button"
        class="btn btn-warning btn-sm me-2"
      >
        <i style="color: white" class="fas fa-pencil-alt"></i>
      </button>
      <button
        v-if="dataTAK.verifed_status === false"
        type="button"
        class="btn btn-danger btn-sm"
        @click="deleteTAK()"
      >
        <i class="txt-white fas fa-trash"></i>
      </button>
    </td>
  </tr>
</template>
