<template>
  <router-link to="cv" tag="div">
    <v-list-item link>
      <v-list-item-action>
        <v-icon>mdi-briefcase</v-icon>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title>CV</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </router-link>
</template>

<script>
export default {
  name: "CVListItem"
};
</script>
