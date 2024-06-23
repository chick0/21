<div class="container">
    <slot />
</div>

<style>
    .container {
        --container: 250px;

        min-height: 100vh;
        padding-top: 40px;
        padding-bottom: 40px;

        padding-left: var(--container);
        padding-right: var(--container);
    }

    @media (max-width: 768px) {
        .container {
            --container: 10px;
        }
    }

    @media (min-width: 768px) and (max-width: 1200px) {
        .container {
            --container: 50px;
        }
    }
</style>
