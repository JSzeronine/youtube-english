const enDatas = [
     // 21
     [
        { en: "Let's lock", step: 0 },
        { en: "the door", step: 1 },
        { en: "before we leave", step: 2 },
        { en: ".", step: 0 },
    ],

    // 22
    [
        { en: "Let's buy", step: 0 },
        { en: "some bread", step: 1 },
        { en: "on the way home", step: 2 },
        { en: ".", step: 0 },
    ],

    // 23
    [
        { en: "Let's check", step: 0 },
        { en: "the price", step: 1 },
        { en: "before we buy it", step: 2 },
        { en: ".", step: 0 },
    ],

    // 24
    [
        { en: "Let's sit", step: 0 },
        { en: "here", step: 1 },
        { en: "while we're waiting", step: 2 },
        { en: ".", step: 0 },
    ],

    // 25
    [
        { en: "Let's take", step: 0 },
        { en: "an umbrella", step: 1 },
        { en: "in case it rains", step: 2 },
        { en: ".", step: 0 },
    ],

    // 26
    [
        { en: "Let's turn off", step: 0 },
        { en: "the TV", step: 1 },
        { en: "before we go to bed", step: 2 },
        { en: ".", step: 0 },
    ],

    // 27
    [
        { en: "Let's put", step: 0 },
        { en: "the food", step: 1 },
        { en: "in the refrigerator", step: 2 },
        { en: ".", step: 0 },
    ],

    // 28
    [
        { en: "Let's take", step: 0 },
        { en: "the bus", step: 1 },
        { en: "instead of walking", step: 2 },
        { en: ".", step: 0 },
    ],

    // 33
    [
        { en: "Let's bring", step: 0 },
        { en: "some snacks", step: 1 },
        { en: "for the children", step: 2 },
        { en: ".", step: 0 },
    ],

    // 34
    [
        { en: "Let's write", step: 0 },
        { en: "the phone number", step: 1 },
        { en: "on this piece of paper", step: 2 },
        { en: ".", step: 0 },
    ],

    // 36
    [
        { en: "Let's wait", step: 0 },
        { en: "a little longer", step: 1 },
        { en: "for the next train", step: 2 },
        { en: ".", step: 0 },
    ],

    // 38
    [
        { en: "Let's try", step: 0 },
        { en: "this restaurant", step: 1 },
        { en: "near the station", step: 2 },
        { en: ".", step: 0 },
    ],

    // 39
    [
        { en: "Let's bring", step: 0 },
        { en: "some flowers", step: 1 },
        { en: "for Mom", step: 2 },
        { en: ".", step: 0 },
    ],

    // 40
    [
        { en: "Let's save", step: 0 },
        { en: "some money", step: 1 },
        { en: "for our next trip", step: 2 },
        { en: ".", step: 0 },
    ],

    // 1
    [
        { en: "Let's have breakfast", step: 0 },
        { en: "together", step: 1 },
        { en: "tomorrow", step: 2 },
        { en: ".", step: 0 },
    ],

    // 2
    [
        { en: "Let's have some coffee", step: 0 },
        { en: "after breakfast", step: 1 },
        { en: "today", step: 2 },
        { en: ".", step: 0 },
    ],

    // 3
    [
        { en: "Let's go for a walk", step: 0 },
        { en: "in the park", step: 1 },
        { en: "after dinner", step: 2 },
        { en: ".", step: 0 },
    ],

    // 6
    [
        { en: "Let's go to the market", step: 0 },
        { en: "and buy some fruit", step: 1 },
        { en: "this morning", step: 2 },
        { en: ".", step: 0 },
    ],

    // 7
    [
        { en: "Let's clean the house", step: 0 },
        { en: "together", step: 1 },
        { en: "this weekend", step: 2 },
        { en: ".", step: 0 },
    ],

    // 23
    [
        { en: "Let's take a walk", step: 0 },
        { en: "together", step: 1 },
        { en: "tomorrow morning", step: 2 },
        { en: ".", step: 0 },
    ],

];


const koDatas = [
    // 21
    [
        { ko: "나가기 전에", step: 2 },
        { ko: "문", step: 1 },
        { ko: "잠그자", step: 0 },
        { ko: ".", step: 0 },
    ],

    // 22
    [
        { ko: "집에 가는 길에", step: 2 },
        { ko: "빵 좀", step: 1 },
        { ko: "사자", step: 0 },
        { ko: ".", step: 0 },
    ],

    // 23
    [
        { ko: "사기 전에", step: 2 },
        { ko: "가격을", step: 1 },
        { ko: "확인하자", step: 0 },
        { ko: ".", step: 0 },
    ],

    // 24
    [
        { ko: "기다리는 동안", step: 2 },
        { ko: "여기에", step: 1 },
        { ko: "앉아 있자", step: 0 },
        { ko: ".", step: 0 },
    ],

    // 25
    [
        { ko: "비가 올 수도 있으니까", step: 2 },
        { ko: "우산을", step: 1 },
        { ko: "챙기자", step: 0 },
        { ko: ".", step: 0 },
    ],

    // 26
    [
        { ko: "자기 전에", step: 2 },
        { ko: "TV를", step: 1 },
        { ko: "끄자", step: 0 },
        { ko: ".", step: 0 },
    ],

    // 27
    [
        { ko: "냉장고에", step: 2 },
        { ko: "음식을", step: 1 },
        { ko: "넣자", step: 0 },
        { ko: ".", step: 0 },
    ],

    // 28
    [
        { ko: "걷는 대신", step: 2 },
        { ko: "버스를", step: 1 },
        { ko: "타자", step: 0 },
        { ko: ".", step: 0 },
    ],

    // 33
    [
        { ko: "아이들을 위해", step: 2 },
        { ko: "간식 좀", step: 1 },
        { ko: "가져가자", step: 0 },
        { ko: ".", step: 0 },
    ],

    // 34
    [
        { ko: "이 종이에", step: 2 },
        { ko: "전화번호를", step: 1 },
        { ko: "적자", step: 0 },
        { ko: ".", step: 0 },
    ],

    // 36
    [
        { ko: "다음 기차를", step: 2 },
        { ko: "조금 더", step: 1 },
        { ko: "기다리자", step: 0 },
        { ko: ".", step: 0 },
    ],

    // 38
    [
        { ko: "역 근처에 있는", step: 2 },
        { ko: "이 식당을", step: 1 },
        { ko: "가보자", step: 0 },
        { ko: ".", step: 0 },
    ],

    // 39
    [
        { ko: "엄마에게", step: 2 },
        { ko: "꽃을 좀", step: 1 },
        { ko: "가져가자", step: 0 },
        { ko: ".", step: 0 },
    ],

    // 40
    [
        { ko: "다음 여행을 위해", step: 2 },
        { ko: "돈을 좀", step: 1 },
        { ko: "모으자", step: 0 },
        { ko: ".", step: 0 },
    ],


    // 1
    [
        { ko: "내일", step: 2 },
        { ko: "같이", step: 1 },
        { ko: "아침 먹자", step: 0 },
        { ko: ".", step: 0 },
    ],

    // 2
    [
        { ko: "오늘", step: 2 },
        { ko: "아침 먹고", step: 1 },
        { ko: "커피 한잔하자", step: 0 },
        { ko: ".", step: 0 },
    ],

    // 3
    [
        { ko: "저녁 먹고", step: 2 },
        { ko: "공원에서", step: 1 },
        { ko: "산책하러 가자", step: 0 },
        { ko: ".", step: 0 },
    ],

    // 6
    [
        { ko: "아침에", step: 2 },
        { ko: "과일 좀 사러", step: 1 },
        { ko: "시장에 가자", step: 0 },
        { ko: ".", step: 0 },
    ],

    // 7
    [
        { ko: "이번 주말에", step: 2 },
        { ko: "같이", step: 1 },
        { ko: "집 청소하자", step: 0 },
        { ko: ".", step: 0 },
    ],

    // 23
    [
        { ko: "내일 아침에", step: 2 },
        { ko: "같이", step: 1 },
        { ko: "산책하자", step: 0 },
        { ko: ".", step: 0 },
    ],
];