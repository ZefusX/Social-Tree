<script lang="ts">
  import Tree from "../../../components/Tree.svelte";
  import type { TreeData } from "./+page";

  export let data;
  const treeInfos: TreeData = data.data;

  const buttons = treeInfos.buttons || [];
  const tag = treeInfos.tag || [];
</script>

<Tree
  username={treeInfos.username}
  ppInitials={treeInfos.ppInitials}
  description={treeInfos.description}
  {buttons}
  {tag}
/>
