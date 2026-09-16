/*

The child ran toward the playground . 
아이는 놀이터를 향해 달려갔어요. 

She walked toward the kitchen to get some water . 
그녀는 물을 좀 마시려고 부엌을 향해 걸어갔어요. 

He looked toward the man standing by the door . 
그는 문 옆에 서 있는 남자를 향해 바라봤어요. 

The students moved toward the classroom . 
학생들은 교실을 향해 움직였어요. 

A stranger walked toward our table . 
낯선 사람이 우리 테이블을 향해 걸어왔어요. 

The horse ran toward the fence . 
말이 울타리를 향해 달려갔어요. 

He turned toward the woman next to him . 
그는 자기 옆에 있는 여자를 향해 돌아섰어요. 

The waves moved toward the shore . 
파도가 해안을 향해 움직였어요. 

She took a few steps toward the stage . 
그녀는 무대를 향해 몇 걸음 다가갔어요. 

I'm walking toward the station . 
나는 역을 향해 걸어가고 있어요. 

She ran toward the door . 
그녀는 문을 향해 달려갔어요. 

The dog came running toward me . 
그 강아지가 나를 향해 달려왔어요. 

Turn toward the left side of the building . 
건물 왼쪽 방향으로 돌아가세요. 

She's looking toward the sky . 
그녀는 하늘 쪽을 바라보고 있어요. 

The car is moving toward us . 
그 차가 우리 쪽으로 오고 있어요. 

The bird flew toward the trees . 
그 새는 나무들을 향해 날아갔어요. 

We drove toward the mountains . 
우리는 산 쪽으로 차를 몰았어요. 

She pointed toward the sky . 
그녀는 하늘 쪽을 가리켰어요. 

The boat is heading toward the island . 
그 배는 섬을 향해 가고 있어요. 

I slowly walked toward the sound . 
나는 천천히 그 소리가 나는 쪽으로 걸어갔어요. 

*/







const enDatas = [
    // 1
    [
        { en: "The child ran", step: 0 },
        { en: "toward the playground", step: 1 },
        { en: ".", step: 0 },
    ],

    // 2
    [
        { en: "She walked", step: 0 },
        { en: "toward the kitchen", step: 1 },
        { en: "to get some water", step: 2 },
        { en: ".", step: 0 },
    ],

    // 3
    [
        { en: "He looked", step: 0 },
        { en: "toward the man", step: 1 },
        { en: "standing by the door", step: 2 },
        { en: ".", step: 0 },
    ],

    // 4
    [
        { en: "The students moved", step: 0 },
        { en: "toward the classroom", step: 1 },
        { en: ".", step: 0 },
    ],

    // 5
    [
        { en: "A stranger walked", step: 0 },
        { en: "toward", step: 1 },
        { en: "our table", step: 2 },
        { en: ".", step: 0 },
    ],

    // 6
    [
        { en: "The horse ran", step: 0 },
        { en: "toward", step: 1 },
        { en: "the fence", step: 2 },
        { en: ".", step: 0 },
    ],

    // 7
    [
        { en: "He turned", step: 0 },
        { en: "toward the woman", step: 1 },
        { en: "next to him", step: 2 },
        { en: ".", step: 0 },
    ],

    // 8
    [
        { en: "The waves moved", step: 0 },
        { en: "toward", step: 1 },
        { en: "the shore", step: 2 },
        { en: ".", step: 0 },
    ],

    // 9
    [
        { en: "She took", step: 0 },
        { en: "a few steps", step: 1 },
        { en: "toward the stage", step: 2 },
        { en: ".", step: 0 },
    ],

    // 10
    [
        { en: "I'm walking", step: 0 },
        { en: "toward", step: 1 },
        { en: "the station", step: 2 },
        { en: ".", step: 0 },
    ],

    // 11
    [
        { en: "She ran", step: 0 },
        { en: "toward the door", step: 1 },
        { en: ".", step: 0 },
    ],

    // 14
    [
        { en: "The dog came running", step: 0 },
        { en: "toward me", step: 1 },
        { en: ".", step: 0 },
    ],

    // 15
    [
        { en: "Turn", step: 0 },
        { en: "toward the left side", step: 1 },
        { en: "of the building", step: 2 },
        { en: ".", step: 0 },
    ],

    // 16
    [
        { en: "She's looking", step: 0 },
        { en: "toward the sky", step: 1 },
        { en: ".", step: 0 },
    ],

    // 17
    [
        { en: "The car is moving", step: 0 },
        { en: "toward us", step: 1 },
        { en: ".", step: 0 },
    ],

    // 21
    [
        { en: "The bird flew", step: 0 },
        { en: "toward the trees", step: 1 },
        { en: ".", step: 0 },
    ],

    // 22
    [
        { en: "We drove", step: 0 },
        { en: "toward the mountains", step: 1 },
        { en: ".", step: 0 },
    ],


    // 25
    [
        { en: "She pointed", step: 0 },
        { en: "toward the sky", step: 1 },
        { en: ".", step: 0 },
    ],

    // 26
    [
        { en: "The boat is heading", step: 0 },
        { en: "toward the island", step: 1 },
        { en: ".", step: 0 },
    ],

    // 27
    [
        { en: "I slowly walked", step: 0 },
        { en: "toward the sound", step: 1 },
        { en: ".", step: 0 },
    ],

];

const koDatas = [
    // 1
    [
        { ko: "아이는", step: 0 },
        { ko: "놀이터를 향해", step: 1 },
        { ko: "달려갔어요.", step: 0 },
    ],

    // 2
    [
        { ko: "그녀는", step: 0 },
        { ko: "물을 좀 마시려고", step: 2 },
        { ko: "부엌을 향해", step: 1 },
        { ko: "걸어갔어요.", step: 0 },
    ],

    // 3
    [
        { ko: "그는", step: 0 },
        { ko: "문 옆에 서 있는", step: 2 },
        { ko: "남자를 향해", step: 1 },
        { ko: "바라봤어요.", step: 0 },
    ],

    // 4
    [
        { ko: "학생들은", step: 0 },
        { ko: "교실을 향해", step: 1 },
        { ko: "움직였어요.", step: 0 },
    ],

    // 5
    [
        { ko: "낯선 사람이", step: 0 },
        { ko: "우리 테이블을", step: 2 },
        { ko: "향해", step: 1 },
        { ko: "걸어왔어요.", step: 0 },
    ],

    // 6
    [
        { ko: "말이", step: 0 },
        { ko: "울타리를", step: 2 },
        { ko: "향해", step: 1 },
        { ko: "달려갔어요.", step: 0 },
    ],

    // 7
    [
        { ko: "그는", step: 0 },
        { ko: "자기 옆에 있는", step: 2 },
        { ko: "여자를 향해", step: 1 },
        { ko: "돌아섰어요.", step: 0 },
    ],

    // 8
    [
        { ko: "파도가", step: 0 },
        { ko: "해안을", step: 2 },
        { ko: "향해", step: 1 },
        { ko: "움직였어요.", step: 0 },
    ],

    // 9
    [
        { ko: "그녀는", step: 0 },
        { ko: "무대를 향해", step: 2 },
        { ko: "몇 걸음", step: 1 },
        { ko: "다가갔어요.", step: 0 },
    ],

    // 10
    [
        { ko: "나는", step: 0 },
        { ko: "역을", step: 2 },
        { ko: "향해", step: 1 },
        { ko: "걸어가고 있어요.", step: 0 },
    ],

    // 11
    [
        { ko: "그녀는", step: 0 },
        { ko: "문을 향해", step: 1 },
        { ko: "달려갔어요.", step: 0 },
    ],

    // 14
    [
        { ko: "그 강아지가", step: 0 },
        { ko: "나를 향해", step: 1 },
        { ko: "달려왔어요.", step: 0 },
    ],

    // 15
    [
        { ko: "건물", step: 2 },
        { ko: "왼쪽 방향으로", step: 1 },
        { ko: "돌아가세요.", step: 0 },
    ],

    // 16
    [
        { ko: "그녀는", step: 0 },
        { ko: "하늘 쪽을", step: 1 },
        { ko: "바라보고 있어요.", step: 0 },
    ],

    // 17
    [
        { ko: "그 차가", step: 0 },
        { ko: "우리 쪽으로", step: 1 },
        { ko: "오고 있어요.", step: 0 },
    ],

    // 21
    [
        { ko: "그 새는", step: 0 },
        { ko: "나무들을 향해", step: 1 },
        { ko: "날아갔어요.", step: 0 },
    ],

    // 22
    [
        { ko: "우리는", step: 0 },
        { ko: "산 쪽으로", step: 1 },
        { ko: "차를 몰았어요.", step: 0 },
    ],


    // 25
    [
        { ko: "그녀는", step: 0 },
        { ko: "하늘 쪽을", step: 1 },
        { ko: "가리켰어요.", step: 0 },
    ],

    // 26
    [
        { ko: "그 배는", step: 0 },
        { ko: "섬을 향해", step: 1 },
        { ko: "가고 있어요.", step: 0 },
    ],

    // 27
    [
        { ko: "나는 천천히", step: 0 },
        { ko: "그 소리가 나는 쪽으로", step: 1 },
        { ko: "걸어갔어요.", step: 0 },
    ],
];