const enDatas = [
    [
        { en: "I", step: 0 },
        { en: "go", step: 1 },
        { en: "to the supermarket", step: 2 }
    ],
    [
        { en: "I", step: 0 },
        { en: "grab", step: 1 },
        { en: "a shopping cart", step: 2 }
    ],
    [
        { en: "I", step: 0 },
        { en: "look", step: 1 },
        { en: "at the vegetables", step: 2 }
    ],
    [
        { en: "I", step: 0 },
        { en: "pick", step: 1 },
        { en: "some apples", step: 2 }
    ],
    [
        { en: "I", step: 0 },
        { en: "check", step: 1 },
        { en: "the price", step: 2 }
    ],
    [
        { en: "I", step: 0 },
        { en: "compare", step: 1 },
        { en: "two products", step: 2 }
    ],
    [
        { en: "I", step: 0 },
        { en: "look around", step: 1 },
        { en: "the products", step: 2 }
    ],
    [
        { en: "I", step: 0 },
        { en: "am looking for", step: 1 },
        { en: "an employee", step: 2 }
    ],
    [
        { en: "I", step: 0 },
        { en: "put", step: 1 },
        { en: "the apples", step: 2 },
        { en: "in my cart", step: 3 }
    ],
    [
        { en: "I", step: 0 },
        { en: "am looking for", step: 1 },
        { en: "some eggs", step: 2 }
    ],
    [
        { en: "I", step: 0 },
        { en: "choose", step: 1 },
        { en: "fresh bread", step: 2 }
    ],
    [
        { en: "I", step: 0 },
        { en: "buy", step: 1 },
        { en: "some snacks", step: 2 }
    ],
    [
        { en: "I", step: 0 },
        { en: "smell", step: 1 },
        { en: "the bread", step: 2 }
    ],
    [
        { en: "I", step: 0 },
        { en: "am looking", step: 1 },
        { en: "at toys", step: 2 }
    ],
    [
        { en: "I", step: 0 },
        { en: "check", step: 1 },
        { en: "the prices", step: 2 }
    ],
    [
        { en: "I", step: 0 },
        { en: "pay", step: 1 },
        { en: "with my card", step: 2 }
    ],
    [
        { en: "The cashier", step: 0 },
        { en: "scans", step: 1 },
        { en: "the items", step: 2 }
    ],
    [
        { en: "I", step: 0 },
        { en: "get", step: 1 },
        { en: "a receipt", step: 2 }
    ],
    [
        { en: "I", step: 0 },
        { en: "carry", step: 1 },
        { en: "my bags", step: 2 }
    ],
    [
        { en: "I", step: 0 },
        { en: "go home and", step: 1 },
        { en: "cook dinner", step: 2 }
    ]
];

const koDatas = [
    [
        { ko: "나는", step: 0 },
        { ko: "마트에", step: 2 },
        { ko: "가요", step: 1 }
    ],
    [
        { ko: "나는", step: 0 },
        { ko: "쇼핑 카트를", step: 2 },
        { ko: "집어요", step: 1 }
    ],
    [
        { ko: "나는", step: 0 },
        { ko: "채소를", step: 2 },
        { ko: "봐요", step: 1 }
    ],
    [
        { ko: "나는", step: 0 },
        { ko: "사과를 몇 개", step: 2 },
        { ko: "골라요", step: 1 }
    ],
    [
        { ko: "나는", step: 0 },
        { ko: "가격을", step: 2 },
        { ko: "확인해요", step: 1 }
    ],
    [
        { ko: "나는", step: 0 },
        { ko: "두 상품을", step: 2 },
        { ko: "비교해요", step: 1 }
    ],
    [
        { ko: "나는", step: 0 },
        { ko: "상품들을", step: 2 },
        { ko: "둘러보고 있어요", step: 1 }
    ],
    [
        { ko: "나는", step: 0 },
        { ko: "직원을", step: 2 },
        { ko: "찾고 있어요", step: 1 }
    ],
    [
        { ko: "나는", step: 0 },
        { ko: "사과를", step: 2 },
        { ko: "카트에", step: 3 },
        { ko: "담아요", step: 1 }
    ],
    [
        { ko: "나는", step: 0 },
        { ko: "달걀을", step: 2 },
        { ko: "찾고 있어요", step: 1 }
    ],
    [
        { ko: "나는", step: 0 },
        { ko: "신선한 빵을", step: 2 },
        { ko: "골라요", step: 1 }
    ],
    [
        { ko: "나는", step: 0 },
        { ko: "간식을", step: 2 },
        { ko: "사요", step: 1 }
    ],
    [
        { ko: "나는", step: 0 },
        { ko: "빵 냄새를", step: 2 },
        { ko: "맡아봐요", step: 1 }
    ],
    [
        { ko: "나는", step: 0 },
        { ko: "장난감을", step: 2 },
        { ko: "구경하고 있어요", step: 1 }
    ],
    [
        { ko: "나는", step: 0 },
        { ko: "가격을", step: 2 },
        { ko: "확인해요", step: 1 }
    ],
    [
        { ko: "나는", step: 0 },
        { ko: "카드로", step: 2 },
        { ko: "결제해요", step: 1 }
    ],
    [
        { ko: "계산원은", step: 0 },
        { ko: "물건을", step: 2 },
        { ko: "스캔해요", step: 1 }
    ],
    [
        { ko: "나는", step: 0 },
        { ko: "영수증을", step: 2 },
        { ko: "받아요", step: 1 }
    ],
    [
        { ko: "나는", step: 0 },
        { ko: "쇼핑백을", step: 2 },
        { ko: "들어요", step: 1 }
    ],
    [
        { ko: "나는", step: 0 },
        { ko: "집에 가서", step: 1 },
        { ko: "저녁을 요리해요", step: 2 }
    ]
];



/*

1. I go to the supermarket 
1. 나는 마트에 가요 

2. I grab a shopping cart 
2. 나는 쇼핑 카트를 집어요 

3. I pick some apples 
3. 나는 사과를 몇 개 집어요 

4. I look at the vegetables 
4. 나는 채소를 봐요 

5. I check the price 
5. 나는 가격을 확인해요 

6. I compare two products 
6. 나는 두 상품을 비교해요 

7. I look around at the products 
7. 나는 상품들을 둘러봐요 

8. I look for an employee 
8. 나는 직원을 찾아요 

9. I put the apples in my cart 
9. 나는 사과를 카트에 넣어요 

10. I am looking for some eggs 
10. 나는 달걀을 찾고 있어요 

11. I choose fresh bread 
11. 나는 신선한 빵을 골라요 

12. I buy some snacks 
12. 나는 간식을 사요 

13. I smell the bread 
13. 나는 빵 냄새를 맡아요 

14. I wait in line 
14. 나는 줄을 서서 기다려요 

15. I check the prices 
15. 나는 가격을 확인해요 

16. I pay with my card 
16. 나는 카드로 결제해요 

17. The cashier scans the items 
17. 계산원은 물건을 스캔해요 

18. I get a receipt 
18. 나는 영수증을 받아요 

19. I carry my bags 
19. 나는 쇼핑백을 들어요 

20. I go home and cook dinner 
20. 나는 집에 가서 저녁을 요리해요 



*/