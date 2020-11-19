<template>
  <Layout>
    <ProjectsList :projects="$page.allProject.edges"/>
  </Layout>
</template>

<script>
import ProjectsList from "../components/ProjectsList"

export default {
  name: "Homepage",
  metaInfo: {
    title: 'Hello, world!'
  },
  components: {
    ProjectsList
  }
}
</script>


<page-query>
query {
	allProject {
    edges {
      node {
        id
        title
        path
        description
        color
        mainImage
      }
    }
  }
}
</page-query>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
