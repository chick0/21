<script>
    /** @type {string} */
    export let href
</script>

<a {href}><slot /></a>

<style>
    a {
        text-decoration: none;
        background-color: #4485bf;
        color: #fff;

        display: inline-block;
        padding: 10px;

        border: 0;
        border-radius: 0.25em;
    }
</style>
