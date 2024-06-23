<script>
    import Container from "$lib/layout/Container.svelte"
    import Content from "$lib/props/Content.svelte"
</script>

<Container>
    <Content>
        <slot />
    </Content>
</Container>
