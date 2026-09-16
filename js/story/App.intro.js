






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
                text: `영어는 어순을 이해하면 쉽게 읽을 수 있습니다.`,
                code: 3,
                rate: 1,
                delay: 0.25,
                callback: () => {
                    App.audio.playTTS({
                        text: `작은 영어 이야기와 함께 천천히 익혀볼게요.`,
                        code: 3,
                        rate: 1,
                        delay: 0.2,
                        playCallback: () => {
                            $( ".intro-sound-text-1" ).css( "display", "none" );
                            $( ".intro-sound-text-2" ).css( "display", "block" );
                        },
                        callback: () => {
                            App.audio.playTTS({
                                text: `시작합니다.`,
                                code: 3,
                                rate: 1,
                                delay: 0.2,
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