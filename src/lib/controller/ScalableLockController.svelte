<script>
    import { onDestroy, onMount } from "svelte"

    /** @type {string | null} */
    let restoreContent = null

    onMount(() => {
        /** @type {HTMLMetaElement | null} */
        const viewport = document.querySelector("meta[name=viewport]")

        if (viewport != null) {
            restoreContent = viewport.content
            viewport.content = restoreContent + ", user-scalable=no"
        }
    })

    onDestroy(() => {
        if (restoreContent != null) {
            /** @type {HTMLMetaElement | null} */
            const viewport = document.querySelector("meta[name=viewport]")

            if (viewport != null) {
                viewport.content = restoreContent
            }
        }
    })
</script>
