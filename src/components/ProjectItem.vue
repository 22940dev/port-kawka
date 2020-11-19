<template>
    <div class="project">
        <div class="project-image-container" :style="{'background-color': `${project.node.color}`}">
            <g-image :src="project.node.mainImage" class="project__image"/> 
        </div>
        <div class="project__content">
            <h2 class="project__name">{{project.node.title}}</h2>
            <p class="project__desc">{{project.node.description}}</p>
            <g-link class="project__link" :to="project.node.path">Details</g-link>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        project: {
            type: Object,
            required: true
        }
    },
}
</script>

<style scoped>
.project {
    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
}

.project:not(:first-child) {
    margin-top: var(--space-medium);
}

.project-image-container {
    display: flex;
    width: 100%;
    height: auto;
}

.project__image {
    width: 100%;
}

.project__content {
    width: 75%;
    display: flex;
    flex-flow: column;
    align-items: center;
    padding: 0 var(--space-small);
}

.project__name {
    text-align: center;
    margin-top: var(--space-small);
}

.project__desc {
    text-align: center;
    margin-top: var(--space-small);
}

.project__link {
    text-decoration: none;
    color: var(--text-color);
    margin-top: var(--space-small);
    font-weight: var(--font-weight-bold);
    font-size: var(--font-size-medium)

}
</style>