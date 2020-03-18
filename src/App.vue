<template>
  <div id="app" class="container">
    <div class="text-center">
      <router-link :to="{ name: 'Init' }">
        <img src="@/assets/logo.png" alt="logo" />
      </router-link>
    </div>
    <router-view />
  </div>
</template>
