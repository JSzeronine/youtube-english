





const mainC = 9;

(function () {

    $( ".img-bx").find("img").attr( "src", `data/talk-long-new/image/20251216/${mainC}.jpg` );
    $( ".step-num" ).text( `#${mainC}` );

    const index = function () {
        const enData = enDatas[mainC-1];
        const koData = koDatas[mainC-1];

        function Init() {
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

            $(".btn-stop").on("click", () => {
                start();
            });

            let c = 3;
            const timer = setInterval(() => {
                c--;
                $( ".timer" ).text( c );
                if( c === 0 ){
                    clearTimeout(timer);
                    $( ".timer" ).css( "display", "none" );

                    setTimeout(() => {
                        start();
                    }, 500);
                }
            }, 1000 )
        }

        let count = 0;
        function start() {
            const enList = $(".en-bx").find("li");
            const koList = $(".ko-bx").find("li");

            const video = $( ".img-bx" ).find( "video" );
            if (video.length > 0) {
                try {
                    video[0].playbackRate = 0.5;
                    video[0].play();
                } catch(e) {}

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
                delay: 0.15,
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
                            delay: 0.25,
                            callback: () => {
                                App.audio.playTTS({
                                    text: english,
                                    code: 13,
                                    rate: 0.8,
                                    delay: 0.25,
                                    playCallback: () => {
                                        gsap.to($(".bx").find("p"), { opacity: 1, duration: 0.35, ease: Expo.easeOut });
                                        gsap.to($(".bx").find("span"), { borderBottom: "2px solid #ffffff", duration: 0.35, ease: Expo.easeOut });
                                    },

                                    callback: () => {
                                        App.audio.playTTS({
                                            text: english,
                                            code: 5,
                                            rate: 0.8,
                                            delay: 0.25,
                                            playCallback: () => {
                                                gsap.to($(".bx").find("p"), { opacity: 0, duration: 0.35, ease: Expo.easeOut });
                                                gsap.to($(".bx").find("span"), { color: "#ffffff", borderBottom: "0px solid #ffffff", duration: 0.35, ease: Expo.easeOut });
                                            },

                                            callback: () => {
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