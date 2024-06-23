import { writable } from "svelte/store"
import { START_CARD } from "$lib/options"
import { createGameDeck } from "$lib/deck"

/** 페이지 제목 */
export const PageTitle = writable("21!")

/** 페이지 설명 */
export const PageDescription = writable("")

/** 페이지 제목 및 설정을 초기화 */
export function PageMetaReset() {
    PageTitle.set("21!")
    PageDescription.set("")
}

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

/** @type {import("svelte/store").Writable<import("$lib/types/Card").Card[]>} Computer Hand */
export const Computer = writable([])

/** @type {import("svelte/store").Writable<import("$lib/types/Card").Card[]>} Player Hand */
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
