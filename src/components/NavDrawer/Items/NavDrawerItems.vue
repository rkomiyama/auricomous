<template>
  <v-list dense expand nav>
    <HomeListItem />
    <PortfolioListItem />
    <AboutListItem />
    <CVListItem />
    <ContactListItem />
  </v-list>
</template>

<script>
import HomeListItem from "./HomeListItem";
import PortfolioListItem from "./PortfolioListItem";
import AboutListItem from "./AboutListItem";
import CVListItem from "./CVListItem";
import ContactListItem from "./ContactListItem";

export default {
  name: "NavDrawerItems",
  components: {
    HomeListItem,
    PortfolioListItem,
    AboutListItem,
    CVListItem,
    ContactListItem
  }
};
</script>
