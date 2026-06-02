const data000 = [
    {
        en: { me: "What do you do after dinner?", you: "I usually watch TV." },
        ko: { me: "저녁 식사 후에 무엇을 하세요?", you: "저는 보통 TV를 봐요." }
    },
    {
        en: { me: "What do you do after dinner?", you: "I take a walk around my neighborhood." },
        ko: { me: "저녁 식사 후에 무엇을 하세요?", you: "저는 동네를 산책해요." }
    },
    {
        en: { me: "What do you do after dinner?", you: "I wash the dishes." },
        ko: { me: "저녁 식사 후에 무엇을 하세요?", you: "저는 설거지를 해요." }
    },
    {
        en: { me: "What do you do after dinner?", you: "I spend time with my family." },
        ko: { me: "저녁 식사 후에 무엇을 하세요?", you: "저는 가족과 시간을 보내요." }
    },
    {
        en: { me: "What do you do after dinner?", you: "I read a book." },
        ko: { me: "저녁 식사 후에 무엇을 하세요?", you: "저는 책을 읽어요." }
    },
    {
        en: { me: "What do you do after dinner?", you: "I study English for an hour." },
        ko: { me: "저녁 식사 후에 무엇을 하세요?", you: "저는 한 시간 동안 영어를 공부해요." }
    },
    {
        en: { me: "What do you do after dinner?", you: "I play video games." },
        ko: { me: "저녁 식사 후에 무엇을 하세요?", you: "저는 비디오 게임을 해요." }
    },
    {
        en: { me: "What do you do after dinner?", you: "I check my emails." },
        ko: { me: "저녁 식사 후에 무엇을 하세요?", you: "저는 이메일을 확인해요." }
    },
    {
        en: { me: "What do you do after dinner?", you: "I listen to music." },
        ko: { me: "저녁 식사 후에 무엇을 하세요?", you: "저는 음악을 들어요." }
    },
    {
        en: { me: "What do you do after dinner?", you: "I just relax on the couch." },
        ko: { me: "저녁 식사 후에 무엇을 하세요?", you: "저는 그냥 소파에서 쉬어요." }
    },

    {
        en: { me: "What do you do after dinner?", you: "I go to the gym." },
        ko: { me: "저녁 식사 후에 무엇을 하세요?", you: "저는 헬스장에 가요." }
    },
    {
        en: { me: "What do you do after dinner?", you: "I take my dog for a walk." },
        ko: { me: "저녁 식사 후에 무엇을 하세요?", you: "저는 강아지와 산책해요." }
    },
    {
        en: { me: "What do you do after dinner?", you: "I watch YouTube videos." },
        ko: { me: "저녁 식사 후에 무엇을 하세요?", you: "저는 유튜브 영상을 봐요." }
    },
    {
        en: { me: "What do you do after dinner?", you: "I call my parents." },
        ko: { me: "저녁 식사 후에 무엇을 하세요?", you: "저는 부모님께 전화해요." }
    },
    {
        en: { me: "What do you do after dinner?", you: "I clean my room." },
        ko: { me: "저녁 식사 후에 무엇을 하세요?", you: "저는 방을 청소해요." }
    },
    {
        en: { me: "What do you do after dinner?", you: "I work on my hobby projects." },
        ko: { me: "저녁 식사 후에 무엇을 하세요?", you: "저는 취미 프로젝트를 해요." }
    },
    {
        en: { me: "What do you do after dinner?", you: "I take an online course." },
        ko: { me: "저녁 식사 후에 무엇을 하세요?", you: "저는 온라인 강의를 들어요." }
    },
    {
        en: { me: "What do you do after dinner?", you: "I prepare for the next day." },
        ko: { me: "저녁 식사 후에 무엇을 하세요?", you: "저는 다음 날을 준비해요." }
    },
    {
        en: { me: "What do you do after dinner?", you: "I chat with my friends online." },
        ko: { me: "저녁 식사 후에 무엇을 하세요?", you: "저는 친구들과 온라인으로 대화해요." }
    },
    {
        en: { me: "What do you do after dinner?", you: "I practice playing the guitar." },
        ko: { me: "저녁 식사 후에 무엇을 하세요?", you: "저는 기타 연주를 연습해요." }
    },

    {
        en: { me: "What do you do after dinner?", you: "I go shopping online." },
        ko: { me: "저녁 식사 후에 무엇을 하세요?", you: "저는 온라인 쇼핑을 해요." }
    },
    {
        en: { me: "What do you do after dinner?", you: "I write in my journal." },
        ko: { me: "저녁 식사 후에 무엇을 하세요?", you: "저는 일기를 써요." }
    },
    {
        en: { me: "What do you do after dinner?", you: "I practice speaking English." },
        ko: { me: "저녁 식사 후에 무엇을 하세요?", you: "저는 영어 회화를 연습해요." }
    },
    {
        en: { me: "What do you do after dinner?", you: "I watch a movie." },
        ko: { me: "저녁 식사 후에 무엇을 하세요?", you: "저는 영화를 봐요." }
    },
    {
        en: { me: "What do you do after dinner?", you: "I organize my desk." },
        ko: { me: "저녁 식사 후에 무엇을 하세요?", you: "저는 책상을 정리해요." }
    },
    {
        en: { me: "What do you do after dinner?", you: "I water my plants." },
        ko: { me: "저녁 식사 후에 무엇을 하세요?", you: "저는 화분에 물을 줘요." }
    },
    {
        en: { me: "What do you do after dinner?", you: "I browse the internet." },
        ko: { me: "저녁 식사 후에 무엇을 하세요?", you: "저는 인터넷을 둘러봐요." }
    },
    {
        en: { me: "What do you do after dinner?", you: "I review my schedule." },
        ko: { me: "저녁 식사 후에 무엇을 하세요?", you: "저는 일정을 확인해요." }
    },
    {
        en: { me: "What do you do after dinner?", you: "I practice coding." },
        ko: { me: "저녁 식사 후에 무엇을 하세요?", you: "저는 코딩을 연습해요." }
    },
    {
        en: { me: "What do you do after dinner?", you: "I read the news." },
        ko: { me: "저녁 식사 후에 무엇을 하세요?", you: "저는 뉴스를 읽어요." }
    },
    {
        en: { me: "What do you do after dinner?", you: "I take a bath." },
        ko: { me: "저녁 식사 후에 무엇을 하세요?", you: "저는 목욕을 해요." }
    },
    {
        en: { me: "What do you do after dinner?", you: "I do some stretching." },
        ko: { me: "저녁 식사 후에 무엇을 하세요?", you: "저는 스트레칭을 해요." }
    },
    {
        en: { me: "What do you do after dinner?", you: "I learn something new online." },
        ko: { me: "저녁 식사 후에 무엇을 하세요?", you: "저는 온라인으로 새로운 것을 배워요." }
    },
    {
        en: { me: "What do you do after dinner?", you: "I work on side projects." },
        ko: { me: "저녁 식사 후에 무엇을 하세요?", you: "저는 개인 프로젝트를 해요." }
    },
    {
        en: { me: "What do you do after dinner?", you: "I watch a drama series." },
        ko: { me: "저녁 식사 후에 무엇을 하세요?", you: "저는 드라마를 봐요." }
    },
    {
        en: { me: "What do you do after dinner?", you: "I make a cup of tea." },
        ko: { me: "저녁 식사 후에 무엇을 하세요?", you: "저는 차를 한 잔 마셔요." }
    },
    {
        en: { me: "What do you do after dinner?", you: "I listen to a podcast." },
        ko: { me: "저녁 식사 후에 무엇을 하세요?", you: "저는 팟캐스트를 들어요." }
    },
    {
        en: { me: "What do you do after dinner?", you: "I study for an exam." },
        ko: { me: "저녁 식사 후에 무엇을 하세요?", you: "저는 시험 공부를 해요." }
    },
    {
        en: { me: "What do you do after dinner?", you: "I spend time on social media." },
        ko: { me: "저녁 식사 후에 무엇을 하세요?", you: "저는 SNS를 해요." }
    },
    {
        en: { me: "What do you do after dinner?", you: "I plan my weekend." },
        ko: { me: "저녁 식사 후에 무엇을 하세요?", you: "저는 주말 계획을 세워요." }
    },
    {
        en: { me: "What do you do after dinner?", you: "I practice the piano." },
        ko: { me: "저녁 식사 후에 무엇을 하세요?", you: "저는 피아노를 연습해요." }
    },
    {
        en: { me: "What do you do after dinner?", you: "I draw pictures." },
        ko: { me: "저녁 식사 후에 무엇을 하세요?", you: "저는 그림을 그려요." }
    },
    {
        en: { me: "What do you do after dinner?", you: "I answer messages." },
        ko: { me: "저녁 식사 후에 무엇을 하세요?", you: "저는 메시지에 답장해요." }
    },
    {
        en: { me: "What do you do after dinner?", you: "I fold the laundry." },
        ko: { me: "저녁 식사 후에 무엇을 하세요?", you: "저는 빨래를 개요." }
    },
    {
        en: { me: "What do you do after dinner?", you: "I practice photography." },
        ko: { me: "저녁 식사 후에 무엇을 하세요?", you: "저는 사진 촬영을 연습해요." }
    },
    {
        en: { me: "What do you do after dinner?", you: "I learn new vocabulary." },
        ko: { me: "저녁 식사 후에 무엇을 하세요?", you: "저는 새로운 단어를 배워요." }
    },
    {
        en: { me: "What do you do after dinner?", you: "I meditate for twenty minutes." },
        ko: { me: "저녁 식사 후에 무엇을 하세요?", you: "저는 20분 동안 명상해요." }
    },
    {
        en: { me: "What do you do after dinner?", you: "I help my kids with homework." },
        ko: { me: "저녁 식사 후에 무엇을 하세요?", you: "저는 아이들의 숙제를 도와줘요." }
    },
    {
        en: { me: "What do you do after dinner?", you: "I prepare tomorrow's lunch." },
        ko: { me: "저녁 식사 후에 무엇을 하세요?", you: "저는 내일 점심을 준비해요." }
    },
    {
        en: { me: "What do you do after dinner?", you: "I just sit and relax." },
        ko: { me: "저녁 식사 후에 무엇을 하세요?", you: "저는 그냥 앉아서 쉬어요." }
    }
]