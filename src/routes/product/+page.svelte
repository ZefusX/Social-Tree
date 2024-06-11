<script lang="ts">
  import TreePreview from "../../components/TreePreview.svelte";
  import Header from "../../components/Header.svelte";

  let alertVisible: boolean = false;

  let info = {
    username: "",
    ppInitials: "",
    description: "",
  };

  let buttons = [{ text: "button1", link: "" }];
  let tag = [{ text: "" }];

  function closeAlert() {
    alertVisible = false;
  }

  function addTag() {
    if (tag.length < 9) {
      tag = [...tag, { text: "" }];
      console.log(tag);
    }
  }

  function removeTag(index: any) {
    if (tag.length > 0) {
      tag = tag.filter((_, i) => i !== index);
    }
  }

  function addButton() {
    if (buttons.length < 9) {
      buttons = [...buttons, { text: "", link: "" }];
    }
  }

  function removeButton(index: any) {
    if (buttons.length > 1) {
      buttons = buttons.filter((_, i) => i !== index);
    }
  }

  async function sendData() {
    const { username, ppInitials, description } = info;
    const buttonData = buttons.map((btn) => ({
      text: btn.text,
      link: btn.link,
    }));
    const tagData = tag.map((t) => ({
      text: t.text,
    }));
    console.log(tagData);

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        ppInitials,
        description,
        buttons: buttonData,
        tag: tagData,
      }),
    };

    const res = await fetch(
      "https://social-tree-cd49e-default-rtdb.firebaseio.com/infoData.json",
      options
    );

    if (res.ok) {
      const data = await res.json();
      const id = data.name;
      window.open("http://" + window.location.host + "/t/" + id);
      navigator.clipboard.writeText(
        "http://" + window.location.host + "/t/" + id
      );
      alertVisible = true;
      console.log("data sent");
    } else {
      alert("error sending the data to the db");
    }
  }
</script>

<Header />
<main class="flex flex-col w-full justify-center lg:gap-36">
  <div class="flex justify-center">
    <TreePreview
      username={info.username}
      ppInitials={info.ppInitials}
      description={info.description}
      {buttons}
      {tag}
    />
  </div>
  <div class="w-full flex justify-center content-center items-center">
    <form
      class="label flex justify-center flex-col w-10/12 lg:w-5/12 m-6 gap-1"
      on:submit|preventDefault={sendData}
    >
      <div class="flex flex-col lg:flex-row gap-2">
        <input
          type="text"
          name="username"
          placeholder="username"
          class="input rounded-xl"
          bind:value={info.username}
        />
        <input
          type="text"
          name="initials"
          placeholder="username initials or image link"
          class="input rounded-xl"
          bind:value={info.ppInitials}
        />
      </div>
      <input
        type="text"
        name="description"
        placeholder="description"
        class="input rounded-xl"
        bind:value={info.description}
      />

      {#each buttons as button, index}
        <div class="button-inputs flex gap-2">
          <input
            type="text"
            placeholder={`Button ${index + 1} text`}
            bind:value={button.text}
            class="input rounded-xl"
          />
          <input
            type="text"
            placeholder={`Button ${index + 1} link`}
            bind:value={button.link}
            class="input rounded-xl"
          />
          <button
            class="btn variant-filled-secondary rounded-xl"
            type="button"
            on:click={() => removeButton(index)}>Remove</button
          >
        </div>
      {/each}
      {#each tag as t, index}
        <div class="flex gap-2">
          <input
            type="text"
            placeholder={`Tag ${index + 1} text`}
            bind:value={t.text}
            class="input rounded-xl"
          />
          <button
            class="btn variant-filled-secondary rounded-xl"
            type="button"
            on:click={() => removeTag(index)}>Remove</button
          >
        </div>
      {/each}
      <div class="flex gap-2 w-full">
        <button
          type="button"
          class="btn variant-filled w-1/2"
          on:click={addTag}
        >
          Add Tag
        </button>
        <button
          type="button"
          class="btn variant-filled w-1/2"
          on:click={addButton}
        >
          Add Button
        </button>
      </div>
      <button type="submit" class="btn variant-filled"> Submit </button>
      <p class="text-warning-500">
        Profile images will be shown once the page is generated
      </p>
    </form>
  </div>
</main>
{#if alertVisible}
  <div class="mx-16 mt-6">
    <aside class="alert variant-ghost">
      <!-- Icon -->
      <!-- Message -->
      <div class="alert-message">
        <h3 class="h3">Link copied to clipboard</h3>
        <p>
          Your page is now ready, you can paste it whenever you want to share
          it!
        </p>
      </div>
      <!-- Actions -->
      <div class="alert-actions">
        <button class="btn variant-outline-primary" on:click={closeAlert}
          >Close</button
        >
      </div>
    </aside>
  </div>
{/if}
<!-- <Tree
  username="test"
  ppInitials="test"
  description="test"
  a_btnText="test"
  a_btnLink="test"
  b_btnText="test"
  b_btnLink="test"
  c_btnText="test"
  c_btnLink="test"
/> -->
