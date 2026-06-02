(function () {

    const AppStep = function () {
        function Init() {
            createSwiper();

            $(".gage").find("p").text(`${1} / ${list[0].words.length}`);
        }

        let wordSwiper = null;
        function createSwiper() {
            const wordTag = $(".word");

            list.forEach((item, index) => {
                wordTag.append(`
                    <div class="word-content swiper-slide ${index === 0 ? 'on' : ''}">
                        <span class="word-text">${item.word}</span>
                        <div class="word-sentence">
                            <span class="word-sentence-text">${item.translation}</span>
                        </div>
                    </div>
                `);
            });

            wordSwiper = new Swiper('.swiper', {
                // centeredSlides: true,
                slidesPerView: "auto",
                spaceBetween: 30,
                speed: 800,
            });
        }

        let data = null;
        let step = 0;
        let listStep = 0;

        let reviewCallback = null;
        let isRepeat = false;

        function ShowContent($data, $reviewCallback) {
            data = $data;
            step = 0;
            listStep = 0;
            reviewCallback = $reviewCallback;

            gsap.to($(".content-bx"), {
                duration: 0.75,
                opacity: 1,
                ease: Cubic.easeInOut,
            });

            setTimeout(() => {
                ShowWord(step);
                ShowWordTTS(step, listStep, 0);

                if (isRepeat) {
                    ShowRepeatWord(step, listStep);
                    HiddenWord();
                }

                setTimeout(() => {
                    ShowTranslation(step, listStep);
                }, 2000);
            }, 1000);
        }

        function ShowWord($step) {
            const { word: w, translation: t } = data[$step];
            $(".word").addClass("show");

            $(".word-content").removeClass("on");
            $(`.word-content:nth-child(${$step + 1})`).addClass("on");

            wordSwiper.slideTo($step);
        }

        function ShowRepeatWord($step, $listStep) {
            const { word: w, translation: t } = data[$step];
            $(".repeat-word-text").text(w);
            $(".repeat-word-sentence-text").text(`[${t}]`);

            let repeatTag = $(".repeat-word-content");
            gsap.fromTo(repeatTag,
                { y: '50%', opacity: 0 },
                { y: '0%', opacity: 1, duration: 0.75, ease: Cubic.easeInOut, }
            )
        }

        function HiddenWord() {
            gsap.fromTo($(".swiper"),
                { x: '0%' },
                { x: -100, opacity: 0, duration: 0.75, ease: Cubic.easeInOut, });

            $(".word-swiper-gradient").css("display", "none");
        }

        function ShowTranslation($step, $listStep) {
            const { sentence: s, translation: st } = data[$step].words[$listStep];
            $(".translation-text").text(`${st.replace(/\//g, "")}`);

            gsap.fromTo($(".translation-text"),
                { x: 0, opacity: 0, y: '100%' },
                { x: 0, opacity: 1, y: '0%', duration: 0.75, ease: Cubic.easeInOut, });

            gsap.to($(".gage-bg"), {
                duration: 0.75,
                width: (($listStep + 1) / list[0].words.length) * 100 + "%",
                ease: Cubic.easeInOut,
            });

            $(".gage").find("p").text(`${$listStep + 1} / ${list[0].words.length}`);
        }

        function ShowSentence($step, $listStep) {
            const { sentence: s, translation: st, w } = data[$step].words[$listStep];

            let sentenceTag = '';
            $(".sentence-text").empty();
            s.split(" ").forEach(item => {
                const clean = str => str.replace(/[^\w]/g, '').toLowerCase();
                if (clean(item) === clean(w)) {

                    if (isRepeat) {
                        sentenceTag += `<p class="on"><span class="on answer">${item}</span></p>`;
                    } else {
                        sentenceTag += `<p><span class="on">${item}</span></p>`;
                    }
                } else {
                    sentenceTag += `<p><span>${item}</span></p>`;
                }
            });

            $(".sentence-text").append(sentenceTag);

            if (isRepeat) {
                const sentenceTexts = $(".sentence-text").find(".answer");
                gsap.set(sentenceTexts, { y: '100%' });
            }

            gsap.fromTo($(".sentence-text"),
                { x: 0, opacity: 0, y: '100%' },
                { x: 0, opacity: 1, y: '0%', duration: 0.75, ease: Cubic.easeInOut });

        }

        function HiddenSentence() {
            gsap.fromTo($(".sentence-text"),
                { x: '0%' },
                { x: -100, opacity: 0, duration: 0.75, ease: Cubic.easeInOut, });

            gsap.fromTo($(".translation-text"),
                { x: '0%' },
                { x: 100, opacity: 0, duration: 0.75, ease: Cubic.easeInOut, });
        }

        function ShowWordTTS($step, $listStep, $delay) {
            console.log("1. 단어");
            const { word, translation } = data[$step];

            App.audio.playTTS({
                text: word.replace(/[^\w\s]/g, ""),
                code: 5,
                callback: async () => {
                    ShowContentTTS(step, listStep);
                }
            });
        }

        function ShowContentTTS($step, $listStep) {
            console.log("2. 한글 해석");
            const { words } = data[$step];
            const { sentence, translation } = words[$listStep];

            App.audio.playTTS({
                text: translation.replace(/\//g, ""),
                code: 3,
                delay: 1,
                callback: async () => {
                    showSentence1($step, $listStep);
                }
            });
        }

        function showSentence1($step, $listStep) {
            console.log("3. 영어 TTS");
            const { words } = data[$step];
            const { sentence, translation } = words[$listStep];

            App.audio.playTTS({
                text: sentence,
                code: 4,
                delay: 0.5,
                playCallback: () => {
                    ShowSentence($step, $listStep);
                },
                callback: async () => {
                    showSentence2($step, $listStep);
                }
            });
        }

        function showSentence2($step, $listStep) {
            console.log("4. 영어 TTS");
            const { words } = data[$step];
            const { sentence, translation } = words[$listStep];

            App.audio.playTTS({
                text: sentence,
                code: 6,
                delay: 0.5,
                callback: async () => {
                    showSentence3($step, $listStep);
                }
            });
        }

        function showSentence3($step, $listStep) {
            console.log("5. 영어 TTS");
            const { words } = data[$step];
            const { sentence, translation } = words[$listStep];

            App.audio.playTTS({
                text: sentence,
                code: 5,
                delay: 0.5,
                playCallback: () => {
                    if (isRepeat) {
                        const sentenceTexts = $(".sentence-text").find(".answer");
                        gsap.to(sentenceTexts, { y: 0, duration: 0.75, ease: Cubic.easeInOut });
                    }
                },
                callback: async () => {

                    setTimeout(() => {
                        listStep++;

                        if (listStep >= words.length) {
                            listStep = 0;
                            step++;

                            if (step >= list.length) {

                                isRepeat = true;
                                reviewCallback && reviewCallback();

                                return;
                            }

                            HiddenSentence();

                            setTimeout(() => {
                                ShowWord(step, listStep);
                                ShowWordTTS(step, listStep);

                                setTimeout(() => {
                                    ShowTranslation(step, listStep);
                                }, 2000);

                            }, 2000);

                            return;
                        }

                        HiddenSentence();

                        setTimeout(() => {
                            ShowContentTTS(step, listStep);
                            ShowTranslation(step, listStep);
                        }, 750);

                    }, 1000);
                }
            });
        }
        return {
            Init,
            ShowContent,
            ShowWordTTS,
            ShowContentTTS,
            ShowWord,
            ShowSentence,
            HiddenWord,
            ShowTranslation,
            HiddenSentence,
        }
    }

    $(document).ready(function () {
        App.step = AppStep();
        App.step.Init();
    });

})();