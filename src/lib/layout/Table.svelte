<div class="table">
    <slot />
</div>

<style>
    .table {
        display: flex;
        gap: 15px;

        flex-wrap: nowrap;
        overflow-x: auto;

        justify-content: center;

        border: 2px solid #bbbbbb;
        border-radius: 24px;

        padding: 20px;
    }

    @media (max-width: 768px) {
        .table {
            gap: 10px;
        }
    }
</style>
