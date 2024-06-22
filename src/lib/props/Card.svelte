<script>
    import { getCardPath, getCardPrefix, getCardSuffix } from "$lib/card"

    /** @type {import("$lib/types/Card").Card} */
    export let card

    let alt

    $: alt = (getCardPrefix(card) + " " + getCardSuffix(card)).trim()
</script>

<img class="card" src={getCardPath(card)} {alt} title={alt} width="140" height="190" />
