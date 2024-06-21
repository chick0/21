<script>
    import { CardList } from "$lib/card"
    import CardWrapper from "$lib/layout/CardWrapper.svelte"
    import Card from "$lib/props/Card.svelte"
</script>

<CardWrapper>
    {#each CardList as card}
        <Card {card} />
    {/each}
</CardWrapper>
