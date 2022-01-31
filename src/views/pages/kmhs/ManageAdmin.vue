<script setup lang="ts">
import { ref, reactive } from "vue";
import { IAdminData } from "@/interfaces/Admin";
import TableListAdmin from "@/views/content/tables/TableListAdmin.vue";
import apiFetch from "@/api/api2";

const listAdmin = ref<IAdminData[]>([]);

async function displayListAdmin() {
  const response = await apiFetch("/admin", {
    method: "GET",
    headers: {
      Authorization: localStorage.getItem("token") ?? "",
    },
  });
  listAdmin.value = response;
}
displayListAdmin();

//register admin
const dataRegisterAdmin = reactive({
  nidn: null,
  name: "",
  email: "",
  password: "",
});
async function registerAdmin() {
  const response = await apiFetch("/admin/register", {
    method: "POST",
    headers: {
      Authorization: localStorage.getItem("token") ?? "",
    },
    body: { ...dataRegisterAdmin },
  });
  if (response) {
    alert(response.message);
  }
  displayListAdmin();
}
</script>

<template>
  <div class="container-fluid px-4">
    <h1 class="mt-4">Manage Admin</h1>
    <ol class="breadcrumb mb-4">
      <li class="breadcrumb-item active">listadmin</li>
    </ol>

    <!-- modal button-->
    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
      <button
        data-bs-toggle="modal"
        data-bs-target="#newAdmin"
        class="btn btn-primary mb-3"
        type="button"
      >
        New Admin
      </button>
    </div>

    <!-- modal -->
    <div
      class="modal fade"
      id="newAdmin"
      tabindex="-1"
      aria-labelledby="newAdminModal"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="newAdminModal">New Admin</h5>
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
                <form @submit.prevent="registerAdmin">
                  <div class="form-floating mb-3">
                    <input
                      class="form-control"
                      id="inputNIDN"
                      type="number"
                      placeholder="input nidn"
                      v-model="dataRegisterAdmin.nidn"
                    />
                    <label for="inputNIM">NIDN</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                      class="form-control"
                      id="inputNama"
                      type="text"
                      placeholder="input nama"
                      v-model="dataRegisterAdmin.name"
                    />
                    <label for="inputNIM">Nama</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                      class="form-control"
                      id="inputEmail"
                      type="email"
                      placeholder="input email"
                      v-model="dataRegisterAdmin.email"
                    />
                    <label for="inputEmail">Email</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                      class="form-control"
                      id="inputPass"
                      type="text"
                      placeholder="input password"
                      v-model="dataRegisterAdmin.password"
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
            <th scope="col">NIDN</th>
            <th scope="col">Nama</th>
            <th scope="col">Email</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <TableListAdmin
            v-for="(data, index) in listAdmin"
            :index="index"
            :dataAdmin="data"
            :displayListAdmin="displayListAdmin"
          />
        </tbody>
      </table>
    </div>
  </div>
</template>
