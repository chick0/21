<script>
    import { pwaInfo } from "virtual:pwa-info"

    /** @type {string} */
    let manifestHref

    $: manifestHref = pwaInfo ? pwaInfo.webManifest.href : ""
</script>

<svelte:head>
    <link rel="manifest" href={manifestHref} />
</svelte:head>
