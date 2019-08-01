<template>
  <v-app-bar dense app dark color="primary" clipped-left>
    <v-app-bar-nav-icon @click.stop="$store.commit('toggledrawer')"></v-app-bar-nav-icon>
    <v-toolbar-title class="ml-5 align-center">
      <span class="title">壹品慧居</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-title class="mr-5 align-center">
      <span class="title">您的舒适人居管家</span>
    </v-toolbar-title>
  </v-app-bar>
</template>

<script>
export default {};
</script>

<style>
</style>
