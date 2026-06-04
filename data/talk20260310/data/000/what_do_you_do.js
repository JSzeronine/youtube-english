const data000 = [
  {
    en: { me: "What do you do on weekends?", you: "I usually rest and meet friends." },
    ko: { me: "주말에 뭐 하세요?", you: "보통 쉬고 친구를 만나요." }
  },
  {
    en: { me: "What do you do in the morning?", you: "I get ready and go to work." },
    ko: { me: "아침에 뭐 하세요?", you: "준비하고 출근해요." }
  },
  {
    en: { me: "What do you do after school?", you: "I go home and rest." },
    ko: { me: "학교 끝나고 뭐 하세요?", you: "집에 가서 쉬어요." }
  },
  {
    en: { me: "What do you do after work?", you: "I relax and watch TV." },
    ko: { me: "퇴근 후에 뭐 하세요?", you: "쉬고 TV를 봐요." }
  },
  {
    en: { me: "What do you do in your free time?", you: "I listen to music or read." },
    ko: { me: "여가 시간에 뭐 하세요?", you: "음악을 듣거나 책을 읽어요." }
  },
  {
    en: { me: "What do you do when you’re bored?", you: "I watch videos or go out." },
    ko: { me: "심심할 때 뭐 하세요?", you: "영상 보거나 나가요." }
  },
  {
    en: { me: "What do you do when you’re stressed?", you: "I take a walk." },
    ko: { me: "스트레스 받을 때 뭐 하세요?", you: "산책해요." }
  },
  {
    en: { me: "What do you do when you’re tired?", you: "I rest and sleep early." },
    ko: { me: "피곤할 때 뭐 하세요?", you: "쉬고 일찍 자요." }
  },
  {
    en: { me: "What do you do on your birthday?", you: "I celebrate with my family." },
    ko: { me: "생일에 뭐 하세요?", you: "가족과 함께 축하해요." }
  },
  {
    en: { me: "What do you do on holidays?", you: "I travel or stay home." },
    ko: { me: "휴일에 뭐 하세요?", you: "여행하거나 집에 있어요." }
  },

  {
    en: { me: "What do you do at night?", you: "I relax and prepare for sleep." },
    ko: { me: "밤에 뭐 하세요?", you: "쉬고 잠 준비를 해요." }
  },
  {
    en: { me: "What do you do in the evening?", you: "I have dinner and watch TV." },
    ko: { me: "저녁에 뭐 하세요?", you: "저녁 먹고 TV를 봐요." }
  },
  {
    en: { me: "What do you do on your days off?", you: "I rest or meet friends." },
    ko: { me: "쉬는 날에 뭐 하세요?", you: "쉬거나 친구를 만나요." }
  },
  {
    en: { me: "What do you do before bed?", you: "I brush my teeth and sleep." },
    ko: { me: "자기 전에 뭐 하세요?", you: "양치하고 자요." }
  },
  {
    en: { me: "What do you do after lunch?", you: "I go back to work." },
    ko: { me: "점심 후에 뭐 하세요?", you: "다시 일을 해요." }
  },
  {
    en: { me: "What do you do after dinner?", you: "I relax at home." },
    ko: { me: "저녁 후에 뭐 하세요?", you: "집에서 쉬어요." }
  },
  {
    en: { me: "What do you do at school?", you: "I study and take classes." },
    ko: { me: "학교에서 뭐 하세요?", you: "공부하고 수업 들어요." }
  },
  {
    en: { me: "What do you do at work?", you: "I work on my tasks." },
    ko: { me: "회사에서 뭐 하세요?", you: "일을 해요." }
  },
  {
    en: { me: "What do you do at home?", you: "I rest and watch TV." },
    ko: { me: "집에서 뭐 하세요?", you: "쉬고 TV 봐요." }
  },
  {
    en: { me: "What do you do in class?", you: "I listen and take notes." },
    ko: { me: "수업에서 뭐 하세요?", you: "듣고 필기해요." }
  },

  {
    en: { me: "What do you do when you wake up?", you: "I wash my face and get ready." },
    ko: { me: "일어나면 뭐 하세요?", you: "세수하고 준비해요." }
  },
  {
    en: { me: "What do you do when you feel sick?", you: "I rest and drink water." },
    ko: { me: "아플 때 뭐 하세요?", you: "쉬고 물을 마셔요." }
  },
  {
    en: { me: "What do you do when you are happy?", you: "I smile and share it." },
    ko: { me: "행복할 때 뭐 하세요?", you: "웃고 공유해요." }
  },
  {
    en: { me: "What do you do when you are sad?", you: "I listen to music." },
    ko: { me: "슬플 때 뭐 하세요?", you: "음악을 들어요." }
  },
  {
    en: { me: "What do you do when you are angry?", you: "I calm down and breathe." },
    ko: { me: "화날 때 뭐 하세요?", you: "진정하고 숨을 쉬어요." }
  },
  {
    en: { me: "What do you do when you are busy?", you: "I focus on my tasks." },
    ko: { me: "바쁠 때 뭐 하세요?", you: "일에 집중해요." }
  },
  {
    en: { me: "What do you do when you are free?", you: "I relax or go out." },
    ko: { me: "시간 있을 때 뭐 하세요?", you: "쉬거나 나가요." }
  },
  {
    en: { me: "What do you do when you travel?", you: "I explore new places." },
    ko: { me: "여행 갈 때 뭐 하세요?", you: "새로운 곳을 구경해요." }
  },
  {
    en: { me: "What do you do when you meet friends?", you: "I talk and hang out." },
    ko: { me: "친구 만나면 뭐 하세요?", you: "대화하고 놀아요." }
  },
  {
    en: { me: "What do you do when you are alone?", you: "I read or watch videos." },
    ko: { me: "혼자 있을 때 뭐 하세요?", you: "책 읽거나 영상 봐요." }
  },

  {
    en: { me: "What do you do on your phone?", you: "I chat and watch videos." },
    ko: { me: "핸드폰으로 뭐 하세요?", you: "채팅하고 영상 봐요." }
  },
  {
    en: { me: "What do you do on your computer?", you: "I work or study." },
    ko: { me: "컴퓨터로 뭐 하세요?", you: "일하거나 공부해요." }
  },
  {
    en: { me: "What do you do online?", you: "I search and watch content." },
    ko: { me: "온라인에서 뭐 하세요?", you: "검색하고 영상 봐요." }
  },
  {
    en: { me: "What do you do on social media?", you: "I post and scroll." },
    ko: { me: "SNS에서 뭐 하세요?", you: "올리고 스크롤해요." }
  },
  {
    en: { me: "What do you do on the internet?", you: "I look for information." },
    ko: { me: "인터넷에서 뭐 하세요?", you: "정보를 찾아요." }
  },
  {
    en: { me: "What do you do with your friends?", you: "I hang out and talk." },
    ko: { me: "친구랑 뭐 하세요?", you: "놀고 이야기해요." }
  },
  {
    en: { me: "What do you do with your family?", you: "I eat and spend time together." },
    ko: { me: "가족이랑 뭐 하세요?", you: "밥 먹고 같이 지내요." }
  },
  {
    en: { me: "What do you do with your money?", you: "I save and spend carefully." },
    ko: { me: "돈으로 뭐 하세요?", you: "저축하고 신중하게 써요." }
  },
  {
    en: { me: "What do you do with your time?", you: "I try to use it well." },
    ko: { me: "시간을 어떻게 쓰세요?", you: "잘 쓰려고 해요." }
  },
  {
    en: { me: "What do you do with your life?", you: "I try to improve myself." },
    ko: { me: "인생을 어떻게 사세요?", you: "나를 발전시키려고 해요." }
  },

  {
    en: { me: "What do you do for fun?", you: "I play games or watch videos." },
    ko: { me: "재미로 뭐 하세요?", you: "게임하거나 영상 봐요." }
  },
  {
    en: { me: "What do you do for exercise?", you: "I go to the gym." },
    ko: { me: "운동으로 뭐 하세요?", you: "헬스장에 가요." }
  },
  {
    en: { me: "What do you do for health?", you: "I eat healthy food." },
    ko: { me: "건강 위해 뭐 하세요?", you: "건강한 음식을 먹어요." }
  },
  {
    en: { me: "What do you do for study?", you: "I study every day." },
    ko: { me: "공부로 뭐 하세요?", you: "매일 공부해요." }
  },
  {
    en: { me: "What do you do for work success?", you: "I work hard every day." },
    ko: { me: "일 성공 위해 뭐 하세요?", you: "매일 열심히 일해요." }
  },
  {
    en: { me: "What do you do for relaxation?", you: "I listen to music." },
    ko: { me: "휴식으로 뭐 하세요?", you: "음악을 들어요." }
  },
  {
    en: { me: "What do you do for entertainment?", you: "I watch movies." },
    ko: { me: "오락으로 뭐 하세요?", you: "영화를 봐요." }
  },
  {
    en: { me: "What do you do for your hobby?", you: "I draw or read." },
    ko: { me: "취미로 뭐 하세요?", you: "그림 그리거나 책 읽어요." }
  },
  {
    en: { me: "What do you do for your career?", you: "I improve my skills." },
    ko: { me: "커리어 위해 뭐 하세요?", you: "실력을 키워요." }
  },
  {
    en: { me: "What do you do for your future?", you: "I study and plan ahead." },
    ko: { me: "미래 위해 뭐 하세요?", you: "공부하고 계획해요." }
  },

  {
    en: { me: "What do you do before going out?", you: "I get ready and check my things." },
    ko: { me: "나가기 전에 뭐 하세요?", you: "준비하고 확인해요." }
  },
  {
    en: { me: "What do you do after waking up?", you: "I stretch and wash my face." },
    ko: { me: "일어난 후에 뭐 하세요?", you: "스트레칭하고 세수해요." }
  },
  {
    en: { me: "What do you do before going to work?", you: "I get dressed and leave." },
    ko: { me: "출근 전에 뭐 하세요?", you: "옷 입고 나가요." }
  },
  {
    en: { me: "What do you do after coming home?", you: "I rest and eat." },
    ko: { me: "집에 온 후에 뭐 하세요?", you: "쉬고 먹어요." }
  },
  {
    en: { me: "What do you do before sleeping?", you: "I brush my teeth and relax." },
    ko: { me: "자기 전에 뭐 하세요?", you: "양치하고 쉬어요." }
  },
  {
    en: { me: "What do you do during the day?", you: "I work or study." },
    ko: { me: "낮 동안 뭐 하세요?", you: "일하거나 공부해요." }
  },
  {
    en: { me: "What do you do during the night?", you: "I sleep or rest." },
    ko: { me: "밤 동안 뭐 하세요?", you: "자거나 쉬어요." }
  },
  {
    en: { me: "What do you do during weekends?", you: "I rest and meet friends." },
    ko: { me: "주말 동안 뭐 하세요?", you: "쉬고 친구 만나요." }
  },
  {
    en: { me: "What do you do during holidays?", you: "I travel or relax." },
    ko: { me: "휴일 동안 뭐 하세요?", you: "여행하거나 쉬어요." }
  },
  {
    en: { me: "What do you do during breaks?", you: "I rest and use my phone." },
    ko: { me: "쉬는 시간에 뭐 하세요?", you: "쉬고 폰 써요." }
  },

  {
    en: { me: "What do you do when you are at a cafe?", you: "I drink coffee and relax." },
    ko: { me: "카페에서 뭐 하세요?", you: "커피 마시고 쉬어요." }
  },
  {
    en: { me: "What do you do when you are at a restaurant?", you: "I eat and talk." },
    ko: { me: "식당에서 뭐 하세요?", you: "먹고 대화해요." }
  },
  {
    en: { me: "What do you do when you are at the gym?", you: "I exercise." },
    ko: { me: "헬스장에서 뭐 하세요?", you: "운동해요." }
  },
  {
    en: { me: "What do you do when you are at the library?", you: "I study quietly." },
    ko: { me: "도서관에서 뭐 하세요?", you: "조용히 공부해요." }
  },
  {
    en: { me: "What do you do when you are on a bus?", you: "I listen to music." },
    ko: { me: "버스에서 뭐 하세요?", you: "음악을 들어요." }
  },
  {
    en: { me: "What do you do when you are on the subway?", you: "I check my phone." },
    ko: { me: "지하철에서 뭐 하세요?", you: "폰을 봐요." }
  },
  {
    en: { me: "What do you do when you are at the airport?", you: "I wait and relax." },
    ko: { me: "공항에서 뭐 하세요?", you: "기다리면서 쉬어요." }
  },
  {
    en: { me: "What do you do when you are in a meeting?", you: "I listen and take notes." },
    ko: { me: "회의에서 뭐 하세요?", you: "듣고 기록해요." }
  },
  {
    en: { me: "What do you do when you are in class?", you: "I listen and learn." },
    ko: { me: "수업에서 뭐 하세요?", you: "듣고 배워요." }
  },
  {
    en: { me: "What do you do when you are at your work desk?", you: "I focus on my work." },
    ko: { me: "책상에서 뭐 하세요?", you: "일에 집중해요." }
  },

  {
    en: { me: "What do you do when you have free time at work?", you: "I take a short break." },
    ko: { me: "회사 쉬는 시간에 뭐 하세요?", you: "잠깐 쉬어요." }
  },
  {
    en: { me: "What do you do when you finish work early?", you: "I go home early." },
    ko: { me: "일 일찍 끝나면 뭐 하세요?", you: "일찍 집에 가요." }
  },
  {
    en: { me: "What do you do when you have a problem?", you: "I try to solve it step by step." },
    ko: { me: "문제 생기면 뭐 하세요?", you: "단계별로 해결해요." }
  },
  {
    en: { me: "What do you do when you make a mistake?", you: "I learn from it." },
    ko: { me: "실수하면 뭐 하세요?", you: "거기서 배워요." }
  },
  {
    en: { me: "What do you do when you don’t understand something?", you: "I ask questions." },
    ko: { me: "이해 안 되면 뭐 하세요?", you: "질문해요." }
  },
  {
    en: { me: "What do you do when you feel tired at work?", you: "I take a short rest." },
    ko: { me: "일하다 피곤하면 뭐 하세요?", you: "잠깐 쉬어요." }
  },
  {
    en: { me: "What do you do when you are late?", you: "I hurry and apologize." },
    ko: { me: "늦었을 때 뭐 하세요?", you: "급하게 가고 사과해요." }
  },
  {
    en: { me: "What do you do when you are early?", you: "I wait and relax." },
    ko: { me: "일찍 도착하면 뭐 하세요?", you: "기다리면서 쉬어요." }
  },
  {
    en: { me: "What do you do when you meet new people?", you: "I introduce myself." },
    ko: { me: "새 사람 만나면 뭐 하세요?", you: "자기소개해요." }
  },
  {
    en: { me: "What do you do when you feel bored at home?", you: "I watch videos." },
    ko: { me: "집에서 심심하면 뭐 하세요?", you: "영상 봐요." }
  },

  {
    en: { me: "What do you do when you watch movies?", you: "I enjoy and relax." },
    ko: { me: "영화 볼 때 뭐 하세요?", you: "즐기면서 쉬어요." }
  },
  {
    en: { me: "What do you do when you listen to music?", you: "I relax and think." },
    ko: { me: "음악 들을 때 뭐 하세요?", you: "쉬고 생각해요." }
  },
  {
    en: { me: "What do you do when you play games?", you: "I play for fun." },
    ko: { me: "게임할 때 뭐 하세요?", you: "재미로 해요." }
  },
  {
    en: { me: "What do you do when you read books?", you: "I focus and learn." },
    ko: { me: "책 읽을 때 뭐 하세요?", you: "집중해서 읽어요." }
  },
  {
    en: { me: "What do you do when you study alone?", you: "I focus deeply." },
    ko: { me: "혼자 공부할 때 뭐 하세요?", you: "집중해서 공부해요." }
  },
  {
    en: { me: "What do you do when you study with friends?", you: "I discuss and learn." },
    ko: { me: "친구랑 공부할 때 뭐 하세요?", you: "토론하면서 공부해요." }
  },
  {
    en: { me: "What do you do when you cook?", you: "I follow recipes." },
    ko: { me: "요리할 때 뭐 하세요?", you: "레시피 따라해요." }
  },
  {
    en: { me: "What do you do when you clean your room?", you: "I organize everything." },
    ko: { me: "방 청소할 때 뭐 하세요?", you: "정리해요." }
  },
  {
    en: { me: "What do you do when you travel abroad?", you: "I explore new places." },
    ko: { me: "해외 여행 갈 때 뭐 하세요?", you: "새로운 곳을 구경해요." }
  },
  {
    en: { me: "What do you do when you go shopping?", you: "I buy what I need." },
    ko: { me: "쇼핑할 때 뭐 하세요?", you: "필요한 걸 사요." }
  },

  {
    en: { me: "What do you do when you have no plans?", you: "I relax at home." },
    ko: { me: "계획 없을 때 뭐 하세요?", you: "집에서 쉬어요." }
  },
  {
    en: { me: "What do you do when you are alone at night?", you: "I watch videos or sleep." },
    ko: { me: "밤에 혼자 있을 때 뭐 하세요?", you: "영상 보거나 자요." }
  },
  {
    en: { me: "What do you do when you can’t sleep?", you: "I read or listen to music." },
    ko: { me: "잠 안 올 때 뭐 하세요?", you: "책 읽거나 음악 들어요." }
  },
  {
    en: { me: "What do you do when you wake up late?", you: "I hurry and get ready." },
    ko: { me: "늦게 일어나면 뭐 하세요?", you: "급하게 준비해요." }
  },
  {
    en: { me: "What do you do when you feel hungry?", you: "I eat something." },
    ko: { me: "배고플 때 뭐 하세요?", you: "뭐 먹어요." }
  },
  {
    en: { me: "What do you do when you feel thirsty?", you: "I drink water." },
    ko: { me: "목마를 때 뭐 하세요?", you: "물 마셔요." }
  },
  {
    en: { me: "What do you do when you are waiting?", you: "I check my phone." },
    ko: { me: "기다릴 때 뭐 하세요?", you: "폰을 봐요." }
  },
  {
    en: { me: "What do you do when you are in traffic?", you: "I listen to music." },
    ko: { me: "차 막힐 때 뭐 하세요?", you: "음악 들어요." }
  },
  {
    en: { me: "What do you do when you miss someone?", you: "I send a message." },
    ko: { me: "누군가가 그리울 때 뭐 하세요?", you: "메시지 보내요." }
  },
  {
    en: { me: "What do you do when you are happy with life?", you: "I enjoy the moment." },
    ko: { me: "인생이 만족스러울 때 뭐 하세요?", you: "그 순간을 즐겨요." }
  }
];
