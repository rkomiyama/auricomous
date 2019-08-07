<template>
  <v-list dense expand nav>
    <HomeListItem />
    <AboutListItem />
    <ContactListItem />
    <PortfolioListItem />
    <CVListItem />
  </v-list>
</template>

<script>
import HomeListItem from "./HomeListItem";
import AboutListItem from "./AboutListItem";
import ContactListItem from "./ContactListItem";
import PortfolioListItem from "./PortfolioListItem";
import CVListItem from "./CVListItem";

export default {
  name: "NavDrawerItems",
  components: {
    HomeListItem,
    AboutListItem,
    ContactListItem,
    PortfolioListItem,
    CVListItem
  }
};
</script>
