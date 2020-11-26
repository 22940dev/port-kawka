<template>
  <div class="error-404">
    <p class="error-404__content">404</p>
    <p class="error-404__content">The page you're looking for was not found.</p>
    <g-link to="/" class="link">Back to home</g-link>
  </div>
</template>

<style scoped>
.error-404 {
  width: 100%;
  padding: var(--space-small) var(--space-medium);
  height: 90vh;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  background: var(--app-background-color);
}

.error-404__content {
  color: var(--text-color);
  font-size: var(--font-size-jumbo);
  font-weight: var(--font-weight-bold);
  text-align: center;
}
</style>
