<template>
  <div id="app">
    <Header />
    <div class="mt-3">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style >
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #343a40;
}
.text-color {
  color: white;
}
.card-border {
  border: 0.1rem solid #202020;
}
.text-heading {
  color: #00d0d0;
}
.card {
  height: 18.63rem;
  width: 13.32rem;
  justify-content: center;
  background-color: #d3d3d3 !important;
  border: 0.1rem solid #202020;
  color: black;
}
</style>