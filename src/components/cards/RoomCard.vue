<template>
  <v-card width="280">
    <v-toolbar color="primary" dense dark>
      <v-icon>mdi-hotel</v-icon>
      <v-toolbar-title class="ml-5">主卧室</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn small rounded color="white" depressed class="primary--text font-weight-bold">7</v-btn>
      <!-- <h3 class="font-weight-light">7</h3> -->
    </v-toolbar>
    <v-list avatar two-line>
      <v-list-item-group color="primary">
        <NormalLight></NormalLight>
        <v-divider></v-divider>
        <Curtain></Curtain>
        <v-divider></v-divider>
        <DimLight></DimLight>
        <v-divider></v-divider>
        <NormalLight></NormalLight>
        <v-divider></v-divider>
        <NormalLight></NormalLight>
        <v-divider></v-divider>
        <DimLight></DimLight>
        <v-divider></v-divider>
        <NormalLight></NormalLight>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
import NormalLight from "@/components/listitem/NormalLight";
import DimLight from "@/components/listitem/DimLight";
import Curtain from "@/components/listitem/Curtain";
export default {
  components: {
    NormalLight,
    DimLight,
    Curtain
  }
};
</script>

<style>
</style>
