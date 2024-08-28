

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/privacy/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.9c255e47.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.4d21fe7b.js","_app/immutable/chunks/aos.3edfd2d4.js"];
export const stylesheets = ["_app/immutable/assets/aos.73168167.css"];
export const fonts = [];
