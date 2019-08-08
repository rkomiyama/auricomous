<template>
  <v-app>
    <NavDrawer
      v-if="$vuetify.breakpoint.smAndDown"
      v-model="drawer"
      @input:drawer="drawer = $event"
    />
    <AppBar @click:drawer="drawer = !drawer" />
    <v-content>
      <v-container>
        <router-view />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import NavDrawer from "@/components/NavDrawer/NavDrawer.vue";
import AppBar from "@/components/AppBar.vue";

export default {
  name: "App",
  components: {
    NavDrawer,
    AppBar
  },
  data() {
    return {
      drawer: null
    };
  }
};
</script>