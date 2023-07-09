<script>
    export let count;
    export let avg;
</script>

<div class="feetback-stats">
    <h4>{count} Reviews</h4>
    <h4>Average ratings: {avg}</h4>
</div>

<style>
    .feetback-stats {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>
