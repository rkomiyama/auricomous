<template>
  <v-dialog
    :value="$attrs.value"
    @input="$emit('input:contact', $event)"
    transition="slide-y-transition"
    max-width="300px"
  >
    <v-card>
      <v-card-title class="headline">Allie Nolde</v-card-title>
      <v-card-text>
        <v-container grid-list-md class="px-0">
          <v-layout column>
            <v-flex>
              <v-icon class="mr-2">mdi-email</v-icon>
              <v-label>email@address.com</v-label>
            </v-flex>
            <v-flex>
              <v-icon class="mr-2">mdi-phone</v-icon>
              <v-label>919-999-9999</v-label>
            </v-flex>
            <v-flex>
              <v-icon class="mr-2">mdi-facebook</v-icon>
              <a target="_blank" href="https://www.facebook.com/allienoldehair/">@allienoldehair</a>
            </v-flex>
            <v-flex>
              <v-icon class="mr-2">mdi-instagram</v-icon>
              <a target="_blank" href="https://www.instagram.com/allienolde_hair/">allienolde_hair</a>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "ContactModal"
};
</script>
