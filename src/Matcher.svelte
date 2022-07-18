<script>
    import { items } from "./store";
    import { getExpected, getRandom, updateRating } from "./utils";

    let itemTuple = randomMatch();

    function choose(i) {
        let [itemA, itemB] = itemTuple;

        const expectedScoreA = getExpected(itemA.elo, itemB.elo);
        const expectedScoreB = getExpected(itemB.elo, itemA.elo);

        itemA.elo = updateRating(expectedScoreA, i == 0 ? 1 : 0, itemA.elo);
        itemB.elo = updateRating(expectedScoreB, i == 1 ? 1 : 0, itemB.elo);
        $items = $items;
        itemTuple = randomMatch();
    }

    function randomMatch() {
        const itemTuple = [getRandom($items)];
        do {
            itemTuple[1] = getRandom($items);
        } while (itemTuple[0] == itemTuple[1]);
        return itemTuple;
    }

    function onKeyDown(event) {
        if (event.key == "1") choose(0);
        else if (event.key == "2") choose(1);
    }
</script>

<svelte:window on:keydown={onKeyDown} />
<div>
    Choose
    <button on:click={() => choose(0)}>{itemTuple[0].name}</button> or
    <button on:click={() => choose(1)}>{itemTuple[1].name}</button>
</div>
