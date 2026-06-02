
const enDatas = [
    [
        { en: "I", step: 0 },
        { en: "wake up", step: 1 },
        { en: "early", step: 2 },
        { en: "every day", step: 3 }
    ],
    [
        { en: "I", step: 0 },
        { en: "open", step: 1 },
        { en: "my eyes", step: 2 },
        { en: "slowly", step: 3 }
    ],
    [
        { en: "I", step: 0 },
        { en: "get out of", step: 1 },
        { en: "bed", step: 2 },
        { en: "quickly", step: 3 }
    ],
    [
        { en: "I", step: 0 },
        { en: "dry", step: 1 },
        { en: "my face", step: 2 },
        { en: "with a towel", step: 3 }
    ],
    [
        { en: "I", step: 0 },
        { en: "brush", step: 1 },
        { en: "my teeth", step: 2 },
        { en: "carefully", step: 3 }
    ],
    [
        { en: "I", step: 0 },
        { en: "have", step: 1 },
        { en: "some milk", step: 2 },
        { en: "for breakfast", step: 3 }
    ],
    [
        { en: "I", step: 0 },
        { en: "say", step: 1 },
        { en: "good morning", step: 2 },
        { en: "to my mom", step: 3 }
    ],
    [
        { en: "I", step: 0 },
        { en: "clean", step: 1 },
        { en: "my room", step: 2 },
        { en: "before school", step: 3 }
    ],
    [
        { en: "I", step: 0 },
        { en: "eat", step: 1 },
        { en: "breakfast", step: 2 },
        { en: "with my family", step: 3 }
    ],
    [
        { en: "I", step: 0 },
        { en: "drink", step: 1 },
        { en: "some water", step: 2 },
        { en: "after waking up", step: 3 }
    ],
    [
        { en: "I", step: 0 },
        { en: "check", step: 1 },
        { en: "the time", step: 2 },
        { en: "on my phone", step: 3 }
    ],
    [
        { en: "I", step: 0 },
        { en: "open", step: 1 },
        { en: "the window", step: 2 },
        { en: "for fresh air", step: 3 }
    ],
    [
        { en: "I", step: 0 },
        { en: "feel", step: 1 },
        { en: "the fresh air", step: 2 },
        { en: "on my face", step: 3 }
    ],
    [
        { en: "I", step: 0 },
        { en: "pack", step: 1 },
        { en: "my bag", step: 2 },
        { en: "for school", step: 3 }
    ],
    [
        { en: "I", step: 0 },
        { en: "put on", step: 1 },
        { en: "my shoes", step: 2 },
        { en: "carefully", step: 3 }
    ],
    [
        { en: "I", step: 0 },
        { en: "comb", step: 1 },
        { en: "my hair", step: 2 },
        { en: "in front of the mirror", step: 3 }
    ],
    [
        { en: "I", step: 0 },
        { en: "grab", step: 1 },
        { en: "my keys", step: 2 },
        { en: "from the table", step: 3 }
    ],
    [
        { en: "I", step: 0 },
        { en: "lock", step: 1 },
        { en: "the door", step: 2 },
        { en: "before leaving", step: 3 }
    ],
    [
        { en: "I", step: 0 },
        { en: "walk", step: 1 },
        { en: "outside", step: 2 },
        { en: "to school", step: 3 }
    ],
    [
        { en: "I", step: 0 },
        { en: "start", step: 1 },
        { en: "my day", step: 2 },
        { en: "with a smile", step: 3 }
    ]
];
const koDatas = [
    [
        { ko: "나는", step: 0 },
        { ko: "매일", step: 3 },
        { ko: "일찍", step: 2 },
        { ko: "일어나요", step: 1 }
    ],
    [
        { ko: "나는", step: 0 },
        { ko: "천천히", step: 3 },
        { ko: "눈을", step: 2 },
        { ko: "떠요", step: 1 }
    ],
    [
        { ko: "나는", step: 0 },
        { ko: "빨리", step: 3 },
        { ko: "침대에서", step: 2 },
        { ko: "나와요", step: 1 }
    ],
    [
        { ko: "나는", step: 0 },
        { ko: "수건으로", step: 3 },
        { ko: "얼굴을", step: 2 },
        { ko: "닦아요", step: 1 }
    ],
    [
        { ko: "나는", step: 0 },
        { ko: "꼼꼼하게", step: 3 },
        { ko: "이를", step: 2 },
        { ko: "닦아요", step: 1 }
    ],
    [
        { ko: "나는", step: 0 },
        { ko: "아침에", step: 3 },
        { ko: "샌드위치를", step: 2 },
        { ko: "먹어요", step: 1 }
    ],
    [
        { ko: "나는", step: 0 },
        { ko: "엄마에게", step: 3 },
        { ko: "좋은 아침이라고", step: 2 },
        { ko: "말해요", step: 1 }
    ],
    [
        { ko: "나는", step: 0 },
        { ko: "학교 가기 전에", step: 3 },
        { ko: "방을", step: 2 },
        { ko: "청소해요", step: 1 }
    ],
    [
        { ko: "나는", step: 0 },
        { ko: "가족과 함께", step: 3 },
        { ko: "아침을", step: 2 },
        { ko: "먹어요", step: 1 }
    ],
    [
        { ko: "나는", step: 0 },
        { ko: "일어난 후에", step: 3 },
        { ko: "물을", step: 2 },
        { ko: "마셔요", step: 1 }
    ],
    [
        { ko: "나는", step: 0 },
        { ko: "휴대폰으로", step: 3 },
        { ko: "시간을", step: 2 },
        { ko: "확인해요", step: 1 }
    ],
    [
        { ko: "나는", step: 0 },
        { ko: "상쾌한 공기를 위해", step: 3 },
        { ko: "창문을", step: 2 },
        { ko: "열어요", step: 1 }
    ],
    [
        { ko: "나는", step: 0 },
        { ko: "얼굴에", step: 3 },
        { ko: "상쾌한 공기를", step: 2 },
        { ko: "느껴요", step: 1 }
    ],
    [
        { ko: "나는", step: 0 },
        { ko: "학교를 위해", step: 3 },
        { ko: "가방을", step: 2 },
        { ko: "챙겨요", step: 1 }
    ],
    [
        { ko: "나는", step: 0 },
        { ko: "조심스럽게", step: 3 },
        { ko: "신발을", step: 2 },
        { ko: "신어요", step: 1 }
    ],
    [
        { ko: "나는", step: 0 },
        { ko: "거울 앞에서", step: 3 },
        { ko: "머리를", step: 2 },
        { ko: "빗어요", step: 1 }
    ],
    [
        { ko: "나는", step: 0 },
        { ko: "테이블에서", step: 3 },
        { ko: "열쇠를", step: 2 },
        { ko: "챙겨요", step: 1 }
    ],
    [
        { ko: "나는", step: 0 },
        { ko: "나가기 전에", step: 3 },
        { ko: "문을", step: 2 },
        { ko: "잠가요", step: 1 }
    ],
    [
        { ko: "나는", step: 0 },
        { ko: "학교로", step: 3 },
        { ko: "밖으로", step: 2 },
        { ko: "걸어나가요", step: 1 }
    ],
    [
        { ko: "나는", step: 0 },
        { ko: "미소와 함께", step: 3 },
        { ko: "하루를", step: 2 },
        { ko: "시작해요", step: 1 }
    ]
];
