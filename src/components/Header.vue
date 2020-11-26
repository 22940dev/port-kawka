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
      <a
        href="https://github.com/MateuszKawka"
        target="_blank"
        rel="noopener noreferrer"
        class="github-link"
      >
        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <title>GitHub icon</title>
          <path
            d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
          />
        </svg>
      </a>
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

.github-link {
  width: 20px;
  height: auto;
  position: absolute;
  right: 12px;
  fill: var(--text-color)
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

@media all and (min-width: 600px) {
  .github-link {
    right: 24px;
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
