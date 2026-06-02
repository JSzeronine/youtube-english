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
        { en: "bed", step: 2 }
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
        { en: "my teeth", step: 2 }
    ],
    [
        { en: "I", step: 0 },
        { en: "eat", step: 1 },
        { en: "a sandwich", step: 2 },
        { en: "for breakfast", step: 3 }
    ],
    [
        { en: "I", step: 0 },
        { en: "get ready", step: 1 },
        { en: "for work", step: 2 }
    ],
    [
        { en: "I", step: 0 },
        { en: "clean", step: 1 },
        { en: "my room", step: 2 }
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
        { en: "some water", step: 2 }
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
        { en: "the window", step: 2 }
    ],
    [
        { en: "I", step: 0 },
        { en: "feel", step: 1 },
        { en: "the fresh air", step: 2 }
    ],
    [
        { en: "I", step: 0 },
        { en: "pack", step: 1 },
        { en: "my bag", step: 2 }
    ],
    [
        { en: "I", step: 0 },
        { en: "put on", step: 1 },
        { en: "my shoes", step: 2 }
    ],
    [
        { en: "I", step: 0 },
        { en: "comb", step: 1 },
        { en: "my hair", step: 2 }
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
        { en: "outside", step: 2 }
    ],
    [
        { en: "I", step: 0 },
        { en: "start", step: 1 },
        { en: "my day", step: 2 }
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
        { ko: "출근", step: 2 },
        { ko: "준비를 해요", step: 1 }
    ],
    [
        { ko: "나는", step: 0 },
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
        { ko: "창문을", step: 2 },
        { ko: "열어요", step: 1 }
    ],
    [
        { ko: "나는", step: 0 },
        { ko: "상쾌한 공기를", step: 2 },
        { ko: "느껴요", step: 1 }
    ],
    [
        { ko: "나는", step: 0 },
        { ko: "가방을", step: 2 },
        { ko: "챙겨요", step: 1 }
    ],
    [
        { ko: "나는", step: 0 },
        { ko: "신발을", step: 2 },
        { ko: "신어요", step: 1 }
    ],
    [
        { ko: "나는", step: 0 },
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
        { ko: "밖으로", step: 2 },
        { ko: "걸어나가요", step: 1 }
    ],
    [
        { ko: "나는", step: 0 },
        { ko: "하루를", step: 2 },
        { ko: "시작해요", step: 1 }
    ]
];



/*
1. I wake up early every day 
1. 나는 매일 일찍 일어나요 

2. I open my eyes slowly 
2. 나는 천천히 눈을 떠요 

3. I get out of bed 
3. 나는 침대에서 나와요 

4. I dry my face 
4. 나는 얼굴을 닦아요 

5. I brush my teeth 
5. 나는 이를 닦아요 

6. I have some milk for breakfast 
6. 나는 아침으로 우유를 마셔요 

7. I say good morning to my mom 
7. 나는 엄마에게 좋은 아침이라고 인사해요 

8. I clean my room 
8. 나는 방을 청소해요 

9. I eat breakfast with my family 
9. 나는 가족과 함께 아침을 먹어요 

10. I drink some water 
10. 나는 물을 마셔요 

11. I check the time 
11. 나는 시간을 확인해요 

12. I open the window 
12. 나는 창문을 열어요 

13. I feel the fresh air 
13. 나는 상쾌한 공기를 느껴요 

14. I pack my bag 
14. 나는 가방을 챙겨요 

15. I put on my shoes 
15. 나는 신발을 신어요 

16. I comb my hair 
16. 나는 머리를 빗어요 

17. I grab my keys from the table 
17. 나는 테이블에서 열쇠를 챙겨요 

18. I lock the door before leaving 
18. 나는 나가기 전에 문을 잠가요 

19. I walk outside 
19. 나는 밖으로 걸어나가요 

20. I start my day 
20. 나는 하루를 시작해요 

*/
