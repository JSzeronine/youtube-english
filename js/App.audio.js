

(function () {


    const audio = function () {

        const voiceCode = [
            // "ko-KR-Chirp3-HD-Achernar",
            // "ko-KR-Chirp3-HD-Aoede",
            "ko-KR-Chirp3-HD-Leda",
            // "ko-KR-Chirp3-HD-Aoede",
            // "ko-KR-Chirp3-HD-Leda",
            // "ko-KR-Chirp3-HD-Vindemiatrix",
            // "ko-KR-Standard-B",
            // "ko-KR-Wavenet-A", //0




            "ko-KR-Wavenet-B", //1
            "ko-KR-Wavenet-C", //2
            "ko-KR-Wavenet-D", //3

            "en-US-News-K",    //4
            "en-US-Neural2-J", //5
            "en-US-News-N",    //6
            "en-US-Neural2-H", // 7

            "en-GB-Wavenet-F", // 8
            "en-US-Standard-F", // 9

            "en-US-Chirp3-HD-Despina", // 10
            "en-US-Chirp3-HD-Charon", // 11
            "en-US-Chirp3-HD-Rasalgethi", // 12

            'en-US-News-K', // 13
            'ko-KR-Chirp3-HD-Achernar', // 14

            'en-US-Neural2-G',
        ];

        const languageCode = [
            "ko-KR",
            "ko-KR",
            "ko-KR",
            "ko-KR",

            "en-US",
            "en-US",
            "en-US",
            "en-US",
            "en-US",
            "en-US",
            "en-US",
            "en-US",
            "en-US",
            "en-US",
            "en-US",
            "en-US",
        ]

        function Init() {
        }

        async function playTTS(options) {
            const { text, code, rate = 0.8, callback, delay, playCallback, pitch = 0 } = options;

            const audio = new Audio();
            const voice = voiceCode[code];
            const language = languageCode[code];

            const response = await fetch("https://texttospeech.googleapis.com/v1/text:synthesize?key=AIzaSyAuweZt1PSe-Gv5vwVn6ibRLQ9L25kIM3g", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    input: { text },
                    voice: { languageCode: language, name: voice },
                    audioConfig: {
                        audioEncoding: "MP3",
                        speakingRate: rate,
                        pitch: pitch,
                    }
                }),
            });

            const data = await response.json();
            const audioContent = data.audioContent;

            audio.onended = () => {
                $(audio).trigger("audioEnded");
                callback && callback();
            };

            audio.onplay = () => {
                playCallback && playCallback();
            };

            audio.src = "data:audio/mp3;base64," + audioContent;
            setTimeout(() => {
                audio.play();
            }, delay * 1000 );
        }


        return {
            Init,
            playTTS
        }

    }

    $(document).ready(function () {
        App.audio = audio();
        App.audio.Init();
    });

})();