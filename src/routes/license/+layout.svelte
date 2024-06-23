<script>
    import MetaController from "$lib/controller/MetaController.svelte"
    import BackButton from "$lib/props/BackButton.svelte"
    import Container from "$lib/layout/Container.svelte"
    import Content from "$lib/props/Content.svelte"
</script>

<MetaController title="License" description="외부 리소스 사용 정보를 안내하고 있습니다." />
<BackButton />

<Container>
    <Content>
        <slot />
    </Content>
</Container>
