<script>
    import { CardList, getCardNumber } from "$lib/card"

    import MetaController from "$lib/controller/MetaController.svelte"
    import BackButton from "$lib/props/BackButton.svelte"
    import Block from "$lib/props/Block.svelte"
    import Card from "$lib/props/Card.svelte"
</script>

<MetaController title="덱" description="덱에 포함된 카드를 안내합니다." />
<BackButton href="/rule" />

<h1>덱</h1>
<p>덱에는 다음과 같은 카드들이 포함됩니다. ({CardList.length}장)</p>

<Block>
    <div class="card-list">
        {#each CardList as card}
            <div class="card-block">
                <Card {card} />

                {#if card.endsWith("A")}
                    <p>1 or 11</p>
                {:else}
                    <p>{getCardNumber(card)}</p>
                {/if}
            </div>
        {/each}
    </div>
</Block>

<style>
    .card-list {
        display: flex;
        flex-wrap: wrap;
        gap: 50px;

        justify-content: center;
    }

    .card-block {
        text-align: center;
    }
</style>
