<script>
    /** @type {string} */
    export let icon

    export let marginEnd = true
</script>

<i class="fa {icon} {marginEnd ? 'margin-end' : ''}"></i>

<style>
    .margin-end {
        margin-right: 5px;
    }
</style>
