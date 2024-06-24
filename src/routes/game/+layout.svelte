<script>
    import ScalableLockController from "$lib/controller/ScalableLockController.svelte"
    import MetaController from "$lib/controller/MetaController.svelte"
    import BackButton from "$lib/props/BackButton.svelte"
    import Container from "$lib/layout/Container.svelte"
</script>

<ScalableLockController />

<MetaController title="21!" description="21 게임을 플래이합니다." />
<BackButton />

<Container>
    <slot />
</Container>
