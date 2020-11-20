// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Kawka Mateusz Front End Developer",
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/**/*.md",
        typeName: "Project",
        route: ":title"
      },
    },
    {
      use: "gridsome-plugin-i18n",
      options: {
        locales: [
          // locales list
          "pl-pl",
          "en-en",
        ],
        pathAliases: {
          // path segment alias for each locales
          "pl-pl": "pl",
          "en-en": "en",
        },
        fallbackLocale: "pl-pl", // fallback language
        defaultLocale: "pl-pl", // default language
        enablePathRewrite: true, // rewrite path with locale prefix, default: true
        rewriteDefaultLanguage: true, // rewrite default locale, default: true
        messages: {
          "pl-pl": require("./src/locales/pl-pl.json"), // Messages files
          "en-en": require("./src/locales/en-en.json"),
        },
      },
    },
  ],
};
