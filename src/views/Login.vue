<template>
  <div class="d-flex justify-content-center align-items-center vh-100 bg-light">
    <div class="card shadow p-4" style="width: 22rem;">
      <h2 class="h4 text-center mb-4">Iniciar Sesión</h2>
      <form @submit.prevent="login">
        <div class="mb-3">
          <input v-model="username" type="text" class="form-control" placeholder="Usuario">
        </div>
        <div class="mb-3">
          <input v-model="password" type="password" class="form-control" placeholder="Contraseña">
        </div>
        <button type="submit" class="btn btn-primary w-100">Entrar</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const username = ref('')
const password = ref('')

const login = () => {
  if (username.value && password.value) {
    alert(`Bienvenido ${username.value}!`)
  } else {
    alert("Por favor ingresa usuario y contraseña")
  }
}
</script>


