<template>
  <v-app>
    <NavDrawer
      v-if="$vuetify.breakpoint.smAndDown"
      v-model="drawer"
      @input:drawer="drawer = $event"
      @click:contact="contact = true"
    />
    <AppBar @click:drawer="drawer = !drawer" @click:contact="contact = true" />
    <ContactModal v-model="contact" @input:contact="contact = $event" />
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
import ContactModal from "@/components/ContactModal.vue";

export default {
  name: "App",
  components: {
    NavDrawer,
    AppBar,
    ContactModal
  },
  data() {
    return {
      drawer: null,
      contact: null
    };
  },
  mounted() {
    this.$root.$on("click:contact", () => {
      this.contact = true;
    });
    this.$root.$on("input:drawer", () => {
      this.drawer = false;
    })
  }
};
</script>