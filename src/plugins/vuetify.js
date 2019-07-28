import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "mdi"
  },
  theme: {
    themes: {
      light: {
        primary: "#009688",
        secondary: "#8bc34a",
        accent: "#3f51b5",
        error: "#f44336",
        warning: "#ffc107",
        info: "#03a9f4",
        success: "#4caf50"
      },
      dark: {
        primary: "#009688",
        secondary: "#8bc34a",
        accent: "#3f51b5",
        error: "#f44336",
        warning: "#ffc107",
        info: "#03a9f4",
        success: "#4caf50"
      }
    }
  }
});
