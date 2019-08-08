<template>
  <v-list dense expand nav>
    <HomeListItem />
    <PortfolioListItem />
    <AboutListItem />
    <ContactListItem />
    <CVListItem />
  </v-list>
</template>

<script>
import HomeListItem from "./HomeListItem";
import PortfolioListItem from "./PortfolioListItem";
import AboutListItem from "./AboutListItem";
import ContactListItem from "./ContactListItem";
import CVListItem from "./CVListItem";

export default {
  name: "NavDrawerItems",
  components: {
    HomeListItem,
    PortfolioListItem,
    AboutListItem,
    ContactListItem,
    CVListItem
  }
};
</script>
