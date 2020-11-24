<template>
  <div class="show-detail">
    <div class="ml-3">
      <b-button variant="info" class="btn-circle mb-5" @click="$router.go(-1)">
        <b-icon icon="arrow-left"></b-icon>
      </b-button>
    </div>
    <template v-if="show">
      <b-container fluid>
        <b-row>
          <b-col lg="4" md="6" sm="6">
            <b-img
              class="card-border"
              left
              fluid
              width="300%"
              :src="show.image.medium || show.image.original"
              v-if="show.image"
              rounded
            ></b-img>
            <div v-else class="card text-center">
              <h3>Image Not Available</h3>
            </div>
          </b-col>
          <b-col lg="8" md="6" sm="6">
            <h2 class="text-heading mt-2">
              <strong>{{ show.name }}</strong>
            </h2>
            <div class="text-color">
              <span>
                <b-icon icon="star-fill" class="star-icon"></b-icon>
              </span>
              <span class="ml-1" v-if="this.rating">
                {{ show.rating.average }}
              </span>
              <span v-else class="ml-1">NA</span>
              <span class="mx-2">|</span>
              <span>
                <b-icon icon="calendar3" class="text-heading"></b-icon>
              </span>
              <span class="show-premiered ml-1" v-if="this.premiered">
                {{ show.premiered }}
              </span>
              <span v-else class="ml-1">NA</span>
              <span class="mx-2">|</span>
              <span>
                <b-icon icon="film" class="text-heading"></b-icon>
              </span>
              <span class="show-genres ml-1" v-if="this.genre.length > 0">
                {{ show.genres.join() }}
              </span>
              <span v-else class="ml-1">NA</span>
            </div>
            <div class="mt-5 summary">
              <h2 class="show-name">
                <small>Summary</small>
              </h2>
              <p
                v-if="show.summary"
                class="text-color"
                v-html="show.summary"
              ></p>
              <p class="text-color" v-else>Not Available</p>
            </div>
          </b-col>
        </b-row>
      </b-container>
      <div class="cast">
        <h2 class="heading">
          <strong> Seasons</strong>
        </h2>
        <template v-if="seasons.length > 0">
          <b-row>
            <b-col
              lg="3"
              md="4"
              sm="6"
              v-for="(season, index) in seasons"
              :key="index"
            >
              <season :season="season"> </season>
            </b-col>
          </b-row>
        </template>
        <template v-else>
          <div class="details">
            <h2><em>No seasons are available </em></h2>
          </div>
        </template>
      </div>
      <div class="cast">
        <h2 class="heading">
          <strong> Cast</strong>
        </h2>
        <template v-if="casts.length > 0">
          <b-row>
            <b-col
              lg="3"
              md="4"
              sm="6"
              v-for="(cast, index) in casts"
              :key="index"
            >
              <cast :cast="cast"> </cast>
            </b-col>
          </b-row>
        </template>
        <template v-else>
          <div class="details">
            <h2><em>No casts are available </em></h2>
          </div>
        </template>
      </div>
    </template>
  </div>
</template>

<script>
import Cast from "./Cast.vue";
import Season from "./Season.vue";
import { getShowDetails, getShowCasts, getShowSeason } from "../service/api";

export default {
  name: "ShowDetails",
  components: {
    Cast,
    Season,
  },
  data() {
    return {
      show: {},
      casts: [],
      seasons: [],
      rating: "",
      premiered: "",
      genre: "",
    };
  },
  created() {
    this.showDetails(this.$route.params.id);
  },
  methods: {
    async showDetails(id) {
      try {
        this.show = (await getShowDetails(id)).data;
        this.casts = (await getShowCasts(id)).data;
        this.seasons = (await getShowSeason(id)).data;
        this.rating = this.show.rating.average;
        this.premiered = this.show.premiered;
        this.genre = this.show.genres;
      } catch (err) {
        this.$router.push({
          name: "not-found",
        });
      }
    },
  },
};
</script>

<style scoped>
.summary {
  font-family: "Comic sans MS", Courier, monospace;
  color: aqua;
}
.show-detail {
  padding-top: 2rem;
  padding-left: 1rem;
  padding-bottom: 4rem;
  padding-right: 1rem;
  background-color: #181818;
}
.cast {
  margin-top: 3rem;
  padding-left: 1rem;
  padding-right: 1rem;
  text-align: center;
  border-top: 0.1rem solid #383838;
}
.details {
  color: white;
  min-height: 30vh;
  margin-top: 3rem;
}
.heading {
  color: #00d0d0;
  margin-top: 4rem;
  text-align: left;
}
.star-icon {
  color: #c25406;
}
</style>