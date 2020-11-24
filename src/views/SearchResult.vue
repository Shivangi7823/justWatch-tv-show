<template>
  <div>
    <b-container fluid class="searchedShows">
      <b-row class="ml-3">
        <b-button variant="info" class="mb-4" @click="$router.go(-1)">
          <b-icon icon="arrow-left"></b-icon>
        </b-button>
      </b-row>
      <template v-if="shows.length > 0">
        <div>
          <b-row>
            <b-col
              lg="3"
              md="4"
              sm="6"
              v-for="(show, index) in shows"
              :key="index"
            >
              <card :shows="show"> </card>
            </b-col>
          </b-row>
        </div>
      </template>
      <template v-else>
        <div class="d-flex justify-content-center mb-3 spin">
          <b-spinner class="spinner" variant="info" type="grow"></b-spinner>
        </div>
      </template>
    </b-container>
  </div>
</template>

<script>
import Card from "../views/Card";
import { searchShows } from "../service/api";
export default {
  name: "SearchShows",
  components: {
    Card,
  },
  data() {
    return {
      shows: [],
    };
  },
  created() {
    this.getSearchedShows();
  },
  methods: {
    async getSearchedShows() {
      this.shows = (await searchShows(this.$route.params.query)).data.map((shows) => shows.show);
      if (this.shows.length == 0) {
        this.$router.push({
          name: "not-found",
        });
      }
    },
  },
  watch: {
    $route() {
      this.getSearchedShows();
    },
  },
};
</script>

<style scoped>
.searchedShows {
  padding-top: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 4rem;
  text-align: center;
  background-color: #181818;
  min-height: 80vh;
}
.spinner {
  width: 4rem;
  height: 4rem;
  margin-top: 8rem;
}
.spin {
  min-height: 70vh;
}
</style>