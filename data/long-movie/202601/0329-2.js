const enDatas = [

    [
        { en: "I", step: 0 },
        { en: "feel", step: 1 },
        { en: "the weather is warm", step: 2 }
    ],

    // ✅ 2번 주어 I로 수정
    [
        { en: "I", step: 0 },
        { en: "take off", step: 1 },
        { en: "my thick coat", step: 2 }
    ],

    [
        { en: "We", step: 0 },
        { en: "wear", step: 1 },
        { en: "light clothes", step: 2 }
    ],

    [
        { en: "I", step: 0 },
        { en: "see", step: 1 },
        { en: "the clear sky", step: 2 }
    ],

    [
        { en: "I", step: 0 },
        { en: "see", step: 1 },
        { en: "the sun", step: 2 },
        { en: "with my dog", step: 3 }
    ],

    [
        { en: "I", step: 0 },
        { en: "feel", step: 1 },
        { en: "the warmth", step: 2 }
    ],

    [
        { en: "We", step: 0 },
        { en: "see", step: 1 },
        { en: "many flowers", step: 2 }
    ],

    [
        { en: "I", step: 0 },
        { en: "smell", step: 1 },
        { en: "the flowers", step: 2 }
    ],

    [
        { en: "The wind", step: 0 },
        { en: "feels", step: 1 },
        { en: "good", step: 2 }
    ],

    [
        { en: "We", step: 0 },
        { en: "go", step: 1 },
        { en: "outside", step: 2 }
    ],

    // ✅ 11번 수정
    [
        { en: "We", step: 0 },
        { en: "take a walk", step: 1 },
        { en: "in the park", step: 2 }
    ],

    // ✅ 12번 수정
    [
        { en: "I", step: 0 },
        { en: "sit", step: 1 },
        { en: "on the bench", step: 2 },
        { en: "with my friend", step: 3 }
    ],

    // ✅ 13번 수정
    [
        { en: "I", step: 0 },
        { en: "see", step: 1 },
        { en: "a big tree", step: 2 }
    ],

    [
        { en: "The trees", step: 0 },
        { en: "have", step: 1 },
        { en: "green leaves", step: 2 }
    ],

    [
        { en: "Birds", step: 0 },
        { en: "sing", step: 1 },
        { en: "in the trees", step: 2 }
    ],

    [
        { en: "I", step: 0 },
        { en: "hear", step: 1 },
        { en: "the birds", step: 2 }
    ],

    [
        { en: "My dog", step: 0 },
        { en: "runs", step: 1 },
        { en: "with me", step: 2 }
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
    ]

];

const koDatas = [

    [
        { ko: "나는", step: 0 },
        { ko: "날씨가 따뜻하다고", step: 2 },
        { ko: "느껴요", step: 1 }
    ],

    // ✅ 2번 수정
    [
        { ko: "나는", step: 0 },
        { ko: "두꺼운 외투를", step: 2 },
        { ko: "벗어요", step: 1 }
    ],

    [
        { ko: "우리는", step: 0 },
        { ko: "가벼운 옷을", step: 2 },
        { ko: "입어요", step: 1 }
    ],

    [
        { ko: "나는", step: 0 },
        { ko: "맑은 하늘을", step: 2 },
        { ko: "봐요", step: 1 }
    ],

    [
        { ko: "나는", step: 0 },
        { ko: "강아지와 함께", step: 3 },
        { ko: "해를", step: 2 },
        { ko: "봐요", step: 1 }
    ],

    [
        { ko: "나는", step: 0 },
        { ko: "따뜻함을", step: 2 },
        { ko: "느껴요", step: 1 }
    ],

    [
        { ko: "우리는", step: 0 },
        { ko: "많은 꽃을", step: 2 },
        { ko: "봐요", step: 1 }
    ],

    [
        { ko: "나는", step: 0 },
        { ko: "꽃 향기를", step: 2 },
        { ko: "맡아요", step: 1 }
    ],

    [
        { ko: "바람이", step: 0 },
        { ko: "좋게", step: 2 },
        { ko: "느껴져요", step: 1 }
    ],

    [
        { ko: "우리는", step: 0 },
        { ko: "밖에", step: 2 },
        { ko: "나가요", step: 1 }
    ],

    // ✅ 11번 수정
    [
        { ko: "우리는", step: 0 },
        { ko: "공원에서", step: 2 },
        { ko: "산책해요", step: 1 }
    ],

    // ✅ 12번 수정
    [
        { ko: "나는", step: 0 },
        { ko: "친구와 함께", step: 3 },
        { ko: "벤치에", step: 2 },
        { ko: "앉아요", step: 1 }
    ],

    // ✅ 13번 수정
    [
        { ko: "나는", step: 0 },
        { ko: "큰 나무를", step: 2 },
        { ko: "봐요", step: 1 }
    ],

    [
        { ko: "나무에", step: 0 },
        { ko: "초록 잎이", step: 2 },
        { ko: "있어요", step: 1 }
    ],

    [
        { ko: "새가", step: 0 },
        { ko: "나무에서", step: 2 },
        { ko: "노래해요", step: 1 }
    ],

    [
        { ko: "나는", step: 0 },
        { ko: "새 소리를", step: 2 },
        { ko: "들어요", step: 1 }
    ],

    [
        { ko: "강아지가", step: 0 },
        { ko: "나와 함께", step: 2 },
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
    ]

];

/*
1. I feel the weather is warm 
1. 나는 날씨가 따뜻하다고 느껴요 

2. I take off my thick coat 
2. 나는 두꺼운 외투를 벗어요 

3. We wear light clothes 
3. 우리는 가벼운 옷을 입어요 

4. I see the clear sky 
4. 나는 맑은 하늘을 봐요 

5. We see the sun with my dog 
5. 우리는 강아지와 함께 해를 봐요 

6. I feel the warmth 
6. 나는 따뜻함을 느껴요 

7. We see many flowers 
7. 우리는 많은 꽃을 봐요 

8. I smell the flowers 
8. 나는 꽃 향기를 맡아요 

9. The wind feels nice 
9. 바람이 좋게 느껴져요 

10. We go outside 
10. 우리는 밖에 나가요 

11. We take a walk in the park 
11. 우리는 공원에서 산책해요 

12. I sit on the bench with my friend 
12. 나는 친구와 함께 벤치에 앉아요 

13. I see a big tree 
13. 나는 큰 나무를 봐요 

14. The trees have green leaves 
14. 나무에 초록 잎이 있어요 

15. Birds sing in the trees 
15. 새가 나무에서 노래해요 

16. I hear the birds 
16. 나는 새 소리를 들어요 

17. My dog runs with me 
17. 강아지가 나와 함께 뛰어요 

18. I take a deep breath 
18. 나는 깊게 숨을 쉬어요 

19. I like spring 
19. 나는 봄을 좋아해요 

20. I think spring is beautiful 
20. 나는 봄이 아름답다고 생각해요 


*/