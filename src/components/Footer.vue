<template>
  <footer class="footer">
    <a class="link back-to-top-link" @click="backToTop">Back to top</a>
    <p>
      Build with
      <a
        class="footer__link"
        href="https://gridsome.org/"
        rel="noopener noreferrer"
        target="_blank"
        >Gridsome</a
      >
      & made with ❤️ by Kawka Mateusz
    </p>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  methods: {
    backToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style scoped>
.footer {
  height: auto;
  padding: var(--space-medium) var(--space-small) var(--space-medium)
    var(--space-small);
  text-align: center;
}

.back-to-top-link {
  display: inline-block;
  color: var(--text-color);
  margin: var(--space-small) 0;
}
</style>
