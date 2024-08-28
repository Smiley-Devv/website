

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.b250a6df.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.4d21fe7b.js","_app/immutable/chunks/singletons.3ff48c5b.js"];
export const stylesheets = ["_app/immutable/assets/1.18f1c728.css"];
export const fonts = [];
