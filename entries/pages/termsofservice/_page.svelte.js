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
      name: "Service",
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
  ) + " text-sm fixed z-10 text-neutral-400 flex justify-end items-center backdrop-blur-3xl"}" style="background-color: rgba(0,0,0,0.1)"><a class="${"mx-4 hover:text-neutral-200 " + escape(size0 && "hidden", true) + " hover-underline-animation"}" href="/invite">Invite</a> <a class="${"mx-4 hover:text-neutral-200 " + escape(size0 && "hidden", true) + " hover-underline-animation"}" href="/discord">Support</a> <a class="mx-4 hover:text-neutral-100 hover-underline-animation bg-clip-text text-transparent bg-gradient-to-r from-amber-700 to-blue-200 font-extrabold after:scale-x-100 after:origin-bottom-left after:bg-gradient-to-r after:from-amber-700 after:to-blue-500" href="/vote" data-svelte-h="svelte-4juulx">Vote for Be ♥</a> <a class="mx-4 hover:text-neutral-200" href="/" data-svelte-h="svelte-x7ycpm"><img alt="logo" class="h-8 w-8" src="/beavatar1.png"></a></header> <section class="${escape(
    size0 ? "pt-16" : size1 ? "pt-20" : size3 ? "pt-64" : "pt-24",
    true
  ) + " flex justify-start items-center flex-col text-center px-10"}"><h1 class="${escape(
    size0 ? "text-5xl leading-28" : size1 ? "text-7xl" : "text-8xl",
    true
  ) + " w-11/12 tracking-tighter font-extrabold mt-8 bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-400"}" style="font-family: 'Inter', monospace">Terms Of
		<span class="divider">${size0 || size1 ? `<br>` : ``}</span> <span class="${"bg-clip-text pr-0.5 tracking-tighter text-transparent bg-gradient-to-r " + escape(arrayOfFeatures[num].style, true)}" id="writer">${escape(liveText)} <span style="animation: blink 2s linear infinite" class="bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-400" data-svelte-h="svelte-16qa5ph">|</span></span></h1> <div class="custom-size text-neutral-500 font-bold tracking-normal mt-32 bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-400" data-svelte-h="svelte-pd7e66"><h2 class="text-2xl font-bold">Usage Agreement</h2> <p>By using the services provided by Be ♥ (&quot;bot&quot;), you agree to abide by the following Terms of
			Service and Privacy Policy.</p></div> <div class="custom-size text-neutral-500 font-bold tracking-normal bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-400" data-svelte-h="svelte-1dmz7a4"><h2 class="text-2xl font-bold">Access to Data</h2> <p>Access to data is limited to the bot&#39;s developers and hosting services, and it is only used
			for the development, testing, and implementation of bot features. Data will not be sold,
			provided to, or shared with any third party, except where required by law or a separate Terms
			of Service agreement. You can request access to your data by contacting <a href="https://hi-lrmn.is-a.dev" style="color: green;">L RMN</a>.</p></div> <div class="custom-size text-neutral-500 font-bold tracking-normal bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-400" data-svelte-h="svelte-17t5zz7"><h2 class="text-2xl font-bold">Storage of Data</h2> <p>Your data is securely stored in a PlanetScale database. While efforts are made to prevent
			external access, no guarantee is provided, and the Bot owners assume no liability for
			unintentional or malicious data breaches. In the event of unauthorized data access, server
			staff will notify users through the Support Server.</p></div> <div class="custom-size text-neutral-500 font-bold tracking-normal bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-400" data-svelte-h="svelte-1pfkpd0"><h2 class="text-2xl font-bold">User Rights</h2> <p>As a user, you have the right to request access to view the data associated with your Discord
			account. Additionally, you have the right to request the removal of relevant data. To exercise
			these rights, please submit a request through the Support Server.</p></div> <div class="custom-size text-neutral-500 font-bold tracking-normal bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-400" data-svelte-h="svelte-7bqqu2"><h2 class="text-2xl font-bold">Questions</h2> <p>If you have any questions or concerns about the data that might be stored from your account,
			please contact <a href="https://hi-lrmn.is-a.dev" style="color: green;">L RMN</a>. For more
			detailed information, refer to the Discord Terms of Service.</p></div></section> <section class="footer-container flex justify-between items-center border-t-neutral-700 border-t mt-36 p-5 bg-neutral-800" data-svelte-h="svelte-stzu9e"><p class="text-neutral-400 text-xs tracking-wide leading-8"><a class="hover-underline-animation" href="https://discord.gg/WFfjrQxnfH" target="_blank">Made by TRAGIC in BOGOR</a>, by
		<a class="hover-underline-animation" href="https://lrmn.is-a.dev/" target="_blank">L RMN</a></p> <p class="text-neutral-400 text-xs tracking-wide leading-8">2023 © <a href="/" class="hover-underline-animation">Be ♥</a>. All rights reserved.</p> <div class="flex text-neutral-400 text-xs tracking-wide leading-8"><a class="mx-4 hover-underline-animation" href="/privacy">Privacy Policy</a> <a class="mx-4 hover-underline-animation" href="/termsofservice">Terms Of Service</a> <a class="mx-4 hover-underline-animation" href="https://top.gg/team/469616667718533120" target="_blank" rel="noopener noreferrer">Topgg</a></div></section>`;
});
export {
  Page as default
};
