<template>
  <div id="app">
    <router-link :to="{ name: 'Init' }">
      <img src="@/assets/logo.png" alt="logo" />
    </router-link>
    <router-view />
  </div>
</template>
