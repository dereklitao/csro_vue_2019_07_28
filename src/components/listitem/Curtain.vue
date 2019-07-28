<template>
  <v-list-item>
    <v-layout column shrink justify-center>
      <v-flex shrink pa-0 mt-3>
        <v-icon v-if="status" large color="blue" class="mr-2">mdi-bookmark</v-icon>
        <v-icon v-else large color="grey" class="mr-2">mdi-bookmark</v-icon>
      </v-flex>
      <v-flex shrink pa-0 ml-1>
        <p class="body-2 grey--text ma-0 font-weight-light">窗帘</p>
      </v-flex>
    </v-layout>
    <v-spacer></v-spacer>
    <!-- <v-list-item-content disabled>
      <v-list-item-title class="primary--text text--darken-2">Light</v-list-item-title>
    </v-list-item-content>-->
    <v-btn-toggle rounded dark>
      <v-btn small color="primary" height="35px">
        <v-icon class="elevation:0">mdi-arrow-down-circle-outline</v-icon>
      </v-btn>
      <v-btn small color="primary" height="35px">
        <v-icon class="elevation:0">mdi-stop-circle-outline</v-icon>
      </v-btn>
      <v-btn small color="primary" height="35px">
        <v-icon class="elevation:0">mdi-arrow-up-circle-outline</v-icon>
      </v-btn>
    </v-btn-toggle>
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
