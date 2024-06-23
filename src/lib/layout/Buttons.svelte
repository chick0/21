<script>
    export let center = false
</script>

<div class="buttons {center ? 'centered' : ''}">
    <slot />
</div>

<style>
    .buttons {
        margin-top: 20px;
        margin-bottom: 20px;

        display: flex;
        gap: 5px;
    }

    .centered {
        justify-content: center;
    }
</style>
