<template>
    <div class="project-item">
        <div class="project-item-image-container" :style="{'background-color': `${project.node.color}`}">
            <g-image :src="project.node.mainImage" class="project-item__image"/> 
        </div>
        <div class="project-item__content">
            <h2 class="project-item__name">{{project.node.title}}</h2>
            <p class="project-item__desc">{{project.node.description}}</p>
            <g-link class="project-item__link" :to="project.node.path">Details</g-link>
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
.project-item {
    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
}

.project-item:not(:first-child) {
    margin-top: var(--space-medium);
}

.project-item-image-container {
    display: flex;
    width: 100%;
    height: auto;
}

.project-item__image {
    width: 100%;
}

.project-item__content {
    width: 75%;
    display: flex;
    flex-flow: column;
    align-items: center;
    padding: 0 var(--space-small);
}

.project-item__name {
    text-align: center;
    margin-top: var(--space-small);
}

.project-item__desc {
    text-align: center;
    margin-top: var(--space-small);
}

.project-item__link {
    text-decoration: none;
    color: var(--text-color);
    margin-top: var(--space-small);
    font-weight: var(--font-weight-bold);
    font-size: var(--font-size-medium)

}
</style>