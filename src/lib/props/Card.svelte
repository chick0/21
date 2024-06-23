<script>
    import { getCardPath, getCardPrefix, getCardSuffix } from "$lib/card"

    /** @type {import("$lib/types/Card").Card} */
    export let card

    let alt

    $: alt = (getCardPrefix(card) + " " + getCardSuffix(card)).trim()
</script>

<img class="card" src={getCardPath(card)} {alt} title={alt} width="140" height="190" />

<style>
    .card {
        flex-shrink: 0;
        filter: drop-shadow(0 0 5px rgb(128, 128, 128, 1));
    }

    /* Only on Firefox */
    .card::before {
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        display: inline-block;
        padding: 5px;

        background-color: #000;
        color: #fff;
    }
</style>
