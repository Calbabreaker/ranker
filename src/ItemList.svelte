<script>
    import { items, deleteItem } from "./store";
</script>

<ul class="items" class:hidden={$items.length === 0}>
    {#each $items as item, i}
        <li class="item">
            <div>
                <div>
                    <span class="name">{item.name}</span>
                    <span>{item.elo}</span>
                </div>
                <button on:click={() => deleteItem(i)}>X</button>
            </div>
        </li>
    {/each}
</ul>

<style>
    .hidden {
        display: none;
    }

    .items {
        list-style: decimal;
        width: fit-content;
        border: 1px solid black;
        padding: 0.5rem;
        padding-left: 2rem;
    }

    .item div {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    .item .name {
        margin-right: 1rem;
    }

    .item button {
        margin-left: 1rem;
    }
</style>
