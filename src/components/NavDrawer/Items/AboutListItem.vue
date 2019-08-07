<template>
  <router-link to="about" tag="div">
    <v-list-item link>
      <v-list-item-action>
        <v-icon>mdi-information</v-icon>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title>About</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </router-link>
</template>

<script>
export default {
  name: "AboutListItem"
};
</script>
