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
    {
        word: "Repeat",
        translation: "복습해볼게요.",
        words: [
            { 
                sentence: "This dog is very old.", 
                translation: "이 강아지는 아주 /늙었어요/.", 
                w: "old", 
                k: "늙은; 오래된" 
            },
            { 
                sentence: "The baby is young.", 
                translation: "아기는 /어려요/.", 
                w: "young", 
                k: "어린" 
            },
            { 
                sentence: "My dad is tall.", 
                translation: "우리 아빠는 /키가 커요/.", 
                w: "tall", 
                k: "키 큰" 
            },
            { 
                sentence: "I have a new bag.", 
                translation: "나는 /새로운/ 가방이 있어요.", 
                w: "new", 
                k: "새로운" 
            },
            { 
                sentence: "Come back here.", 
                translation: "여기로 /돌아와요/.", 
                w: "back", 
                k: "뒤로; 돌아오다" 
            },
        ]
    }
]

/*
old
📘 This dog is very old.
→ 이 강아지는 아주 늙었어요!

young
📘 The baby is young.
→ 아기는 어려요!

tall
📘 My dad is tall.
→ 우리 아빠는 키가 커요!

new
📘 I have a new bag.
→ 나는 새 가방이 있어요!

back
📘 Come back here.
→ 여기로 돌아와요!
*/