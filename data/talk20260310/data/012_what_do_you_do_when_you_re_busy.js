const data012 = [
    {
        en: { me: "What do you do when you're busy?", you: "I focus on my work." },
        ko: { me: "바쁠 때 뭐 하세요?", you: "일에 집중해요." }
    },
    {
        en: { me: "What do you do when you're busy?", you: "I make a to-do list." },
        ko: { me: "바쁠 때 뭐 하세요?", you: "할 일 목록을 만들어요." }
    },
    {
        en: { me: "What do you do when you're busy?", you: "I prioritize my tasks." },
        ko: { me: "바쁠 때 뭐 하세요?", you: "일의 우선순위를 정해요." }
    },
    {
        en: { me: "What do you do when you're busy?", you: "I work quickly." },
        ko: { me: "바쁠 때 뭐 하세요?", you: "빠르게 일해요." }
    },
    {
        en: { me: "What do you do when you're busy?", you: "I skip distractions." },
        ko: { me: "바쁠 때 뭐 하세요?", you: "방해 요소를 피해요." }
    },
    {
        en: { me: "What do you do when you're busy?", you: "I check my schedule." },
        ko: { me: "바쁠 때 뭐 하세요?", you: "일정을 확인해요." }
    },
    {
        en: { me: "What do you do when you're busy?", you: "I work overtime." },
        ko: { me: "바쁠 때 뭐 하세요?", you: "야근해요." }
    },
    {
        en: { me: "What do you do when you're busy?", you: "I take short breaks." },
        ko: { me: "바쁠 때 뭐 하세요?", you: "짧게 쉬어요." }
    },
    {
        en: { me: "What do you do when you're busy?", you: "I stay organized." },
        ko: { me: "바쁠 때 뭐 하세요?", you: "정리된 상태를 유지해요." }
    },
    {
        en: { me: "What do you do when you're busy?", you: "I answer emails quickly." },
        ko: { me: "바쁠 때 뭐 하세요?", you: "이메일을 빨리 답장해요." }
    },

    {
        en: { me: "What do you do when you're busy?", you: "I work on one task at a time." },
        ko: { me: "바쁠 때 뭐 하세요?", you: "한 번에 하나씩 해요." }
    },
    {
        en: { me: "What do you do when you're busy?", you: "I avoid wasting time." },
        ko: { me: "바쁠 때 뭐 하세요?", you: "시간 낭비를 안 해요." }
    },
    {
        en: { me: "What do you do when you're busy?", you: "I wake up early." },
        ko: { me: "바쁠 때 뭐 하세요?", you: "일찍 일어나요." }
    },
    {
        en: { me: "What do you do when you're busy?", you: "I plan my day." },
        ko: { me: "바쁠 때 뭐 하세요?", you: "하루 계획을 세워요." }
    },
    {
        en: { me: "What do you do when you're busy?", you: "I multitask." },
        ko: { me: "바쁠 때 뭐 하세요?", you: "여러 일을 동시에 해요." }
    },
    {
        en: { me: "What do you do when you're busy?", you: "I set deadlines." },
        ko: { me: "바쁠 때 뭐 하세요?", you: "마감 시간을 정해요." }
    },
    {
        en: { me: "What do you do when you're busy?", you: "I stay focused." },
        ko: { me: "바쁠 때 뭐 하세요?", you: "집중을 유지해요." }
    },
    {
        en: { me: "What do you do when you're busy?", you: "I drink coffee." },
        ko: { me: "바쁠 때 뭐 하세요?", you: "커피를 마셔요." }
    },
    {
        en: { me: "What do you do when you're busy?", you: "I skip social media." },
        ko: { me: "바쁠 때 뭐 하세요?", you: "SNS를 안 봐요." }
    },
    {
        en: { me: "What do you do when you're busy?", you: "I work with urgency." },
        ko: { me: "바쁠 때 뭐 하세요?", you: "급하게 처리해요." }
    },

    {
        en: { me: "What do you do when you're busy?", you: "I stay at my desk." },
        ko: { me: "바쁠 때 뭐 하세요?", you: "책상에 계속 있어요." }
    },
    {
        en: { me: "What do you do when you're busy?", you: "I take notes." },
        ko: { me: "바쁠 때 뭐 하세요?", you: "메모를 해요." }
    },
    {
        en: { me: "What do you do when you're busy?", you: "I answer calls quickly." },
        ko: { me: "바쁠 때 뭐 하세요?", you: "전화를 빨리 받아요." }
    },
    {
        en: { me: "What do you do when you're busy?", you: "I eat while working." },
        ko: { me: "바쁠 때 뭐 하세요?", you: "일하면서 먹어요." }
    },
    {
        en: { me: "What do you do when you're busy?", you: "I focus on deadlines." },
        ko: { me: "바쁠 때 뭐 하세요?", you: "마감에 집중해요." }
    },
    {
        en: { me: "What do you do when you're busy?", you: "I reduce distractions." },
        ko: { me: "바쁠 때 뭐 하세요?", you: "방해를 줄여요." }
    },
    {
        en: { me: "What do you do when you're busy?", you: "I stay calm." },
        ko: { me: "바쁠 때 뭐 하세요?", you: "차분하게 있어요." }
    },
    {
        en: { me: "What do you do when you're busy?", you: "I work late." },
        ko: { me: "바쁠 때 뭐 하세요?", you: "늦게까지 일해요." }
    },
    {
        en: { me: "What do you do when you're busy?", you: "I manage my time." },
        ko: { me: "바쁠 때 뭐 하세요?", you: "시간을 관리해요." }
    },
    {
        en: { me: "What do you do when you're busy?", you: "I try not to panic." },
        ko: { me: "바쁠 때 뭐 하세요?", you: "당황하지 않으려고 해요." }
    },

    {
        en: { me: "What do you do when you're busy?", you: "I stay productive." },
        ko: { me: "바쁠 때 뭐 하세요?", you: "생산적으로 일해요." }
    },
    {
        en: { me: "What do you do when you're busy?", you: "I finish urgent tasks first." },
        ko: { me: "바쁠 때 뭐 하세요?", you: "급한 일부터 끝내요." }
    },
    {
        en: { me: "What do you do when you're busy?", you: "I check messages later." },
        ko: { me: "바쁠 때 뭐 하세요?", you: "메시지는 나중에 봐요." }
    },
    {
        en: { me: "What do you do when you're busy?", you: "I keep working without stopping." },
        ko: { me: "바쁠 때 뭐 하세요?", you: "멈추지 않고 계속 일해요." }
    },
    {
        en: { me: "What do you do when you're busy?", you: "I stay motivated." },
        ko: { me: "바쁠 때 뭐 하세요?", you: "동기부여를 유지해요." }
    },
    {
        en: { me: "What do you do when you're busy?", you: "I take deep breaths sometimes." },
        ko: { me: "바쁠 때 뭐 하세요?", you: "가끔 깊게 숨을 쉬어요." }
    },
    {
        en: { me: "What do you do when you're busy?", you: "I focus on one thing." },
        ko: { me: "바쁠 때 뭐 하세요?", you: "하나에 집중해요." }
    },
    {
        en: { me: "What do you do when you're busy?", you: "I avoid unnecessary talk." },
        ko: { me: "바쁠 때 뭐 하세요?", you: "불필요한 대화를 피해요." }
    },
    {
        en: { me: "What do you do when you're busy?", you: "I keep going until it's done." },
        ko: { me: "바쁠 때 뭐 하세요?", you: "끝날 때까지 계속해요." }
    },
    {
        en: { me: "What do you do when you're busy?", you: "I feel satisfied after finishing." },
        ko: { me: "바쁠 때 뭐 하세요?", you: "끝내고 나면 만족해요." }
    }
];
