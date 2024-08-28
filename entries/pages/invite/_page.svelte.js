import { c as create_ssr_component, d as add_attribute } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let class1 = "hidden";
  let class2 = "visible";
  setTimeout(
    () => {
      class1 = "visible";
      class2 = "hidden";
    },
    200
  );
  return `<p${add_attribute("class", class1, 0)}>if you are not redirected automatically, follow this <a href="https://discord.com/oauth2/authorize?client_id=1267489812521160805" class="text-cyan-500" data-svelte-h="svelte-eqc2ik">link</a></p> <p${add_attribute("class", class2, 0)}>Redirecting to <a href="https://discord.com/oauth2/authorize?client_id=1090120136167538748" data-svelte-h="svelte-8vx8l3">https://discord.com/oauth2/authorize?client_id=1090120136167538748</a></p>`;
});
export {
  Page as default
};
