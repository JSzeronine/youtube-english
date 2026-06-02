

(function () {

    const introduceScene = function () {
        function Init() {

        }

        let hiddenCallback = null;
        function START(callback, $isReview = false) {
            hiddenCallback = callback;

            $(".introduce").removeClass("hidden");
            const introduceTexts = $(".introduce-text").find("span");
            gsap.fromTo(introduceTexts,
                { y: '100%', opacity: 0, x: 0 },
                {
                    duration: 0.75,
                    y: 0,
                    x: 0,
                    opacity: 1,
                    ease: Cubic.easeInOut,
                });

            App.audio.playTTS({
                text: $isReview ? review : introduce,
                code: 2,
                rate: 1,
                callback: () => {
                    setTimeout(() => {
                        Hidden();
                    }, 1000 );
                }
            });

            if ($isReview) {
                $(".introduce-text-1").find("span").text("잘 하셨어요~");
                $(".introduce-text-2").find("span").text("이제 복습해 볼까요?");

            } else {
                $(".introduce-text-1").find("span").text("오늘도 영어 단어 7개와");
                $(".introduce-text-2").find("span").text("응용 문장을 배워볼께요~");
            }
        }

        function Hidden() {
            const introduceTexts = $(".introduce-text").find("span");
            const posX = [-100, 100];
            const mTime = 0.75;

            introduceTexts.each(function (i, item) {
                gsap.to(item, {
                    duration: mTime,
                    opacity: 0,
                    x: posX[i],
                    ease: Cubic.easeInOut,
                });
            });

            setTimeout(() => {
                hiddenCallback && hiddenCallback();
                $(".introduce").addClass("hidden");
            }, mTime * 1000);
        }

        function HideStep($callback) {
            gsap.to($(".content-bx"), {
                duration: 0.75,
                opacity: 0,
                ease: Cubic.easeInOut,
            });

            setTimeout(() => {
                $callback && $callback();

                $( ".word-text" ).empty();
                $( ".word-sentence-text" ).empty();
                $( ".translation-text" ).empty();
                $( ".sentence-text" ).empty();
            }, 2000);

        }

        return {
            Init,
            START,
            Hidden,
            HideStep
        }
    }

    $(document).ready(function () {
        App.introduceScene = introduceScene();
        App.introduceScene.Init();
    });

})();