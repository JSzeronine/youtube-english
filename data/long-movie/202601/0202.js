

const enDatas = [
    [
        { en: "I", step: 0 },
        { en: "go to work", step: 1 },
        { en: "in the morning", step: 2 }
    ],
    [
        { en: "I", step: 0 },
        { en: "leave my house", step: 1 },
        { en: "early", step: 2 }
    ],
    [
        { en: "I", step: 0 },
        { en: "walk", step: 1 },
        { en: "to the bus stop", step: 2 }
    ],
    [
        { en: "I", step: 0 },
        { en: "wait", step: 1 },
        { en: "for the bus", step: 2 }
    ],
    [
        { en: "I", step: 0 },
        { en: "find", step: 1 },
        { en: "a seat", step: 2 },
        { en: "on the bus", step: 3 }
    ],
    [
        { en: "I", step: 0 },
        { en: "listen", step: 1 },
        { en: "to music", step: 2 },
        { en: "on the way", step: 3 }
    ],
    [
        { en: "I", step: 0 },
        { en: "look", step: 1 },
        { en: "out of the window", step: 2 }
    ],
    [
        { en: "I", step: 0 },
        { en: "see people", step: 1 },
        { en: 'going to work', step: 2 }
    ],
    [
        { en: "I", step: 0 },
        { en: "check", step: 1 },
        { en: "my phone", step: 2 }
    ],
    [
        { en: "I", step: 0 },
        { en: "think", step: 1 },
        { en: "about my tasks", step: 2 }
    ],
    [
        { en: "I am", step: 0 },
        { en: "busy", step: 1 },
        { en: "in the morning", step: 2 }
    ],
    [
        { en: "I", step: 0 },
        { en: "get off", step: 1 },
        { en: "the bus", step: 2 }
    ],
    [
        { en: "I", step: 0 },
        { en: "walk", step: 1 },
        { en: "to work", step: 2 }
    ],
    [
        { en: "I", step: 0 },
        { en: "cross", step: 1 },
        { en: "the street", step: 2 },
        { en: "carefully", step: 3 }
    ],
    [
        { en: "I", step: 0 },
        { en: "see", step: 1 },
        { en: "tall buildings", step: 2 }
    ],
    [
        { en: "I", step: 0 },
        { en: "arrive", step: 1 },
        { en: "at work", step: 2 }
    ],
    [
        { en: "I", step: 0 },
        { en: "start", step: 1 },
        { en: "work", step: 2 }
    ],
    [
        { en: 'I', step: 0 },
        { en: 'open', step: 1 },
        { en: 'the office door', step: 2 }
    ],
    [
        { en: 'I', step: 0 },
        { en: 'sit', step: 1 },
        { en: 'at my desk', step: 2 }
    ],
    [
        { en: 'I', step: 0 },
        { en: 'turn on', step: 1 },
        { en: 'my computer', step: 2 }
    ]
];

const koDatas = [
    [
        { ko: "나는", step: 0 },
        { ko: "아침에", step: 2 },
        { ko: "출근해요", step: 1 }
    ],
    [
        { ko: "나는", step: 0 },
        { ko: "일찍", step: 2 },
        { ko: "집을 나와요", step: 1 }
    ],
    [
        { ko: "나는", step: 0 },
        { ko: "버스 정류장까지", step: 2 },
        { ko: "걸어가요", step: 1 }
    ],
    [
        { ko: "나는", step: 0 },
        { ko: "버스를", step: 2 },
        { ko: "기다려요", step: 1 }
    ],
    [
        { ko: "나는", step: 0 },
        { ko: "버스에서", step: 3 },
        { ko: "자리를", step: 2 },
        { ko: "찾아요", step: 1 }
    ],
    [
        { ko: "나는", step: 0 },
        { ko: "가는 길에", step: 3 },
        { ko: "음악을", step: 2 },
        { ko: "들어요", step: 1 }
    ],
    [
        { ko: "나는", step: 0 },
        { ko: "창밖을", step: 2 },
        { ko: "봐요", step: 1 }
    ],
    [
        { ko: "나는", step: 0 },
        { ko: "출근하는", step: 2 },
        { ko: "사람들을 봐요", step: 1 }
    ],
    [
        { ko: "나는", step: 0 },
        { ko: "휴대폰을", step: 2 },
        { ko: "확인해요", step: 1 }
    ],
    [
        { ko: "나는", step: 0 },
        { ko: "할 일을", step: 2 },
        { ko: "생각해요", step: 1 }
    ],
    [
        { ko: "나는", step: 0 },
        { ko: "아침에", step: 2 },
        { ko: "바빠요", step: 1 },
    ],
    [
        { ko: "나는", step: 0 },
        { ko: "버스에서", step: 2 },
        { ko: "내려요", step: 1 }
    ],
    [
        { ko: "나는", step: 0 },
        { ko: "회사까지", step: 2 },
        { ko: "걸어가요", step: 1 }
    ],
    [
        { ko: "나는", step: 0 },
        { ko: "조심히", step: 3 },
        { ko: "길을", step: 2 },
        { ko: "건너요", step: 1 }
    ],
    [
        { ko: "나는", step: 0 },
        { ko: "높은 건물을", step: 2 },
        { ko: "봐요", step: 1 }
    ],
    [
        { ko: "나는", step: 0 },
        { ko: "회사에", step: 2 },
        { ko: "도착해요", step: 1 }
    ],
    [
        { ko: "나는", step: 0 },
        { ko: "일을", step: 2 },
        { ko: "시작해요", step: 1 }
    ],
    [
        { ko: '나는', step: 0 },
        { ko: '회사 문을', step: 2 },
        { ko: '열어요', step: 1 }
    ],
    [
        { ko: '나는', step: 0 },
        { ko: '책상에', step: 2 },
        { ko: '앉아요', step: 1 }
    ],
    [
        { ko: '나는', step: 0 },
        { ko: '컴퓨터를', step: 2 },
        { ko: '켜요', step: 1 }
    ]
];

/*

1. I go to work in the morning 
1. 나는 아침에 출근해요 

2. I leave my house early 
2. 나는 일찍 집을 나와요 

3. I walk to the bus stop 
3. 나는 버스 정류장까지 걸어가요 

4. I wait for the bus 
4. 나는 버스를 기다려요 

5. I find a seat on the bus 
5. 나는 버스에서 자리를 찾아요 

6. I listen to music on the way 
6. 나는 가는 길에 음악을 들어요 

7. I look out of the window 
7. 나는 창밖을 봐요 

8. I see people going to work 
8. 나는 출근하는 사람들을 봐요 

9. I check my phone 
9. 나는 휴대폰을 확인해요 

10. I think about my work 
10. 나는 할 일을 생각해요 

11. I am busy in the morning 
11. 나는 아침에 바빠요 

12. I get off the bus 
12. 나는 버스에서 내려요 

13. I walk to my office 
13. 나는 회사까지 걸어가요 

14. I cross the street carefully 
14. 나는 조심해서 길을 건너요 

15. I see tall buildings 
15. 나는 높은 건물을 봐요 

16. I arrive at work 
16. 나는 회사에 도착해요 

17. I start my work day 
17. 나는 일을 시작해요 

18. I open the office door 
18. 나는 회사 문을 열어요 

19. I sit at my desk 
19. 나는 책상에 앉아요 

20. I turn on my computer 
20. 나는 컴퓨터를 켜요 

*/