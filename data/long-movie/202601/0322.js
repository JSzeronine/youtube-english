const enDatas = [
    [
        { en: "Today", step: 0 },
        { en: "", step: 1 },
        { en: "is the weekend", step: 2 }
    ],
    [
        { en: "I", step: 0 },
        { en: "wake up", step: 1 },
        { en: "with my dog", step: 2 }
    ],
    [
        { en: "My dog", step: 0 },
        { en: "looks", step: 1 },
        { en: "at me", step: 2 }
    ],
    [
        { en: "I", step: 0 },
        { en: "say hello", step: 1 },
        { en: "to my dog", step: 2 }
    ],
    [
        { en: "I", step: 0 },
        { en: "hug", step: 1 },
        { en: "my dog", step: 2 }
    ],
    [
        { en: "My dog", step: 0 },
        { en: "", step: 1 },
        { en: "is very happy", step: 2 }
    ],
    [
        { en: "I", step: 0 },
        { en: "go", step: 1 },
        { en: "to the kitchen", step: 2 },
        { en: "with my dog", step: 3 }
    ],
    [
        { en: "I", step: 0 },
        { en: "get", step: 1 },
        { en: "my dog food", step: 2 },
    ],
    [
        { en: "I", step: 0 },
        { en: "give", step: 1 },
        { en: "food", step: 2 },
        { en: "to my dog", step: 3 }
    ],
    [
        { en: "My dog", step: 0 },
        { en: "eats", step: 1 },
        { en: "food", step: 2 }
    ],
    [
        { en: "I", step: 0 },
        { en: "sit down", step: 1 },
        { en: "with my dog", step: 2 }
    ],
    [
        { en: "I", step: 0 },
        { en: "play", step: 1 },
        { en: "with my dog", step: 2 }
    ],
    [
        { en: "I", step: 0 },
        { en: "go", step: 1 },
        { en: "outside", step: 2 },
        { en: "with my dog", step: 3 }
    ],
    [
        { en: "I", step: 0 },
        { en: "go for a walk", step: 1 },
        { en: "with my dog", step: 2 }
    ],
    [
        { en: "My dog", step: 0 },
        { en: "runs", step: 1 },
        { en: "with me", step: 2 }
    ],
    [
        { en: "My dog", step: 0 },
        { en: "plays", step: 1 },
        { en: "in the park", step: 2 }
    ],
    [
        { en: "I", step: 0 },
        { en: "rest", step: 1 },
        { en: "with my dog", step: 2 }
    ],
    [
        { en: "I", step: 0 },
        { en: "go home", step: 1 },
        { en: "with my dog", step: 2 }
    ],
    [
        { en: "I", step: 0 },
        { en: "wash", step: 1 },
        { en: "my dog", step: 2 }
    ],
    [
        { en: "I", step: 0 },
        { en: "sleep", step: 1 },
        { en: "with my dog", step: 2 }
    ]
]

const koDatas = [
    [
        { ko: "오늘은", step: 0 },
        { ko: "", step: 1 },
        { ko: "주말이에요", step: 2 }
    ],
    [
        { ko: "나는", step: 0 },
        { ko: "강아지와 함께", step: 2 },
        { ko: "일어나요", step: 1 }
    ],
    [
        { ko: "강아지가", step: 0 },
        { ko: "나를", step: 2 },
        { ko: "바라봐요", step: 1 }
    ],
    [
        { ko: "나는", step: 0 },
        { ko: "강아지에게", step: 2 },
        { ko: "인사를 해요", step: 1 },
    ],
    [
        { ko: "나는", step: 0 },
        { ko: "강아지를", step: 2 },
        { ko: "안아요", step: 1 }
    ],
    [
        { ko: "강아지는", step: 0 },
        { ko: "", step: 1 },
        { ko: "매우 행복해요", step: 2 },
    ],
    [
        { ko: "나는", step: 0 },
        { ko: "강아지와 함께", step: 3 },
        { ko: "주방에", step: 2 },
        { ko: "가요", step: 1 }
    ],
    [
        { ko: "나는", step: 0 },
        { ko: "강아지 밥을", step: 2 },
        { ko: "가져와요", step: 1 }
    ],
    [
        { ko: "나는", step: 0 },
        { ko: "강아지에게", step: 3 },
        { ko: "밥을", step: 2 },
        { ko: "줘요", step: 1 }
    ],
    [
        { ko: "강아지가", step: 0 },
        { ko: "밥을", step: 2 },
        { ko: "먹어요", step: 1 }
    ],
    [
        { ko: "나는", step: 0 },
        { ko: "강아지와 함께", step: 2 },
        { ko: "앉아요", step: 1 }
    ],
    [
        { ko: "나는", step: 0 },
        { ko: "강아지와", step: 2 },
        { ko: "놀아요", step: 1 }
    ],
    [
        { ko: "나는", step: 0 },
        { ko: "강아지와 함께", step: 3 },
        { ko: "밖에", step: 2 },
        { ko: "나가요", step: 1 }
    ],
    [
        { ko: "나는", step: 0 },
        { ko: "강아지와 함께", step: 2 },
        { ko: "산책해요", step: 1 }
    ],
    [
        { ko: "강아지가", step: 0 },
        { ko: "나와 함께", step: 2 },
        { ko: "뛰어요", step: 1 }
    ],
    [
        { ko: "강아지가", step: 0 },
        { ko: "공원에서", step: 2 },
        { ko: "놀아요", step: 1 }
    ],
    [
        { ko: "나는", step: 0 },
        { ko: "강아지와 함께", step: 2 },
        { ko: "쉬어요", step: 1 }
    ],
    [
        { ko: "나는", step: 0 },
        { ko: "강아지와 함께", step: 2 },
        { ko: "집에 가요", step: 1 }
    ],
    [
        { ko: "나는", step: 0 },
        { ko: "강아지를", step: 2 },
        { ko: "씻겨요", step: 1 }
    ],
    [
        { ko: "나는", step: 0 },
        { ko: "강아지와 함께", step: 2 },
        { ko: "자요", step: 1 }
    ]
]


/*



1. Today is the weekend 
1. 오늘은 주말이에요 

2. I wake up with my dog 
2. 나는 강아지와 함께 일어나요 

3. My dog looks at me 
3. 강아지가 나를 바라봐요 

4. I say hello to my dog 
4. 나는 강아지에게 인사를 해요 

5. I hug my dog 
5. 나는 강아지를 안아요 

6. My dog is very happy 
6. 강아지는 매우 행복해요 

7. I go to the kitchen with my dog 
7. 나는 강아지와 함께 주방에 가요 

8. I get my dog food 
8. 나는 강아지 밥을 가져와요 

9. I give food to my dog 
9. 나는 강아지에게 밥을 줘요 

10. My dog eats food 
10. 강아지가 밥을 먹어요 

11. I sit down with my dog 
11. 나는 강아지와 함께 앉아요 

12. I play with my dog 
12. 나는 강아지와 놀아요 

13. I go outside with my dog 
13. 나는 강아지와 함께 밖에 나가요 

14. I go for a walk with my dog 
14. 나는 강아지와 함께 산책해요 

15. My dog runs with me 
15. 강아지가 나와 함께 뛰어요 

16. My dog plays in the park 
16. 강아지가 공원에서 놀아요 

17. I rest with my dog 
17. 나는 강아지와 함께 쉬어요 

18. I go home with my dog 
18. 나는 강아지와 함께 집에 가요 

19. I wash my dog 
19. 나는 강아지를 씻겨요 

20. I sleep with my dog 
20. 나는 강아지와 함께 자요 




*/
