<script setup lang="ts">
import { reactive } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const data = reactive({
  email: "",
  password: "",
});

async function handleRegister() {
  console.log(data);
  const response = await fetch(
    "https://shrouded-refuge-36665.herokuapp.com/api/users/register",
    {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  const json = await response.json();
  console.log(json);
}
</script>

<template>
  <div id="layoutAuthentication">
    <div id="layoutAuthentication_content">
      <main>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-5">
              <div class="card shadow-lg border-0 rounded-lg mt-5">
                <div class="card-header">
                  <h3 class="text-center font-weight-light my-2">
                    Register Todo
                  </h3>
                </div>
                <div class="card-body">
                  <form @submit.prevent="handleRegister">
                    <div class="form-floating mb-3">
                      <input
                        class="form-control"
                        id="inputEmail"
                        type="email"
                        placeholder="name@example.com"
                        v-model="data.email"
                      />
                      <label for="inputEmail">Email address</label>
                    </div>
                    <div class="form-floating mb-3">
                      <input
                        class="form-control"
                        id="inputPassword"
                        type="password"
                        placeholder="Password"
                        v-model="data.password"
                      />
                      <label for="inputPassword">Password</label>
                    </div>
                    <div
                      class="d-flex align-items-center justify-content-between mt-4 mb-0"
                    >
                      <a class="small" href="password.html">Forgot Password?</a>
                      <button class="btn btn-primary">Register</button>
                    </div>
                  </form>
                </div>
                <div class="card-footer text-center py-3">
                  <div class="small">
                    <router-link to="/"
                      >Already have an account? Sign in!</router-link
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
