<script>
    import { addItem } from "./store";
    let itemName = "";
</script>

<form
    on:submit|preventDefault={() => {
        addItem(itemName);
        itemName = "";
    }}
>
    <span>Add item: </span>
    <input type="text" bind:value={itemName} />
    <input type="submit" value="Create" />
</form>
