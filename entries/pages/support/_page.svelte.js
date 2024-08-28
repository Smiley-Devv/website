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
  return `<p${add_attribute("class", class1, 0)}>if you are not redirected automatically, follow this <a href="https://discord.gg/6EXgrmtkPX" class="text-cyan-500" data-svelte-h="svelte-gdxpy9">link</a></p> <p${add_attribute("class", class2, 0)}>Redirecting to <a href="https://discord.gg/6EXgrmtkPX" data-svelte-h="svelte-19r72vs">https://discord.gg/6EXgrmtkPX</a></p>`;
});
export {
  Page as default
};
