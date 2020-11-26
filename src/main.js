// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
import "./assets/fonts.css"
import "./assets/markdown-body.css";

export default function(Vue, { router, head, isClient }) {
  Vue.component("Layout", DefaultLayout);
}
