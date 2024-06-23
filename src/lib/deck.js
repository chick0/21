import { CardList } from "$lib/card"
import { DECK_COUNT } from "$lib/options"

/**
 * @param {Number} set
 * @returns {import("$lib/types/Card").Card[]}
 */
export function createGameDeck(set = DECK_COUNT) {
    /** @type {import("$lib/types/Card").Card[]} */
    let result = []

    for (let i = 0; i < set; i++) {
        CardList.forEach((card) => {
            result.push(card)
        })
    }

    for (let i = result.length - 1; i > 0; i--) {
        const rp = Math.floor(Math.random() * (i + 1))
        const tmp = result[i]

        result[i] = result[rp]
        result[rp] = tmp
    }

    return result
}
