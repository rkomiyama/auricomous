<template>
  <v-container fill-height fluid class="home">
    <v-layout align-center justify-center>
      <v-img
        src="https://scontent-mia3-2.xx.fbcdn.net/v/t1.0-9/67971165_680801962387738_4992895577474727936_n.jpg?_nc_cat=102&_nc_oc=AQnFhD1bAaR466BzeRQuimuFwhFPC3O2yIEqpxOWJQdJ9wp5tNrcrXxAXLKrSHEmWF8&_nc_ht=scontent-mia3-2.xx&oh=3d36e54b9c096fb433e37c8e477370a1&oe=5DDF7CDE"
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
