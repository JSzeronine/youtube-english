const enDatas = [
    // 1
    [
        { en: "I'm good at drawing", step: 0 },
        { en: "animals", step: 1 },
        { en: "with a pencil", step: 2 },
        { en: ".", step: 0 },
    ],
    // 2
    [
        { en: "I'm good at singing", step: 0 },
        { en: "my favorite songs", step: 1 },
        { en: "usually", step: 2 },
        { en: ".", step: 0 },
    ],

    // 3
    [
        { en: "I'm good at kicking", step: 0 },
        { en: "a soccer ball", step: 1 },
        { en: "with my left foot", step: 2 },
        { en: ".", step: 0 },
    ],

    // 4
    [
        { en: "I'm good at riding", step: 0 },
        { en: "a bike", step: 1 },
        { en: "without falling", step: 2 },
        { en: ".", step: 0 },
    ],

    // 5
    [
        { en: "I'm good at catching", step: 0 },
        { en: "a ball", step: 1 },
        { en: "with one hand", step: 2 },
        { en: ".", step: 0 },
    ],

    // 7
    [
        { en: "I'm good at reading", step: 0 },
        { en: "books", step: 1 },
        { en: "before bed", step: 2 },
        { en: ".", step: 0 },
    ],

    // 9
    [
        { en: "I'm good at swimming", step: 0 },
        { en: "in the pool", step: 1 },
        { en: ".", step: 0 },
    ],

    // 10
    [
        { en: "I'm good at feeding", step: 0 },
        { en: "my dog", step: 1 },
        { en: "every morning", step: 2 },
        { en: ".", step: 0 },
    ],

    // 11
    [
        { en: "I'm good at washing the dishes", step: 0 },
        { en: "after dinner", step: 1 },
        { en: ".", step: 0 },
    ],

    // 12
    [
        { en: "I'm good at finding", step: 0 },
        { en: "my way around", step: 1 },
        { en: "a new city", step: 2 },
        { en: ".", step: 0 },
    ],

    // 13
    [
        { en: "I'm good at using", step: 0 },
        { en: "public transportation", step: 1 },
        { en: "when I travel", step: 2 },
        { en: ".", step: 0 },
    ],

    // 15
    [
        { en: "I'm good at cleaning", step: 0 },
        { en: "the kitchen", step: 1 },
        { en: "after dinner", step: 2 },
        { en: ".", step: 0 },
    ],

    // 16
    [
        { en: "I'm good at following", step: 0 },
        { en: "directions", step: 1 },
        { en: "when I'm driving", step: 2 },
        { en: ".", step: 0 },
    ],

    // 18
    [
        { en: "I'm good at managing", step: 0 },
        { en: "my time", step: 1 },
        { en: ".", step: 0 },
    ],

    // 19
    [
        { en: "I'm good at choosing", step: 0 },
        { en: "what to eat", step: 1 },
        { en: "when I go out", step: 2 },
        { en: ".", step: 0 },
    ],

    // 21
    [
        { en: "I'm good at planning", step: 0 },
        { en: "weekend trips", step: 1 },
        { en: ".", step: 0 },
    ],

    // 22
    [
        { en: "I'm good at remembering", step: 0 },
        { en: "people's birthdays", step: 1 },
        { en: "without reminders", step: 2 },
        { en: ".", step: 0 },
    ],

    // 23
    [
        { en: "I'm good at carrying", step: 0 },
        { en: "heavy boxes", step: 1 },
        { en: "by myself", step: 2 },
        { en: ".", step: 0 },
    ],

    // 24
    [
        { en: "I'm good at comparing", step: 0 },
        { en: "different products", step: 1 },
        { en: "before I buy them", step: 2 },
        { en: ".", step: 0 },
    ],

    // 26
    [
        { en: "I'm good at finding", step: 0 },
        { en: "lost things", step: 1 },
        { en: ".", step: 0 },
    ],
];


const koDatas = [
    // 1
    [
        { ko: "연필로", step: 2 },
        { ko: "동물 그림을", step: 1 },
        { ko: "잘 그려요", step: 0 },
        { ko: ".", step: 0 },
    ],

    // 2
    [
        { ko: "평소에", step: 2 },
        { ko: "좋아하는 노래를", step: 1 },
        { ko: "잘 불러요", step: 0 },
        { ko: ".", step: 0 },
    ],

    // 3
    [
        { ko: "왼발로", step: 2 },
        { ko: "축구공을", step: 1 },
        { ko: "잘 차요", step: 0 },
        { ko: ".", step: 0 },
    ],

    // 4
    [
        { ko: "넘어지지 않고", step: 2 },
        { ko: "자전거를", step: 1 },
        { ko: "잘 타요", step: 0 },
        { ko: ".", step: 0 },
    ],

    // 5
    [
        { ko: "한 손으로", step: 2 },
        { ko: "공을", step: 1 },
        { ko: "잘 잡아요", step: 0 },
        { ko: ".", step: 0 },
    ],

    // 7
    [
        { ko: "자기 전에", step: 2 },
        { ko: "책을", step: 1 },
        { ko: "잘 읽어요", step: 0 },
        { ko: ".", step: 0 },
    ],

    // 9
    [
        { ko: "수영장에서", step: 1 },
        { ko: "수영을 잘해요", step: 0 },
        { ko: ".", step: 0 },
    ],

    // 10
    [
        { ko: "매일 아침", step: 2 },
        { ko: "강아지에게", step: 1 },
        { ko: "밥을 잘 줘요", step: 0 },
        { ko: ".", step: 0 },
    ],

    // 11
    [
        { ko: "저녁 식사 후에", step: 1 },
        { ko: "설거지를 잘해요", step: 0 },
        { ko: ".", step: 0 },
    ],

    // 12
    [
        { ko: "새로운 도시에서도", step: 2 },
        { ko: "길을", step: 1 },
        { ko: "잘 찾아요", step: 0 },
        { ko: ".", step: 0 },
    ],

    // 13
    [
        { ko: "여행할 때", step: 2 },
        { ko: "대중교통을", step: 1 },
        { ko: "잘 이용해요", step: 0 },
        { ko: ".", step: 0 },
    ],

    // 15
    [
        { ko: "저녁 식사 후에", step: 2 },
        { ko: "주방을", step: 1 },
        { ko: "잘 정리해요", step: 0 },
        { ko: ".", step: 0 },
    ],

    // 16
    [
        { ko: "운전할 때", step: 2 },
        { ko: "길 안내를", step: 1 },
        { ko: "잘 따라가요", step: 0 },
        { ko: ".", step: 0 },
    ],

    // 18
    [
        { ko: "시간을", step: 1 },
        { ko: "잘 관리해요", step: 0 },
        { ko: ".", step: 0 },
    ],

    // 19
    [
        { ko: "외식할 때", step: 2 },
        { ko: "뭘 먹을지", step: 1 },
        { ko: "잘 골라요", step: 0 },
        { ko: ".", step: 0 },
    ],

    // 21
    [
        { ko: "주말 여행을", step: 1 },
        { ko: "잘 계획해요", step: 0 },
        { ko: ".", step: 0 },
    ],

    // 22
    [
        { ko: "알림 없이도", step: 2 },
        { ko: "사람들의 생일을", step: 1 },
        { ko: "잘 기억해요", step: 0 },
        { ko: ".", step: 0 },
    ],

    // 23
    [
        { ko: "혼자서도", step: 2 },
        { ko: "무거운 상자를", step: 1 },
        { ko: "잘 옮겨요", step: 0 },
        { ko: ".", step: 0 },
    ],

    // 24
    [
        { ko: "사기 전에", step: 2 },
        { ko: "여러 제품을", step: 1 },
        { ko: "잘 비교해요", step: 0 },
        { ko: ".", step: 0 },
    ],


    // 26
    [
        { ko: "잃어버린 물건을", step: 1 },
        { ko: "잘 찾아요", step: 0 },
        { ko: ".", step: 0 },
    ],
];