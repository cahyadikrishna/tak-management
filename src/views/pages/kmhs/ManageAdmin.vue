<script setup lang="ts">
import { ref } from "vue";
import Nav from "@/components/Nav.vue";
import SideNav from "@/components/SideNav.vue";
import Footer from "@/components/Footer.vue";
import TableListAdmin from "@/views/content/widgets/tables/TableListAdmin.vue";

import api from "@/api/api";

interface IListAdmin {
  nidn: number;
  name: string;
  email: string;
}

const listAdmin = ref<IListAdmin[]>([]);

async function displayListAdmin() {
  const response = await api({
    method: "GET",
    url: "/admin",
    headers: {
      Authorization: localStorage.getItem("token") ?? "",
    },
  });
  listAdmin.value = response.data;
}
displayListAdmin();
</script>

<template>
  <div class="sb-nav-fixed">
    <Nav />
    <div id="layoutSidenav">
      <div id="layoutSidenav_nav">
        <SideNav />
      </div>
      <div id="layoutSidenav_content">
        <main>
          <div class="container-fluid px-4">
            <h1 class="mt-4">Manage Admin</h1>
            <ol class="breadcrumb mb-4">
              <li class="breadcrumb-item active">listadmin</li>
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
                    <h5 class="modal-title" id="exampleModalLabel">
                      New Admin
                    </h5>
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
                          <div
                            class="d-flex align-items-center justify-content-md-end mt-4 mb-0"
                          >
                            <button class="btn btn-primary">Save</button>
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
                    v-for="data in listAdmin"
                    :nidn="data.nidn"
                    :name="data.name"
                    :email="data.email"
                  />
                </tbody>
              </table>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  </div>
</template>
