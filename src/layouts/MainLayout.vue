<script setup>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <AppHeader />
    
    <main class="container mx-auto p-4 flex-grow">
      <!-- Aquí se cargará el contenido de cada ruta -->
      <router-view />
    </main>
    
    <AppFooter />
  </div>
</template>