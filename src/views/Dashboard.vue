<template>
  <b-container fluid class="home">
    <template v-if="popularShows.length > 0">
      <router-link
        class="heading-color"
        :to="{
          name: 'Shows',
          params: { query: 'PopularShows' },
        }"
      >
        <h2><strong>Popular Shows</strong></h2>
      </router-link>
      <div>
        <b-row >
          <b-col
            lg="3"
            md="4"
            sm="6"
            v-for="(popular, index) in popularShows"
            :key="index"
          >
            <card :shows="popular"> </card>
          </b-col>
        </b-row>
      </div>
    </template>
    <template v-else>
      <div class="d-flex justify-content-center mb-3 spin">
        <b-spinner class="spinner" variant="info"></b-spinner>
      </div>
    </template>

    <template v-if="genres.length > 0">
      <div v-for="(genre, index) in genres" :key="index">
        <router-link
          class="heading-color"
          :to="{
            name: 'Shows',
            params: { query: genre.name },
          }"
        >
          <h2 class="mt-4">
            {{ genre.name }}
          </h2>
        </router-link>
        <div>
          <b-row>
            <b-col
              lg="3"
              md="4"
              sm="6"
              v-for="(show, index) in genre.shows"
              :key="index"
            >
              <card :shows="show"> </card>
            </b-col>
          </b-row>
        </div>
      </div>
    </template>
  </b-container>
</template>

<script>
import Card from "../views/Card";
import { getAllShows } from "../service/api";

export default {
  name: "Dashboard",
  components: {
    Card,
  },
  data() {
    return {
      shows: [],
      popularShows: [],      
    };
  },
  created() {
    this.getShows();
  },
  computed: {
    genreTitles() {
      return Array.from(
        new Set(
          this.shows
            .map((show) => show.genres)
            .reduce((x, y) => x.concat(y), [])
        )
      );
    },
    genres() {
      return this.genreTitles.map((genre) => {
        return {
          name: genre,
          shows: this.getHighRatedshow(
            this.shows.filter((show) => show.genres.includes(genre))
          ),
        };
      });
    },
  },
  methods: {
    async getShows() {
      this.shows = (await getAllShows()).data;
      this.popularShows = this.getHighRatedshow(this.shows);
    },
    getHighRatedshow(shows) {
      return shows
        .filter((show) => show.rating.average)
        .sort((a, b) => (a.rating.average < b.rating.average ? 1 : -1))
        .slice(0, 10);
    },
  },
};
</script>

<style scoped>
h2 {
  color: #c25406;
  padding-top: 0.5rem;
}
.heading-color {
  color: #492003;
}
.home {
  padding-top: 4rem;
  padding-bottom: 4rem;
  text-align: center;
  background-color: #181818;
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