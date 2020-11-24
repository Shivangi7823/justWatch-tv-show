<template>
  <div class="text-color mb-3 mt-4">
    <img
      class="card-border"
      :src="season.image.medium || season.image.original"
      v-if="season.image"
    />
    <div v-else class="card mx-auto">
      <h3>Image Not Available</h3>
    </div>
    <div class="mt-1" v-if="season.number">Season {{ season.number }}</div>
    <div class="mt-1" v-else>NA</div>
  </div>
</template>

<script>
export default {
  props: ["season"],
};
</script> 

<style scoped>
.heading {
  color: #00d0d0;
}
.star-icon {
  color: #c25406;
}
img:hover {
  opacity: 0.8;
}
</style>

