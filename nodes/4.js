

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/lastfm/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.cd34e060.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.4d21fe7b.js","_app/immutable/chunks/aos.3edfd2d4.js"];
export const stylesheets = ["_app/immutable/assets/aos.73168167.css"];
export const fonts = [];
