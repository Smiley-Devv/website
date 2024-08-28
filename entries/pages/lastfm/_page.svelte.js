import { c as create_ssr_component, e as escape } from "../../../chunks/ssr.js";
/* empty css                   */import "aos";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let screenWidth;
  let size0;
  let size1;
  let size3;
  console.log("Made by Tragic In Bogor | https://hi-lrmn.is-a.dev/ | https://discord.gg/6EXgrmtkPX", "color: #e06c75");
  let MouseX = 0;
  let MouseY = 0;
  let initStyleOfMouseFollower = ["w-40", "h-40", "opacity-10", "from-neutral-100", "to-neutral-300"].join(" ");
  let arrayOfFeatures = [
    {
      name: "Success",
      style: "from-pink-500 to-violet-500"
    }
  ];
  let liveText = "";
  let num = 0;
  let index = 0;
  setInterval(
    () => {
      if (index < arrayOfFeatures[num].name.length) {
        liveText = liveText + arrayOfFeatures[num].name[index];
        index++;
      } else {
        liveText = arrayOfFeatures[num].name;
      }
    },
    100
  );
  setInterval(
    () => {
      liveText = "";
      index = 0;
      num++;
      if (num >= arrayOfFeatures.length)
        num = 0;
    },
    7e3,
    num
  );
  screenWidth = 0;
  size0 = screenWidth <= 800 && screenWidth > 0;
  size1 = screenWidth <= 1250 && screenWidth > 800;
  size3 = screenWidth <= 3e3 && screenWidth > 2e3;
  return `<div class="${"mouseFollower " + escape(size0 && "hidden", true) + " fixed blur-3xl bg-gradient-to-r z-50 pointer-events-none " + escape(initStyleOfMouseFollower, true)}" style="${"top: " + escape(MouseY, true) + "px; left: " + escape(MouseX, true) + "px; transform: translate(-50%, -50%); border-radius: 50%; transition: 0.1s linear"}"></div> <header class="${"w-full h-16 p-5 " + escape(
    size0 ? "pr-0 justify-center" : size1 ? "pr-0 justify-center" : "pr-56",
    true
  ) + " text-sm fixed z-10 text-neutral-400 flex justify-end items-center backdrop-blur-3xl"}" style="background-color: rgba(0,0,0,0.1)"><a class="${"mx-4 hover:text-neutral-200 " + escape(size0 && "hidden", true) + " hover-underline-animation"}" href="/invite">Invite</a> <a class="${"mx-4 hover:text-neutral-200 " + escape(size0 && "hidden", true) + " hover-underline-animation"}" href="/discord">Support</a> <a class="mx-4 hover:text-neutral-100 hover-underline-animation bg-clip-text text-transparent bg-gradient-to-r from-amber-700 to-blue-200 font-extrabold after:scale-x-100 after:origin-bottom-left after:bg-gradient-to-r after:from-amber-700 after:to-blue-500" href="/vote" data-svelte-h="svelte-h8oymv">Vote for ੭﹕ARX ♥</a> <a class="mx-4 hover:text-neutral-200" href="/" data-svelte-h="svelte-x7ycpm"><img alt="logo" class="h-8 w-8" src="/beavatar1.png"></a></header> <section class="${escape(
    size0 ? "pt-16" : size1 ? "pt-20" : size3 ? "pt-64" : "pt-24",
    true
  ) + " flex justify-start items-center flex-col text-center px-10"}"><h1 class="${escape(
    size0 ? "text-5xl leading-28" : size1 ? "text-7xl" : "text-8xl",
    true
  ) + " w-11/12 tracking-tighter font-extrabold mt-8 bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-400"}" style="font-family: 'Inter', monospace">LAST.FM
		<span class="divider">${size0 || size1 ? `<br>` : ``}</span> <span class="${"bg-clip-text pr-0.5 tracking-tighter text-transparent bg-gradient-to-r " + escape(arrayOfFeatures[num].style, true)}" id="writer">${escape(liveText)} <span style="animation: blink 2s linear infinite" class="bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-400" data-svelte-h="svelte-16qa5ph">|</span></span></h1> <div class="custom-size text-neutral-500 font-bold tracking-normal mt-32 bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-400" data-svelte-h="svelte-p8kkz8"><h2 class="text-2xl font-bold">You have successfully logged in to Last.fm</h2> <p>Thank you for scrobbling with us! You can now close this window.</p></div> <div class="custom-size text-neutral-500 font-bold tracking-normal mt-32 bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-400" data-svelte-h="svelte-zs0jy"><h2 class="text-2xl font-bold">What now?</h2> <p>If you change your mind, you can revoke these privileges later on your <a href="https://www.last.fm" style="color: green;">setting page</a>. You can now close your browser and return to the ੭﹕ARX ♥ application.</p></div></section>`;
});
export {
  Page as default
};
