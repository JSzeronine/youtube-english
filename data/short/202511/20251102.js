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
            { sentence: "I ride my bike to school.", translation: "나는 학교에 자전거를 /타고/ 가요.", w: "ride" },
            { sentence: "The sun is very bright.", translation: "태양이 아주 /밝아요./", w: "bright" },
            { sentence: "Don’t spend too much money.", translation: "돈을 너무 많이 /쓰지/ 마세요.", w: "spend" },
            { sentence: "It’s a wonderful day!", translation: "오늘은 정말 /멋진/ 날이에요!", w: "wonderful" },
            { sentence: "I am still awake.", translation: "나는 아직 /깨어/ 있어요.", w: "awake" },
            { sentence: "Take a rest.", translation: "/쉬세요./", w: "rest" },
            { sentence: "That story is true.", translation: "그 이야기는 /진짜/예요.", w: "true" },
        ]
    },
    // 두 번째 문장들
    {
        word: "Repeat",
        translation: "복습해볼게요.",
        words: [
            { sentence: "Let’s ride a horse.", translation: "말을 /타요./", w: "ride" },
            { sentence: "The room is bright and clean.", translation: "방이 /밝고/ 깨끗해요.", w: "bright" },
            { sentence: "I spent time with my family.", translation: "가족과 함께 시간을 /보냈어요./", w: "spent" },
            { sentence: "You are a wonderful friend.", translation: "당신은 정말 /멋진/ 친구예요.", w: "wonderful" },
            { sentence: "She was awake all night.", translation: "그녀는 밤새 /깨어/ 있었어요.", w: "awake" },
            { sentence: "I need some rest.", translation: "/휴식/이 필요해요.", w: "rest" },
            { sentence: "Is it true?", translation: "그게 /진짜/인가요?", w: "true" },
        ]
    },
    // 세 번째 문장들
    {
        word: "Repeat",
        translation: "복습해볼게요.",
        words: [
            { sentence: "He rides the bus every morning.", translation: "그는 매일 아침 버스를 /타요./", w: "rides" },
            { sentence: "The stars are bright tonight.", translation: "오늘 밤 별들이 /밝아요./", w: "bright" },
            { sentence: "Don’t spend your time worrying.", translation: "걱정하느라 시간을 /낭비하지/ 마세요.", w: "spend" },
            { sentence: "We had a wonderful time.", translation: "우리는 정말 /멋진/ 시간을 보냈어요.", w: "wonderful" },
            { sentence: "I can’t stay awake.", translation: "더 이상 /깨어/ 있을 수 없어요.", w: "awake" },
            { sentence: "Rest your eyes for a while.", translation: "잠시 눈을 /쉬게/ 하세요.", w: "rest" },
            { sentence: "True love is rare.", translation: "/진정한/ 사랑은 드물어요.", w: "true" },
        ]
    }
]
