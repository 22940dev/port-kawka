<template>
  <div class="layout">
    <Header />
    <transition name="fade" appear>
      <main>
        <slot />
      </main>
    </transition>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";

export default {
  name: "DefaultLayout",
  components: {
    Header,
    Footer,
  },
};
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
:root {
  --app-background-color: #f2f2f2;
  --text-color: #1a1919;
  --details-color: #ff3a20;
  --project-item-background: var(--app-background-color);
  --project-image-background: var(--text-color);
  --space-small: 1rem;
  --space-medium: 4rem;
  --space-large: 10rem;

  --font-size-small: 1.3rem;
  --font-size-medium: 1.6rem;
  --font-size-large: 2rem;
  --font-size-jumbo: 3rem;

  --font-weight-regular: 400;
  --font-weight-bold: 700;

  --default-border-radius: 4px;
}

html[class="scheme-dark"] {
  --app-background-color: #151414;
  --text-color: #f2f2f2;
  --details-color: #ff3a20;
  --project-item-background: var(--app-background-color);
  --project-image-background: var(--app-background-color);
}

html {
  color: var(--text-color);
  font-size: 62.5%;
  overflow-x: hidden;
}

body {
  background: var(--app-background-color);
}

.layout {
  max-width: 920px;
  margin: 0 auto;
  font-size: var(--font-size-medium);
  padding-bottom: var(--space-medium);
}

* {
  font-family: "PT Sans", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.link {
  display: inline-block;
  position: relative;
  padding: 6px 24px;
  color: var(--text-color);
  font-weight: 600;
  background: 0 0;
  cursor: pointer;
  font-size: var(--font-size-medium);
  transition: color 0.25s ease-in-out;
  position: relative;
  z-index: 1;
  text-decoration: none;
  overflow: hidden;
  margin: var(--space-small) 0;
}

.link:hover {
  color: var(--app-background-color);
}

.link:before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: var(--text-color);
  transform: translateX(-100%);
  transition: 0.25s all ease-in-out;
}

.link:hover::before {
  transform: translateX(0);
}

.tinybox__content__image {
  max-width: none !important;
  background: none !important;
}

.fade-enter-active {
  transition: opacity 0.35s;
}

.fade-enter {
  opacity: 0;
}

@media all and (min-width: 600px) {
  .layout {
    padding: 0 var(--space-medium);
    width: 75%;
  }
}

.footer__link {
  color: var(--text-color);
  font-weight: var(--font-weight-bold);
}
</style>
