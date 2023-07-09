<script>
  import FeedbackStore from "./stores";
  import FeedbackList from "./lib/FeedbackList.svelte";
  import FeetbackStats from "./lib/FeetbackStats.svelte";
  import FeetbackForm from "./lib/FeetbackForm.svelte";

  $: count = $FeedbackStore.length;
  $: avg =
    ($FeedbackStore.reduce((pre, { rating }) => pre + rating, 0) / $FeedbackStore.length) |
    0;

  const addToFeedback = ({ detail: data }) => {
    FeedbackStore.update((currentFeedback) => {
      return [data, ...currentFeedback];
    });
  };
</script>

<main class="container">
  <FeetbackForm on:add-to-feedback={addToFeedback} />
  <FeetbackStats {count} {avg} />

  <FeedbackList />
</main>

<style>
</style>
