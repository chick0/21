<script>
    import { onMount } from "svelte"
    import { Computer, GameStatus, Player, resetGame } from "$lib/store"
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
    <div>
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

    <div>
        <Table>
            {#each $Player as card}
                <Card {card} />
            {/each}
        </Table>

        <Score>
            {getHandScore($Player)}
        </Score>
    </div>

    <div>
        {#if $GameStatus == "result"}
            <button on:click={() => resetGame()}>RESTART</button>
        {:else}
            <button on:click={playerHit}>Hit</button>
            <button on:click={playerStand}>Stand</button>
        {/if}
    </div>
{/if}
