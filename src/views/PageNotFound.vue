<template>
  <div class="home" fluid>
    <div class="ml-4 pl-1">
      <b-button
        variant="info"
        class="mb-4"
        @click="$router.replace({ name: 'Home' })"
      >
        <b-icon icon="house"></b-icon>
      </b-button>
    </div>
    <div class="heading">
      <h2>
        <em>Tv Show your are searching for is not found !!!!!!!!</em>
      </h2>
    </div>
  </div>
</template>

<style scoped>
.heading {
  text-align: center;
  padding: 5rem;
  color: aqua;
  min-height: 100vh;
}
.home {
  padding-top: 3rem;
  padding-bottom: 4rem;
  background-color: #181818;
}
</style>