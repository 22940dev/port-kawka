<template>
    <div class="projects-list">
        <ProjectItem v-for="project in projects" :key="project.id" :project="project" />
    </div>
</template>

<script>
import ProjectItem from "./ProjectItem"

export default {
    props: {
        projects: {
            type: Array,
            default: () => []
        }
    },
    components: {
        ProjectItem
    }
}
</script>

<style scoped>
.projects-list {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    flex-flow: column;
    padding-bottom: var(--space-medium);
}
</style>