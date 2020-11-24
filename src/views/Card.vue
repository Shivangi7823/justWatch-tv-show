<template>
  <div class="text-color mb-3 mt-4">
    <router-link
      class="heading"
      :to="{
        name: 'ShowDetail',
        params: { id: shows.id },
      }"
    >
      <img
        class="card-border"
        :src="shows.image.medium || shows.image.original"
        v-if="shows.image"
      />
      <div v-else class="card mx-auto">
        <h3>Image Not Available</h3>
      </div>
    </router-link>
    <div class="mt-1" v-if="shows.name">
      <router-link
        class="heading"
        :to="{
          name: 'ShowDetail',
          params: { id: shows.id },
        }"
      >
        {{ shows.name }}
      </router-link>
      <div class="mt-1">
        <span>
          <b-icon icon="star-fill" class="star-icon mx-1"></b-icon>
        </span>
        <span v-if="shows.rating.average">
          {{ shows.rating.average }}
        </span>
        <span v-else> NA </span>
        <span class="mx-2">|</span>
        <span>
          <b-icon icon="calendar3" class="mx-1 heading"></b-icon>
        </span>
        <span v-if="shows.premiered">
          {{ shows.premiered }}
        </span>
        <span v-else> NA </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["shows"],
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

