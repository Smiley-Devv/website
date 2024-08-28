import { g as getContext, c as create_ssr_component, b as subscribe } from "../../chunks/ssr.js";
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
const _error_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-1m2fp7k{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;text-align:center}",
  map: null
};
const Error$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<div class="container svelte-1m2fp7k">${$page.error ? `${$page.error.status === 404 ? `<h1 data-svelte-h="svelte-jnbxk5">Oops! This page is as lost as a penguin in the desert.</h1> <p data-svelte-h="svelte-1vp8qvk">Looks like you&#39;ve ventured into uncharted territory. But don&#39;t worry, you can always head
				back home.</p>` : `<h1 data-svelte-h="svelte-7gnkh9">Oops! Something went wrong.</h1> <p data-svelte-h="svelte-1feaplr">Looks like there&#39;s a glitch in the matrix. But don&#39;t worry, you can always head back home.</p>`}` : `<h1 data-svelte-h="svelte-urq4jq">Loading...</h1>`} <a href="/" class="text-cyan-500" data-svelte-h="svelte-1usbqqr">Go back home.</a> </div>`;
});
export {
  Error$1 as default
};
