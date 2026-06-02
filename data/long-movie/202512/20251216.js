const enDatas = [
    [
        { en: 'I', step: 0 },
        { en: 'wake up', step: 1 },
        { en: 'at seven', step: 2 },
        { en: 'every morning.', step: 3 }
    ],
    [
        { en: 'I', step: 0 },
        { en: 'usually', step: 1 },
        { en: 'make', step: 2 },
        { en: 'some toast', step: 3 },
        { en: 'for breakfast.', step: 4 }
    ],
    [
        { en: 'Then', step: 0 },
        { en: 'I', step: 1 },
        { en: 'take', step: 2 },
        { en: 'the subway', step: 3 },
        { en: 'to go', step: 4 },
        { en: 'to work.', step: 5 }
    ],
    [
        { en: 'My office', step: 0 },
        { en: 'is', step: 1 },
        { en: 'near', step: 2 },
        { en: 'the station.', step: 3 }
    ],
    [
        { en: 'I', step: 0 },
        { en: 'always', step: 1 },
        { en: 'check', step: 2 },
        { en: 'my emails', step: 3 },
        { en: 'first thing.', step: 4 }
    ],
    [
        { en: 'My coworkers', step: 0 },
        { en: 'sometimes', step: 1 },
        { en: 'bring', step: 2 },
        { en: 'delicious snacks', step: 3 },
        { en: 'to', step: 4 },
        { en: 'the meeting.', step: 5 }
    ],
    [
        { en: 'We', step: 0 },
        { en: 'finish', step: 1 },
        { en: 'the work', step: 2 },
        { en: 'at six.', step: 3 }
    ],
    [
        { en: 'I', step: 0 },
        { en: 'usually', step: 1 },
        { en: 'exercise', step: 2 },
        { en: 'at the gym', step: 3 },
        { en: 'after work.', step: 4 }
    ],
    [
        { en: 'It', step: 0 },
        { en: 'helps', step: 1 },
        { en: 'me', step: 2 },
        { en: 'reduce', step: 3 },
        { en: 'my stress', step: 4 },
        { en: 'effectively.', step: 5 }
    ],
    [
        { en: 'I', step: 0 },
        { en: 'feel', step: 1 },
        { en: 'very happy', step: 2 },
        { en: 'now.', step: 3 }
    ],
    [
        { en: 'I', step: 0 },
        { en: 'stop by', step: 1 },
        { en: 'the store', step: 2 },
        { en: 'to buy', step: 3 },
        { en: 'some milk.', step: 4 }
    ],
    [
        { en: 'My friends', step: 0 },
        { en: 'often', step: 1 },
        { en: 'call', step: 2 },
        { en: 'me', step: 3 },
        { en: 'in the evening.', step: 4 }
    ],
    [
        { en: 'We', step: 0 },
        { en: 'usually', step: 1 },
        { en: 'talk', step: 2 },
        { en: 'about', step: 3 },
        { en: 'our', step: 4 },
        { en: 'weekend plans.', step: 5 }
    ],
    [
        { en: 'I', step: 0 },
        { en: 'read', step: 1 },
        { en: 'a book', step: 2 },
        { en: 'before sleeping.', step: 3 }
    ]
];

const koDatas = [
    [
        { ko: '나는', step: 0 },
        { ko: '매일 아침', step: 3 },
        { ko: '일곱 시에', step: 2 },
        { ko: '일어나요.', step: 1 }
    ],
    [
        { ko: '나는', step: 0 },
        { ko: '보통', step: 1 },
        { ko: '아침 식사로', step: 4 },
        { ko: '토스트를', step: 3 },
        { ko: '만들어요.', step: 2 }
    ],
    [
        { ko: '그러고 나서', step: 0 },
        { ko: '나는', step: 1 },
        { ko: '출근하기', step: 5 },
        { ko: '위해', step: 4 },
        { ko: '지하철을', step: 3 },
        { ko: '타요.', step: 2 }
    ],
    [
        { ko: '나의 사무실은', step: 0 },
        { ko: '역', step: 3 },
        { ko: '근처에', step: 2 },
        { ko: '있어요.', step: 1 }
    ],
    [
        { ko: '나는', step: 0 },
        { ko: '항상', step: 1 },
        { ko: '가장 먼저', step: 4 },
        { ko: '이메일을', step: 3 },
        { ko: '확인해요.', step: 2 }
    ],
    [
        { ko: '내 동료들은', step: 0 },
        { ko: '가끔', step: 1 },
        { ko: '회의에', step: 5 },
        { ko: '맛있는 간식을', step: 3 },
        { ko: '가져', step: 2 },
        { ko: '와요.', step: 4 }
    ],
    [
        { ko: '우리는', step: 0 },
        { ko: '여섯 시에', step: 3 },
        { ko: '업무를', step: 2 },
        { ko: '끝내요.', step: 1 }
    ],
    [
        { ko: '나는', step: 0 },
        { ko: '보통', step: 1 },
        { ko: '퇴근 후에', step: 4 },
        { ko: '체육관에서', step: 3 },
        { ko: '운동해요.', step: 2 }
    ],
    [
        { ko: '그것은', step: 0 },
        { ko: '내가', step: 2 },
        { ko: '스트레스를', step: 4 },
        { ko: '효과적으로', step: 5 },
        { ko: '줄이도록', step: 3 },
        { ko: '도와줘요.', step: 1 }
    ],
    [
        { ko: '나는', step: 0 },
        { ko: '이제', step: 3 },
        { ko: '매우 행복', step: 2 },
        { ko: '해요.', step: 1 }
    ],
    [
        { ko: '나는', step: 0 },
        { ko: '우유를', step: 4 },
        { ko: '사기', step: 3 },
        { ko: '위해', step: 2 },
        { ko: '가게에 들러요.', step: 1 }
    ],
    [
        { ko: '내 친구들은', step: 0 },
        { ko: '종종', step: 1 },
        { ko: '저녁에', step: 4 },
        { ko: '나에게', step: 3 },
        { ko: '전화해요.', step: 2 }
    ],
    [
        { ko: '우리는', step: 0 },
        { ko: '보통', step: 1 },
        { ko: '우리의', step: 4 },
        { ko: '주말 계획에', step: 5 },
        { ko: '대해', step: 3 },
        { ko: '이야기해요.', step: 2 }
    ],
    [
        { ko: '나는', step: 0 },
        { ko: '자기 전에', step: 3 },
        { ko: '책을', step: 2 },
        { ko: '읽어요.', step: 1 }
    ]
];

