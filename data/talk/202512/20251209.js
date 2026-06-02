


/*
We shared romantic moments all night long.
→ 우리는 밤새도록 로맨틱한 순간들을 나눴어요.
*/

/*
I played soccer with friends.
→ 나는 친구들과 축구를 했어요.
*/

/*
Mom buys a toy for me.
→ 엄마는 나에게 장난감을 사줘요.
*/


/*
Dad makes a robot with blocks.
→ 아빠는 블록으로 로봇을 만들어요.
*/

/*
We eat cake together.
→ 우리는 같이 케이크를 먹어요.
*/


const enDatas = [
    // 기존 7개
    [
        { en: 'I', step: 0 },
        { en: 'play', step: 1 },
        { en: 'soccer', step: 2 },
        { en: 'with friends.', step: 3 },
    ],
    [
        { en: 'Mom', step: 0 },
        { en: 'buys', step: 1 },
        { en: 'a toy', step: 2 },
        { en: 'for me.', step: 3 },
    ],
    [
        { en: 'Dad', step: 0 },
        { en: 'makes', step: 1 },
        { en: 'a robot', step: 2 },
        { en: 'with blocks.', step: 3 },
    ],
    [
        { en: 'We', step: 0 },
        { en: 'eat', step: 1 },
        { en: 'cake', step: 2 },
        { en: 'together.', step: 3 },
    ],
    [
        { en: 'The dog', step: 0 },
        { en: 'likes', step: 1 },
        { en: 'the ball', step: 2 },
        { en: 'very much.', step: 3 },
    ],
    [
        { en: 'I', step: 0 },
        { en: 'drink', step: 1 },
        { en: 'milk', step: 2 },
        { en: 'every morning.', step: 3 },
    ],
    [
        { en: 'She', step: 0 },
        { en: 'draws', step: 1 },
        { en: 'a flower', step: 2 },
        { en: 'on the paper.', step: 3 },
    ],
    // 추가된 7개
    [
        { en: 'Grandma', step: 0 },
        { en: 'reads', step: 1 },
        { en: 'a storybook', step: 2 },
        { en: 'in the chair.', step: 3 },
    ],
    [
        { en: 'I', step: 0 },
        { en: 'ride', step: 1 },
        { en: 'a bike', step: 2 },
        { en: 'at the park.', step: 3 },
    ],
    [
        { en: 'The cat', step: 0 },
        { en: 'chases', step: 1 },
        { en: 'a butterfly', step: 2 },
        { en: 'in the garden.', step: 3 },
    ],
    [
        { en: 'We', step: 0 },
        { en: 'wash', step: 1 },
        { en: 'our hands', step: 2 },
        { en: 'before eating.', step: 3 },
    ],
    [
        { en: 'The bird', step: 0 },
        { en: 'sings', step: 1 },
        { en: 'a song', step: 2 },
        { en: 'in the tree.', step: 3 },
    ],
    [
        { en: 'Grandpa', step: 0 },
        { en: 'waters', step: 1 },
        { en: 'the plants', step: 2 },
        { en: 'on the balcony.', step: 3 },
    ],
    [
        { en: 'My brother', step: 0 },
        { en: 'eats', step: 1 },
        { en: 'a sweet apple', step: 2 },
        { en: 'for a snack.', step: 3 },
    ],
];

const koDatas = [
    // 기존 7개
    [
        { ko: '나는', step: 0 },
        { ko: '친구랑', step: 3 },
        { ko: '축구를', step: 2 },
        { ko: '해요.', step: 1 },
    ],
    [
        { ko: '엄마는', step: 0 },
        { ko: '나에게', step: 3 },
        { ko: '장난감을', step: 2 },
        { ko: '사줘요.', step: 1 },
    ],
    [
        { ko: '아빠는', step: 0 },
        { ko: '블록으로', step: 3 },
        { ko: '로봇을', step: 2 },
        { ko: '만들어요.', step: 1 },
    ],
    [
        { ko: '우리는', step: 0 },
        { ko: '다 같이', step: 3 },
        { ko: '케이크를', step: 2 },
        { ko: '먹어요.', step: 1 },
    ],
    [
        { ko: '강아지는', step: 0 },
        { ko: '정말', step: 3 },
        { ko: '공을', step: 2 },
        { ko: '좋아해요.', step: 1 },
    ],
    [
        { ko: '나는', step: 0 },
        { ko: '매일 아침', step: 3 },
        { ko: '우유를', step: 2 },
        { ko: '마셔요.', step: 1 },
    ],
    [
        { ko: '그녀는', step: 0 },
        { ko: '종이에', step: 3 },
        { ko: '꽃을', step: 2 },
        { ko: '그려요.', step: 1 },
    ],
    // 추가된 7개
    [
        { ko: '할머니는', step: 0 },
        { ko: '의자에서', step: 3 },
        { ko: '동화책을', step: 2 },
        { ko: '읽으세요.', step: 1 },
    ],
    [
        { ko: '나는', step: 0 },
        { ko: '공원에서', step: 3 },
        { ko: '자전거를', step: 2 },
        { ko: '타요.', step: 1 },
    ],
    [
        { ko: '고양이는', step: 0 },
        { ko: '정원에서', step: 3 },
        { ko: '나비를', step: 2 },
        { ko: '쫓아요.', step: 1 },
    ],
    [
        { ko: '우리는', step: 0 },
        { ko: '밥 먹기 전에', step: 3 },
        { ko: '손을', step: 2 },
        { ko: '씻어요.', step: 1 },
    ],
    [
        { ko: '새는', step: 0 },
        { ko: '나무에서', step: 3 },
        { ko: '노래를', step: 2 },
        { ko: '불러요.', step: 1 },
    ],
    [
        { ko: '할아버지는', step: 0 },
        { ko: '베란다에서', step: 3 },
        { ko: '화분에', step: 2 },
        { ko: '물을 주세요.', step: 1 },
    ],
    [
        { ko: '내 동생은', step: 0 },
        { ko: '간식으로', step: 3 },
        { ko: '달콤한 사과를', step: 2 },
        { ko: '먹어요.', step: 1 },
    ],
];