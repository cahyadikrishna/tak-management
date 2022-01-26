<script setup lang="ts">
import { ref } from "vue";
import api from "@/api/api";

const props = defineProps({
  id: { type: String, default: "" },
  name: { type: String, default: "" },
  point_TAK: { type: Number, default: 0 },
  tingkatan: { type: String, default: "" },
  verifed_status: { type: Boolean, default: false },
});

//detail tak
interface IDetailTAK {
  id: string;
  mahasiswaNIM: number;
  name: string;
  image: string;
  tingkatan: string;
  point_TAK: number;
  verifed_status: boolean;
}

const detailDataTAK = ref<IDetailTAK[]>([]);

async function displayDetailTAK() {
  const response = await api({
    method: "GET",
    url: `tak/${props.id}`,
    headers: {
      Authorization: localStorage.getItem("token") ?? "",
    },
  });
  console.log(response.data);
  detailDataTAK.value = { ...response.data };
}
</script>

<template>
  <!-- modal -->
  <div
    class="modal fade"
    id="viewDetail"
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
              <form>
                <div class="row">
                  <div class="form-floating mb-3 col-md">
                    <input
                      disable
                      class="form-control"
                      id="inputNIM"
                      type="number"
                      placeholder="input nim"
                    />
                    <label for="inputNIM">{{ detailDataTAK }}</label>
                  </div>
                  <div class="form-floating mb-3 col-md">
                    <input
                      class="form-control"
                      id="inputNama"
                      type="text"
                      placeholder="input nama"
                    />
                    <label for="inputNIM">Nama</label>
                  </div>
                </div>
                <div class="row">
                  <div class="form-floating mb-3">
                    <input
                      class="form-control"
                      id="inputEmail"
                      type="text"
                      placeholder="input email"
                    />
                    <label for="inputEmail">Email</label>
                  </div>
                </div>

                <div class="d-flex align-items-center justify-content-md-end mt-4 mb-0">
                  <button class="btn btn-primary" data-bs-dismiss="modal">Save</button>
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
    <td>{{ point_TAK }}</td>
    <td>{{ tingkatan }}</td>
    <td>{{ verifed_status }}</td>
    <td>
      <button
        @click="displayDetailTAK"
        data-bs-toggle="modal"
        data-bs-target="#viewDetail"
        type="button"
        class="btn btn-dark btn-sm"
      >
        <i class="txt-white fas fa-eye"></i>
      </button>
    </td>
  </tr>
</template>
