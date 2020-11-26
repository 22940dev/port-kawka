<template>
  <header class="header" id="header">
    <h1>
      <g-link to="/" class="header__title"
        >Kawka Mateusz
        <span class="header__subtitle">Front End Developer</span></g-link
      >
    </h1>

    <a
      href="https://drive.google.com/file/d/1340935vv6-Ynsg9Sr8PICYoE3K_tySgl/view"
      class="link header__link"
      >Download CV</a
    >
    <ThemeSwitcher />
  </header>
</template>

<script>
import ThemeSwitcher from "../components/ThemeSwitcher";

export default {
  name: "Header",
  components: {
    ThemeSwitcher,
  },
};
</script>
