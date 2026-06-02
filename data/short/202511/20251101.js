const englishTitle = "";
const list = [
    {
        word: "Easy",
        translation: "쉬운 / 간단한",
        words: [
            { sentence: "This game is easy.", translation: "이 게임은 쉬워요.", w: "easy" },
            { sentence: "Math is easy for me.", translation: "수학은 나한테 쉬워요.", w: "easy" },
            { sentence: "It’s easy to draw a cat.", translation: "고양이 그리기 쉬워요.", w: "easy" }
        ]
    },
    {
        word: "List",
        translation: "목록 / 리스트",
        words: [
            { sentence: "I made a list of toys.", translation: "장난감 목록을 만들었어요.", w: "list" },
            { sentence: "Check the shopping list.", translation: "쇼핑 리스트 확인해요.", w: "list" },
            { sentence: "Write your list here.", translation: "여기에 리스트를 적어요.", w: "list" }
        ]
    },
    {
        word: "Understand",
        translation: "이해하다",
        words: [
            { sentence: "I understand you.", translation: "너를 이해해요.", w: "understand" },
            { sentence: "Do you understand the story?", translation: "이 이야기 이해했어요?", w: "understand" },
            { sentence: "I don’t understand this.", translation: "이거 이해가 안 돼요.", w: "understand" }
        ]
    },
    {
        word: "Gift",
        translation: "선물",
        words: [
            { sentence: "I got a gift.", translation: "선물을 받았어요.", w: "gift" },
            { sentence: "This is a birthday gift.", translation: "이건 생일 선물이에요.", w: "gift" },
            { sentence: "I want to give a gift.", translation: "선물 주고 싶어요.", w: "gift" }
        ]
    },
    {
        word: "Health",
        translation: "건강",
        words: [
            { sentence: "I care about my health.", translation: "나는 내 건강을 신경 써요.", w: "health" },
            { sentence: "Eat well for good health.", translation: "건강하려면 잘 먹어요.", w: "health" },
            { sentence: "Exercise is good for health.", translation: "운동은 건강에 좋아요.", w: "health" }
        ]
    },
    {
        word: "Pretty",
        translation: "예쁜 / 귀여운",
        words: [
            { sentence: "She is pretty.", translation: "그녀는 예뻐요.", w: "pretty" },
            { sentence: "This flower is pretty.", translation: "이 꽃 예뻐요.", w: "pretty" },
            { sentence: "Your dress is pretty.", translation: "너의 옷 예쁘다.", w: "pretty" }
        ]
    },
    {
        word: "World",
        translation: "세상 / 세계",
        words: [
            { sentence: "I love this world.", translation: "나는 이 세상을 사랑해요.", w: "world" },
            { sentence: "The world is big.", translation: "세상은 커요.", w: "world" },
            { sentence: "Travel around the world.", translation: "세계 여행을 해요.", w: "world" }
        ]
    }
];

const repeat = [
    // 첫 번째 문장들
    {
        word: "Repeat",
        translation: "복습해볼게요.",
        words: [
            { sentence: "I have my own room.", translation: "나는 /내/ 방이 있어요.", w: "own" },
            { sentence: "I’ll take a nap after lunch.", translation: "점심 먹고 /낮잠/ 잘 거예요.", w: "nap" },
            { sentence: "Do you have any cash?", translation: "/현금/ 있어요?", w: "cash" },
            { sentence: "I water the plant every day.", translation: "매일 /식물/에 물을 줘요.", w: "plant" },
            { sentence: "Don’t lie to me.", translation: "나에게 /거짓말/하지 마세요.", w: "lie" },
            { sentence: "Let’s relax and listen to music.", translation: "/편하게/ 음악을 들어요.", w: "relax" },
            { sentence: "I teach English to kids.", translation: "아이들에게 영어를 /가르쳐요./", w: "teach" },
        ]
    },
    // 두 번째 문장들
    {
        word: "Repeat",
        translation: "복습해볼게요.",
        words: [
            { sentence: "This is my own idea.", translation: "이건 /내/ 생각이에요.", w: "own" },
            { sentence: "He took a short nap.", translation: "그는 잠깐 /낮잠/을 잤어요.", w: "nap" },
            { sentence: "She paid in cash.", translation: "그녀는 /현금/으로 계산했어요.", w: "cash" },
            { sentence: "The plant needs sunlight.", translation: "/식물/은 햇빛이 필요해요.", w: "plant" },
            { sentence: "I lie on the sofa.", translation: "나는 소파에 /누워요./", w: "lie" },
            { sentence: "Relax, everything is fine.", translation: "/편하게/ 있어요, 다 괜찮아요.", w: "relax" },
            { sentence: "My mom teaches math.", translation: "우리 엄마는 수학을 /가르쳐요./", w: "teaches" },
        ]
    },
    // 세 번째 문장들
    {
        word: "Repeat",
        translation: "복습해볼게요.",
        words: [
            { sentence: "I made it with my own hands.", translation: "/내/ 손으로 직접 만들었어요.", w: "own" },
            { sentence: "He is taking a nap now.", translation: "그는 지금 /낮잠/ 자고 있어요.", w: "nap" },
            { sentence: "I found some cash on the floor.", translation: "바닥에서 /현금/을 찾았어요.", w: "cash" },
            { sentence: "The plant is growing fast.", translation: "/식물/이 빠르게 자라고 있어요.", w: "plant" },
            { sentence: "Don’t lie on the grass.", translation: "잔디 위에 /눕/지 마세요.", w: "lie" },
            { sentence: "I like to relax at home.", translation: "집에서 /쉬는 걸/ 좋아해요.", w: "relax" },
            { sentence: "The teacher teaches us English.", translation: "선생님은 우리에게 영어를 /가르쳐요./", w: "teaches" },
        ]
    }
]
