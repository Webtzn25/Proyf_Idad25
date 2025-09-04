

<template>
  <div>
    <!-- NAVBAR SUPERIOR -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <router-link class="navbar-brand" to="/">Mi Tienda</router-link>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Inicio</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/login">Login</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contact">Contacto</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- AQUÍ SE RENDERIZAN LAS PÁGINAS -->
    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup>
// No es necesario código aquí, el router se encarga de cargar cada página
</script>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
}
main {
  min-height: 80vh; /* Para que no quede tan pegado al navbar */
}
</style>
