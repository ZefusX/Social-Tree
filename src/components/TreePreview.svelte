<script lang="ts">
  import { Avatar } from "@skeletonlabs/skeleton";

  export let username = "";
  export let ppInitials = "";
  export let description = "";
  export let buttons: any[] = [];
</script>

<main
  class="h-1/2 w-1/2 flex-col justify-center content-center items-center mt-16"
>
  <div class="flex flex-col justify-center items-center content-center gap-2">
    <Avatar
      initials={ppInitials}
      background="bg-primary-500"
      class="w-24 h-24"
    />
    <h1 class="text-2xl">{username}</h1>
    <div class="w-full flex justify-center gap-2">
      <!-- <span class="badge variant-ghost">&#x1F4BB; développeur</span>
      <span class="badge variant-filled-surface">&#x1F526; explorateur</span>
      <span class="badge variant-filled-tertiary">&#x1F697; passionné auto</span
      > -->
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
</main>
