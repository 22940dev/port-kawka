<template>
  <header class="header" id="header">
    <div class="header__top-bar" ref="top-bar">
      <ThemeSwitcher />
      <h1 class="header__logo">
        <g-link to="/" class="header__title"
          >Kawka Mateusz
          <span class="header__subtitle">Front End Developer</span></g-link
        >
      </h1>
    </div>
    <a
      href="https://drive.google.com/file/d/1340935vv6-Ynsg9Sr8PICYoE3K_tySgl/view"
      class="link header__link"
      >Download CV</a
    >
  </header>
</template>

<script>
import ThemeSwitcher from "../components/ThemeSwitcher";

export default {
  name: "Header",
  components: {
    ThemeSwitcher,
  },
  methods: {
    onscroll() {
      const topBar = this.$refs["top-bar"];
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollY > 32) {
        topBar.classList.add("header__top-bar--scroll");
      } else {
        topBar.classList.remove("header__top-bar--scroll");
      }
    },
  },
  mounted() {
    document.addEventListener("scroll", this.onscroll);
  },
};
</script>

<style scoped>
.header {
  display: flex;
  flex-flow: column;
  align-items: center;
}

.header__top-bar {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 999;
  background: var(--app-background-color);
  transition: 0.25s transform ease-in-out;
}

.header__logo {
  transition: 0.25s transform ease-in-out;
}

.header__top-bar--scroll .header__logo {
  transform: scale(0.8);
}

.header__top-bar--scroll .header__subtitle {
  display: none;
}

.header__title {
  color: var(--text-color);
  text-decoration: none;
  display: flex;
  flex-flow: column;
  align-items: center;
  margin: var(--space-small);
}

.header__subtitle {
  font-size: var(--font-size-medium);
}

.header__link {
  margin-top: 30%;
  margin-bottom: var(--space-medium);
}

@media all and (min-width: 360px) {
  .header__link {
    margin-top: 25%;
  }
}

@media all and (min-width: 420px) {
  .header__link {
    margin-top: 22%;
  }
}

@media all and (min-width: 640px) {
  .header__link {
    margin-top: 20%;
  }
}

@media all and (min-width: 900px) {
  .header__link {
    margin-top: 15%;
  }
}
</style>
