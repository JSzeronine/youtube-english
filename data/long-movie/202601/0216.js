const enDatas = [
    [
        { en: "I", step: 0 },
        { en: "meet", step: 1 },
        { en: "my best friend", step: 2 }
    ],
    [
        { en: "We", step: 0 },
        { en: "go", step: 1 },
        { en: "to a cafe", step: 2 }
    ],
    [
        { en: "We", step: 0 },
        { en: "drink", step: 1 },
        { en: "hot coffee", step: 2 }
    ],
    [
        { en: "We", step: 0 },
        { en: "eat", step: 1 },
        { en: "sweet cake", step: 2 }
    ],
    [
        { en: "We", step: 0 },
        { en: "go", step: 1 },
        { en: "to the supermarket", step: 2 }
    ],
    [
        { en: "We", step: 0 },
        { en: "buy", step: 1 },
        { en: "some drinks", step: 2 }
    ],
    [
        { en: "We", step: 0 },
        { en: "walk", step: 1 },
        { en: "in the park", step: 2 }
    ],
    [
        { en: "We", step: 0 },
        { en: "sit", step: 1 },
        { en: "on a bench", step: 2 }
    ],
    [
        { en: "We", step: 0 },
        { en: "take", step: 1 },
        { en: "some nice photos", step: 2 }
    ],
    [
        { en: "We", step: 0 },
        { en: "watch", step: 1 },
        { en: "a fun movie", step: 2 }
    ],
    [
        { en: "We", step: 0 },
        { en: "play", step: 1 },
        { en: "a game", step: 2 }
    ],
    [
        { en: "We", step: 0 },
        { en: "listen", step: 1 },
        { en: "to calm music", step: 2 }
    ],
    [
        { en: "We", step: 0 },
        { en: "study", step: 1 },
        { en: "together", step: 2 }
    ],
    [
        { en: "We", step: 0 },
        { en: "eat", step: 1 },
        { en: "dinner", step: 2 }
    ],
    [
        { en: "We", step: 0 },
        { en: "go", step: 1 },
        { en: "shopping", step: 2 }
    ],
    [
        { en: "We", step: 0 },
        { en: "eat", step: 1 },
        { en: "tasty snacks", step: 2 }
    ],
    [
        { en: "We", step: 0 },
        { en: "go", step: 1 },
        { en: "to the library", step: 2 }
    ],
    [
        { en: "We", step: 0 },
        { en: "ride", step: 1 },
        { en: "our bikes", step: 2 }
    ],
    [
        { en: "We", step: 0 },
        { en: "promise", step: 1 },
        { en: "to meet again", step: 2 }
    ],
    [
        { en: "I", step: 0 },
        { en: "go back", step: 1 },
        { en: "home", step: 2 }
    ]
];

const koDatas = [
    [
        { ko: "나는", step: 0 },
        { ko: "가장 친한 친구를", step: 2 },
        { ko: "만나요", step: 1 }
    ],
    [
        { ko: "우리는", step: 0 },
        { ko: "카페에", step: 2 },
        { ko: "가요", step: 1 }
    ],
    [
        { ko: "우리는", step: 0 },
        { ko: "따뜻한 커피를", step: 2 },
        { ko: "마셔요", step: 1 }
    ],
    [
        { ko: "우리는", step: 0 },
        { ko: "달콤한 케이크를", step: 2 },
        { ko: "먹어요", step: 1 }
    ],
    [
        { ko: "우리는", step: 0 },
        { ko: "마트에", step: 2 },
        { ko: "가요", step: 1 }
    ],
    [
        { ko: "우리는", step: 0 },
        { ko: "음료를", step: 2 },
        { ko: "사요", step: 1 }
    ],
    [
        { ko: "우리는", step: 0 },
        { ko: "공원에서", step: 2 },
        { ko: "걸어요", step: 1 }
    ],
    [
        { ko: "우리는", step: 0 },
        { ko: "벤치에", step: 2 },
        { ko: "앉아요", step: 1 }
    ],
    [
        { ko: "우리는", step: 0 },
        { ko: "멋진 사진을 몇 장", step: 2 },
        { ko: "찍어요", step: 1 }
    ],
    [
        { ko: "우리는", step: 0 },
        { ko: "재미있는 영화를", step: 2 },
        { ko: "봐요", step: 1 }
    ],
    [
        { ko: "우리는", step: 0 },
        { ko: "게임을", step: 2 },
        { ko: "해요", step: 1 }
    ],
    [
        { ko: "우리는", step: 0 },
        { ko: "잔잔한 음악을", step: 2 },
        { ko: "들어요", step: 1 }
    ],
    [
        { ko: "우리는", step: 0 },
        { ko: "함께", step: 2 },
        { ko: "공부해요", step: 1 }
    ],
    [
        { ko: "우리는", step: 0 },
        { ko: "저녁을", step: 2 },
        { ko: "먹어요", step: 1 }
    ],
    [
        { ko: "우리는", step: 0 },
        { ko: "쇼핑하러", step: 2 },
        { ko: "가요", step: 1 }
    ],
    [
        { ko: "우리는", step: 0 },
        { ko: "맛있는 간식을", step: 2 },
        { ko: "먹어요", step: 1 }
    ],
    [
        { ko: "우리는", step: 0 },
        { ko: "도서관에", step: 2 },
        { ko: "가요", step: 1 }
    ],
    [
        { ko: "우리는", step: 0 },
        { ko: "자전거를", step: 2 },
        { ko: "타요", step: 1 }
    ],
    [
        { ko: "우리는", step: 0 },
        { ko: "다시 만나기로", step: 2 },
        { ko: "약속해요", step: 1 }
    ],
    [
        { ko: "나는", step: 0 },
        { ko: "집으로", step: 2 },
        { ko: "돌아가요", step: 1 }
    ]
];



/*
1. I meet my best friend 
1. 나는 가장 친한 친구를 만나요 

2. We go to a small cafe 
2. 우리는 작은 카페에 가요 

3. We drink hot coffee 
3. 우리는 따뜻한 커피를 마셔요 

4. We eat sweet cake 
4. 우리는 달콤한 케이크를 먹어요 

5. We go to the supermarket 
5. 우리는 마트에 가요 

6. We buy some drinks 
6. 우리는 음료를 사요 

7. We walk in the park 
7. 우리는 공원에서 걸어요 

8. We sit on a bench 
8. 우리는 벤치에 앉아요 

9. We take some nice photos 
9. 우리는 멋진 사진을 몇 장 찍어요 

10. We watch a fun movie 
10. 우리는 재미있는 영화를 봐요 

11. We play a game 
11. 우리는 게임을 해요 

12. We listen to calm music 
12. 우리는 잔잔한 음악을 들어요 

13. We study together 
13. 우리는 함께 공부해요 

14. We eat dinner 
14. 우리는 저녁을 먹어요 

15. We go shopping 
15. 우리는 쇼핑하러 가요 

16. We eat tasty snacks 
16. 우리는 맛있는 간식을 먹어요 

17. We go to the library 
17. 우리는 도서관에 가요 

18. We ride our bikes 
18. 우리는 자전거를 타요 

19. We promise to meet again 
19. 우리는 다시 만나기로 약속해요 

20. I go back home 
20. 나는 집으로 돌아가요 

*/


