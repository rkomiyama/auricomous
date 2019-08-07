<template>
  <router-link to="portfolio" tag="div">
    <v-list-item link>
      <v-list-item-action>
        <v-icon>mdi-image-album</v-icon>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title>Portfolio</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </router-link>
</template>

<script>
export default {
  name: "PortfolioListItem"
};
</script>
