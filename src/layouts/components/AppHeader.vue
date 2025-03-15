<template>
    <header class="bg-gray-800 text-white p-4">
      <div class="container mx-auto flex justify-between items-center">
        <h1 class="text-xl font-bold">Mi Aplicación</h1>
        <nav>
          <ul class="flex space-x-4">
            <li><router-link to="/" class="hover:text-gray-300">Inicio</router-link></li>
            <li><router-link to="/about" class="hover:text-gray-300">Acerca de</router-link></li>
          </ul>
        </nav>
      </div>
    </header>
  </template>