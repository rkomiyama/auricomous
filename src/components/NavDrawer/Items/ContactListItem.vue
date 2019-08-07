<template>
  <router-link to="contact" tag="div">
    <v-list-item link>
      <v-list-item-action>
        <v-icon>mdi-contact-mail</v-icon>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title>Contact</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </router-link>
</template>

<script>
export default {
  name: "ContactListItem"
};
</script>
