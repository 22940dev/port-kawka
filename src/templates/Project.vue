<template>
  <Layout>
    <ClientOnly>
      <Tinybox v-model="index" :images="images" no-thumbs />
    </ClientOnly>
    <section class="project">
      <h2 class="project__name">{{ $page.project.title }}</h2>
      <div class="project-image-container">
        <g-image
          :src="mainImage"
          class="project__image"
          @click="() => (index = 0)"
        />
      </div>
      <div class="project-links">
        <a
          :href="$page.project.repoLink"
          rel="noopener noreferrer"
          target="blank"
          class="project-links__link"
          >Code</a
        >
        <a
          :href="$page.project.liveLink"
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
import Tinybox from "vue-tinybox";
export default {
  name: "Project",
  data: () => ({
    index: null,
  }),
  components: {
    Tinybox,
  },
  computed: {
    mainImage() {
      return this.$page.project.mainImage;
    },
    images() {
      return [this.mainImage];
    },
  },
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
  background: var(--project-image-background);
}

.project__image {
  width: 100%;
  height: 100%;
  cursor: pointer;
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
    width: 25%;
  }
}
</style>
