<script>
    import MetaController from "$lib/controller/MetaController.svelte"
    import BackButton from "$lib/props/BackButton.svelte"
    import Container from "$lib/layout/Container.svelte"
    import Content from "$lib/props/Content.svelte"
</script>

<MetaController title="규칙" description="규칙을 설명합니다." />
<BackButton />

<Container>
    <Content>
        <slot />
    </Content>
</Container>
