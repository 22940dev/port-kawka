<template>
  <div class="locale-switcher">
    <div
      class="locale-switcher__item"
      @click="localeChanged(availableLocales[0])"
      v-if="currentLocale === availableLocales[1]"
    >
      🇺🇸
    </div>
    <div
      class="locale-switcher__item"
      @click="localeChanged(availableLocales[1])"
      v-else
    >
      🇵🇱
    </div>
  </div>

  <!-- <select v-model="currentLocale" @change="localeChanged">
    <option  :value="availableLocales[0]">🇵🇱</option>
    <option  :value="availableLocales[1]">🇺🇸</option>
  </select> -->
</template>

<script>
export default {
  name: "LocaleSwitcher",
  computed: {
    currentLocale() {
      return this.$i18n.locale.toString();
    },
  },
  data: function() {
    return {
      availableLocales: this.$i18n.availableLocales,
    };
  },
  methods: {
    localeChanged(locale) {
    
      this.$router.push({
        path: this.$tp(this.$route.path, locale, true),
      });

       console.log(this.$i18n.locale);
    },
  },
};
</script>

<style scoped>
.locale-switcher {
    position: absolute;
    right: 12px;
    top: 12px;
    
}

.locale-switcher__item {
    font-size: var(--font-size-large);
    cursor: pointer;
}

@media all and (min-width: 600px) {
  .locale-switcher {
    right: 24px;
  }
}
</style>