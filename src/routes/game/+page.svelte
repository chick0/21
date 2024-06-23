<script>
    import { onMount } from "svelte"
    import { PageMetaReset, Computer, GameStatus, Player, resetGame } from "$lib/store"
    import { getHandScore, getLimitedHandScore } from "$lib/score"
    import { hitCard, actionAuto, getWinner } from "$lib/action"
    import { gameBust, gameDraw, gameLose, gameWin } from "$lib/message"

    import SpinnerWrapper from "$lib/layout/SpinnerWrapper.svelte"
    import Spinner from "$lib/props/Spinner.svelte"
    import Table from "$lib/layout/Table.svelte"
    import Card from "$lib/props/Card.svelte"
    import Score from "$lib/props/Score.svelte"

    let isMounted = false

    let computerScore = 0

    $: if ($GameStatus == "result") {
        computerScore = getHandScore($Computer)
    } else {
        computerScore = getLimitedHandScore($Computer)
    }

    PageMetaReset()

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
            gameBust().then(() => {
                calcGameResult()
            })
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

        switch (winner) {
            case "computer":
                gameLose()
                break

            case "player":
                gameWin()
                break

            default:
                gameDraw()
                break
        }
    }
</script>

{#if !isMounted}
    <SpinnerWrapper>
        <Spinner />
    </SpinnerWrapper>
{:else}
    <div class="game">
        <Table>
            {#each $Computer as card, i}
                {#if i == 0 || $GameStatus == "result"}
                    <Card {card} />
                {:else}
                    <Card card="Back" />
                {/if}
            {/each}
        </Table>

        <Score>
            {computerScore}
        </Score>
    </div>

    <div class="game">
        <Table>
            {#each $Player as card}
                <Card {card} />
            {/each}
        </Table>

        <Score>
            {getHandScore($Player)}
        </Score>
    </div>

    <div class="buttons">
        {#if $GameStatus == "result"}
            <button class="button restart" on:click={() => resetGame()}>RESTART</button>
        {:else}
            <button class="button hit" on:click={playerHit}>HIT</button>
            <button class="button stand" on:click={playerStand}>STAND</button>
        {/if}
    </div>
{/if}

<style>
    .game {
        margin-bottom: 40px;
    }

    .buttons {
        display: flex;
        gap: 10px;

        width: calc(100% - var(--container) * 2);

        position: fixed;
        bottom: 0;
    }

    .button {
        display: inline-block;

        width: 50%;
        height: 60px;

        border: 0;
        border-top-left-radius: 0.25em;
        border-top-right-radius: 0.25em;
    }

    .restart {
        background-color: #e9e9ed;
        color: #000;

        width: 100%;
    }

    .hit {
        background-color: #e9e9ed;
        color: #000;
    }

    .stand {
        background-color: #e9e9ed;
        color: #000;
    }
</style>
