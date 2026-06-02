const enDatas = [

    [
        { en: "I", step: 0 },
        { en: "feel", step: 1 },
        { en: "the weather is warm", step: 2 }
    ],

    [
        { en: "I", step: 0 },
        { en: "take off", step: 1 },
        { en: "my thick coat", step: 2 }
    ],

    [
        { en: "I", step: 0 },
        { en: "wear", step: 1 },
        { en: "light clothes", step: 2 }
    ],

    [
        { en: "I", step: 0 },
        { en: "see", step: 1 },
        { en: "the clear sky", step: 2 }
    ],

    // ✅ 수정 5번
    [
        { en: "I", step: 0 },
        { en: "see", step: 1 },
        { en: "the sun with my dog", step: 2 }
    ],

    // ✅ 수정 6번
    [
        { en: "I", step: 0 },
        { en: "feel", step: 1 },
        { en: "the warmth", step: 2 }
    ],

    [
        { en: "I", step: 0 },
        { en: "see", step: 1 },
        { en: "many flowers", step: 2 }
    ],

    [
        { en: "I", step: 0 },
        { en: "smell", step: 1 },
        { en: "the flowers", step: 2 }
    ],

    [
        { en: "I", step: 0 },
        { en: "feel", step: 1 },
        { en: "the wind is nice", step: 2 }
    ],

    [
        { en: "I", step: 0 },
        { en: "go", step: 1 },
        { en: "outside", step: 2 }
    ],

    [
        { en: "I", step: 0 },
        { en: "walk", step: 1 },
        { en: "in the park", step: 2 }
    ],

    [
        { en: "I", step: 0 },
        { en: "sit", step: 1 },
        { en: "on the bench", step: 2 }
    ],

    [
        { en: "I", step: 0 },
        { en: "watch", step: 1 },
        { en: "the trees", step: 2 }
    ],

    [
        { en: "I", step: 0 },
        { en: "see", step: 1 },
        { en: "green leaves on the trees", step: 2 }
    ],

    [
        { en: "I", step: 0 },
        { en: "hear", step: 1 },
        { en: "birds sing", step: 2 }
    ],

    [
        { en: "I", step: 0 },
        { en: "hear", step: 1 },
        { en: "the birds", step: 2 }
    ],

    // ✅ 수정 17번 (새 문장)
    [
        { en: "I", step: 0 },
        { en: "run", step: 1 },
        { en: "with my dog", step: 2 }
    ],

    [
        { en: "I", step: 0 },
        { en: "take", step: 1 },
        { en: "a deep breath", step: 2 }
    ],

    [
        { en: "I", step: 0 },
        { en: "like", step: 1 },
        { en: "spring", step: 2 }
    ],

    [
        { en: "I", step: 0 },
        { en: "think", step: 1 },
        { en: "spring is beautiful", step: 2 }
    ],


];

const koDatas = [

    [
        { ko: "나는", step: 0 },
        { ko: "날씨가 따뜻하다고", step: 2 },
        { ko: "느껴요", step: 1 }
    ],

    [
        { ko: "나는", step: 0 },
        { ko: "두꺼운 외투를", step: 2 },
        { ko: "벗어요", step: 1 }
    ],

    [
        { ko: "나는", step: 0 },
        { ko: "가벼운 옷을", step: 2 },
        { ko: "입어요", step: 1 }
    ],

    [
        { ko: "나는", step: 0 },
        { ko: "맑은 하늘을", step: 2 },
        { ko: "봐요", step: 1 }
    ],

    // ✅ 수정 5번
    [
        { ko: "나는", step: 0 },
        { ko: "강아지와 함께", step: 2 },
        { ko: "해를 봐요", step: 1 }
    ],

    // ✅ 수정 6번
    [
        { ko: "나는", step: 0 },
        { ko: "따뜻함을", step: 2 },
        { ko: "느껴요", step: 1 }
    ],

    [
        { ko: "나는", step: 0 },
        { ko: "많은 꽃을", step: 2 },
        { ko: "봐요", step: 1 }
    ],

    [
        { ko: "나는", step: 0 },
        { ko: "꽃 향기를", step: 2 },
        { ko: "맡아요", step: 1 }
    ],

    [
        { ko: "나는", step: 0 },
        { ko: "바람이 좋다고", step: 2 },
        { ko: "느껴요", step: 1 }
    ],

    [
        { ko: "나는", step: 0 },
        { ko: "밖에", step: 2 },
        { ko: "나가요", step: 1 }
    ],

    [
        { ko: "나는", step: 0 },
        { ko: "공원에서", step: 2 },
        { ko: "걸어요", step: 1 }
    ],

    [
        { ko: "나는", step: 0 },
        { ko: "벤치에", step: 2 },
        { ko: "앉아요", step: 1 }
    ],

    [
        { ko: "나는", step: 0 },
        { ko: "나무를", step: 2 },
        { ko: "봐요", step: 1 }
    ],

    [
        { ko: "나는", step: 0 },
        { ko: "나무에 초록 잎을", step: 2 },
        { ko: "봐요", step: 1 }
    ],

    [
        { ko: "나는", step: 0 },
        { ko: "새가 노래하는 걸", step: 2 },
        { ko: "들어요", step: 1 }
    ],

    [
        { ko: "나는", step: 0 },
        { ko: "새 소리를", step: 2 },
        { ko: "들어요", step: 1 }
    ],

    // ✅ 수정 17번
    [
        { ko: "나는", step: 0 },
        { ko: "강아지와 함께", step: 2 },
        { ko: "뛰어요", step: 1 }
    ],

    [
        { ko: "나는", step: 0 },
        { ko: "깊게 숨을", step: 2 },
        { ko: "쉬어요", step: 1 }
    ],

    [
        { ko: "나는", step: 0 },
        { ko: "봄을", step: 2 },
        { ko: "좋아해요", step: 1 }
    ],

    [
        { ko: "나는", step: 0 },
        { ko: "봄이 아름답다고", step: 2 },
        { ko: "생각해요", step: 1 }
    ],


];

