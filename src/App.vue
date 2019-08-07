<template>
  <v-app>
    <AppBar />
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import AppBar from "@/components/AppBar.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    AppBar
  },
  data: () => ({
    //
  })
};
</script>