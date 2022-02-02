<script setup lang="ts">
import { reactive } from "vue";
import { useRouter } from "vue-router";
import apiFetch from "@/api/api2";
import { useLoading } from "@/store/Loading";
import Loader from "@/components/Loader.vue";

const router = useRouter();

const loginData = reactive({
  email: "master@mail.com",
  password: "master",
});

const load = useLoading();

async function handleLogin() {
  load.doUpdateLoading(true);
  const response = await apiFetch("/admin/login", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token") ?? "",
    },
    body: { ...loginData },
  });

  if (response.token) {
    localStorage.setItem("token", response.token);
    localStorage.setItem("name", response.name);
    localStorage.setItem("role", response.role);
    //redirect to dashboard page
    router.push("/dashboard");
  } else {
    alert("Your data not Valid");
  }
  load.doUpdateLoading(false);
}
</script>

<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-5">
        <div class="card shadow-lg border-0 rounded-lg mt-5">
          <div class="card-header">
            <h3 class="text-center font-weight-light my-2">
              Login TAK Management
            </h3>
          </div>
          <div class="card-body">
            <form @submit.prevent="handleLogin">
              <div class="form-floating mb-3">
                <input
                  class="form-control"
                  id="inputEmail"
                  type="email"
                  placeholder="name@example.com"
                  v-model="loginData.email"
                />
                <label for="inputEmail">Email address</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  class="form-control"
                  id="inputPassword"
                  type="password"
                  placeholder="Password"
                  v-model="loginData.password"
                />
                <label for="inputPassword">Password</label>
              </div>
              <div
                class="d-flex align-items-center justify-content-between mt-4 mb-0"
              >
                <a class="small" href="password.html">Forgot Password?</a>
                <button class="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
        <Loader v-if="load.loading" class="loader" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.loader {
  margin: 50px;
  height: 50px !important;
}
</style>
