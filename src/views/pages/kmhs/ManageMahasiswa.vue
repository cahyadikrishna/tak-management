<script setup lang="ts">
import { ref, reactive } from "vue";
import Nav from "@/components/Nav.vue";
import SideNav from "@/components/SideNav.vue";
import Footer from "@/components/Footer.vue";
import TableListMahasiswa from "@/views/content/widgets/tables/TableListMahasiswa.vue";

import api from "@/api/api";

interface IListMahasiswa {
  nim: number;
  birth_date: number;
  email: string;
  name: string;
  prodi: string;
  tak: [];
}

const listMahasiswa = ref<IListMahasiswa[]>([]);

async function displayListMahasiswa() {
  const response = await api({
    method: "GET",
    url: "/mahasiswa",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token") ?? "",
    },
  });
  const dataListMahasiswa = response.data;
  listMahasiswa.value = dataListMahasiswa;
  console.log(dataListMahasiswa);
}
displayListMahasiswa();
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
                    <h5 class="modal-title" id="exampleModalLabel">
                      New Mahasiswa
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
                        <form>
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
                              id="inputNIM"
                              type="text"
                              placeholder="input nim"
                            />
                            <label for="inputNIM">Nama</label>
                          </div>
                          <div class="form-floating mb-3">
                            <input
                              class="form-control"
                              id="inputNIM"
                              type="text"
                              placeholder="input nim"
                            />
                            <label for="inputNIM">Email</label>
                          </div>
                          <div class="form-floating mb-3">
                            <input
                              class="form-control"
                              id="inputAkt"
                              type="number"
                              placeholder="input angkatan"
                            />
                            <label for="inputNIM">Angkatan</label>
                          </div>
                          <div class="form-floating mb-3">
                            <select
                              class="form-select"
                              aria-label="Default select example"
                            >
                              <option selected>Pilih</option>
                              <option value="1">Laki - Laki</option>
                              <option value="2">Perempuan</option>
                            </select>
                            <label for="inputNIM">Jenis Kelamin</label>
                          </div>
                          <div class="form-floating mb-3">
                            <select
                              class="form-select"
                              aria-label="Default select example"
                            >
                              <option selected>Pilih</option>
                              <option value="1">Sistem Informasi</option>
                              <option value="2">
                                Sistem Informasi Akuntansi
                              </option>
                              <option value="2">Teknik Informatika</option>
                            </select>
                            <label for="inputNIM">Prodi</label>
                          </div>
                          <div class="form-floating mb-3">
                            <select
                              class="form-select"
                              aria-label="Default select example"
                            >
                              <option selected>Pilih</option>
                              <option value="1">Laki - Laki</option>
                              <option value="2">Perempuan</option>
                            </select>
                            <label for="inputNIM">Tanggal Lahir</label>
                          </div>
                          <div class="form-floating mb-3">
                            <input
                              class="form-control"
                              id="inputNIM"
                              type="text"
                              placeholder="input nim"
                            />
                            <label for="inputNIM">Password</label>
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
                    <th scope="col">NIM</th>
                    <th scope="col">Nama</th>
                    <th scope="col">Email</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <TableListMahasiswa
                    v-for="data in listMahasiswa"
                    :nim="data.nim"
                    :birth_date="data.birth_date"
                    :email="data.email"
                    :name="data.name"
                    :prodi="data.prodi"
                    :tak="data.tak"
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
