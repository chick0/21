import { getAceNumber, getCardNumber } from "$lib/card"

/**
 * @param {import("$lib/types/Card").Card[]} hand
 * @returns {Number}
 */
export function getHandScore(hand) {
    let score = 0
    let aceCount = 0
    let aceScore = 0

    hand.forEach((card) => {
        if (card.endsWith("A")) {
            aceCount += 1
        } else {
            score += getCardNumber(card)
        }
    })

    for (let i = 0; i < aceCount; i++) {
        aceScore += getAceNumber(score)
    }

    return score + aceScore
}

/**
 * @param {import("$lib/types/Card").Card[]} hand
 * @returns {Number}
 */
export function getLimitedHandScore(hand) {
    if (hand.length == 0) {
        return 0
    }

    const showCard = hand[0]

    if (showCard.endsWith("A")) {
        return getAceNumber(0)
    }

    return getCardNumber(showCard)
}
