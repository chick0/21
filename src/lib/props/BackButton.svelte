<script>
    export let href = "/"
</script>

<a class="back-button" {href}>
    <span class="inner">←</span>
</a>

<style>
    .back-button {
        background-color: rgba(0, 0, 0, 0.4);
        color: #fff;
        text-decoration: none;

        display: inline-block;
        width: 50px;
        height: 50px;

        position: fixed;
        top: 30px;
        left: 30px;
        z-index: 80;

        border: 0;
        border-radius: 50%;
    }

    @media (max-width: 768px) {
        .back-button {
            width: 45px;
            height: 45px;

            top: 15px;
            left: 15px;
        }
    }

    .inner {
        position: relative;
        top: 50%;
        left: 50%;

        display: inline-block;
        transform: translate(-50%, -50%);
    }
</style>
