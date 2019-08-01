<template>
  <v-app id="inspire">
    <TopAppBar></TopAppBar>
    <LeftDrawer></LeftDrawer>
    <v-content>
      <router-view></router-view>
    </v-content>
    <Footer></Footer>
  </v-app>
</template>

<script>
import LeftDrawer from "@/components/layout/LeftDrawer";
import TopAppBar from "@/components/layout/TopAppBar";
import Footer from "@/components/layout/Footer";

export default {
  data: () => ({
    drawer: null
  }),
  components: {
    LeftDrawer,
    TopAppBar,
    Footer
  }
};
</script>
