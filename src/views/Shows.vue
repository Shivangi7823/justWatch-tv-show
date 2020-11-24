<template>
  <div>
    <b-container fluid class="home">
      <b-row class="ml-3">
        <b-button variant="info" @click="$router.go(-1)">
          <b-icon icon="arrow-left"></b-icon>
        </b-button>
      </b-row>
      <template v-if="showByGenre.length > 0">
        <h2 class="mt-4">
          <strong>{{ genre }}</strong>
        </h2>
        <div>
          <b-row>
            <b-col
              lg="3"
              md="4"
              sm="6"
              v-for="(show, index) in showByGenre"
              :key="index"
            >
              <card :shows="show"> </card>
            </b-col>
          </b-row>
        </div>
      </template>
      <template v-else>
        <div class="d-flex justify-content-center mb-3 spin">
          <b-spinner class="spinner" variant="info"></b-spinner>
        </div>
      </template>
    </b-container>
  </div>
</template>

<script>
import Card from "../views/Card";
import { getAllShows } from "../service/api";
export default {
  name: "Shows",
  components: {
    Card,
  },
  data() {
    return {
      shows: [],
      showByGenre: [],
      genre: this.$route.params.query,
    };
  },
  created() {
    this.getShows();
  },
  methods: {
    getShows() {
      getAllShows().then((response) => {
        this.shows = response.data;
        this.showByGenre = this.getShowByGenre(this.shows);
      });
    },
    getShowByGenre(shows) {
      if (this.genre != "PopularShows")
        return shows.filter((show) => show.genres.includes(this.genre));
      else
        return shows
          .filter((show) => show.rating.average)
          .sort((a, b) => (a.rating.average < b.rating.average ? 1 : -1));
    },
  },
};
</script>

<style scoped>
.home {
  padding-top: 2rem;
  padding-bottom: 4rem;
  text-align: center;
  background-color: #181818;
}
h2 {
  color: #c25406;
  padding-top: 0.5rem;
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