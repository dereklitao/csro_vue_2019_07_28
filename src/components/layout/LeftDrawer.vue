<template>
  <v-navigation-drawer v-model="$store.state.drawer" clipped app>
    <v-layout column align-center>
      <v-flex shrink ma-3>
        <img width="180px" src="@/assets/img/Logo-en.png" />
      </v-flex>
    </v-layout>
    <v-list two-line>
      <DrawerItem icon="mdi-view-dashboard" title="Dashboard" path="/"></DrawerItem>
      <DrawerItem icon="mdi-home-city" title="Area & Room" path="/room"></DrawerItem>
      <DrawerItem icon="mdi-movie-outline" title="Scene" path="/scene"></DrawerItem>
      <DrawerItem icon="mdi-air-conditioner" title="Air System" path="/airsystem"></DrawerItem>
      <DrawerItem icon="mdi-bookmark-multiple" title="Curtain" path="/curtain"></DrawerItem>
      <DrawerItem icon="mdi-brightness-5" title="Light" path="/light"></DrawerItem>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import DrawerItem from "@/components/layout/DrawerItem";
export default {
  components: { DrawerItem }
};
</script>

<style>
</style>
