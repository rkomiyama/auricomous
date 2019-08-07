<template>
  <router-link to="/" tag="div">
    <v-list-item link>
      <v-list-item-action>
        <v-icon>mdi-home-circle</v-icon>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title>Home</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </router-link>
</template>

<script>
export default {
  name: "HomeListItem"
};
</script>
