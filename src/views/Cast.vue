<template>
  <div class="mt-3">
    <img class="card-border" :src="castImage" v-if="castImage" />
    <div v-else class="card mx-auto">
      <h3>Image Not Available</h3>
    </div>
    <div class="mt-2 text-color">
      {{ cast.person.name }}
      <div>as {{ cast.character.name }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShowCasts",
  props: ["cast"],
  computed: {
    castImage() {
      if (this.cast.character.image) {
        return (
          this.cast.character.image.medium || this.cast.character.image.original
        );
      }
      if (this.cast.person.image) {
        return this.cast.person.image.medium || this.cast.person.image.original;
      }
      return null;
    },
  },
};
</script> 

