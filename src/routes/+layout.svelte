<script>
    import "$lib/css/base.css"
    import "$lib/css/theme.css"

    import MetaController from "$lib/controller/MetaController.svelte"
    import LoadingController from "$lib/controller/LoadingController.svelte"
    import LockController from "$lib/controller/LockController.svelte"
    import UpdateController from "$lib/controller/UpdateController.svelte"
</script>

<MetaController />

<slot />

<LoadingController />
<LockController />
<UpdateController />
