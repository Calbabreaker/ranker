<script>
    import { addItem, items, sortItems } from "./store";
    let itemName = "";

    function onSubmit() {
        const itemNames = itemName.split(",");
        itemNames.forEach((name) => addItem(name));
        sortItems();
        itemName = "";
    }

    function deleteEverything() {
        if (confirm("Delete everything?")) {
            $items = [];
        }
    }
</script>

<form on:submit|preventDefault={onSubmit}>
    <span>Add item: </span>
    <input type="text" bind:value={itemName} />
    <input type="submit" value="Create" />
    <button on:click={deleteEverything} type="button">Delete all</button>
</form>
