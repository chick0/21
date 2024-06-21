<script>
    import { onMount } from "svelte"
    import { Computer, GameStatus, Player, resetGame } from "$lib/store"
    import { getHandScore, getLimitedHandScore } from "$lib/score"
    import { hitCard, actionAuto, getWinner } from "$lib/action"

    import SpinnerWrapper from "$lib/layout/SpinnerWrapper.svelte"
    import Spinner from "$lib/props/Spinner.svelte"
    import CardWrapper from "$lib/layout/CardWrapper.svelte"
    import Card from "$lib/props/Card.svelte"

    let isMounted = false

    onMount(() => {
        isMounted = true
        resetGame()
    })

    function computerAction() {
        const card = actionAuto($Computer)

        if (card != null) {
            Computer.set([...$Computer, card])
            return true
        }

        return false
    }

    function playerHit() {
        if ($GameStatus != "playing") {
            alert("게임이 종료되었습니다")
            return
        }

        const card = hitCard()

        if (card == null) {
            alert("덱에 남은 카드가 없습니다!")
            return
        }

        Player.set([...$Player, card])
        computerAction()

        if (getHandScore($Player) > 21) {
            alert("bust")
            calcGameResult()
        }
    }

    function playerStand() {
        if ($GameStatus != "playing") {
            alert("게임이 종료되었습니다")
            return
        }

        calcGameResult()
    }

    function calcGameResult() {
        while (true) {
            if (!computerAction()) {
                break
            }
        }

        GameStatus.set("result")

        const winner = getWinner($Computer, $Player)
        alert(winner)
    }
</script>

{#if !isMounted}
    <SpinnerWrapper>
        <Spinner />
    </SpinnerWrapper>
{:else}
    <div>
        <button on:click={() => resetGame()}>Reset</button>
    </div>

    <div>
        <h1 class="name">Computer</h1>
        {#if $GameStatus == "result"}
            <p class="score">{getHandScore($Computer)}</p>
        {:else}
            <p class="score">{getLimitedHandScore($Computer)}</p>
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
    </div>

    <div>
        <h1 class="name">Player</h1>
        <p class="score">{getHandScore($Player)}</p>

        <CardWrapper>
            {#each $Player as card}
                <Card {card} />
            {/each}
        </CardWrapper>

        <button on:click={playerHit}>Hit</button>
        <button on:click={playerStand}>Stand</button>
    </div>
{/if}
