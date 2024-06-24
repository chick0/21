<script>
    import MetaController from "$lib/controller/MetaController.svelte"
    import Card from "$lib/props/Card.svelte"
    import Buttons from "$lib/layout/Buttons.svelte"
    import Button from "$lib/props/Button.svelte"
    import Icon from "$lib/props/Icon.svelte"
</script>

<MetaController />

<div class="section">
    <div class="intro">
        <Card card="Back" />

        <h1 class="title">21!</h1>
        <p class="description">카드의 숫자합이 21에 가까우면 승리하는 게임입니다</p>

        <hr />

        <Buttons center={true}>
            <Button href="/game"><Icon icon="fa-dice" /> 게임 시작</Button>
            <Button href="/rule"><Icon icon="fa-book" /> 규칙</Button>
        </Buttons>
    </div>
</div>

<!--
    <Button href="/license">license</Button>
-->

<style>
    .section {
        display: block;
        width: 100%;
        height: 100vh;
    }

    .intro {
        display: inline-block;

        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        text-align: center;
    }

    hr {
        position: relative;
        left: 50%;
        transform: translateX(-50%);

        width: 85%;

        border: 0;
        border-top: #bbb 1px solid;
    }

    .description {
        margin-bottom: 20px;
    }
</style>
