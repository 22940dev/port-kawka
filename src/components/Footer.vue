<template>
  <footer class="footer">
    <a class="back-to-top-link" href="" @click="backToTop">Back to top</a>
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
      window.scrollTo(0, 0);
    },
  }
};
</script>
