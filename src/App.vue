<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" clipped app>
      <v-layout column align-center>
        <v-flex shrink ma-3>
          <img width="180px" src="@/assets/img/Logo-en.png" />
        </v-flex>
      </v-layout>
      <v-list two-line>
        <NavItem icon="mdi-view-dashboard" title="Dashboard" path="/"></NavItem>
        <NavItem icon="mdi-home-city" title="Area & Room" path="/room"></NavItem>
        <NavItem icon="mdi-movie-outline" title="Scene" path="/scene"></NavItem>
        <NavItem icon="mdi-air-conditioner" title="Air System" path="/airsystem"></NavItem>
        <NavItem icon="mdi-bookmark-multiple" title="Curtain" path="/curtain"></NavItem>
        <NavItem icon="mdi-brightness-5" title="Light" path="/light"></NavItem>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar dense app dark color="primary" clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="ml-5 align-center">
        <span class="title">壹品慧居</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-title class="mr-5 align-center">
        <span class="title">您的舒适人居管家</span>
      </v-toolbar-title>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>

    <v-footer dark color="primary" app>
      <v-layout row wrap justify-center>
        <v-flex shrink ma-1>&copy;2019 CSRO</v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
import NavItem from "@/components/drawer/NavItem";
export default {
  data: () => ({
    drawer: null
  }),
  components: { NavItem }
};
</script>
