

(function () {


    const Short = () => {

        const data = repeat[0];
        function Init() {
            create();

            setTimeout(() => {
                START();
            }, 3000);

            // $("button").on("click", () => {
            //     START();
            // });
        }

        function create() {
            const educations = $(".education");

            let wTag = "";
            const wordsWithIndex = data.words.map((item, idx) => ({ ...item, index: idx }));
            const shuffled = wordsWithIndex.slice().sort(() => Math.random() - 0.5);
            shuffled.forEach((item) => {
                const w = item.w;
                const idx = item.index;
                wTag += `<span class="${idx}">${w}</span>`;
            });

            $(".title-bx").find("h3").html(wTag);

            data.words.forEach((item, index) => {
                const education = $(educations[index]);
                const dt = education.find("dt");
                const dd = education.find("dd");

                const word = item;
                const translation = word.translation;
                const sentence = word.sentence;
                const w = word.w;

                let sTag = "";
                sTag = "";
                let inside = false;
                let temp = "";

                for (let i = 0; i < translation.length; i++) {
                    const char = translation[i];
                    if (char === "/") {
                        inside = !inside;
                        if (!inside && temp !== "") {
                            sTag += `<span class="on">${temp}</span>`;
                            temp = "";
                        }
                    } else {
                        if (inside) {
                            temp += char;
                        } else {
                            sTag += char;
                        }
                    }
                }
                if (temp !== "") {
                    sTag += temp;
                }

                dt.append(sTag);

                let tag = "";
                sentence.split(" ").forEach((sentenceText, index) => {
                    const plain = sentenceText.replace(/[^\w\s]/gi, '');
                    const wPlain = w.replace(/[^\w\s]/gi, '');

                    if (plain.toLowerCase() === wPlain.toLowerCase()) {
                        tag += `<p class="on"><span>${sentenceText}</span></p>`;
                    } else {
                        tag += `<p class=""><span>${sentenceText}</span></p>`;
                    }
                });

                dd.append(tag);
            });
        }

        let count = 0;
        function START() {
            showTranslation();
        }

        async function showTranslation() {
            const translation = data.words[count].translation.replace(/\//g, "");
            console.log(translation);
            await App.audio.playTTS({
                text: translation,
                code: 3,
                rate: 1,
                playCallback: () => {
                    // showTranslationText();
                },
                callback: () => {
                    setTimeout(() => {
                        showSentence1();
                    }, 500);
                }
            });
        }

        function showTranslationText() {
            const dt = $(".education").eq(count).find("dt");

            gsap.fromTo(dt,
                { y: '50%', opacity: 0 },
                { y: 0, opacity: 1, duration: 0.5, ease: Cubic.easeInOut }
            )
        }

        async function showSentence1() {
            const sentence = data.words[count].sentence;

            await App.audio.playTTS({
                text: sentence,
                code: 4,
                rate: 0.8,
                playCallback: () => {
                    // showSentenceText();
                },
                callback: () => {
                    setTimeout(() => {
                        showSentence2();
                    }, 1000);
                }
            });
        }

        async function showSentence2() {
            const sentence = data.words[count].sentence;
            await App.audio.playTTS({
                text: sentence,
                code: 5,
                rate: 0.8,
                playCallback: () => {
                    const spanTag = $(".education").eq(count).find("dd").find("span");
                    gsap.to(spanTag, { y: 0, opacity: 1, duration: 0.5, ease: Cubic.easeInOut });

                    $(".title-bx h3 span").each(function () {
                        if ($(this).attr("class") === String(count)) {
                            $(this).addClass("on");
                        }
                    });
                },
                callback: () => {
                    count++;
                    if (count >= data.words.length) {
                        return;
                    }

                    setTimeout(() => {
                        showTranslation();
                    }, 1000);
                }
            });
        }

        function showSentenceText() {
            const dd = $(".education").eq(count).find("dd");

            gsap.fromTo(dd,
                { y: '50%', opacity: 0 },
                { y: 0, opacity: 1, duration: 0.5, ease: Cubic.easeInOut }
            )
        }

        return {
            Init
        }
    }

    $(document).ready(() => {
        App.short = Short();
        App.short.Init();
    })
})();