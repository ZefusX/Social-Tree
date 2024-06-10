<script>
  import { Avatar } from "@skeletonlabs/skeleton";
</script>

<main
  class="h-full w-full flex-col justify-center content-center items-center mt-16"
>
  <div class="flex flex-col justify-center items-center content-center gap-2">
    <Avatar
      initials="Tk"
      background="bg-primary-500"
      src="https://media.discordapp.net/attachments/760899889999249409/1249711167564288071/image.jpg?ex=66684bb8&is=6666fa38&hm=84194e0af87d446e21782c97890c4f5ff23c65ffb32b5b8f23975b700fc5490c&=&format=webp&width=351&height=468"
      class="w-24 h-24"
    />
    <h1 class="text-2xl">@théo</h1>
    <div class="w-full flex justify-center gap-2">
      <span class="badge variant-ghost">&#x1F4BB; développeur</span>
      <span class="badge variant-filled-surface">&#x1F526; explorateur</span>
      <span class="badge variant-filled-tertiary">&#x1F697; passionné auto</span
      >
    </div>
    <p class="text-gray-500 text-xl">
      voici mes réseaux et mes informations utiles.
    </p>
  </div>
  <hr class="mx-24 p-6 mt-6" />
  <div class="flex flex-col justify-center items-center content-center gap-3">
    <a href="https://github.com/ZefusX">
      <button type="button" class="btn variant-ghost w-60"> GitHub </button>
    </a>
    <a href="https://www.youtube.com/channel/UCjy7QFOesJI7kP5vjy1bEbw">
      <button type="button" class="btn variant-filled w-60"> YouTube </button>
    </a>
    <a href="https://discord.com/users/451778477700677642">
      <button type="button" class="btn variant-filled-primary w-60">
        Discord
      </button>
    </a>
  </div>
  <div class="flex justify-center mt-16">
    <p class="text-gray-500 text-l">
      &#x1F5A4; website made with love by <a
        href="https://github.com/ZefusX"
        class="underline"
        target="_blank">@zefusX</a
      >
      on github.
    </p>
  </div>
</main>
