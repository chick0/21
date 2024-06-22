<script>
    import { LockConut } from "$lib/store"
    import { onDestroy, onMount } from "svelte"

    /** @type {function | null}*/
    let unsubscriber = null

    onMount(() => {
        unsubscriber = LockConut.subscribe((x) => {
            if (x > 0) {
                document.body.classList.add("lock")
            } else {
                document.body.classList.remove("lock")
            }
        })
    })

    onDestroy(() => {
        if (unsubscriber != null) {
            unsubscriber()

            unsubscriber = null
        }
    })
</script>
