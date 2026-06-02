
(function () {
    const index = function () {


        function Init() {
            $(".count-totle").text(enDatas.length);
            koDatas.forEach((item, index) => {
                let text = "";
                item.forEach((item2, index2) => {
                    text += item2.ko + " "; // 영어 문장 합치기
                });
                $(".count-bx").find("ul").find("li").eq(index).find("span").text(text);
            });





            // $(".btn-stop").on("click", () => {
            //     setTimeout(() => {
            //         App.audio.playTTS({
            //             text: "하루 2분! 쉽고 재밌게 이 공식만 외우고 가세요.",
            //             code: 3,
            //             rate: 1,
            //             callback: () => {

            //                 App.audio.playTTS({
            //                     text: "구독과 좋아요 부탁드립니다!",
            //                     code: 3,
            //                     rate: 1,
            //                     delay: 0.5,
            //                     callback: () => {
            //                         gsap.to($(".intro-bx"), {
            //                             opacity: 0, duration: 1.5, ease: Cubic.easeOut, delay: 1, onComplete: () => {
            //                                 create();
            //                                 show();
            //                                 start();
            //                             }
            //                         });
            //                     }
            //                 });

            //             }
            //         });
            //     }, 1000);
            // });

            let c = 3;
            const timer = setInterval(() => {
                c--;
                $(".timer").text(c);
                if (c === 0) {
                    clearTimeout(timer);
                    $(".timer").css("display", "none");

                    setTimeout(() => {
                        App.audio.playTTS({
                            text: "하루 2분! 쉽고 재밌게 이 공식만 외우고 가세요.",
                            code: 3,
                            rate: 1,
                            callback: () => {

                                App.audio.playTTS({
                                    text: "구독과 좋아요 감사합니다!",
                                    code: 3,
                                    rate: 1,
                                    delay: 0.5,
                                    callback: () => {
                                        gsap.to($(".intro-bx"), {
                                            opacity: 0, duration: 1.5, ease: Cubic.easeOut, delay: 1, onComplete: () => {
                                                create();
                                                show();
                                                start();
                                            }
                                        });
                                    }
                                });

                            }
                        });
                    }, 1000);
                }
            }, 1000)
        }

        let count = 0;
        let group = 0;

        let enData = enDatas[group];
        let koData = koDatas[group];

        function hide() {
            gsap.to($(".en"), { duration: 0.5, opacity: 0, x: -50, ease: Cubic.easeOut });
            gsap.to($(".ko"), { duration: 0.5, opacity: 0, x: 50, ease: Cubic.easeOut });
        }

        function show() {
            $(".count-bx").find("ul").find("li").removeClass("target");
            $(".count-bx").find("ul").find("li").eq(group).addClass("on target");

            gsap.fromTo($(".en"), { opacity: 0, x: 50, }, { duration: 0.5, opacity: 1, x: 0, ease: Cubic.easeOut });
            gsap.fromTo($(".ko"), { opacity: 0, x: -50, }, { duration: 0.5, opacity: 1, x: 0, ease: Cubic.easeOut });

            const imgs = $(".img-bx").find("img");

            gsap.to(imgs.eq(group), { duration: 0.5, opacity: 1, ease: Cubic.easeOut });
        }

        function create() {
            enData = enDatas[group];
            koData = koDatas[group];

            $(".en-bx").empty();
            $(".ko-bx").empty();

            let i = 0;
            let len = Math.max(enData.length, koData.length);

            for (i; i < len; i++) {
                const en = enData[i];
                const ko = koData[i];

                $(".en-bx").append(`
                    <li>
                        <span>${en.en}</span>
                        <p>${["①", "②", "③", "④", "⑤", "⑥", "⑦", "⑧", "⑨", "⑩", "⑪", "⑫", "⑬", "⑭", "⑮", "⑯", "⑰", "⑱", "⑲", "⑳"][en.step] || en.step + 1}</p>
                    </li>
                `);

                $(".ko-bx").append(`
                    <li>
                        <span>${ko.ko}</span>
                        <p>${["①", "②", "③", "④", "⑤", "⑥", "⑦", "⑧", "⑨", "⑩", "⑪", "⑫", "⑬", "⑭", "⑮", "⑯", "⑰", "⑱", "⑲", "⑳"][ko.step] || ko.step + 1}</p>
                    </li>
                `);
            }
        }

        function start() {
            const enList = $(".en-bx").find("li");
            const koList = $(".ko-bx").find("li");

            const video = $(".img-bx").find("video");
            if (video.length > 0) {
                try {
                    video[0].playbackRate = 0.5;
                    video[0].play();
                } catch (e) { }

                video[0].addEventListener('loadedmetadata', function setRate() {
                    video[0].playbackRate = 0.5;
                    video[0].removeEventListener('loadedmetadata', setRate);
                    video[0].play();
                });
            }


            const en = enData[count];
            const ko = koData[count];

            App.audio.playTTS({
                text: enData[count].en,
                code: 7,
                rate: 0.8,
                delay: 0.75,
                playCallback: () => {
                    enList.removeClass("on-line");
                    koList.removeClass("on-line");

                    $(enList[en.step]).addClass("on");
                    $(enList[en.step]).addClass("on-line");

                    let koIndex = 0;
                    koData.forEach((item, index) => {
                        if (item.step === en.step) {
                            koIndex = index;
                        }
                    })

                    $(koList[koIndex]).addClass("on");
                    $(koList[koIndex]).addClass("on-line");
                },

                callback: () => {
                    count++;

                    if (count >= enData.length) {
                        const english = enData.map(item => item.en).join(" ");
                        const korean = koData.map(item => item.ko).join(" ");
                        App.audio.playTTS({
                            text: korean,
                            code: 3,
                            rate: 1,
                            delay: 1,
                            callback: () => {
                                App.audio.playTTS({
                                    text: english,
                                    code: 13,
                                    rate: 0.8,
                                    delay: 1,
                                    playCallback: () => {
                                        gsap.to($(".bx").find("p"), { opacity: 1, duration: 0.35, ease: Expo.easeOut });
                                        gsap.to($(".bx").find("span"), { borderBottom: "2px solid #ffffff", duration: 0.35, ease: Expo.easeOut });
                                    },

                                    callback: () => {

                                        App.audio.playTTS({
                                            text: english,
                                            code: 5,
                                            rate: 0.8,
                                            delay: 1,
                                            playCallback: () => {

                                            },
                                            callback: () => {
                                                group++;

                                                if (group >= enDatas.length) {
                                                    return;
                                                }

                                                count = 0;
                                                setTimeout(() => {

                                                    hide();

                                                    setTimeout(() => {
                                                        create();

                                                        show();
                                                        start();
                                                    }, 1000);

                                                }, 1000);
                                            }
                                        });

                                    }
                                });
                            },
                            playCallback: () => {
                                gsap.to($(".bx").find("p"), { opacity: 0, duration: 0.35, ease: Expo.easeOut });
                                gsap.to($(".bx").find("span"), { borderBottom: "0px solid #ffffff", duration: 0.35, ease: Expo.easeOut });
                            }
                        });

                        return;
                    }

                    start();
                },
            });
        }

        return {
            Init
        }
    };

    $(document).ready(() => {
        App.talk = index();
        App.talk.Init();
    });

})();