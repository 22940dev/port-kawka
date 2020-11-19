<template>
  <div class="layout">
    <header class="header">
      <h1>
        <g-link to="/" class="header__title"
          >Kawka Mateusz
          <span class="header__subtitle">Front End Developer</span></g-link
        >
      </h1>
      <a
        href="https://drive.google.com/file/d/167sRdn9vo0Zhj9zi01y9ksNu4fgejWjT/view"
        class="header__link"
        >Download cv</a
      >
    </header>
    <main>
      <slot />
    </main>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
:root {
  --app-background-color: #fff;
  --text-color: #373737;
  --details-color: #ff3a20;

  --space-small: 1rem;
  --space-medium: 4rem;
  --space-large: 10rem;

  --font-size-small: 1.3rem;
  --font-size-medium: 1.6rem;
  --font-size-large: 2rem;
  --font-size-jumbo: 3rem;

  --font-weight-regular: 400;
  --font-weight-bold: 700;

  --default-border-radius: 2px;
}

/* html[class="scheme-dark"] {
  --app-background-color: #282828;
  --app-text-color: #fefefa;
  --app-details-color: yellow;
} */

html {
  color: var(--text-color);
  font-size: 62.5%;
  overflow-x: hidden;
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

.header {
  display: flex;
  flex-flow: column;
  align-items: center;
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
  color: var(--text-color);
  text-decoration: none;
  font-weight: var(--font-weight-bold);
  margin-top: var(--space-small);
  margin-bottom: var(--space-medium);
}

@media all and (min-width: 600px) {
  .layout {
    padding: 0 var(--space-medium);
    width: 75%;
  }
}
</style>
