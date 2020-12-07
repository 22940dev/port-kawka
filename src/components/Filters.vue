<template>
  <div class="filters-container">
    <ul class="filters">
      <li
        v-for="filter in FILTERS"
        :key="filter"
        class="filters__filter link"
        :class="{ 'filters__filter--active': pickedFilter === filter }"
        @click="pickFilter(filter)"
      >
        {{ filter }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Filters",
  props: {
    pickedFilter: {
      type: String,
      default: "",
    },
  },
  data: () => ({
    FILTERS,
  }),
  methods: {
    pickFilter(filter) {
      this.pickedFilter === filter
        ? this.$emit("update:pickedFilter", "")
        : this.$emit("update:pickedFilter", filter);
    },
  },
};

const FILTERS = ["vue", "react"];
</script>

<style scoped>
.filters-container {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: var(--space-medium);
}

.filters {
  display: flex;

  list-style-type: none;
  width: auto;
}

.filters__filter {
  margin-left: var(--space-small);
  cursor: pointer;
}

.filters__filter--active {
  background: var(--text-color);
  color: var(--app-background-color);
}
</style>
