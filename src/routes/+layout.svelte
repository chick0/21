<script>
    import "$lib/css/base.css"
    import ManifestController from "$lib/controller/ManifestController.svelte"
    import Container from "$lib/layout/Container.svelte"
    import LoadingController from "$lib/controller/LoadingController.svelte"
    import LockController from "$lib/controller/LockController.svelte"
    import UpdateController from "$lib/controller/UpdateController.svelte"
</script>

<ManifestController />

<Container>
    <slot />
</Container>

<LoadingController />
<LockController />
<UpdateController />
