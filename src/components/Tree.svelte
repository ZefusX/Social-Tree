<script lang="ts">
  import { Avatar } from "@skeletonlabs/skeleton";

  export let username: string;
  export let ppInitials: string;
  export let description: string;
  export let buttons: { text: string; link: string }[] = [];
  export let tag: { text: string }[] = [];

  let ppImage = false;
  if (ppInitials.includes("http")) {
    ppImage = true;
  } else {
    ppImage = false;
  }
</script>

<main
  class="h-full w-full flex-col justify-center content-center items-center mt-16"
>
  <div class="flex flex-col justify-center items-center content-center gap-2">
    <Avatar
      initials={ppImage ? "" : ppInitials}
      src={ppImage ? ppInitials : ""}
      background="bg-primary-500"
      class="w-24 h-24"
    />
    <h1 class="text-2xl">{username}</h1>
    <div class="w-full flex justify-center gap-2">
      {#each tag as t, index}
        {#if index % 3 == 0}
          <span class="badge variant-ghost">{t.text}</span>
        {:else if index % 3 == 1}
          <span class="badge variant-filled-surface">{t.text}</span>
        {:else}
          <span class="badge variant-filled-tertiary">{t.text}</span>
          <!-- <span class="badge variant-filled-surface">&#x1F526; explorateur</span> -->
        {/if}
        <!-- <span class="badge variant-filled-tertiary">&#x1F697; passionné auto</span -->
      {/each}
    </div>
    <p class="text-gray-500 text-xl">
      {description}
    </p>
  </div>
  <hr class="mx-24 p-6 mt-6" />
  <div class="flex flex-col justify-center items-center content-center gap-3">
    {#each buttons as button, index}
      <a href={button.link}>
        {#if index % 3 == 0}
          <button type="button" class="btn variant-ghost w-60">
            {button.text}
          </button>
        {:else if index % 3 == 1}
          <button type="button" class="btn variant-filled w-60">
            {button.text}
          </button>
        {:else}
          <button type="button" class="btn variant-filled-primary w-60">
            {button.text}
          </button>
        {/if}
      </a>
    {/each}
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
