<script>
    import { v4 as uuid } from "uuid";
    import { createEventDispatcher } from 'svelte';
    import Button from "./Button.svelte";
    import Card from "./Card.svelte";
    import RatingSelect from "./RatingSelect.svelte";
    const dispatch = createEventDispatcher();

    let text = "";
    let btnDisabled = true;
    let message = null;
    let minLength = 15;
    let rating = 10;

    const textValidation = () => {
        if (text.trim().length < minLength) {
            message = `Text must be at least  ${minLength} characters`;
            btnDisabled = true;
        } else {
            message = null;
            btnDisabled = false;
        }
    };

    const handleSubmit = () => {
        if (text.trim().length > minLength) {
            const data = {
                id: uuid(),
                text,
                rating: Number(rating),
            };
            dispatch('add-to-feedback', data)
            text = ''
        }
    };
</script>

<Card>
    <form on:submit|preventDefault={handleSubmit}>
        <header>
            <h2>How would you rate your service with us?</h2>
        </header>
        <RatingSelect
            bind:rating
        />

        <div class="input-group">
            <input
                type="text"
                bind:value={text}
                placeholder="Tell us something"
                on:input={textValidation}
            />
            <Button disabled={btnDisabled} type="submit">Send</Button>
        </div>

        {#if message}
            <div class="message">{message}</div>
        {/if}
    </form>
</Card>

<style>
    header {
        max-width: 400px;
        margin: auto;
    }

    header h2 {
        font-size: 22px;
        font-weight: 600;
        text-align: center;
    }

    .input-group {
        display: flex;
        flex-direction: row;
        border: 1px solid #ccc;
        padding: 8px 10px;
        border-radius: 8px;
        margin-top: 15px;
    }

    input {
        flex-grow: 2;
        border: none;
        font-size: 16px;
    }

    input:focus {
        outline: none;
    }

    .message {
        padding-top: 10px;
        text-align: center;
        color: rebeccapurple;
    }
</style>
