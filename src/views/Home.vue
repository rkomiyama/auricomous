<template>
  <v-container fill-height fluid class="home">
    <v-layout align-center justify-center>
      <v-img
        srcset="https://i.imgur.com/GmNc1kI.jpg 540w, https://i.imgur.com/lhFqZ7U.jpg 1080w"
        sizes="(max-width: 540px) 540px, 969px"
        src="https://i.imgur.com/lhFqZ7U.jpg"
        :max-width="imgWidth"
      >
        <router-link to="portfolio">
          <div class="fill-height"></div>
        </router-link>
      </v-img>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  computed: {
    imgWidth() {
      return this.$vuetify.breakpoint.xs ? "300px" : "600px";
    }
  }
};
</script>
