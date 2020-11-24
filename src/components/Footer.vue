<template>
  <b-container fluid class="footer">
    Copyright &copy; {{ new Date().getFullYear() }} —
    <strong>JustWatch</strong>
  </b-container>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer {
  height: 1.5rem;
  text-align: center;
  font-size: 0.8rem;
  color: #00d0d0;
  margin-top: 0.5rem;
}
</style>
