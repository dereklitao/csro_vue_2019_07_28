<template>
  <v-flex mt-7 shrink>
    <v-badge overlap color="red">
      <template v-if="badge" v-slot:badge>!</template>
      <v-card height="120" width="230" elevation="4">
        <v-layout mx-4>
          <v-card height="60px" width="60px" :color="color" style="margin-top:-20px" elevation="2">
            <v-layout fill-height justify-center>
              <v-icon color="white" large class="mt-4">{{icon}}</v-icon>
            </v-layout>
          </v-card>
          <v-spacer></v-spacer>
          <p class="grey--text mt-2 font-weight-bold">{{name}}</p>
        </v-layout>
        <v-divider inset class="my-2"></v-divider>
        <v-layout justify-center align-center>
          <v-card-title class="primary--text text--darken-2 display-1 font-weight-light">{{value}}</v-card-title>
          <span class="title grey--text font-weight-light">{{unit}}</span>
        </v-layout>
        <v-layout justify-center align-center>
          <v-card :color="color" width="210" height="6" style="margin-top:-3px"></v-card>
        </v-layout>
      </v-card>
    </v-badge>
  </v-flex>
</template>

<script>
export default {
  props: {
    name: {
      type: String
    },
    icon: {
      type: String
    },
    color: {
      type: String
    },
    value: {
      type: String
    },
    unit: {
      type: String
    },
    badge: {
      type: String
    }
  }
};
</script>



<style>
</style>
