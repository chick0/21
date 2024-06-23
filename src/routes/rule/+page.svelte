<script>
    import { DECK_COUNT, START_CARD, POINT_JACK, POINT_KING, POINT_QUEEN } from "$lib/options"

    import MetaController from "$lib/controller/MetaController.svelte"
    import BackButton from "$lib/props/BackButton.svelte"
    import Block from "$lib/props/Block.svelte"
</script>

<MetaController title="규칙" description="규칙을 설명합니다." />
<BackButton />

<h1>규칙</h1>
<p>21의 규칙을 설명합니다.</p>

<Block>
    <h2>게임 규칙</h2>

    <ol>
        <li>게임에서는 총 {DECK_COUNT}개의 <a href="/rule/card">덱</a>을 사용합니다.</li>
        <li>카드는 게임이 시작되기 전에 1번 셔플 됩니다.</li>
        <li>모든 플레이어는 총 {START_CARD}장의 카드를 받고 시작합니다.</li>
        <li>플레이어의 카드의 숫자 합은 21이 넘으면 안 됩니다.</li>
        <li>컴퓨터 보다 카드의 숫자 합이 21에 가까워야 합니다.</li>
        <li>플레이어의 숫자 합이 21이 넘으면 카드를 더 받을 수 없습니다.</li>
        <li>Hit 버튼을 누르면 새로운 카드를 한 장 받습니다.</li>
        <li>Stand 버튼을 누르면 새로운 카드를 받지 않습니다. (카드를 더 받을 수 없는 상태)</li>
        <li>모든 플레이어가 카드를 더 받을 수 없을 때 게임이 종료됩니다.</li>
    </ol>
</Block>

<Block>
    <h2>카드 점수 규칙</h2>

    <ol>
        <li>
            <b>Ace</b> 카드를 제외한 나머지 카드의 숫자 합이 10점 이하라면, 11점으로 계산합니다.
        </li>
        <li><b>Ace</b> 카드를 제외한 나머지 카드의 숫자 합이 10점 초과라면, 1점으로 계산합니다.</li>
        <li><b>Jack</b> 카드는 {POINT_JACK}점으로 계산합니다.</li>
        <li><b>Queen</b> 카드는 {POINT_QUEEN}점으로 계산합니다.</li>
        <li><b>King</b> 카드는 {POINT_KING}점으로 계산합니다.</li>
    </ol>
</Block>

<Block>
    <h2>승패 처리 규칙</h2>

    <p>승/패 처리는 다음과 같은 <u>순서</u>대로 진행됩니다.</p>

    <ol>
        <li>플레이어의 숫자 합이 21인지 확인</li>
        <li>상대 플레이어의 숫자 합이 21인지 확인</li>
        <li>모든 플레이어의 숫자 합이 동일하면 무승부</li>
        <li>플레이어 혹은 상대 플레이어의 숫자 합이 21을 넘겼는지 확인합니다.</li>
        <li>
            한 명의 플레이어만 숫자 합이 21을 넘겼다면 그 플레이어가 패배합니다.

            <ul>
                <li>
                    모든 플레이어의 숫자 합이 21을 넘긴 경우 숫자 합이 21과 가장 가까운 플레이어가
                    승리합니다
                </li>

                <li>플레이어의 숫자 합이 더 큰지 확인</li>
            </ul>
        </li>

        <li>1~6중에 포함되는 상황이 없으므로 무승부</li>
    </ol>
</Block>
