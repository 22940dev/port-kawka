// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
import "./assets/markdown-body.css";

export default function(Vue, { router, head, isClient }) {
  head.link.push({
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
  });

  head.link.push({
    rel: "stylesheet",
    href:
      "https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap",
  });

  Vue.component("Layout", DefaultLayout);
}