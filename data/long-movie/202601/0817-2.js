const enDatas = [

    // 1
    [
        { en: "Do you want to", step: 0 },
        { en: "have breakfast", step: 0 },
        { en: "together", step: 1 },
        { en: "tomorrow", step: 2 },
        { en: "?", step: 0 },
    ],

    // 2
    [
        { en: "Do you want to", step: 0 },
        { en: "watch a movie", step: 0 },
        { en: "with me", step: 1 },
        { en: "tonight", step: 2 },
        { en: "?", step: 0 },
    ],

    // 3
    [
        { en: "Do you want to meet", step: 0 },
        { en: "at the coffee shop", step: 1 },
        { en: "after work", step: 2 },
        { en: "?", step: 0 },
    ],

    // 4
    [
        { en: "Do you want to take a break", step: 0 },
        { en: "for a few minutes", step: 1 },
        { en: "before lunch", step: 2 },
        { en: "?", step: 0 },
    ],

    // 5
    [
        { en: "Do you want to", step: 0 },
        { en: "practice English", step: 0 },
        { en: "with me", step: 1 },
        { en: "this evening", step: 2 },
        { en: "?", step: 0 },
    ],

    // 6
    [
        { en: "Do you want to", step: 0 },
        { en: "order", step: 0 },
        { en: "some pizza", step: 1 },
        { en: "for dinner", step: 2 },
        { en: "?", step: 0 },
    ],

    // 7
    [
        { en: "Do you want to", step: 0 },
        { en: "listen to", step: 0 },
        { en: "some music", step: 1 },
        { en: "while you work", step: 2 },
        { en: "?", step: 0 },
    ],

    // 8
    [
        { en: "Do you want to", step: 0 },
        { en: "check", step: 0 },
        { en: "the schedule", step: 1 },
        { en: "before we leave", step: 2 },
        { en: "?", step: 0 },
    ],

    // 9
    [
        { en: "Do you want to", step: 0 },
        { en: "take", step: 0 },
        { en: "some pictures", step: 1 },
        { en: "at the park", step: 2 },
        { en: "?", step: 0 },
    ],

    // 10
    [
        { en: "Do you want to", step: 0 },
        { en: "help me", step: 0 },
        { en: "clean the kitchen", step: 1 },
        { en: "this afternoon", step: 2 },
        { en: "?", step: 0 },
    ],

    // 11
    [
        { en: "Do you want to", step: 0 },
        { en: "visit", step: 0 },
        { en: "your parents", step: 1 },
        { en: "this Sunday", step: 2 },
        { en: "?", step: 0 },
    ],

    // 12
    [
        { en: "Do you want to", step: 0 },
        { en: "have some coffee", step: 0 },
        { en: "before work", step: 1 },
        { en: "tomorrow", step: 2 },
        { en: "?", step: 0 },
    ],

    // 13
    [
        { en: "Do you want to", step: 0 },
        { en: "walk", step: 0 },
        { en: "around the park", step: 1 },
        { en: "after dinner", step: 2 },
        { en: "?", step: 0 },
    ],

    // 14
    [
        { en: "Do you want to", step: 0 },
        { en: "leave", step: 0 },
        { en: "a little early", step: 1 },
        { en: "tomorrow morning", step: 2 },
        { en: "?", step: 0 },
    ],

    // 15
    [
        { en: "Do you want to", step: 0 },
        { en: "read", step: 0 },
        { en: "this book", step: 1 },
        { en: "before bed", step: 2 },
        { en: "?", step: 0 },
    ],

    // 16
    [
        { en: "Do you want to have dinner", step: 0 },
        { en: "at home", step: 1 },
        { en: "tonight", step: 2 },
        { en: "?", step: 0 },
    ],

    // 17
    [
        { en: "Do you want to wear", step: 0 },
        { en: "this jacket", step: 1 },
        { en: "today", step: 2 },
        { en: "?", step: 0 },
    ],

    // 18
    [
        { en: "Do you want to use", step: 0 },
        { en: "my computer", step: 1 },
        { en: "for a while", step: 2 },
        { en: "?", step: 0 },
    ],

    // 19
    [
        { en: "Do you want to change", step: 0 },
        { en: "your seat", step: 1 },
        { en: "before the movie", step: 2 },
        { en: "?", step: 0 },
    ],

    // 20
    [
        { en: "Do you want to send", step: 0 },
        { en: "this message", step: 1 },
        { en: "right now", step: 2 },
        { en: "?", step: 0 },
    ],

    // 21
    [
        { en: "Do you want to wait", step: 0 },
        { en: "for the next bus", step: 1 },
        { en: "together", step: 2 },
        { en: "?", step: 0 },
    ],

    // 22
    [
        { en: "Do you want to check", step: 0 },
        { en: "the weather", step: 1 },
        { en: "before the trip", step: 2 },
        { en: "?", step: 0 },
    ],

    // 23
    [
        { en: "Do you want to save", step: 0 },
        { en: "this file", step: 1 },
        { en: "on your computer", step: 2 },
        { en: "?", step: 0 },
    ],

];


const koDatas = [

    // 1
    [
        { ko: "내일", step: 2 },
        { ko: "같이", step: 1 },
        { ko: "아침 식사 하실래요", step: 0 },
        { ko: "?", step: 0 },
    ],

    // 2
    [
        { ko: "오늘 밤", step: 2 },
        { ko: "저와 함께", step: 1 },
        { ko: "영화 한 편 보실래요", step: 0 },
        { ko: "?", step: 0 },
    ],

    // 3
    [
        { ko: "퇴근 후에", step: 2 },
        { ko: "커피숍에서", step: 1 },
        { ko: "만나실래요", step: 0 },
        { ko: "?", step: 0 },
    ],

    // 4
    [
        { ko: "점심 식사 전에", step: 2 },
        { ko: "몇 분간", step: 1 },
        { ko: "쉬실래요", step: 0 },
        { ko: "?", step: 0 },
    ],

    // 5
    [
        { ko: "오늘 저녁에", step: 2 },
        { ko: "저와 함께", step: 1 },
        { ko: "영어 연습하실래요", step: 0 },
        { ko: "?", step: 0 },
    ],

    // 6
    [
        { ko: "저녁으로", step: 2 },
        { ko: "피자를 좀", step: 1 },
        { ko: "주문하실래요", step: 0 },
        { ko: "?", step: 0 },
    ],

    // 7
    [
        { ko: "일하는 동안", step: 2 },
        { ko: "음악을 좀", step: 1 },
        { ko: "들으실래요", step: 0 },
        { ko: "?", step: 0 },
    ],

    // 8
    [
        { ko: "떠나기 전에", step: 2 },
        { ko: "일정을", step: 1 },
        { ko: "확인하실래요", step: 0 },
        { ko: "?", step: 0 },
    ],

    // 9
    [
        { ko: "공원에서", step: 2 },
        { ko: "사진을 좀", step: 1 },
        { ko: "찍으실래요", step: 0 },
        { ko: "?", step: 0 },
    ],

    // 10
    [
        { ko: "오늘 오후에", step: 2 },
        { ko: "주방 청소를", step: 1 },
        { ko: "도와주실래요", step: 0 },
        { ko: "?", step: 0 },
    ],

    // 11
    [
        { ko: "이번 일요일에", step: 2 },
        { ko: "부모님을", step: 1 },
        { ko: "찾아뵈실래요", step: 0 },
        { ko: "?", step: 0 },
    ],

    // 12
    [
        { ko: "내일", step: 2 },
        { ko: "출근 전에", step: 1 },
        { ko: "커피 좀 드실래요", step: 0 },
        { ko: "?", step: 0 },
    ],

    // 13
    [
        { ko: "저녁 식사 후에", step: 2 },
        { ko: "공원을 좀", step: 1 },
        { ko: "걸으실래요", step: 0 },
        { ko: "?", step: 0 },
    ],

    // 14
    [
        { ko: "내일 아침", step: 2 },
        { ko: "조금 일찍", step: 1 },
        { ko: "출발하실래요", step: 0 },
        { ko: "?", step: 0 },
    ],

    // 15
    [
        { ko: "자기 전에", step: 2 },
        { ko: "이 책을", step: 1 },
        { ko: "읽으실래요", step: 0 },
        { ko: "?", step: 0 },
    ],

    // 16
    [
        { ko: "오늘 밤", step: 2 },
        { ko: "집에서", step: 1 },
        { ko: "저녁 드실래요", step: 0 },
        { ko: "?", step: 0 },
    ],

    // 17
    [
        { ko: "오늘", step: 2 },
        { ko: "이 재킷을", step: 1 },
        { ko: "입으실래요", step: 0 },
        { ko: "?", step: 0 },
    ],

    // 18
    [
        { ko: "잠시", step: 2 },
        { ko: "제 컴퓨터를", step: 1 },
        { ko: "사용하실래요", step: 0 },
        { ko: "?", step: 0 },
    ],

    // 19
    [
        { ko: "영화 시작 전에", step: 2 },
        { ko: "자리를", step: 1 },
        { ko: "바꾸실래요", step: 0 },
        { ko: "?", step: 0 },
    ],

    // 20
    [
        { ko: "지금 바로", step: 2 },
        { ko: "이 메시지를", step: 1 },
        { ko: "보내실래요", step: 0 },
        { ko: "?", step: 0 },
    ],

    // 21
    [
        { ko: "같이", step: 2 },
        { ko: "다음 버스를", step: 1 },
        { ko: "기다리실래요", step: 0 },
        { ko: "?", step: 0 },
    ],

    // 22
    [
        { ko: "여행 전에", step: 2 },
        { ko: "날씨를", step: 1 },
        { ko: "확인하실래요", step: 0 },
        { ko: "?", step: 0 },
    ],

    // 23
    [
        { ko: "컴퓨터에", step: 2 },
        { ko: "이 파일을", step: 1 },
        { ko: "저장하실래요", step: 0 },
        { ko: "?", step: 0 },
    ],

];

