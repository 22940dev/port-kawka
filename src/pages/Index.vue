<template>
  <Layout>
    <LocaleSwitcher />
    <ProjectsList :projects="$page.allProject.edges" />
  </Layout>
</template>

<script>
import ProjectsList from "../components/ProjectsList";
import LocaleSwitcher from "../components/LocaleSwitcher";
export default {
  name: "Homepage",
  components: {
    ProjectsList,
    LocaleSwitcher,
  },
};
</script>

<page-query>
query($locale: String) {
	allProject(filter: { locale: { eq: $locale }}) {
    edges {
      node {
        id
        title
        path
        description
        color
        mainImage
        locale
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
