const enDatas = [

    [
        { en: "Could you adjust", step: 0 },
        { en: "the volume", step: 1 },
        { en: "now", step: 2 },
        { en: "?", step: 0 },
    ],

    [
        { en: "Could you print", step: 0 },
        { en: "this document", step: 1 },
        { en: "right away", step: 2 },
        { en: "?", step: 0 },
    ],

    [
        { en: "Could you upload", step: 0 },
        { en: "the file", step: 1 },
        { en: "right now", step: 2 },
        { en: "?", step: 0 },
    ],

    [
        { en: "Could you reserve", step: 0 },
        { en: "a table", step: 1 },
        { en: "for tonight", step: 2 },
        { en: "?", step: 0 },
    ],

    [
        { en: "Could you unlock", step: 0 },
        { en: "the door", step: 1 },
        { en: "now", step: 2 },
        { en: "?", step: 0 },
    ],

    [
        { en: "Could you organize", step: 0 },
        { en: "these files", step: 1 },
        { en: "today", step: 2 },
        { en: "?", step: 0 },
    ],

    [
        { en: "Could you clean", step: 0 },
        { en: "this area", step: 1 },
        { en: "right now", step: 2 },
        { en: "?", step: 0 },
    ],

    [
        { en: "Could you charge", step: 0 },
        { en: "my phone", step: 1 },
        { en: "for a while", step: 2 },
        { en: "?", step: 0 },
    ],

    [
        { en: "Could you move", step: 0 },
        { en: "this box", step: 1 },
        { en: "over there", step: 2 },
        { en: "?", step: 0 },
    ],

    [
        { en: "Could you set", step: 0 },
        { en: "the alarm", step: 1 },
        { en: "for tomorrow", step: 2 },
        { en: "?", step: 0 },
    ],

    [
        { en: "Could you lower", step: 0 },
        { en: "the screen", step: 1 },
        { en: "a little", step: 2 },
        { en: "?", step: 0 },
    ],

    [
        { en: "Could you update", step: 0 },
        { en: "the system", step: 1 },
        { en: "today", step: 2 },
        { en: "?", step: 0 },
    ],

    [
        { en: "Could you confirm", step: 0 },
        { en: "the booking", step: 1 },
        { en: "now", step: 2 },
        { en: "?", step: 0 },
    ],

    [
        { en: "Could you forward", step: 0 },
        { en: "this email", step: 1 },
        { en: "right away", step: 2 },
        { en: "?", step: 0 },
    ],

    [
        { en: "Could you lock", step: 0 },
        { en: "the door", step: 1 },
        { en: "before leaving", step: 2 },
        { en: "?", step: 0 },
    ],

    [
        { en: "Could you prepare", step: 0 },
        { en: "the report", step: 1 },
        { en: "by tomorrow", step: 2 },
        { en: "?", step: 0 },
    ],

    [
        { en: "Could you restart", step: 0 },
        { en: "the computer", step: 1 },
        { en: "right now", step: 2 },
        { en: "?", step: 0 },
    ],

    [
        { en: "Could you check", step: 0 },
        { en: "the connection", step: 1 },
        { en: "again", step: 2 },
        { en: "?", step: 0 },
    ],

    [
        { en: "Could you save", step: 0 },
        { en: "this file", step: 1 },
        { en: "for me", step: 2 },
        { en: "?", step: 0 },
    ],

    [
        { en: "Could you install", step: 0 },
        { en: "the app", step: 1 },
        { en: "today", step: 2 },
        { en: "?", step: 0 },
    ]

];


const koDatas = [

    [
        { ko: "지금", step: 2 },
        { ko: "볼륨을", step: 1 },
        { ko: "조절해주실 수 있을까요?", step: 0 }
    ],

    [
        { ko: "지금 바로", step: 2 },
        { ko: "이 문서를", step: 1 },
        { ko: "출력해주실 수 있을까요?", step: 0 }
    ],

    [
        { ko: "지금 바로", step: 2 },
        { ko: "이 파일을", step: 1 },
        { ko: "업로드해주실 수 있을까요?", step: 0 }
    ],

    [
        { ko: "오늘 밤에", step: 2 },
        { ko: "자리를", step: 1 },
        { ko: "예약해주실 수 있을까요?", step: 0 }
    ],

    [
        { ko: "지금", step: 2 },
        { ko: "문을", step: 1 },
        { ko: "열어주실 수 있을까요?", step: 0 }
    ],

    [
        { ko: "오늘", step: 2 },
        { ko: "파일들을", step: 1 },
        { ko: "정리해주실 수 있을까요?", step: 0 }
    ],

    [
        { ko: "지금 바로", step: 2 },
        { ko: "이 구역을", step: 1 },
        { ko: "정리해주실 수 있을까요?", step: 0 }
    ],

    [
        { ko: "잠깐", step: 2 },
        { ko: "제 폰을", step: 1 },
        { ko: "충전해주실 수 있을까요?", step: 0 }
    ],

    [
        { ko: "저쪽으로", step: 2 },
        { ko: "이 박스를", step: 1 },
        { ko: "옮겨주실 수 있을까요?", step: 0 }
    ],

    [
        { ko: "내일을 위해", step: 2 },
        { ko: "알람을", step: 1 },
        { ko: "설정해주실 수 있을까요?", step: 0 }
    ],

    [
        { ko: "조금", step: 2 },
        { ko: "화면을", step: 1 },
        { ko: "낮춰주실 수 있을까요?", step: 0 }
    ],

    [
        { ko: "오늘", step: 2 },
        { ko: "시스템을", step: 1 },
        { ko: "업데이트해주실 수 있을까요?", step: 0 }
    ],

    [
        { ko: "지금", step: 2 },
        { ko: "예약을", step: 1 },
        { ko: "확인해주실 수 있을까요?", step: 0 }
    ],

    [
        { ko: "지금 바로", step: 2 },
        { ko: "이 이메일을", step: 1 },
        { ko: "전달해주실 수 있을까요?", step: 0 }
    ],

    [
        { ko: "나가기 전에", step: 2 },
        { ko: "문을", step: 1 },
        { ko: "잠가주실 수 있을까요?", step: 0 }
    ],

    [
        { ko: "내일까지", step: 2 },
        { ko: "보고서를", step: 1 },
        { ko: "준비해주실 수 있을까요?", step: 0 }
    ],

    [
        { ko: "지금 바로", step: 2 },
        { ko: "컴퓨터를", step: 1 },
        { ko: "재시작해주실 수 있을까요?", step: 0 }
    ],

    [
        { ko: "다시", step: 2 },
        { ko: "연결을", step: 1 },
        { ko: "확인해주실 수 있을까요?", step: 0 }
    ],

    [
        { ko: "저를 위해", step: 2 },
        { ko: "이 파일을", step: 1 },
        { ko: "저장해주실 수 있을까요?", step: 0 }
    ],

    [
        { ko: "오늘", step: 2 },
        { ko: "앱을", step: 1 },
        { ko: "설치해주실 수 있을까요?", step: 0 }
    ]

];