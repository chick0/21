<script>
    import { AddLockCount, RemoveLockCount } from "$lib/store"
    import { onDestroy, onMount } from "svelte"

    onMount(() => {
        AddLockCount()
    })

    onDestroy(() => {
        RemoveLockCount()
    })
</script>

<div class="spinner-wrapper">
    <slot />
</div>

<style>
    .spinner-wrapper {
        position: fixed;
        top: 0;
        width: 100vw;
        height: 100vh;

        overflow: hidden;

        background-color: rgba(0, 0, 0, 0.9);
        z-index: 100;
    }
</style>
