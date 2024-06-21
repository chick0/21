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

    if (Number(last) > 1) {
        return last
    }

    if (last == "X") {
        return "10"
    }

    return ""
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
