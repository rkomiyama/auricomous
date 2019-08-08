<template>
  <v-list-item link @click="clickContact">
    <v-list-item-action>
      <v-icon>mdi-contact-mail</v-icon>
    </v-list-item-action>
    <v-list-item-content>
      <v-list-item-title>Contact</v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  name: "ContactListItem",
  methods: {
    clickContact() {
      this.$root.$emit("click:contact");
      this.$root.$emit("input:drawer");
    }
  }
};
</script>
