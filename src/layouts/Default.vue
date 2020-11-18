<template>
  <div class="layout">
    <header class="header">
        <h1><g-link to="/">{{ $static.metadata.siteName }}</g-link></h1>
    </header>
    <slot/>
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
.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}
</style>
