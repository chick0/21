<script>
    import { onDestroy, onMount } from "svelte"
    import { navigating } from "$app/stores"
    import { AddLockCount, RemoveLockCount } from "$lib/store"

    import SpinnerWrapper from "$lib/layout/SpinnerWrapper.svelte"
    import Spinner from "$lib/props/Spinner.svelte"

    /** @type {boolean} */
    let isLoading = false

    /** @type {function | null} */
    let unsubscriber = null

    onMount(() => {
        unsubscriber = navigating.subscribe((value) => {
            isLoading = value != null

            if (isLoading) {
                AddLockCount()
            } else {
                RemoveLockCount()
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

{#if isLoading}
    <SpinnerWrapper>
        <Spinner />
    </SpinnerWrapper>
{/if}
