<script setup lang="ts">
import { ref, reactive } from "vue";
import Nav from "@/components/Nav.vue";
import SideNav from "@/components/SideNav.vue";
import Card from "@/components/Card.vue";
import Footer from "@/components/Footer.vue";
import TodoListData from "../../interface/Todo";
import api from "@/api/api";

interface TodoListData {
  id: string;
  title: string;
  description: string;
}
const todoListData = ref<TodoListData[]>([]);

// const requestHeaders: HeadersInit = new Headers();
// requestHeaders.set("Content-Type", "application/json");

async function displayTodo() {
  const response = await api({
    method: "GET",
    url: "https://shrouded-refuge-36665.herokuapp.com/api/todos",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token") ?? "",
    },
  });
  const todoList = response.data;
  todoListData.value = todoList;
  console.log(todoList);
}
displayTodo();

//get from form
const addTodo = reactive({
  title: "",
  description: "",
});

async function createTodo() {
  const response = await fetch(
    "https://shrouded-refuge-36665.herokuapp.com/api/todos",
    {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token") ?? "",
      },
      body: JSON.stringify({
        title: addTodo.title,
        description: addTodo.description,
      }),
    }
  );
  const todoList = await response.json();
  console.log(todoList);
}
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
            <h1 class="mt-4">My Todo List</h1>
            <ol class="breadcrumb mb-4">
              <li class="breadcrumb-item active">Mytodolist</li>
            </ol>
            <div class="row">
              <div class="card-body">
                <form @submit.prevent="createTodo">
                  <div class="form-floating mb-3">
                    <input
                      class="form-control"
                      id="inputTitle"
                      type="text"
                      placeholder="name@example.com"
                      v-model="addTodo.title"
                    />
                    <label for="inputEmail">Title</label>
                  </div>
                  <div class="form-floating mb-3">
                    <textarea
                      class="form-control"
                      id="inputDescription"
                      placeholder="Add some description"
                      v-model="addTodo.description"
                    />
                    <label for="inputPassword">Description</label>
                  </div>
                  <div
                    class="d-flex align-items-center justify-content-between mt-4 mb-0"
                  >
                    <button class="btn btn-primary">Add</button>
                  </div>
                </form>
              </div>
            </div>
            <Card
              v-for="data in todoListData"
              :id="data.id"
              :title="data.title"
              :description="data.description"
            />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  </div>
</template>
