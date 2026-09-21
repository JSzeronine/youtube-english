

(function () {


    const audio = function () {

        const voiceCode = [
            "ko-KR-Chirp3-HD-Leda", // 0

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

            'en-US-Neural2-G', // 15

            // -------------------------------- //
            'en-US-Chirp3-HD-Leda', // 16
            'en-US-Chirp3-HD-Kore', // 17
            'en-US-Chirp3-HD-Aoede', // 18

            'en-US-Chirp3-HD-Charon', // 19
            'en-US-Chirp3-HD-Puck', // 20
            'en-US-Chirp3-HD-Orus', // 21
            // --------------------------------- //

            'ko-KR-Chirp3-HD-Aoede',    // 22
            'ko-KR-Chirp3-HD-Kore',     // 23
            'ko-KR-Wavenet-A',          // 24

            'ko-KR-Chirp3-HD-Charon',   // 25
            'ko-KR-Chirp3-HD-Puck',     // 26
            'ko-KR-Wavenet-C',          // 27

            'ko-KR-Chirp3-HD-Aoede', // 28
            // 'ko-KR-Chirp3-HD-Despina',
            // 'ko-KR-Chirp3-HD-Erinome',
            // 'ko-KR-Chirp3-HD-Laomedeia',

        ];

        const languageCode = [
            "ko-KR", // 0
            "ko-KR", // 1
            "ko-KR", // 2
            "ko-KR", // 3

            "en-US", // 4
            "en-US", // 5
            "en-US", // 6
            "en-US", // 7
            "en-US", // 8
            "en-US", // 9
            "en-US", // 10
            "en-US", // 11
            "en-US", // 12
            "en-US", // 13
            "en-US", // 14
            "en-US", // 15

            // -------------------------------- //
            "en-US", // 16
            "en-US", // 17
            "en-US", // 18

            "en-US", // 19
            "en-US", // 20
            "en-US", // 21
            // -------------------------------- //

            "ko-KR", // 22
            "ko-KR", // 23
            "ko-KR", // 24

            "ko-KR", // 25
            "ko-KR", // 26
            "ko-KR", // 27

            "ko-KR", // 28
        ]

        function Init() {
            console.log( 'init' );
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
            }, delay * 1000);
        }

        return {
            Init,
            playTTS,
        }

    }

    $(document).ready(function () {
        App.audio = audio();
        App.audio.Init();
    });

})();