<script>
    import MetaController from "$lib/controller/MetaController.svelte"
    import BackButton from "$lib/props/BackButton.svelte"
</script>

<MetaController title="21!" description="21 게임을 플래이합니다." />
<BackButton />

<slot />
