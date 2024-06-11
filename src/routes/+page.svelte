<script>
  // @ts-nocheck

  import TreePreview from "./../components/TreePreview.svelte";
  import Footer from "./../components/Footer.svelte";
  import IconCrop from "./../components/icons/icon_crop.svelte";
  import IconBolt from "./../components/icons/icon_bolt.svelte";
  import IconKeyboard from "../components/icons/icon_keyboard.svelte";
  import IconList from "../components/icons/icon_list.svelte";
  import Header from "../components/Header.svelte";
  import IconFree from "../components/icons/icon_free.svelte";
  import IconUser from "../components/icons/icon_user.svelte";

  import svelteTilt from "vanilla-tilt-svelte";

  let exampleUsername = "@zefus";
</script>

<Header />
<div class="h-screen w-full grow flex-col flex mt-24 text-center items-center">
  <h1 class="text-8xl font-extrabold">
    social <span class="text-primary-600">tree.</span>
  </h1>
  <p class="text-xl">all your social networks in one place.</p>
  <div class="flex gap-6 m-6">
    <a href="/product">
      <button class="btn variant-filled-primary">Try it now</button>
    </a>
    <a href="/about">
      <button class="btn variant-outline-primary">More infos</button>
    </a>
  </div>

  <div class="flex py-20 w-1/2">
    <div
      class="grid grid-cols-1 grid-rows-6 lg:grid-cols-3 gap-4 lg:grid-rows-3"
    >
      <div
        class="p-6 border border-primary-600 rounded-[12px] flex flex-col gap-1 col-span-2 lg:col-span-1 row-span-1 bg-primary-900"
      >
        <IconBolt />
        <span class="text-[16px]">Fast</span>
        <span class="text-[28px] font-bold">Creation time</span>
      </div>
      <div
        class="p-6 border border-secondary-600 rounded-[12px] flex flex-col gap-1 col-span-2 lg:col-span-1 row-span-1 bg-secondary-900"
      >
        <IconCrop />
        <span class="text-[16px]">Starting from</span>
        <span class="text-[28px] font-bold">Scratch</span>
      </div>
      <div
        class="p-6 border border-primary-600 rounded-[12px] flex flex-col gap-1 col-span-2 lg:col-span-1 row-span-1 lg:row-span-2 bg-primary-900"
      >
        <IconList />
        <span class="text-[16px]">All your infos</span>
        <span class="text-[28px] font-bold">In one place</span>
      </div>
      <div
        class="p-6 border border-secondary-600 rounded-[12px] flex flex-col gap-1 col-span-2 row-span-1 bg-secondary-900"
      >
        <IconKeyboard />
        <span class="text-[16px]">Simple</span>
        <span class="text-[28px] font-bold">And easy</span>
      </div>
      <div
        class="p-6 border border-primary-600 rounded-[12px] flex flex-col gap-1 col-span-2 row-span-1 bg-primary-900"
      >
        <IconFree />
        <span class="text-[16px]">Free</span>
        <span class="text-[28px] font-bold">Forever</span>
      </div>
      <div
        class="p-6 border border-secondary-600 rounded-[12px] flex flex-col gap-1 col-span-2 lg:col-span-1 row-span-1 bg-secondary-900"
      >
        <IconUser />
        <span class="text-[16px]">Create</span>
        <span class="text-[28px] font-bold">Without needing an account</span>
      </div>
    </div>
  </div>
  <div class="bg-tertiary-900 p-6 w-full">
    <div class="mt-6 flex lg:flex-row flex-col">
      <div class="flex flex-col ml-6">
        <h2 class="text-5xl font-bold">
          make your social tree in litteraly 5 seconds
        </h2>
        <p class="text-xl font-semibold text-primary-100">
          Easy, beautiful and fully customizable
        </p>
        <div>
          <input
            type="text"
            name="username"
            placeholder="username"
            class="input rounded-xl w-48 h-[40px] mt-4"
            bind:value={exampleUsername}
          />
        </div>
        <p class="font-regular mt-1">Try changing the name!</p>
      </div>
      <div
        class="bg-surface-900 rounded-3xl px-8 py-12 flex w-fit mx-auto justify-center mt-2"
        use:svelteTilt={{
          max: 35,
          startX: 0,
          startY: 0,
          perspective: 1000,
          scale: 1,
          speed: 100,
          transition: true,
          axis: null,
          reset: true,
        }}
      >
        <TreePreview
          username={exampleUsername}
          ppInitials="ZE"
          description="your average bro"
          buttons={[
            { text: "Instagram", link: "/" },
            { text: "Tiktok", link: "/" },
            { text: "Personnal website", link: "/" },
          ]}
          tag={[{ text: "🔦 explorer" }, { text: "🚗 car enthusiast" }]}
        />
      </div>
    </div>
    <div class="mt-4">
      <p class="text-xl font-bold">
        No more time spending on looking for your friends social medias accounts
      </p>
    </div>
  </div>
  <Footer />
</div>
