const enDatas = [
    [
        { en: "I", step: 0 },
        { en: "enter", step: 1 },
        { en: "the cafe", step: 2 }
    ],
    [
        { en: "I", step: 0 },
        { en: "look around", step: 1 },
        { en: "the cafe", step: 2 }
    ],
    [
        { en: "I", step: 0 },
        { en: "look for", step: 1 },
        { en: "a seat", step: 2 }
    ],
    [
        { en: "I", step: 0 },
        { en: "sit", step: 1 },
        { en: "near the window", step: 2 }
    ],
    [
        { en: "I", step: 0 },
        { en: "talk", step: 1 },
        { en: "to my friend", step: 2 }
    ],
    [
        { en: "I", step: 0 },
        { en: "look", step: 1 },
        { en: "at the menu board", step: 2 }
    ],
    [
        { en: "I", step: 0 },
        { en: "choose", step: 1 },
        { en: "a coffee", step: 2 }
    ],
    [
        { en: "I", step: 0 },
        { en: "order", step: 1 },
        { en: "a coffee", step: 2 }
    ],
    [
        { en: "I", step: 0 },
        { en: "wait", step: 1 },
        { en: "for my drink", step: 2 }
    ],
    [
        { en: "I", step: 0 },
        { en: "talk", step: 1 },
        { en: "to the barista", step: 2 }
    ],
    [
        { en: "I", step: 0 },
        { en: "get", step: 1 },
        { en: "my coffee", step: 2 }
    ],
    [
        { en: "I", step: 0 },
        { en: "hold", step: 1 },
        { en: "the warm cup", step: 2 }
    ],
    [
        { en: "I", step: 0 },
        { en: "drink", step: 1 },
        { en: "my coffee", step: 2 }
    ],
    // 14
    [
        { en: "I", step: 0 },
        { en: "taste", step: 1 },
        { en: "my coffee", step: 2 }
    ],
    // 15
    [
        { en: "I", step: 0 },
        { en: "study", step: 1 },
        { en: "at the cafe", step: 2 }
    ],
    [
        { en: "I", step: 0 },
        { en: "watch", step: 1 },
        { en: "people talking", step: 2 }
    ],
    [
        { en: "I", step: 0 },
        { en: "hear", step: 1 },
        { en: "soft music", step: 2 }
    ],
    // 18
    [
        { en: "I", step: 0 },
        { en: "enjoy", step: 1 },
        { en: "my time here", step: 2 }
    ],
    [
        { en: "I", step: 0 },
        { en: "clean", step: 1 },
        { en: "the table", step: 2 }
    ],
    [
        { en: "I", step: 0 },
        { en: "leave", step: 1 },
        { en: "the cafe", step: 2 }
    ]
];


const koDatas = [
    [
        { ko: "나는", step: 0 },
        { ko: "카페에", step: 2 },
        { ko: "들어가요", step: 1 }
    ],
    [
        { ko: "나는", step: 0 },
        { ko: "카페를", step: 2 },
        { ko: "둘러봐요", step: 1 }
    ],
    [
        { ko: "나는", step: 0 },
        { ko: "자리를", step: 2 },
        { ko: "찾아요", step: 1 }
    ],
    [
        { ko: "나는", step: 0 },
        { ko: "창가 근처에", step: 2 },
        { ko: "앉아요", step: 1 }
    ],
    [
        { ko: "나는", step: 0 },
        { ko: "친구와", step: 2 },
        { ko: "대화해요", step: 1 }
    ],
    [
        { ko: "나는", step: 0 },
        { ko: "메뉴판을", step: 2 },
        { ko: "봐요", step: 1 }
    ],
    [
        { ko: "나는", step: 0 },
        { ko: "커피를", step: 2 },
        { ko: "골라요", step: 1 }
    ],
    [
        { ko: "나는", step: 0 },
        { ko: "커피를", step: 2 },
        { ko: "주문해요", step: 1 }
    ],
    [
        { ko: "나는", step: 0 },
        { ko: "음료가 나오길", step: 2 },
        { ko: "기다려요", step: 1 }
    ],
    [
        { ko: "나는", step: 0 },
        { ko: "바리스타와", step: 2 },
        { ko: "대화해요", step: 1 }
    ],
    [
        { ko: "나는", step: 0 },
        { ko: "커피를", step: 2 },
        { ko: "받아요", step: 1 }
    ],
    [
        { ko: "나는", step: 0 },
        { ko: "따뜻한 컵을", step: 2 },
        { ko: "잡아요", step: 1 }
    ],
    [
        { ko: "나는", step: 0 },
        { ko: "커피를", step: 2 },
        { ko: "마셔요", step: 1 }
    ],
    [
        { ko: "나는", step: 0 },
        { ko: "커피", step: 2 },
        { ko: "맛을 느껴요", step: 1 }
    ],
    [
        { ko: "나는", step: 0 },
        { ko: "카페에서", step: 2 },
        { ko: "공부를 해요", step: 1 }
    ],
    [
        { ko: "나는", step: 0 },
        { ko: "이야기하는", step: 2 },
        { ko: "사람들을 봐요", step: 1 }
    ],
    [
        { ko: "나는", step: 0 },
        { ko: "잔잔한 음악을", step: 2 },
        { ko: "들어요", step: 1 }
    ],
    [
        { ko: "나는", step: 0 },
        { ko: "여유를", step: 2 },
        { ko: "즐겨요", step: 1 }
    ],
    [
        { ko: "나는", step: 0 },
        { ko: "테이블을", step: 2 },
        { ko: "정리해요", step: 1 }
    ],
    [
        { ko: "나는", step: 0 },
        { ko: "카페를", step: 2 },
        { ko: "나가요", step: 1 }
    ]
];
