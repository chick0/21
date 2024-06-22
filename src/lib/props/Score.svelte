<div class="score-wrapper">
    <div class="score">
        <slot />
    </div>
</div>

<style>
    .score-wrapper {
        padding-top: 10px;
        padding-bottom: 10px;

        text-align: center;
    }

    .score {
        display: inline-block;
        padding: 10px;
        background-color: rgb(165, 42, 42);
        color: #fff;

        width: 45px;

        border: 0;
        border-radius: 0.25em;
    }
</style>
