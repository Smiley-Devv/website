

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/lastfm_error/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.5b9f46e4.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.4d21fe7b.js","_app/immutable/chunks/aos.3edfd2d4.js"];
export const stylesheets = ["_app/immutable/assets/aos.73168167.css"];
export const fonts = [];
