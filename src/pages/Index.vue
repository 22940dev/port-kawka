<template>
  <Layout>
    <Filters :pickedFilter.sync="pickedFilter" />
    <ProjectsList :projects="filteredPost" />
  </Layout>
</template>

<script>
import ProjectsList from "../components/ProjectsList";
import Filters from "../components/Filters";
export default {
  name: "Homepage",
  data: () => ({
    pickedFilter: "",
  }),
  components: {
    ProjectsList,
    Filters,
  },
  computed: {
    filteredPost() {
      return this.pickedFilter.length
        ? this.$page.allProject.edges.filter(
            (item) => item.node.filter === this.pickedFilter
          )
        : this.$page.allProject.edges;
    },
  },
};
</script>

<page-query>
query {
	allProject(sortBy: "order", order: ASC) {
    edges {
      node {
        id
        title
        path
        description
        mainImage
        filter
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
