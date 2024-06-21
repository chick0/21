<script>
    import "$lib/css/base.css"
    import Container from "$lib/layout/Container.svelte"
    import LoadingController from "$lib/controller/LoadingController.svelte"
    import LockController from "$lib/controller/LockController.svelte"
</script>

<Container>
    <slot />
</Container>

<LoadingController />
<LockController />
