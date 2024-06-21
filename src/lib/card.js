import { POINT_JACK, POINT_QUEEN, POINT_KING } from "$lib/options"

/**
 * @param {import("$lib/types/Card").Card} card
 */
export function getCardPath(card) {
    return `/card/${card}.png`
}

/**
 * @param {import("$lib/types/Card").Card} card
 * @returns {string}
 */
export function getCardPrefix(card) {
    if (card == "Back") {
        return "Back"
    }

    if (card.startsWith("C")) {
        return "Clubs"
    }

    if (card.startsWith("D")) {
        return "Diamonds"
    }

    if (card.startsWith("H")) {
        return "Hearts"
    }

    if (card.startsWith("S")) {
        return "Spades"
    }

    return ""
}

/**
 * @param {import("$lib/types/Card").Card} card
 * @returns {string}
 */
export function getCardSuffix(card) {
    if (card == "Back") {
        return ""
    }

    const last = card.charAt(card.length - 1)

    if (last == "A") {
        return "Ace"
    }

    if (last == "J") {
        return "Jack"
    }
    if (last == "Q") {
        return "Queen"
    }
    if (last == "K") {
        return "King"
    }

    if (!isNaN(Number(last))) {
        return last
    }

    if (last == "X") {
        return "10"
    }

    return ""
}

/**
 * @param {import("$lib/types/Card").Card} card
 * @returns {Number}
 */
export function getCardNumber(card) {
    if (card == "Back") {
        return 0
    }

    const last = card.charAt(card.length - 1)

    const parseResult = Number(last)

    if (!isNaN(parseResult)) {
        return parseResult
    }

    if (last == "X") {
        return 10
    }

    if (last == "J") {
        return POINT_JACK
    }
    if (last == "Q") {
        return POINT_QUEEN
    }
    if (last == "K") {
        return POINT_KING
    }

    return 0
}

/**
 * @param {Number} total
 * @returns {Number}
 */
export function getAceNumber(total) {
    if (total <= 10) {
        return 11
    }

    return 1
}

/** @type {import("$lib/types/Card").Card[]} */
export const CardList = [
    "CA",
    "C2",
    "C3",
    "C4",
    "C5",
    "C6",
    "C7",
    "C8",
    "C9",
    "CX",
    "CJ",
    "CQ",
    "CK",
    "DA",
    "D2",
    "D3",
    "D4",
    "D5",
    "D6",
    "D7",
    "D8",
    "D9",
    "DX",
    "DJ",
    "DQ",
    "DK",
    "HA",
    "H2",
    "H3",
    "H4",
    "H5",
    "H6",
    "H7",
    "H8",
    "H9",
    "HX",
    "HJ",
    "DQ",
    "DK",
    "SA",
    "S2",
    "S3",
    "S4",
    "S5",
    "S6",
    "S7",
    "S8",
    "S9",
    "SX",
    "SJ",
    "SQ",
    "SK",
]
