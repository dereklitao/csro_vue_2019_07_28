<template>
  <v-list-item router :to="path">
    <v-list-item-action>
      <v-icon color="grey darken-1">{{icon}}</v-icon>
    </v-list-item-action>
    <v-list-item-content>
      <v-list-item-title class="grey--text text--darken-1">{{title}}</v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  props: ["icon", "title", "path"]
};
</script>

<style>
</style>
