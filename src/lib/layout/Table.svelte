<div class="table">
    <slot />
</div>

<style>
    .table {
        display: flex;
        gap: 15px;

        flex-wrap: nowrap;
        overflow-x: auto;

        border: 2px solid #bbb;
        border-radius: 24px;

        padding: 20px;
    }

    @media (max-width: 768px) {
        .table {
            gap: 10px;
        }
    }
</style>
