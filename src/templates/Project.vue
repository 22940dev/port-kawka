<template>
  <Layout>
    <section class="project">
      <h2 class="project__name">{{ $page.project.title }}</h2>
      <div
        class="project-image-container"
        :style="{ 'background-color': `${$page.project.color}` }"
      >
        <g-image :src="$page.project.mainImage" class="project__image" />
      </div>
      <!-- <p class="project__desc">{{ $page.project.description }}</p> -->
      <div class="project-links">
        <a
          :href="$page.project.liveLink"
          rel="noopener noreferrer"
          target="blank"
          class="project-links__link"
          >Code</a
        >
        <a
          :href="$page.project.repoLink"
          rel="noopener noreferrer"
          target="blank"
          class="project-links__link"
          >Live preview</a
        >
      </div>
      <article class="markdown-body" v-html="$page.project.content" />
    </section>
  </Layout>
</template>

<script>
export default {
  name: "Project",
};
</script>

<page-query>
query Project ($path: String!) {
  metadata {
    siteName
    siteDescription
  }
  project: project (path: $path) {
    id
    title
    content
    mainImage
    color
    description
    liveLink
    repoLink
  }
}
</page-query>

<style scoped>
.project {
  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  padding-bottom: var(--space-medium);
}

.project__name {
  margin-bottom: var(--space-small);
}

.project-image-container {
  display: flex;
  width: 100%;
  height: auto;
}

.project__image {
  width: 100%;
}

.project__desc {
  width: 90%;
  text-align: center;
  margin-top: var(--space-medium);
}

.project-links {
  width: 50%;
  display: flex;
  justify-content: center;
  margin-top: var(--space-medium);
}

.project-links__link {
  margin: 0 var(--space-small);
  color: var(--text-color);
  text-decoration: none;
  font-weight: var(--font-weight-bold);
}

.markdown-body {
  width: 90%;
  margin-top: var(--space-medium);
}

@media all and (min-width: 600px) {
  .project-image-container {
    position: relative;
    justify-content: center;
    margin-left: -81%;
    margin-right: -81%;
    width: auto;

  }

  .project__image {
    width: 50%;
  }
}
</style>
