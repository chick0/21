<script>
    export let name
    export let score
</script>

<div class="table">
    <div class="name">{name}</div>

    <div class="card-table">
        <slot />
    </div>

    <div class="score">{score}</div>
</div>

<style>
    .table {
        overflow-x: auto;

        padding: 30px;

        background-color: rgb(45, 128, 45);

        border: 0;
        border-radius: 0.25em;
    }

    .name {
        top: 0;
    }

    .score {
        top: 0;
    }

    .card-table {
        display: flex;
        gap: 15px;

        padding-right: 30px;
    }

    @media (max-width: 768px) {
        .card-table {
            gap: 10px;
        }
    }
</style>
