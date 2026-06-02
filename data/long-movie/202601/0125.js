const enDatas = [
    [
        { en: 'I', step: 0 },
        { en: 'play soccer', step: 1 },
        { en: 'in the park', step: 2 }
    ],
    [
        { en: 'I', step: 0 },
        { en: 'write', step: 1 },
        { en: 'on the blackboard', step: 2 }
    ],
    [
        { en: 'I', step: 0 },
        { en: 'sleep', step: 1 },
        { en: 'on the sofa', step: 2 }
    ],
    [
        { en: 'I', step: 0 },
        { en: 'drink', step: 1 },
        { en: 'coffee', step: 2 },
        { en: 'in the morning', step: 3 }
    ],
    [
        { en: 'I', step: 0 },
        { en: 'read', step: 1 },
        { en: 'a book', step: 2 }
    ],
    [
        { en: 'I', step: 0 },
        { en: 'make', step: 1 },
        { en: 'dinner', step: 2 }
    ],
    [
        { en: 'I', step: 0 },
        { en: 'laugh', step: 1 },
        { en: 'loudly', step: 2 }  // 기존 "bark loudly" -> 사람 행동으로 변경
    ],
    [
        { en: 'I', step: 0 },
        { en: 'write', step: 1 },
        { en: 'a letter', step: 2 },
        { en: 'to my friend', step: 3 }
    ],
    [
        { en: 'I', step: 0 },
        { en: 'drink', step: 1 },
        { en: 'milk', step: 2 },
        { en: 'in the morning', step: 3 }
    ],
    [
        { en: 'I', step: 0 },
        { en: 'play', step: 1 },
        { en: 'in the garden', step: 2 }
    ],
    [
        { en: 'I', step: 0 },
        { en: 'read', step: 1 },
        { en: 'the newspaper', step: 2 }
    ],
    [
        { en: 'I', step: 0 },
        { en: 'laugh', step: 1 },
        { en: 'happily', step: 2 }
    ],
    [
        { en: 'I', step: 0 },
        { en: 'paint', step: 1 },
        { en: 'a picture', step: 2 }
    ],
    [
        { en: 'I', step: 0 },
        { en: 'walk', step: 1 },
        { en: 'to school', step: 2 }
    ],
    [
        { en: 'I', step: 0 },
        { en: 'sing', step: 1 },
        { en: 'in the room', step: 2 }  // 기존 "in the trees" -> 현실적인 장소
    ]
];

const koDatas = [
    [
        { ko: '나는', step: 0 },
        { ko: '공원에서', step: 2 },
        { ko: '축구를 해요', step: 1 }
    ],
    [
        { ko: '나는', step: 0 },
        { ko: '칠판에', step: 2 },
        { ko: '글을 써요', step: 1 }
    ],
    [
        { ko: '나는', step: 0 },
        { ko: '소파에서', step: 2 },
        { ko: '자요', step: 1 }
    ],
    [
        { ko: '나는', step: 0 },
        { ko: '아침에', step: 3 },
        { ko: '커피를', step: 2 },
        { ko: '마셔요', step: 1 }
    ],
    [
        { ko: '나는', step: 0 },
        { ko: '책을', step: 2 },
        { ko: '읽어요', step: 1 }
    ],
    [
        { ko: '나는', step: 0 },
        { ko: '저녁을', step: 2 },
        { ko: '만들어요', step: 1 }
    ],
    [
        { ko: '나는', step: 0 },
        { ko: '크게', step: 2 },
        { ko: '웃어요', step: 1 } // 기존 "짖어요" -> 사람 행동으로 변경
    ],
    [
        { ko: '나는', step: 0 },
        { ko: '친구에게', step: 3 },
        { ko: '편지를', step: 2 },
        { ko: '써요', step: 1 }
    ],
    [
        { ko: '나는', step: 0 },
        { ko: '아침에', step: 3 },
        { ko: '우유를', step: 2 },
        { ko: '마셔요', step: 1 }
    ],
    [
        { ko: '나는', step: 0 },
        { ko: '정원에서', step: 2 },
        { ko: '놀아요', step: 1 }
    ],
    [
        { ko: '나는', step: 0 },
        { ko: '신문을', step: 2 },
        { ko: '읽었다.', step: 1 }
    ],
    [
        { ko: '나는', step: 0 },
        { ko: '행복하게', step: 2 },
        { ko: '웃어요', step: 1 }
    ],
    [
        { ko: '나는', step: 0 },
        { ko: '그림을', step: 2 },
        { ko: '칠해요', step: 1 }
    ],
    [
        { ko: '나는', step: 0 },
        { ko: '학교까지', step: 2 },
        { ko: '걸어가요', step: 1 }
    ],
    [
        { ko: '나는', step: 0 },
        { ko: '방에서', step: 2 },
        { ko: '노래해요', step: 1 } // 기존 "나무에서" -> 현실적인 장소
    ]
];


/*
1. 나는 공원에서 축구를 해요 
2. 나는 칠판에 글을 써요 
3. 나는 소파에서 자요 
4. 나는 아침에 커피를 마셔요 
5. 나는 책을 읽어요 
6. 나는 저녁을 만들어요 
7. 나는 크게 웃어요 
8. 나는 친구에게 편지를 써요 
9. 나는 아침에 우유를 마셔요 
10. 나는 정원에서 놀아요 
11. 나는 신문을 읽어요 
12. 나는 행복하게 웃어요 
13. 나는 그림을 그려요 
14. 나는 학교까지 걸어가요 
15. 나는 방에서 노래해요 
*/