











(function () {

    const story = function () {

        const studyBx = $(".study-room");
        function getList() {

            let str = ``;
            enStorys.forEach((item, idx) => {
                // str += `<li><div class="list-count">#${idx+1}</div>`
                str += `<li>`
                str += `<div class="list en-list">`
                item.en.forEach((enItem) => {
                    str += `<div class="list-txt en-txt"><span class="en-item-${enItem.step}">${enItem.txt}</span></div>`
                });
                str += `</div>`

                str += `<div class="list ko-list">`
                item.ko.forEach((koItem) => {
                    str += `<div class="list-txt ko-txt"><span class="ko-item-${koItem.step}">${koItem.txt}</span></div>`
                });

                str += `</div>`
                str += `</li>`
            });

            return str;
        }

        function Init() {
            createList();
        }

        function start() {
            App.audio.playTTS({
                text: "Step Two",
                code: 7,
                rate: 0.8,
                playCallback: () => {
                    App.control.showStep(1);
                },
                callback: () => {
                    App.audio.playTTS({
                        text: "한 문장씩 이해하기",
                        code: 28,
                        rate: 0.95,
                        callback: () => {
                            gsap.to($(".study-room-step-bx"), {
                                delay: 1, opacity: 0, duration: 1, ease: Cubic.easeOut, onComplete: () => {
                                    all();
                                }
                            });
                        }
                    });
                }
            });
        }

        function createList() {
            const listStr = getList();
            $(".study-list-bx").append(listStr);
        }

        let count = 0;
        function all() {
            const storyList = enStorys[count];

            imgs.forEach((num, idx) => {
                const img = $(".bg-list").find("img");

                if (count >= num) {
                    gsap.to(img.eq(idx), { duration: 1, opacity: 1, ease: Cubic.easeOut });
                }
            });

            gsap.to($(".step"), { opacity: 1, duration: 0.5, ease: Cubic.easeOut });
            gsap.to($(".episode"), { opacity: 1, duration: 0.5, ease: Cubic.easeOut });

            $(".count-value").text(count + 1);
            $(".count-max").text(enStorys.length);

            $(".count-max").text(enStorys.length);
            $(".count-value").text(count + 1);
            $(".count-bx").css("opacity", 1);

            const ul = studyBx.find(".study-list-bx");
            const bx = ul.find("li");

            const en = storyList.en;
            const ko = storyList.ko;

            const showTime = 1;

            const enTxt = en.reduce((a, b) => a + b.txt + ' ', '');
            const koTxt = ko.reduce((a, b) => a + b.txt + ' ', '');

            gsap.to(ul, { opacity: 1, duration: showTime, ease: Cubic.easeOut });

            bx.each(function (i) {
                const itemBx = $(this);
                if (i === count) {
                    gsap.fromTo(itemBx, { y: 0 }, { duration: 1, y: 0, opacity: 1, ease: Cubic.easeOut })
                } else {
                    gsap.to(itemBx, { duration: 1, opacity: 0, ease: Cubic.easeOut })
                }
            });

            bx.eq(count).addClass("on");

            App.audio.playTTS({
                text: enTxt,
                code: 7,
                rate: 0.85,
                delay: 0.5,
                callback: () => {
                    App.audio.playTTS({
                        text: enTxt,
                        code: 5,
                        rate: 0.725,
                        delay: 1.5,
                        callback: () => {
                            App.audio.playTTS({
                                text: koTxt,
                                code: 3,
                                rate: 1,
                                delay: 1,
                                playCallback: () => {
                                    gsap.to(bx.eq(count).find(".ko-list"), { opacity: 1, duration: 0.5, ease: Cubic.easeOut });
                                    bx.eq(count).find(".ko-list").find(".ko-txt").css("border-color", "#fcf4df");
                                },
                                callback: () => {
                                    setTimeout(() => {
                                        gsap.to(bx.eq(count).find('span'), { duration: 0.35, color: '#fcf4df', ease: Cubic.easeOut });
                                        show();
                                    }, 1500);
                                }
                            });
                        }
                    });
                }
            });
        }

        function show() {
            const storyList = enStorys[count];
            const bx = studyBx.find(".study-list-bx").find("li");

            gsap.to(bx.eq(count).find('span'), {
                duration: 0.5, opacity: 0.35, ease: Cubic.easeOut, onComplete: () => {
                    let m = 0;

                    function showSound() {
                        const en = storyList.en[m];
                        const ko = storyList.ko[m];

                        const enTag = bx.eq(count).find(".en-item-" + en.step);
                        const koTag = bx.eq(count).find(".ko-item-" + en.step);

                        App.audio.playTTS({
                            text: en.txt,
                            code: 7,
                            rate: 0.75,
                            delay: 0,
                            playCallback: () => {
                                // gsap.to(bx.eq(count).find(".en-list").find('span'), { duration: 0.5, color: '#fcf4df', ease: Cubic.easeOut });
                                // gsap.to(bx.eq(count).find(".ko-list").find('span'), { duration: 0.5, color: '#FFFFFF', ease: Cubic.easeOut });

                                gsap.to(koTag, { duration: 0.5, y: 0, color: color[m], opacity: 1, ease: Cubic.easeOut });
                                gsap.to(enTag, { duration: 0.5, y: 0, color: color[m], opacity: 1, ease: Cubic.easeOut });
                            },

                            callback: () => {
                                App.audio.playTTS({
                                    text: en.txt,
                                    code: 5,
                                    rate: 0.7,
                                    delay: 1,
                                    callback: () => {
                                        m++;

                                        if (m > storyList.en.length - 1) {

                                            const enTxt = storyList.en.reduce((a, b) => a + b.txt + ' ', '');
                                            const koTxt = storyList.ko.reduce((a, b) => a + b.txt + ' ', '');

                                            App.audio.playTTS({
                                                text: enTxt,
                                                code: 7,
                                                rate: 0.85,
                                                delay: 1,
                                                callback: () => {
                                                    App.audio.playTTS({
                                                        text: enTxt,
                                                        code: 5,
                                                        rate: 0.8,
                                                        delay: 1,

                                                        playCallback: () => {


                                                            gsap.to(bx.eq(count).find(".en-list").find('span'), { duration: 0.5, color: '#fcf4df', ease: Cubic.easeOut });
                                                            gsap.to(bx.eq(count).find(".ko-list").find('span'), { duration: 0.5, color: '#FFFFFF', ease: Cubic.easeOut });

                                                            // bx.eq(count).find(".ko-list").find(".ko-txt").css("border-color", "transparent");

                                                            gsap.to($(".title"), { duration: 0.5, opacity: 0, ease: Cubic.easeOut });
                                                        },

                                                        callback: () => {
                                                            gsap.to(bx.eq(count), { duration: 1, y: 0, opacity: 0, delay: 1.5, ease: Cubic.easeOut })
                                                            setTimeout(() => {
                                                                m = 0;
                                                                count++;

                                                                if (count > enStorys.length - 1) {
                                                                    App.control.startFinish();
                                                                    return;
                                                                }

                                                                all();
                                                            }, 3000);
                                                        }
                                                    });
                                                }
                                            });

                                            return;
                                        }

                                        setTimeout(() => {
                                            showSound();
                                        }, 1500);
                                    }
                                });
                            }
                        });
                    }

                    showSound();
                }
            });
        }

        return {
            Init,
            start
        }

    }

    $(document).ready(() => {
        App.story = story();
        App.story.Init();
    });

})();