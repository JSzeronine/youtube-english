const data000 = [
  {
    en: { me: "How do you wake up early?", you: "I go to bed early." },
    ko: { me: "어떻게 일찍 일어나요?", you: "일찍 자요." }
  },
  {
    en: { me: "How do you start your day?", you: "I stretch and get ready." },
    ko: { me: "하루를 어떻게 시작해요?", you: "스트레칭하고 준비해요." }
  },
  {
    en: { me: "How do you sleep well?", you: "I avoid my phone before bed." },
    ko: { me: "잠을 어떻게 잘 자요?", you: "자기 전에 폰을 안 봐요." }
  },
  {
    en: { me: "How do you study English?", you: "I practice every day." },
    ko: { me: "영어 어떻게 공부해요?", you: "매일 연습해요." }
  },
  {
    en: { me: "How do you learn new words?", you: "I write and review them." },
    ko: { me: "새 단어 어떻게 외워요?", you: "적고 복습해요." }
  },
  {
    en: { me: "How do you remember things?", you: "I repeat them often." },
    ko: { me: "어떻게 기억해요?", you: "자주 반복해요." }
  },
  {
    en: { me: "How do you focus better?", you: "I remove distractions." },
    ko: { me: "어떻게 집중해요?", you: "방해 요소를 없애요." }
  },
  {
    en: { me: "How do you relax after work?", you: "I listen to music." },
    ko: { me: "퇴근 후 어떻게 쉬어요?", you: "음악을 들어요." }
  },
  {
    en: { me: "How do you spend your weekends?", you: "I rest or meet friends." },
    ko: { me: "주말 어떻게 보내요?", you: "쉬거나 친구 만나요." }
  },
  {
    en: { me: "How do you make friends?", you: "I talk to people first." },
    ko: { me: "친구 어떻게 사귀어요?", you: "먼저 말을 걸어요." }
  },

  {
    en: { me: "How do you talk to strangers?", you: "I start with a greeting." },
    ko: { me: "모르는 사람과 어떻게 말해요?", you: "인사로 시작해요." }
  },
  {
    en: { me: "How do you start a conversation?", you: "I ask a simple question." },
    ko: { me: "대화를 어떻게 시작해요?", you: "간단한 질문을 해요." }
  },
  {
    en: { me: "How do you keep in touch?", you: "I message regularly." },
    ko: { me: "연락 어떻게 유지해요?", you: "자주 연락해요." }
  },
  {
    en: { me: "How do you apologize?", you: "I say sorry sincerely." },
    ko: { me: "어떻게 사과해요?", you: "진심으로 사과해요." }
  },
  {
    en: { me: "How do you express feelings?", you: "I talk about them." },
    ko: { me: "감정 어떻게 표현해요?", you: "말로 표현해요." }
  },
  {
    en: { me: "How do you deal with stress?", you: "I take a walk." },
    ko: { me: "스트레스 어떻게 관리해요?", you: "산책해요." }
  },
  {
    en: { me: "How do you calm down?", you: "I take deep breaths." },
    ko: { me: "어떻게 진정해요?", you: "심호흡해요." }
  },
  {
    en: { me: "How do you stay motivated?", you: "I set small goals." },
    ko: { me: "동기 어떻게 유지해요?", you: "작은 목표를 세워요." }
  },
  {
    en: { me: "How do you overcome fear?", you: "I face it step by step." },
    ko: { me: "두려움 어떻게 극복해요?", you: "단계적으로 마주해요." }
  },
  {
    en: { me: "How do you deal with failure?", you: "I learn from it." },
    ko: { me: "실패 어떻게 대처해요?", you: "거기서 배워요." }
  },

  {
    en: { me: "How do you manage your time?", you: "I make a schedule." },
    ko: { me: "시간 어떻게 관리해요?", you: "일정을 짜요." }
  },
  {
    en: { me: "How do you plan your day?", you: "I write a to-do list." },
    ko: { me: "하루 계획 어떻게 세워요?", you: "할 일을 적어요." }
  },
  {
    en: { me: "How do you take notes?", you: "I write key points." },
    ko: { me: "필기 어떻게 해요?", you: "핵심만 적어요." }
  },
  {
    en: { me: "How do you prepare for exams?", you: "I review every day." },
    ko: { me: "시험 어떻게 준비해요?", you: "매일 복습해요." }
  },
  {
    en: { me: "How do you solve problems?", you: "I think step by step." },
    ko: { me: "문제 어떻게 해결해요?", you: "단계별로 생각해요." }
  },
  {
    en: { me: "How do you stay productive?", you: "I avoid distractions." },
    ko: { me: "어떻게 생산적으로 지내요?", you: "방해 요소를 피해요." }
  },
  {
    en: { me: "How do you improve skills?", you: "I practice daily." },
    ko: { me: "실력 어떻게 늘려요?", you: "매일 연습해요." }
  },
  {
    en: { me: "How do you learn faster?", you: "I focus on basics." },
    ko: { me: "더 빨리 어떻게 배워요?", you: "기초에 집중해요." }
  },
  {
    en: { me: "How do you finish tasks quickly?", you: "I don’t procrastinate." },
    ko: { me: "일 어떻게 빨리 끝내요?", you: "미루지 않아요." }
  },
  {
    en: { me: "How do you organize work?", you: "I prioritize tasks." },
    ko: { me: "일 어떻게 정리해요?", you: "우선순위로 정리해요." }
  },

  {
    en: { me: "How do you cook dinner?", you: "I follow recipes." },
    ko: { me: "저녁 어떻게 요리해요?", you: "레시피를 따라해요." }
  },
  {
    en: { me: "How do you clean your room?", you: "I clean step by step." },
    ko: { me: "방 어떻게 청소해요?", you: "단계별로 청소해요." }
  },
  {
    en: { me: "How do you do laundry?", you: "I separate clothes first." },
    ko: { me: "빨래 어떻게 해요?", you: "먼저 분리해요." }
  },
  {
    en: { me: "How do you save money?", you: "I avoid unnecessary spending." },
    ko: { me: "돈 어떻게 아껴요?", you: "불필요한 소비를 줄여요." }
  },
  {
    en: { me: "How do you use this app?", you: "I learn step by step." },
    ko: { me: "이 앱 어떻게 써요?", you: "하나씩 배워요." }
  },
  {
    en: { me: "How do you fix your phone?", you: "I restart it first." },
    ko: { me: "핸드폰 어떻게 고쳐요?", you: "먼저 재시작해요." }
  },
  {
    en: { me: "How do you travel cheaply?", you: "I book early." },
    ko: { me: "여행 어떻게 저렴하게 해요?", you: "미리 예약해요." }
  },
  {
    en: { me: "How do you get better sleep?", you: "I avoid screens." },
    ko: { me: "잠 어떻게 잘 자요?", you: "화면을 안 봐요." }
  },
  {
    en: { me: "How do you stay healthy?", you: "I exercise regularly." },
    ko: { me: "건강 어떻게 유지해요?", you: "규칙적으로 운동해요." }
  },
  {
    en: { me: "How do you enjoy life?", you: "I focus on small joys." },
    ko: { me: "인생 어떻게 즐겨요?", you: "작은 즐거움에 집중해요." }
  },

  {
    en: { me: "How do you wake up early?", you: "I set multiple alarms." },
    ko: { me: "어떻게 일찍 일어나요?", you: "알람을 여러 개 맞춰요." }
  },
  {
    en: { me: "How do you go to work?", you: "I take the subway." },
    ko: { me: "어떻게 출근해요?", you: "지하철 타요." }
  },
  {
    en: { me: "How do you study effectively?", you: "I focus without distractions." },
    ko: { me: "어떻게 효과적으로 공부해요?", you: "방해 없이 집중해요." }
  },
  {
    en: { me: "How do you stay calm?", you: "I breathe slowly." },
    ko: { me: "어떻게 침착하게 있어요?", you: "천천히 숨 쉬어요." }
  },
  {
    en: { me: "How do you make decisions?", you: "I think carefully." },
    ko: { me: "결정 어떻게 해요?", you: "신중하게 생각해요." }
  },
  {
    en: { me: "How do you deal with people?", you: "I stay polite." },
    ko: { me: "사람들과 어떻게 지내요?", you: "예의 있게 대해요." }
  },
  {
    en: { me: "How do you learn new skills?", you: "I practice daily." },
    ko: { me: "새 기술 어떻게 배워요?", you: "매일 연습해요." }
  },
  {
    en: { me: "How do you stay positive?", you: "I think positively." },
    ko: { me: "어떻게 긍정적으로 지내요?", you: "긍정적으로 생각해요." }
  },
  {
    en: { me: "How do you handle pressure?", you: "I stay calm." },
    ko: { me: "압박 어떻게 견뎌요?", you: "침착하게 있어요." }
  },
  {
    en: { me: "How do you improve English speaking?", you: "I speak every day." },
    ko: { me: "영어 말하기 어떻게 늘려요?", you: "매일 말해요." }
  },

  {
    en: { me: "How do you watch movies?", you: "I relax and enjoy them." },
    ko: { me: "영화 어떻게 봐요?", you: "편하게 즐겨요." }
  },
  {
    en: { me: "How do you listen to music?", you: "I listen with headphones." },
    ko: { me: "음악 어떻게 들어요?", you: "이어폰으로 들어요." }
  },
  {
    en: { me: "How do you play games?", you: "I play for fun." },
    ko: { me: "게임 어떻게 해요?", you: "재미로 해요." }
  },
  {
    en: { me: "How do you read books?", you: "I read slowly and focus." },
    ko: { me: "책 어떻게 읽어요?", you: "천천히 집중해서 읽어요." }
  },
  {
    en: { me: "How do you work efficiently?", you: "I plan everything." },
    ko: { me: "일 어떻게 효율적으로 해요?", you: "계획하고 해요." }
  },
  {
    en: { me: "How do you study at home?", you: "I study in a quiet place." },
    ko: { me: "집에서 어떻게 공부해요?", you: "조용한 곳에서 해요." }
  },
  {
    en: { me: "How do you meet new people?", you: "I introduce myself." },
    ko: { me: "새 사람 어떻게 만나요?", you: "자기소개해요." }
  },
  {
    en: { me: "How do you handle mistakes?", you: "I learn and improve." },
    ko: { me: "실수 어떻게 다뤄요?", you: "배우고 고쳐요." }
  },
  {
    en: { me: "How do you stay focused?", you: "I turn off distractions." },
    ko: { me: "어떻게 집중해요?", you: "방해를 꺼요." }
  },
  {
    en: { me: "How do you live your life?", you: "I try my best every day." },
    ko: { me: "인생 어떻게 살아가요?", you: "매일 최선을 다해요." }
  }
];
