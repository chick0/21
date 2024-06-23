<script>
    import { onDestroy, onMount } from "svelte"
    import { updated } from "$app/stores"
    import { updateDetected } from "$lib/message"

    /** @type {function | null} */
    let updateUnsubscriber = null

    onMount(() => {
        updateUnsubscriber = updated.subscribe((value) => {
            if (value) {
                updateDetected().then(() => {
                    location.reload()
                })
            }
        })
    })

    onDestroy(() => {
        if (updateUnsubscriber != null) {
            updateUnsubscriber()
        }
    })
</script>
