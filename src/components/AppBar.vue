<template>
  <v-app-bar height="64" app>
    <v-app-bar-nav-icon class="hidden-md-and-up" @click.stop="$emit('click:drawer')"></v-app-bar-nav-icon>
    <v-toolbar-title class="headline text-uppercase">
      <v-flex class="d-flex align-center">
        <span>Allie&nbsp;</span>
        <span class="font-weight-light">Nolde</span>
      </v-flex>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn to="/" text>Home</v-btn>
      <v-btn to="portfolio" text>Portfolio</v-btn>
      <v-btn to="styles" text>Styles</v-btn>
      <v-btn to="reviews" text>Reviews</v-btn>
      <v-btn to="about" text>About</v-btn>
      <v-btn to="cv" text>CV</v-btn>
      <v-btn @click.stop="$emit('click:contact')" text>Contact</v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
export default {
  name: "AppBar"
};
</script>