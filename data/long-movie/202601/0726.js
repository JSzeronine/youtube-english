














const enDatas = [
    [ // 1
        { en: "There is a pharmacy", step: 0 },
        { en: "near", step: 1 },
        { en: "my house", step: 2 },
        { en: ".", step: 0 },
    ],
    [ // 2
        { en: "There is a bus stop", step: 0 },
        { en: "across", step: 1 },
        { en: "the street", step: 2 },
        { en: ".", step: 0 },
    ],
    [ // 3
        { en: "There is a park", step: 0 },
        { en: "where I walk", step: 1 },
        { en: "every morning", step: 2 },
        { en: ".", step: 0 },
    ],
    [ // 4
        { en: "There is a hospital", step: 0 },
        { en: "not far", step: 1 },
        { en: "from here", step: 2 },
        { en: ".", step: 0 },
    ],
    [ // 5
        { en: "There is a bench", step: 0 },
        { en: "under", step: 1 },
        { en: "the big tree", step: 2 },
        { en: ".", step: 0 },
    ],
    [ // 6
        { en: "There is a good restaurant", step: 0 },
        { en: "near", step: 1 },
        { en: "the market", step: 2 },
        { en: ".", step: 0 },
    ],
    [ // 7
        { en: "There is fresh fruit", step: 0 },
        { en: "in", step: 1 },
        { en: "the refrigerator", step: 2 },
        { en: ".", step: 0 },
    ],
    [ // 8
        { en: "There is some hot tea", step: 0 },
        { en: "on", step: 1 },
        { en: "the table", step: 2 },
        { en: ".", step: 0 },
    ],
    [ // 10
        { en: "There is a letter", step: 0 },
        { en: "from my son", step: 1 },
        { en: ".", step: 0 },
    ],
    [ // 11
        { en: "There is a beautiful flower garden", step: 0 },
        { en: "behind", step: 1 },
        { en: "the library", step: 2 },
        { en: ".", step: 0 },
    ],
    [ // 14
        { en: "There is a small coffee shop", step: 0 },
        { en: "next to", step: 1 },
        { en: "the bank", step: 2 },
        { en: ".", step: 0 },
    ],
    [ // 16
        { en: "There is a new supermarket", step: 0 },
        { en: "in my neighborhood", step: 1 },
        { en: ".", step: 0 },
    ],
    [ // 17
        { en: "There is a church", step: 0 },
        { en: "at the end of", step: 1 },
        { en: "this street", step: 2 },
        { en: ".", step: 0 },
    ],
    [ // 18
        { en: "There is a traditional market", step: 0 },
        { en: "near", step: 1 },
        { en: "the station", step: 2 },
        { en: ".", step: 0 },
    ],
    [ // 21
        { en: "There is a post office", step: 0 },
        { en: "near", step: 1 },
        { en: "the city hall", step: 2 },
        { en: ".", step: 0 },
    ],
    [ // 23
        { en: "There is a bakery", step: 0 },
        { en: "on the corner", step: 1 },
        { en: ".", step: 0 },
    ],
    [ // 24
        { en: "There is a doctor's office", step: 0 },
        { en: "on the second floor", step: 1 },
        { en: ".", step: 0 },
    ],
    [ // 26
        { en: "There is a clean restroom", step: 0 },
        { en: "inside", step: 1 },
        { en: "the station", step: 2 },
        { en: ".", step: 0 },
    ],
    [ // 27
        { en: "There is a large parking lot", step: 0 },
        { en: "behind", step: 1 },
        { en: "the building", step: 2 },
        { en: ".", step: 0 },
    ],
    [ // 30
        { en: "There is a pharmacy", step: 0 },
        { en: "inside", step: 1 },
        { en: "the shopping mall", step: 2 },
        { en: ".", step: 0 },
    ],
    [ // 31
        { en: "There is a music festival", step: 0 },
        { en: "in the town", step: 1 },
        { en: "this weekend", step: 2 },
        { en: ".", step: 0 },
    ],
    [ // 32
        { en: "There is a warm blanket", step: 0 },
        { en: "on", step: 1 },
        { en: "the bed", step: 2 },
        { en: ".", step: 0 },
    ],
    [ // 34
        { en: "There is a coffee machine", step: 0 },
        { en: "in the waiting room", step: 1 },
        { en: ".", step: 0 },
    ],
    [ // 39
        { en: "There is a great view", step: 0 },
        { en: "from the top of the hill", step: 1 },
        { en: ".", step: 0 },
    ],
];

const koDatas = [
    [ // 1
        { ko: "우리 집", step: 2 },
        { ko: "근처에", step: 1 },
        { ko: "약국이 있어요", step: 0 },
        { ko: ".", step: 0 },
    ],
    [ // 2
        { ko: "길", step: 2 },
        { ko: "건너편에", step: 1 },
        { ko: "버스 정류장이 있어요", step: 0 },
        { ko: ".", step: 0 },
    ],
    [ // 3
        { ko: "매일 아침", step: 2 },
        { ko: "산책하는", step: 1 },
        { ko: "공원이 있어요", step: 0 },
        { ko: ".", step: 0 },
    ],
    [ // 4
        { ko: "여기서", step: 2 },
        { ko: "멀지 않은 곳에", step: 1 },
        { ko: "병원이 있어요", step: 0 },
        { ko: ".", step: 0 },
    ],
    [ // 5
        { ko: "큰 나무", step: 2 },
        { ko: "아래에", step: 1 },
        { ko: "벤치가 있어요", step: 0 },
        { ko: ".", step: 0 },
    ],
    [ // 6
        { ko: "시장", step: 2 },
        { ko: "근처에", step: 1 },
        { ko: "맛있는 식당이 있어요", step: 0 },
        { ko: ".", step: 0 },
    ],
    [ // 7
        { ko: "냉장고", step: 2 },
        { ko: "안에", step: 1 },
        { ko: "신선한 과일이 있어요", step: 0 },
        { ko: ".", step: 0 },
    ],
    [ // 8
        { ko: "식탁", step: 2 },
        { ko: "위에", step: 1 },
        { ko: "따뜻한 차가 있어요", step: 0 },
        { ko: ".", step: 0 },
    ],
    [ // 10
        { ko: "아들에게서 온", step: 1 },
        { ko: "편지가 있어요", step: 0 },
        { ko: ".", step: 0 },
    ],
    [ // 11
        { ko: "도서관", step: 2 },
        { ko: "뒤에", step: 1 },
        { ko: "아름다운 꽃밭이 있어요", step: 0 },
        { ko: ".", step: 0 },
    ],
    [ // 14
        { ko: "은행", step: 2 },
        { ko: "옆에", step: 1 },
        { ko: "작은 커피숍이 있어요", step: 0 },
        { ko: ".", step: 0 },
    ],
    [ // 16
        { ko: "우리 동네에", step: 1 },
        { ko: "새 마트가 생겼어요", step: 0 },
        { ko: ".", step: 0 },
    ],
    [ // 17
        { ko: "이 길", step: 2 },
        { ko: "끝에", step: 1 },
        { ko: "교회가 있어요", step: 0 },
        { ko: ".", step: 0 },
    ],
    [ // 18
        { ko: "역", step: 2 },
        { ko: "근처에", step: 1 },
        { ko: "전통시장이 있어요", step: 0 },
        { ko: ".", step: 0 },
    ],
    [ // 21
        { ko: "시청", step: 2 },
        { ko: "근처에", step: 1 },
        { ko: "우체국이 있어요", step: 0 },
        { ko: ".", step: 0 },
    ],
    [ // 23
        { ko: "모퉁이에", step: 1 },
        { ko: "빵집이 있어요", step: 0 },
        { ko: ".", step: 0 },
    ],
    [ // 24
        { ko: "2층에", step: 1 },
        { ko: "병원(의원)이 있어요", step: 0 },
        { ko: ".", step: 0 },
    ],
    [ // 26
        { ko: "역", step: 2 },
        { ko: "안에", step: 1 },
        { ko: "깨끗한 화장실이 있어요", step: 0 },
        { ko: ".", step: 0 },
    ],
    [ // 27
        { ko: "건물", step: 2 },
        { ko: "뒤에", step: 1 },
        { ko: "큰 주차장이 있어요", step: 0 },
        { ko: ".", step: 0 },
    ],
    [ // 30
        { ko: "쇼핑몰", step: 2 },
        { ko: "안에", step: 1 },
        { ko: "약국이 있어요", step: 0 },
        { ko: ".", step: 0 },
    ],
    [ // 31
        { ko: "이번 주말", step: 2 },
        { ko: "마을에서", step: 1 },
        { ko: "음악 축제가 열려요", step: 0 },
        { ko: ".", step: 0 },
    ],
    [ // 32
        { ko: "침대", step: 2 },
        { ko: "위에", step: 1 },
        { ko: "따뜻한 담요가 있어요", step: 0 },
        { ko: ".", step: 0 },
    ],
    [ // 34
        { ko: "대기실에", step: 1 },
        { ko: "커피 머신이 있어요", step: 0 },
        { ko: ".", step: 0 },
    ],
    [ // 39
        { ko: "언덕 위에서", step: 1 },
        { ko: "멋진 경치를 볼 수 있어요", step: 0 },
        { ko: ".", step: 0 },
    ],
];