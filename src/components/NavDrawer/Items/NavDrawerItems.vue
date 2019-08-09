<template>
  <v-list dense expand nav>
    <HomeListItem />
    <PortfolioListItem />
    <StylesListItem />
    <ReviewsListItem />
    <AboutListItem />
    <CVListItem />
    <ContactListItem />
  </v-list>
</template>

<script>
import HomeListItem from "./HomeListItem";
import PortfolioListItem from "./PortfolioListItem";
import StylesListItem from "./StylesListItem";
import ReviewsListItem from "./ReviewsListItem";
import AboutListItem from "./AboutListItem";
import CVListItem from "./CVListItem";
import ContactListItem from "./ContactListItem";

export default {
  name: "NavDrawerItems",
  components: {
    HomeListItem,
    PortfolioListItem,
    StylesListItem,
    ReviewsListItem,
    AboutListItem,
    CVListItem,
    ContactListItem
  }
};
</script>
