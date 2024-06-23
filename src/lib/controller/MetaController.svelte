<script>
    import { PageTitle, PageDescription } from "$lib/store"
</script>

<svelte:head>
    <title>{$PageTitle}</title>
    <meta name="description" content={$PageDescription} />
    <meta property="og:title" content={$PageTitle} />
    <meta property="og:description" content={$PageDescription} />
</svelte:head>
