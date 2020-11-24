<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <router-link to="/">
        <b-navbar-brand class="navbar ml-1">
          <b-icon icon="camera-reels" class="navbar-icon"></b-icon>
          JustWatch</b-navbar-brand
        >
      </router-link>
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input
            size="sm"
            class="mr-sm-2 input"
            placeholder="Search"
            v-model="searchQuery"
            @keydown.enter.native="search()"
          ></b-form-input>
          <b-button
            size="sm"
            class="my-2 mt-2 my-sm-0 btn-search"
            @click="search()"
            ><b-icon icon="search" class="search-icon"></b-icon>
          </b-button>
        </b-nav-form>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: "",
    };
  },
  methods: {
    search() {
      this.$router.push({
        name: "SearchResult",
        params: {
          query: this.searchQuery,
        },
      });
      this.searchQuery = "";
    },
  },
};
</script>

<style scoped>
.navbar {
  font-family: "Snell Roundhand", cursive;
  color: #00d0d0 !important;
}
.navbar-icon {
  width: 2rem;
  height: 2rem;
  color: #00d0d0;
}
.search-icon {
  color: #00d0d0;
}
</style>