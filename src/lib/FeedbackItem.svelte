<script>
    import FeedbackStore from "../stores";
    import Card from "./Card.svelte";
    export let item;

    const handleDelete = (id) => {
        FeedbackStore.update((currentFeedback) => {
            return currentFeedback.filter((item) => item.id !== id);
        });
    };
</script>

<Card>
    <div class="num-display">{item.rating}</div>
    <button on:click={() => handleDelete(item.id)} class="close">X</button>
    <p class="text-display">{item.text}</p>
</Card>

<style>
    .num-display {
        position: absolute;
        top: -10px;
        left: -10px;
        width: 50px;
        height: 50px;
        background-color: #ff6a95;
        color: #fff;
        border: 1px solid #eee;
        border-radius: 50%;
        padding: 10px;
        text-align: center;
        font-size: 19px;
    }
    .close {
        position: absolute;
        top: 10px;
        right: 20px;
        cursor: pointer;
        border: 1px solid #333;
        padding: 0px 5px;
        transition: all 200ms ease;
        border-radius: 2px;
    }
    .close:hover {
        color: #eee;
        background-color: #333;
        border-color: transparent;
    }
</style>
