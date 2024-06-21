<script>
    import "$lib/css/base.css"
    import LoadingController from "$lib/controller/LoadingController.svelte"
    import LockController from "$lib/controller/LockController.svelte"
</script>

<slot />

<LoadingController />
<LockController />
