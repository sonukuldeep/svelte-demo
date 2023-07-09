<script>
  import { onMount, onDestroy } from "svelte";
  import { fade, scale } from "svelte/transition";
  import FeedbackItem from "./FeedbackItem.svelte";
  import FeedbackStore from "../stores";

  // let feedback = [];
  // const unsubscribe = FeedbackStore.subscribe((data) => (feedback = data));

  // onMount(() => {
  //   console.log("mounted");
  // });

  // onDestroy(() => {
  //   unsubscribe();
  // });

</script>

<!-- {#each feedback as fb (fb.id)} -->
{#each $FeedbackStore as fb (fb.id)}
  <div in:scale out:fade={{ duration: 300 }}>
    <FeedbackItem item={fb} />
  </div>
{/each}
