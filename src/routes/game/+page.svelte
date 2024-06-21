<script>
    import { onMount } from "svelte"
    import { Computer, GameStatus, Player, resetGame } from "$lib/store"
    import { getHandScore, getLimitedHandScore } from "$lib/score"

    import SpinnerWrapper from "$lib/layout/SpinnerWrapper.svelte"
    import Spinner from "$lib/props/Spinner.svelte"
    import CardWrapper from "$lib/layout/CardWrapper.svelte"
    import Card from "$lib/props/Card.svelte"

    let isMounted = false

    onMount(() => {
        isMounted = true
        resetGame()
    })
</script>

{#if !isMounted}
    <SpinnerWrapper>
        <Spinner />
    </SpinnerWrapper>
{:else}
    <button on:click={() => resetGame()}>Reset</button>
    <button on:click={() => GameStatus.set("result")}>Result</button>

    <h1>Computer</h1>
    {#if $GameStatus == "result"}
        <p>{getHandScore($Computer)}</p>
    {:else}
        <p>{getLimitedHandScore($Computer)}</p>
    {/if}

    <CardWrapper>
        {#each $Computer as card, i}
            {#if i == 0 || $GameStatus == "result"}
                <Card {card} />
            {:else}
                <Card card="Back" />
            {/if}
        {/each}
    </CardWrapper>

    <h1>Player</h1>
    <p>{getHandScore($Player)}</p>

    <CardWrapper>
        {#each $Player as card}
            <Card {card} />
        {/each}
    </CardWrapper>
{/if}
