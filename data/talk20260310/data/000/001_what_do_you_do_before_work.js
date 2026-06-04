const data001 = [
    {
        en: { me: "What do you do before work?", you: "I usually grab a coffee." },
        ko: { me: "출근 전에 뭐 하세요?", you: "보통 커피 한 잔을 사 마셔요." }
    },
    {
        en: { me: "What do you do before work?", you: "I usually hit the gym." },
        ko: { me: "출근 전에 뭐 하세요?", you: "보통 헬스장에 가요." }
    },
    {
        en: { me: "What do you do before work?", you: "I take a quick shower and get ready." },
        ko: { me: "출근 전에 뭐 하세요?", you: "간단히 샤워하고 준비해요." }
    },
    {
        en: { me: "What do you do before work?", you: "I check my phone for a bit." },
        ko: { me: "출근 전에 뭐 하세요?", you: "잠깐 휴대폰을 확인해요." }
    },
    {
        en: { me: "What do you do before work?", you: "I usually eat breakfast at home." },
        ko: { me: "출근 전에 뭐 하세요?", you: "보통 집에서 아침을 먹어요." }
    },
    {
        en: { me: "What do you do before work?", you: "I walk my dog." },
        ko: { me: "출근 전에 뭐 하세요?", you: "강아지랑 산책해요." }
    },
    {
        en: { me: "What do you do before work?", you: "I listen to music." },
        ko: { me: "출근 전에 뭐 하세요?", you: "음악을 들어요." }
    },
    {
        en: { me: "What do you do before work?", you: "I check the news." },
        ko: { me: "출근 전에 뭐 하세요?", you: "뉴스를 봐요." }
    },
    {
        en: { me: "What do you do before work?", you: "I make myself some coffee." },
        ko: { me: "출근 전에 뭐 하세요?", you: "직접 커피를 내려 마셔요." }
    },
    {
        en: { me: "What do you do before work?", you: "I get breakfast on the way." },
        ko: { me: "출근 전에 뭐 하세요?", you: "가는 길에 아침을 사 먹어요." }
    },
    {
        en: { me: "What do you do before work?", you: "I usually take my time getting ready." },
        ko: { me: "출근 전에 뭐 하세요?", you: "여유 있게 준비해요." }
    },
    {
        en: { me: "What do you do before work?", you: "I watch YouTube for a while." },
        ko: { me: "출근 전에 뭐 하세요?", you: "유튜브를 좀 봐요." }
    },
    {
        en: { me: "What do you do before work?", you: "I check my emails." },
        ko: { me: "출근 전에 뭐 하세요?", you: "이메일을 확인해요." }
    },
    {
        en: { me: "What do you do before work?", you: "I stretch a little." },
        ko: { me: "출근 전에 뭐 하세요?", you: "가볍게 스트레칭을 해요." }
    },
    {
        en: { me: "What do you do before work?", you: "I just chill at home." },
        ko: { me: "출근 전에 뭐 하세요?", you: "그냥 집에서 쉬어요." }
    },
    {
        en: { me: "What do you do before work?", you: "I take a walk around my neighborhood." },
        ko: { me: "출근 전에 뭐 하세요?", you: "동네를 한 바퀴 산책해요." }
    },
    {
        en: { me: "What do you do before work?", you: "I scroll through Instagram." },
        ko: { me: "출근 전에 뭐 하세요?", you: "인스타그램을 봐요." }
    },
    {
        en: { me: "What do you do before work?", you: "I pack my lunch." },
        ko: { me: "출근 전에 뭐 하세요?", you: "도시락을 싸요." }
    },
    {
        en: { me: "What do you do before work?", you: "I usually wake up slowly." },
        ko: { me: "출근 전에 뭐 하세요?", you: "천천히 잠을 깨요." }
    },
    {
        en: { me: "What do you do before work?", you: "I drink a lot of water." },
        ko: { me: "출근 전에 뭐 하세요?", you: "물을 많이 마셔요." }
    },

    {
        en: { me: "What do you do before work?", you: "I read a book for a while." },
        ko: { me: "출근 전에 뭐 하세요?", you: "잠깐 책을 읽어요." }
    },
    {
        en: { me: "What do you do before work?", you: "I meditate for a few minutes." },
        ko: { me: "출근 전에 뭐 하세요?", you: "몇 분 동안 명상해요." }
    },
    {
        en: { me: "What do you do before work?", you: "I plan my day." },
        ko: { me: "출근 전에 뭐 하세요?", you: "하루 계획을 세워요." }
    },
    {
        en: { me: "What do you do before work?", you: "I check my calendar." },
        ko: { me: "출근 전에 뭐 하세요?", you: "일정을 확인해요." }
    },
    {
        en: { me: "What do you do before work?", you: "I do a quick clean-up at home." },
        ko: { me: "출근 전에 뭐 하세요?", you: "집을 간단히 정리해요." }
    },
    {
        en: { me: "What do you do before work?", you: "I feed my cat." },
        ko: { me: "출근 전에 뭐 하세요?", you: "고양이 밥을 줘요." }
    },
    {
        en: { me: "What do you do before work?", you: "I play a quick game on my phone." },
        ko: { me: "출근 전에 뭐 하세요?", you: "잠깐 모바일 게임을 해요." }
    },
    {
        en: { me: "What do you do before work?", you: "I review my tasks." },
        ko: { me: "출근 전에 뭐 하세요?", you: "할 일을 다시 확인해요." }
    },
    {
        en: { me: "What do you do before work?", you: "I listen to a podcast." },
        ko: { me: "출근 전에 뭐 하세요?", you: "팟캐스트를 들어요." }
    },
    {
        en: { me: "What do you do before work?", you: "I drink some tea." },
        ko: { me: "출근 전에 뭐 하세요?", you: "차를 마셔요." }
    },
    {
        en: { me: "What do you do before work?", you: "I do my skincare routine." },
        ko: { me: "출근 전에 뭐 하세요?", you: "스킨케어를 해요." }
    },
    {
        en: { me: "What do you do before work?", you: "I iron my clothes." },
        ko: { me: "출근 전에 뭐 하세요?", you: "옷을 다려요." }
    },
    {
        en: { me: "What do you do before work?", you: "I check my commute route." },
        ko: { me: "출근 전에 뭐 하세요?", you: "출근 경로를 확인해요." }
    },
    {
        en: { me: "What do you do before work?", you: "I talk with my family." },
        ko: { me: "출근 전에 뭐 하세요?", you: "가족이랑 이야기해요." }
    },
    {
        en: { me: "What do you do before work?", you: "I write in my journal." },
        ko: { me: "출근 전에 뭐 하세요?", you: "일기를 써요." }
    },
    {
        en: { me: "What do you do before work?", you: "I practice a language." },
        ko: { me: "출근 전에 뭐 하세요?", you: "외국어를 연습해요." }
    },
    {
        en: { me: "What do you do before work?", you: "I do light exercise." },
        ko: { me: "출근 전에 뭐 하세요?", you: "가벼운 운동을 해요." }
    },
    {
        en: { me: "What do you do before work?", you: "I prepare meeting notes." },
        ko: { me: "출근 전에 뭐 하세요?", you: "회의 자료를 준비해요." }
    },
    {
        en: { me: "What do you do before work?", you: "I check the news and market updates." },
        ko: { me: "출근 전에 뭐 하세요?", you: "뉴스나 시장 소식을 확인해요." }
    },
    {
        en: { me: "What do you do before work?", you: "I do a quick laundry check." },
        ko: { me: "출근 전에 뭐 하세요?", you: "빨래를 잠깐 확인해요." }
    },
    {
        en: { me: "What do you do before work?", you: "I take another quick shower if needed." },
        ko: { me: "출근 전에 뭐 하세요?", you: "필요하면 한 번 더 샤워해요." }
    },
    {
        en: { me: "What do you do before work?", you: "I eat some fruit." },
        ko: { me: "출근 전에 뭐 하세요?", you: "과일을 먹어요." }
    },
    {
        en: { me: "What do you do before work?", you: "I open the window and get some sunlight." },
        ko: { me: "출근 전에 뭐 하세요?", you: "창문을 열고 햇빛을 쬐어요." }
    },
    {
        en: { me: "What do you do before work?", you: "I reply to messages." },
        ko: { me: "출근 전에 뭐 하세요?", you: "메시지에 답장해요." }
    },
    {
        en: { me: "What do you do before work?", you: "I set my alarms for the next day." },
        ko: { me: "출근 전에 뭐 하세요?", you: "알람을 맞춰요." }
    },
    {
        en: { me: "What do you do before work?", you: "I charge my phone." },
        ko: { me: "출근 전에 뭐 하세요?", you: "휴대폰을 충전해요." }
    },
    {
        en: { me: "What do you do before work?", you: "I water my plants." },
        ko: { me: "출근 전에 뭐 하세요?", you: "식물에 물을 줘요." }
    },
    {
        en: { me: "What do you do before work?", you: "I do some quick meal prep." },
        ko: { me: "출근 전에 뭐 하세요?", you: "간단히 식사 준비를 해요." }
    },
    {
        en: { me: "What do you do before work?", you: "I review my goals." },
        ko: { me: "출근 전에 뭐 하세요?", you: "목표를 다시 확인해요." }
    },
    {
        en: { me: "What do you do before work?", you: "I sit quietly for a moment." },
        ko: { me: "출근 전에 뭐 하세요?", you: "잠깐 조용히 앉아 있어요." }
    }
];
