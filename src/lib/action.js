import { get } from "svelte/store"
import { Deck } from "$lib/store"
import { getHandScore } from "$lib/score"

/**
 * @returns {import("$lib/types/Card").Card | null}
 */
export function hitCard() {
    let deck = get(Deck)
    let card = deck.pop()

    if (card == undefined) {
        return null
    }

    Deck.set(deck)
    return card
}

/**
 * @param {import("$lib/types/Card").Card[]} hand
 * @returns {"hit" | "stand"}
 */
export function hitOrStand(hand) {
    const score = getHandScore(hand)

    if (score <= 14) {
        return "hit"
    } else if (score >= 17) {
        return "stand"
    }

    const dice = Math.random() * 21

    if (dice <= score) {
        return "hit"
    }

    return "stand"
}

/**
 * @param {import("$lib/types/Card").Card[]} hand
 * @returns {import("$lib/types/Card").Card | null}
 */
export function actionAuto(hand) {
    const pick = hitOrStand(hand)

    if (pick == "stand") {
        return null
    }

    return hitCard()
}

/**
 * @param {import("$lib/types/Card").Card[]} computerHand
 * @param {import("$lib/types/Card").Card[]} playerHand
 * @returns {"computer" | "player" | "draw"}
 */
export function getWinner(computerHand, playerHand) {
    const computerScore = getHandScore(computerHand)
    const playerScore = getHandScore(playerHand)

    if (playerScore == 21) {
        return "player"
    }

    if (computerScore == 21) {
        return "computer"
    }

    if (computerScore == playerScore) {
        return "draw"
    }

    if (playerScore > 21 || computerScore > 21) {
        if (playerScore <= 21) {
            return "player"
        }

        if (computerScore <= 21) {
            return "computer"
        }

        if (playerScore < computerScore) {
            return "player"
        } else {
            return "computer"
        }
    }

    if (playerScore > computerScore) {
        return "player"
    } else {
        return "computer"
    }
}
