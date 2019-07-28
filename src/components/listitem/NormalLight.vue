<template>
  <v-list-item>
    <v-layout column shrink justify-center>
      <v-flex shrink pa-0 mt-3>
        <v-icon v-if="status" large color="yellow" class="mr-2">mdi-ceiling-light</v-icon>
        <v-icon v-else large color="grey" class="mr-2">mdi-ceiling-light</v-icon>
      </v-flex>
      <v-flex shrink pa-0 ml-1>
        <p class="body-2 grey--text ma-0 font-weight-light">light</p>
      </v-flex>
    </v-layout>
    <v-spacer></v-spacer>
    <!-- <v-list-item-content disabled>
      <v-list-item-title class="primary--text text--darken-2">Light</v-list-item-title>
    </v-list-item-content>-->
    <v-btn rounded color="primary" small height="35px" @click.stop="clicked">
      <v-icon class="elevation:0">mdi-power</v-icon>
    </v-btn>
  </v-list-item>
</template>

<script>
import { type } from "os";
export default {
  data: () => ({
    status: true
  }),
  methods: {
    clicked() {
      this.status = !this.status;
    }
  }
};
</script>

<style>
</style>
