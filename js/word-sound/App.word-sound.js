

(function () {

    const index = function () {





        function Init() {

            // $(".btn-stop").on("click", () => {
            //     start();
            // });

            let c = 3;
            const timer = setInterval(() => {
                c--;
                $(".timer").text(c);
                if (c === 0) {
                    clearTimeout(timer);
                    $(".timer").css("display", "none");

                    setTimeout(() => {
                        start();
                    }, 1000);
                }

            }, 1000)

            $(".title-bx").find("li").each(function (index) {
                $(this).text(data[0].words[index].w.charAt(0).toUpperCase() + data[0].words[index].w.slice(1));
            });
        }

        function getText(text) {
            let sTag = "";
            let inside = false;
            let temp = "";

            for (let i = 0; i < text.length; i++) {
                const char = text[i];
                if (char === "/") {
                    inside = !inside;
                    if (!inside && temp !== "") {
                        sTag += `<span>${temp}</span>`;
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

            return sTag;
        }

        function start() {
            let count = 0;
            const words = $(".title-bx").find("li");

            const enWord = $(".word-en");
            const koWord = $(".word-ko");
            const sentence = $(".sentence");
            const translation = $(".translation");

            show(count);

            function show($count) {
                const word = data[0].words[$count];

                $(words).eq($count).addClass("on");

                enWord.text(word.w.charAt(0).toUpperCase() + word.w.slice(1));
                koWord.text(word.k);

                sentence.html(getText(word.sentence));
                translation.html(getText(word.translation));

                gsap.fromTo(enWord, { opacity: 0, x: -30, }, { opacity: 1, x: 0, duration: 0.5, ease: Cubic.easeInOut });
                gsap.fromTo(koWord, { opacity: 0, x: 30, }, { opacity: 1, x: 0, duration: 0.5, ease: Cubic.easeInOut });

                App.audio.playTTS({
                    text: word.w.replace(/\//g, ""),
                    code: 4,
                    rate: 0.8,
                    callback: () => {

                        setTimeout(() => {
                            gsap.fromTo(sentence, { x: 0, opacity: 0, y: 20, }, { opacity: 1, y: 0, duration: 0.5, ease: Cubic.easeInOut });
                            gsap.fromTo(translation, { x: 0, opacity: 0, y: 20, }, { opacity: 1, y: 0, duration: 0.5, ease: Cubic.easeInOut });

                            App.audio.playTTS({
                                text: word.translation.replace(/\//g, ""),
                                code: 3,
                                callback: () => {
                                    App.audio.playTTS({
                                        text: word.sentence.replace(/\//g, ""),
                                        code: 7,
                                        rate: 0.8,
                                        delay: 0.35,
                                        callback: () => {

                                            App.audio.playTTS({
                                                text: word.sentence.replace(/\//g, ""),
                                                code: 5,
                                                rate: 0.8,
                                                delay: 0.35,
                                                callback: () => {
                                                    setTimeout(() => {
                                                        count++;
                                                        if (count >= data[0].words.length) {
                                                            return;
                                                        }

                                                        end(() => {
                                                            show(count);
                                                        });
                                                    }, 1000);
                                                }
                                            });
                                        }
                                    });
                                }
                            });
                        }, 500);


                    }
                });


            }

            function end(callback) {
                gsap.to(enWord, { opacity: 0, x: -50, duration: 0.5, ease: Cubic.easeInOut });
                gsap.to(koWord, { opacity: 0, x: -50, duration: 0.5, ease: Cubic.easeInOut });

                gsap.to(sentence, { opacity: 0, x: 50, duration: 0.5, ease: Cubic.easeInOut });
                gsap.to(translation, { opacity: 0, x: 50, duration: 0.5, ease: Cubic.easeInOut });

                setTimeout(callback, 600);

            }
        }


        return {
            Init
        }
    }

    $(document).ready(() => {
        App.wordSound = index();
        App.wordSound.Init();
    });

})();