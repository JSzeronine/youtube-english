const enDatas = [

    [
        { en: "I", step: 0 },
        { en: "do not feel well", step: 1 },
        { en: "today", step: 2 }
    ],

    [
        { en: "I", step: 0 },
        { en: "think I need to go", step: 1 },
        { en: "to the hospital", step: 2 }
    ],

    [
        { en: "I", step: 0 },
        { en: "go", step: 1 },
        { en: "to the hospital", step: 2 }
    ],

    [
        { en: "I", step: 0 },
        { en: "see", step: 1 },
        { en: "many patients", step: 2 }
    ],

    [
        { en: "I", step: 0 },
        { en: "sit", step: 1 },
        { en: "in the waiting room", step: 2 }
    ],

    [
        { en: "I", step: 0 },
        { en: "wait", step: 1 },
        { en: "in the waiting room", step: 2 }
    ],

    [
        { en: "The nurse", step: 0 },
        { en: "calls", step: 1 },
        { en: "my name", step: 2 }
    ],

    [
        { en: "I", step: 0 },
        { en: "go into", step: 1 },
        { en: "the doctor's office", step: 2 }
    ],

    [
        { en: "I", step: 0 },
        { en: "meet", step: 1 },
        { en: "the doctor", step: 2 }
    ],

    [
        { en: "The doctor", step: 0 },
        { en: "asks", step: 1 },
        { en: "about my symptoms", step: 2 }
    ],

    [
        { en: "I", step: 0 },
        { en: "tell", step: 1 },
        { en: "the doctor how I feel", step: 2 }
    ],

    [
        { en: "The doctor", step: 0 },
        { en: "checks", step: 1 },
        { en: "my temperature", step: 2 }
    ],

    [
        { en: "The doctor", step: 0 },
        { en: "checks", step: 1 },
        { en: "my throat", step: 2 }
    ],

    [
        { en: "The doctor", step: 0 },
        { en: "says", step: 1 },
        { en: "I have a cold", step: 2 }
    ],

    [
        { en: "The doctor", step: 0 },
        { en: "gives", step: 1 },
        { en: "me a prescription", step: 2 }
    ],

    [
        { en: "I", step: 0 },
        { en: "go", step: 1 },
        { en: "to the pharmacy", step: 2 }
    ],

    [
        { en: "I", step: 0 },
        { en: "get", step: 1 },
        { en: "my medicine", step: 2 }
    ],

    [
        { en: "The pharmacist", step: 0 },
        { en: "explains", step: 1 },
        { en: "the medicine", step: 2 }
    ],

    [
        { en: "I", step: 0 },
        { en: "take", step: 1 },
        { en: "the medicine", step: 2 },
        { en: "at home", step: 3 }
    ],

    [
        { en: "I", step: 0 },
        { en: "am resting", step: 1 },
        { en: "at home", step: 2 }
    ],
];

const koDatas = [

    [
        { ko: "저는", step: 0 },
        { ko: "오늘", step: 2 },
        { ko: "몸이 안 좋아요", step: 1 }
    ],

    [
        { ko: "저는", step: 0 },
        { ko: "병원에", step: 2 },
        { ko: "가야 할 것 같아요", step: 1 },
    ],

    [
        { ko: "저는", step: 0 },
        { ko: "병원에", step: 2 },
        { ko: "가요", step: 1 }
    ],

    [
        { ko: "저는", step: 0 },
        { ko: "많은 환자들을", step: 2 },
        { ko: "봐요", step: 1 }
    ],

    [
        { ko: "저는", step: 0 },
        { ko: "대기실에", step: 2 },
        { ko: "앉아요", step: 1 }
    ],

    [
        { ko: "저는", step: 0 },
        { ko: "대기실에서", step: 2 },
        { ko: "기다려요", step: 1 }
    ],

    [
        { ko: "간호사분이", step: 0 },
        { ko: "제 이름을", step: 2 },
        { ko: "불러요", step: 1 }
    ],

    [
        { ko: "저는", step: 0 },
        { ko: "진료실에", step: 2 },
        { ko: "들어가요", step: 1 }
    ],

    [
        { ko: "저는", step: 0 },
        { ko: "의사 선생님을", step: 2 },
        { ko: "만나요", step: 1 }
    ],

    [
        { ko: "의사 선생님이", step: 0 },
        { ko: "제 증상을", step: 2 },
        { ko: "물어보세요", step: 1 }
    ],

    [
        { ko: "저는", step: 0 },
        { ko: "어디가 아픈지 의사 선생님께", step: 2 },
        { ko: "말씀드려요", step: 1 }
    ],

    [
        { ko: "의사 선생님이", step: 0 },
        { ko: "제 체온을", step: 2 },
        { ko: "재세요", step: 1 }
    ],

    [
        { ko: "의사 선생님이", step: 0 },
        { ko: "제 목을", step: 2 },
        { ko: "확인하세요", step: 1 }
    ],

    [
        { ko: "의사 선생님이", step: 0 },
        { ko: "제가 감기에 걸렸다고", step: 2 },
        { ko: "말씀하세요", step: 1 }
    ],

    [
        { ko: "의사 선생님이", step: 0 },
        { ko: "저에게 처방전을", step: 2 },
        { ko: "주세요", step: 1 }
    ],

    [
        { ko: "저는", step: 0 },
        { ko: "약국에", step: 2 },
        { ko: "가요", step: 1 }
    ],

    [
        { ko: "저는", step: 0 },
        { ko: "약을", step: 2 },
        { ko: "받아요", step: 1 }
    ],

    [
        { ko: "약사분이", step: 0 },
        { ko: "약", step: 2 },
        { ko: "설명을 해주세요", step: 1 }
    ],

    [
        { ko: "저는", step: 0 },
        { ko: "집에서", step: 3 },
        { ko: "약을", step: 2 },
        { ko: "먹어요", step: 1 }
    ],

    [
        { ko: "저는", step: 0 },
        { ko: "집에서", step: 2 },
        { ko: "쉬고 있어요", step: 1 }
    ],
];



/*

1. I do not feel well today 
1. 저는 오늘 몸이 안 좋아요 

2. I think I need to go to the hospital 
2. 저는 병원에 가야 한다고 생각해요 

3. I go to the hospital 
3. 저는 병원에 가요 

4. I see many patients 
4. 저는 많은 환자들을 봐요 

5. I sit in the waiting room 
5. 저는 대기실에 앉아요 

6. I wait in the waiting room 
6. 저는 대기실에서 기다려요 

7. The nurse calls my name 
7. 간호사분이 제 이름을 불러요 

8. I go into the doctor's office 
8. 저는 진료실에 들어가요 

9. I meet the doctor 
9. 저는 의사 선생님을 만나요 

10. The doctor asks about my symptoms 
10. 의사 선생님이 제 증상을 물어보세요 

11. I tell the doctor how I feel 
11. 저는 어디가 아픈지 말씀드려요 

12. The doctor checks my temperature 
12. 의사 선생님이 제 체온을 재세요 

13. The doctor checks my throat 
13. 의사 선생님이 제 목을 확인하세요 

14. The doctor says I have a cold 
14. 의사 선생님이 제가 감기라고 말씀하세요 

15. The doctor gives me a prescription 
15. 의사 선생님이 저에게 처방전을 주세요 

16. I go to the pharmacy 
16. 저는 약국에 가요 

17. I get my medicine 
17. 저는 약을 받아요 

18. The pharmacist explains the medicine 
18. 약사분이 약 설명을 해주세요 

19. I take the medicine at home 
19. 저는 집에서 약을 먹어요 

20. I am resting at home 
20. 저는 집에서 쉬고 있어요 

*/