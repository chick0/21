<script>
    import "$lib/css/base.css"
    import ManifestController from "$lib/controller/ManifestController.svelte"
    import MetaController from "$lib/controller/MetaController.svelte"
    import LoadingController from "$lib/controller/LoadingController.svelte"
    import LockController from "$lib/controller/LockController.svelte"
    import UpdateController from "$lib/controller/UpdateController.svelte"
</script>

<ManifestController />
<MetaController />

<slot />

<LoadingController />
<LockController />
<UpdateController />
