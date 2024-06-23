import { writable } from "svelte/store"
import { createGameDeck } from "$lib/deck"
import { START_CARD } from "$lib/options"

export const PageTitle = writable("21!")
export const PageDescription = writable("")

export const LockConut = writable(0)

export function AddLockCount() {
    LockConut.update((n) => n + 1)
}

export function RemoveLockCount() {
    LockConut.update((n) => (n >= 1 ? n - 1 : 0))
}

/** @type {import("svelte/store").Writable<import("$lib/types/Game").GameStatus>} */
export const GameStatus = writable("idle")

/** @type {import("svelte/store").Writable<import("$lib/types/Card").Card[]>} */
export const Deck = writable([])

/** @type {import("svelte/store").Writable<import("$lib/types/Card").Card[]>} */
export const Computer = writable([])

/** @type {import("svelte/store").Writable<import("$lib/types/Card").Card[]>} */
export const Player = writable([])

/**
 * @param {Number} startCard
 */
export function resetGame(startCard = START_CARD) {
    let deck = createGameDeck()

    /** @type {import("$lib/types/Card").Card[]} */
    let computer = []

    /** @type {import("$lib/types/Card").Card[]} */
    let player = []

    /** @type {import("$lib/types/Card").Card | undefined} */
    let tmp

    for (let i = 0; i < startCard; i++) {
        tmp = deck.pop()

        if (tmp != undefined) {
            computer.push(tmp)
        }

        tmp = deck.pop()

        if (tmp != undefined) {
            player.push(tmp)
        }
    }

    GameStatus.set("playing")
    Deck.set(deck)
    Computer.set(computer)
    Player.set(player)
}
