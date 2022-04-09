<script>
    import AddForm from "./AddForm.svelte";
    import ItemList from "./ItemList.svelte";
    import Matcher from "./Matcher.svelte";
    import { items, sortItems } from "./store";

    let tabIndex = 0;
</script>

<button
    on:click={() => {
        sortItems();
        tabIndex = 0;
    }}>Item list</button
>
<button
    on:click={() => {
        if ($items.length > 1) tabIndex = 1;
    }}>Matcher</button
>
<div class="container">
    {#if tabIndex == 0}
        <AddForm />
        <ItemList />
    {:else}
        <Matcher />
    {/if}
</div>

<style>
    :root {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    }

    .container {
        margin-top: 1rem;
    }
</style>
