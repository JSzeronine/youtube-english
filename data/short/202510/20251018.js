const englishTitle = "크기 & 정도";
const list = [
    {
        word: "Big",
        translation: "큰 - 일상에서 제일 많이 쓰는 말",
        words: [
            { sentence: "The dog is big.", translation: "그 강아지는 커요.", w: "big" },
            { sentence: "I have a big ball.", translation: "나는 큰 공이 있어요.", w: "big" },
            { sentence: "This bag is big.", translation: "이 가방은 커요.", w: "big" }
        ]
    },
    {
        word: "Small",
        translation: "작은 - 그냥 크기가 작다는 사실만 말할 때",
        words: [
            { sentence: "The cat is small.", translation: "그 고양이는 작아요.", w: "small" },
            { sentence: "I have a small toy.", translation: "나는 작은 장난감이 있어요.", w: "small" },
            { sentence: "This cup is small.", translation: "이 컵은 작아요.", w: "small" }
        ]
    },
    {
        word: "Tall",
        translation: "키 큰",
        words: [
            { sentence: "Dad is tall.", translation: "아빠는 키가 커요.", w: "tall" },
            { sentence: "The tree is tall.", translation: "나무가 커요.", w: "tall" },
            { sentence: "My friend is tall.", translation: "내 친구는 키가 커요.", w: "tall" }
        ]
    },
    {
        word: "Large",
        translation: "큰 - 숫자, 수량, 사이즈 표기할 때 많이 사용",
        words: [
            { sentence: "This room is large.", translation: "이 방은 커요.", w: "large" },
            { sentence: "I see a large box.", translation: "나는 큰 상자를 봐요.", w: "large" },
            { sentence: "The park is large.", translation: "공원이 넓어요.", w: "large" }
        ]
    },
    {
        word: "Little",
        translation: "작은 - 감정, 귀여움, 애정 표현 가능",
        words: [
            { sentence: "I see a little cat.", translation: "나는 작은 고양이를 봐요.", w: "little" },
            { sentence: "This is a little cup.", translation: "이건 작은 컵이에요.", w: "little" },
            { sentence: "The bird is little.", translation: "그 새는 작아요.", w: "little" }
        ]
    },
    {
        word: "Hot",
        translation: "뜨거운",
        words: [
            { sentence: "The soup is hot.", translation: "국이 뜨거워요.", w: "hot" },
            { sentence: "The day is hot.", translation: "오늘은 더워요.", w: "hot" },
            { sentence: "Don't touch, it's hot.", translation: "만지지 마요, 뜨거워요.", w: "hot" }
        ]
    },
    {
        word: "Cold",
        translation: "차가운",
        words: [
            { sentence: "The water is cold.", translation: "물이 차가워요.", w: "cold" },
            { sentence: "I feel cold.", translation: "나는 추워요.", w: "cold" },
            { sentence: "The juice is cold.", translation: "주스가 차가워요.", w: "cold" }
        ]
    }
]
const repeat = [
    {
        word: "Repeat",
        translation: "복습해볼게요.",
        words: [
            { sentence: "The dog is big.", translation: "그 강아지는 커요.", w: "big", s: "커요" },
            { sentence: "The cat is small.", translation: "그 고양이는 작아요.", w: "small", s: "작아요" },
            { sentence: "Dad is tall.", translation: "아빠는 키가 커요.", w: "tall", s: "커요" },
            { sentence: "This room is large.", translation: "이 방은 커요.", w: "large", s: "커요" },
            { sentence: "I see a little cat.", translation: "나는 작은 고양이를 봐요.", w: "little", s: "작은" },
            { sentence: "The soup is hot.", translation: "국이 뜨거워요.", w: "hot", s: "뜨거워요" },
            { sentence: "The water is cold.", translation: "물이 차가워요.", w: "cold", s: "차가워요" },
        ]
    },
]