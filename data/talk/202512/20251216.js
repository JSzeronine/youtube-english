const enDatas = [
    // ------------------------------------------
    // [1-5] Step 0-3 (4세 기준: 아주 쉬운 문장)
    // ------------------------------------------
    [
        { en: 'The bear', step: 0 },
        { en: 'eats', step: 1 },
        { en: 'sweet honey', step: 2 },
        { en: 'in the cave.', step: 3 },
    ],
    [
        { en: 'Mom', step: 0 },
        { en: 'kisses', step: 1 },
        { en: 'me', step: 2 },
        { en: 'at night.', step: 3 },
    ],
    [
        { en: 'I', step: 0 },
        { en: 'wear', step: 1 },
        { en: 'my shoes', step: 2 },
        { en: 'at the door.', step: 3 },
    ],
    [
        { en: 'I', step: 0 },
        { en: 'brush', step: 1 },
        { en: 'my teeth', step: 2 },
        { en: 'in the bathroom.', step: 3 },
    ],
    [
        { en: 'Dad', step: 0 },
        { en: 'drives', step: 1 },
        { en: 'a car', step: 2 },
        { en: 'on the road.', step: 3 },
    ],

    // [6-10] Step 0-4 (5세 기준: 조금 더 자세하게)
    [
        { en: 'The cat', step: 0 },
        { en: 'chases', step: 1 },
        { en: 'a mouse', step: 2 },
        { en: 'quickly', step: 3 },
        { en: 'in the house.', step: 4 },
    ],
    [
        { en: 'I', step: 0 },
        { en: 'eat', step: 1 },
        { en: 'an apple', step: 2 },
        { en: 'with a fork', step: 3 },
        { en: 'at the table.', step: 4 },
    ],
    [
        { en: 'We', step: 0 },
        { en: 'build', step: 1 },
        { en: 'a castle', step: 2 },
        { en: 'with sand', step: 3 },
        { en: 'on the beach.', step: 4 },
    ],
    [
        { en: 'The bird', step: 0 },
        { en: 'feeds', step: 1 },
        { en: 'the baby', step: 2 },
        { en: 'gently', step: 3 },
        { en: 'in the nest.', step: 4 },
    ],
    [
        { en: 'My sister', step: 0 },
        { en: 'draws', step: 1 },
        { en: 'a star', step: 2 },
        { en: 'with a crayon', step: 3 },
        { en: 'on paper.', step: 4 },
    ],

    // [11-14] Step 0-5 (5세 심화: 풍성한 문장)
    [
        { en: 'Grandma', step: 0 },
        { en: 'reads', step: 1 },
        { en: 'a story', step: 2 },
        { en: 'funnily', step: 3 },
        { en: 'to me', step: 4 },
        { en: 'in the bed.', step: 5 },
    ],
    [
        { en: 'The dog', step: 0 },
        { en: 'catches', step: 1 },
        { en: 'a ball', step: 2 },
        { en: 'happily', step: 3 },
        { en: 'with friends', step: 4 },
        { en: 'in the park.', step: 5 },
    ],
    [
        { en: 'We', step: 0 },
        { en: 'sing', step: 1 },
        { en: 'a song', step: 2 },
        { en: 'loudly', step: 3 },
        { en: 'together', step: 4 },
        { en: 'at school.', step: 5 },
    ],
    [
        { en: 'Grandpa', step: 0 },
        { en: 'plants', step: 1 },
        { en: 'a tree', step: 2 },
        { en: 'carefully', step: 3 },
        { en: 'with a shovel', step: 4 },
        { en: 'in the garden.', step: 5 },
    ],
    [
        { en: 'My sister', step: 0 },
        { en: 'usually', step: 1 },
        { en: 'drinks', step: 2 },
        { en: 'a cup of warm tea', step: 3 },
        { en: 'in her room', step: 4 },
        { en: 'to relax', step: 5 },
        { en: 'after', step: 6 },
        { en: 'dinner.', step: 7 },
    ],
];

const koDatas = [
    [
        { ko: '곰은', step: 0 },
        { ko: '동굴에서', step: 3 },
        { ko: '달콤한 꿀을', step: 2 },
        { ko: '먹어요.', step: 1 },
    ],
    [
        { ko: '엄마는', step: 0 },
        { ko: '밤에', step: 3 },
        { ko: '나에게', step: 2 },
        { ko: '뽀뽀해요.', step: 1 },
    ],
    [
        { ko: '나는', step: 0 },
        { ko: '현관에서', step: 3 },
        { ko: '신발을', step: 2 },
        { ko: '신어요.', step: 1 },
    ],
    [
        { ko: '나는', step: 0 },
        { ko: '화장실에서', step: 3 },
        { ko: '이빨을', step: 2 },
        { ko: '닦아요.', step: 1 },
    ],
    [
        { ko: '아빠는', step: 0 },
        { ko: '도로에서', step: 3 },
        { ko: '자동차를', step: 2 },
        { ko: '운전해요.', step: 1 },
    ],

    // [6-10] Step 0-4 (5세: S -> Place -> How/With -> O -> V)
    [
        { ko: '고양이는', step: 0 },
        { ko: '집에서', step: 4 },
        { ko: '빠르게', step: 3 },
        { ko: '쥐를', step: 2 },
        { ko: '쫓아요.', step: 1 },
    ],
    [
        { ko: '나는', step: 0 },
        { ko: '식탁에서', step: 4 },
        { ko: '포크로', step: 3 },
        { ko: '사과를', step: 2 },
        { ko: '먹어요.', step: 1 },
    ],
    [
        { ko: '우리는', step: 0 },
        { ko: '해변에서', step: 4 },
        { ko: '모래로', step: 3 },
        { ko: '성을', step: 2 },
        { ko: '만들어요.', step: 1 },
    ],
    [
        { ko: '새는', step: 0 },
        { ko: '둥지에서', step: 4 },
        { ko: '부드럽게', step: 3 },
        { ko: '아기에게 먹이를', step: 2 }, // feeds the baby
        { ko: '줘요.', step: 1 },
    ],
    [
        { ko: '우리 언니는', step: 0 },
        { ko: '종이에', step: 4 },
        { ko: '크레파스로', step: 3 },
        { ko: '별을', step: 2 },
        { ko: '그려요.', step: 1 },
    ],

    // [11-14] Step 0-5 (5세 심화: 역순 배치 구조)
    [
        { ko: '할머니는', step: 0 },
        { ko: '침대에서', step: 5 },
        { ko: '나에게', step: 4 },
        { ko: '재미있게', step: 3 },
        { ko: '이야기를', step: 2 },
        { ko: '읽어주세요.', step: 1 },
    ],
    [
        { ko: '강아지는', step: 0 },
        { ko: '공원에서', step: 5 },
        { ko: '친구들이랑', step: 4 },
        { ko: '행복하게', step: 3 },
        { ko: '공을', step: 2 },
        { ko: '잡아요.', step: 1 },
    ],
    [
        { ko: '우리는', step: 0 },
        { ko: '학교에서', step: 5 },
        { ko: '다 같이', step: 4 },
        { ko: '크게', step: 3 },
        { ko: '노래를', step: 2 },
        { ko: '불러요.', step: 1 },
    ],
    [
        { ko: '할아버지는', step: 0 },
        { ko: '정원에서', step: 5 },
        { ko: '삽으로', step: 4 },
        { ko: '조심스럽게', step: 3 },
        { ko: '나무를', step: 2 },
        { ko: '심으세요.', step: 1 },
    ],
    [
        { ko: '나의 누나는', step: 0 },
        { ko: '저녁', step: 7 },
        { ko: '식사 후에', step: 6 },
        { ko: '휴식을 취하기 위해', step: 5 },
        { ko: '그녀의 방에서', step: 4 },
        { ko: '보통', step: 1 },
        { ko: '따뜻한 차 한 잔을', step: 3 },
        { ko: '마셔요.', step: 2 },
    ]
];