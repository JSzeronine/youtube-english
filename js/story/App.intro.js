






(function () {

    const intro = function () {
        function Init() {

        }

        function start(){
            show();
        }

        let m = 0;
        let c = 0;
        function show() {
            App.audio.playTTS({
                text: `잠시 쉬어가며 영어 이야기 한 편 들어보세요.`,
                code: 28,
                rate: 0.95,
                callback: () => {
                    App.audio.playTTS({
                        text: `천천히 듣다 보면 영어가 조금씩 가까워집니다.`,
                        code: 28,
                        rate: 0.95,
                        playCallback: () => {
                            $( ".intro-sound-text-1" ).css( "display", "none" );
                            $( ".intro-sound-text-2" ).css( "display", "block" );
                        },
                        callback: () => {
                            App.audio.playTTS({
                                text: `그럼, 오늘의 이야기를 함께 시작해 볼까요?`,
                                code: 28,
                                rate: 0.95,
                                playCallback: () => {
                                    $( ".intro-sound-text-2" ).css( "display", "none" );
                                    $( ".intro-sound-text-3" ).css( "display", "block" );
                                },
        
                                callback: () => {
                                    App.control.startFullEng();
                                }
                            });
                        }
                    });
                }
            });
        }

        return {
            Init,
            start
        }
    }

    $(document).ready(() => {
        App.intro = intro();
        App.intro.Init();
    });

})();