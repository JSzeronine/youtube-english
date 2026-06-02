(function () {

    enDatas.forEach((item, idx) => {
        let enTxt = "";
        enDatas[idx].forEach((item) => {
            enTxt += item.en + " ";
        });

        let koTxt = "";
        koDatas[idx].forEach((item) => {
            koTxt += item.ko + " ";
        });

        console.log("--------------------------------");
        console.log(enTxt);
        console.log(koTxt);
    });

})();


(function () {
    const index = function () {

        function Init() {
            const nums = [
                "①", "②", "③", "④", "⑤", "⑥", "⑦", "⑧", "⑨", "⑩", "⑪", "⑫", "⑬", "⑭", "⑮", "⑯", "⑰", "⑱", "⑲", "⑳"
            ]

            // const previewList = $(".preview-bx").find("ul").find("li");
            // previewList.each((idx, el) => {
            //     let previewText = "";
            //     koDatas[idx].forEach((item) => {
            //         previewText += item.ko + ' ';
            //     });

            //     $(el).find(".preview-txt").html(previewText);
            // });

            $(".list-bx").find("li").each((idx, el) => {
                console.log( idx );
                let introList = "";

                const eList = koDatas[0].filter((item) => item.step <= idx);
                eList.forEach((item, index) => {
                    introList += `<span style="color: ${color[item.step]}"> ${item.ko} </span>`;
                });

                $(el).html(nums[idx] + introList);
            });

            $("body").on("click", () => {
                App.audio.playTTS({
                    text: "오늘은 can 문장 10개로 영어 문장 어순을 완전히 정리해드립니다.",
                    code: 3,
                    rate: 1,
                    callback: () => {
                        App.audio.playTTS({
                            text: "시작합니다!",
                            code: 3,
                            rate: 1,
                            delay: 0.5,
                            callback: () => {
                                const introBx = $(".intro-bx");
                                gsap.to(introBx, {
                                    duration: 0.75, opacity: 0, ease: Cubic.easeInOut, onComplete: () => {
                                        setTimeout(() => {
                                            show();
                                        }, 500);
                                    }
                                });
                            }
                        });
                    }
                });
            });

            let s = 3;
            const t = setInterval(() => {
                s--;
                $(".timer").text(s);
                if (s === 0) {
                    clearInterval(t);
                    $(".timer").css("display", "none");

                    App.audio.playTTS({
                        text: "오늘은 can 문장 10개로 영어 문장 어순을 완전히 정리해드립니다.",
                        code: 3,
                        rate: 1,
                        callback: () => {
                            App.audio.playTTS({
                                text: "시작합니다!",
                                code: 3,
                                rate: 1,
                                callback: () => {
                                    const introBx = $(".intro-bx");
                                    gsap.to(introBx, {
                                        duration: 0.75, opacity: 0, ease: Cubic.easeInOut, onComplete: () => {
                                            show();
                                        }
                                    });
                                }
                            });
                        }
                    });

                }
            }, 1000);
        }

        let g = 0;
        let c = 1;

        const color = ["#ffffff", "#FFD648", "#FE68AD", "#16F5EF", "#F01A32", "#8D84D3",];

        function show() {
            const enData = enDatas[g];
            const koData = koDatas[g];

            const list = $(".study-content").find("ul").find("li");
            list.css("display", "none");
            list.css("opacity", 0);

            let eSound = [];
            let kSound = [];

            let i = 0;
            let len = enData.length - 1;

            for (i; i < len; i++) {
                const el = list.eq(i);
                el.css("display", "flex");

                const eList = enData.filter((item) => item.step <= c);
                const kList = koData.filter((item) => item.step <= c);

                eSound[i] = '';
                kSound[i] = '';

                let enTxt = "";
                let koTxt = "";

                eList.forEach((item, index) => {
                    eSound[i] += item.en + " ";
                    enTxt += `<span class="${item.step === c ? 'on' : ''}"><span style="color: ${color[item.step]}">${item.en}</span></span>`;
                });

                kList.forEach((item, index) => {
                    kSound[i] += item.ko + " ";
                    koTxt += `<span class="${item.step === c ? 'on' : ''}"><span style="color: ${color[item.step]}">${item.ko}</span></span>`;
                });

                $(el).find(".en-txt").html(enTxt);
                $(el).find(".ko-txt").html(koTxt);

                c++;
            }

            gsap.fromTo($(".header"),
                { opacity: 0, y: 0, x: 0, },
                { opacity: 1, y: 0, x: 0, duration: 0.75, ease: Cubic.easeInOut });

            const img = $(".img-bx").find("img").eq(g);
            gsap.fromTo(img, { scale: 1.05 }, { opacity: 1, scale: 1, x: 0, duration: 0.75, ease: Cubic.easeInOut });

            let headerKoTxt = "";
            koData.forEach((item) => {
                headerKoTxt += item.ko + " ";
            });

            $(".header").find(".t").html('❗️' + headerKoTxt);

            App.audio.playTTS({
                text: 'Step ' + (g + 1) + '!',
                code: 5,
                rate: 1,
                callback: () => {
                    App.audio.playTTS({
                        text: headerKoTxt,
                        code: 3,
                        rate: 1,
                        delay: 0.5,
                        callback: () => {
                            gsap.to($(".header"), {
                                opacity: 1, y: -470, opacity: 1, x: 0, duration: 1, ease: Cubic.easeInOut,
                                onComplete: () => {
                                    setTimeout(() => {
                                        sound();
                                    }, 500);
                                }
                            });
                        }
                    });
                }
            });

            
            let soundCount = 0;
            function sound() {
                const txtBx = $(list[soundCount]);
                const kOn = txtBx.find(".ko-txt").find(".on").find("span");
                const enOn = txtBx.find(".en-txt").find(".on").find("span");

                gsap.to(kOn, { y: 0, duration: 0, ease: Cubic.easeOut });

                $(".preview-arrow").css("opacity", 0);
                $(".preview-arrow").eq(g).css("opacity", 1);

                $(".preview-txt").css("opacity", 0.5);
                $(".preview-txt").eq(g).css("opacity", 1);

                gsap.fromTo(txtBx,
                    { opacity: 0, y: -30, x: 0 },
                    {
                        opacity: 1, x: 0, y: 0, duration: 0.5, ease: Cubic.easeOut, onComplete: () => {
                            App.audio.playTTS({
                                text: kSound[soundCount],
                                code: 3,
                                rate: 1,

                                callback: () => {
                                    App.audio.playTTS({
                                        text: eSound[soundCount],
                                        code: 4,
                                        rate: 0.8,
                                        delay: 1,
                                        playCallback: () => {
                                            gsap.to(enOn, { y: 0, duration: 0.5, ease: Cubic.easeOut });
                                        },
                                        callback: () => {
                                            App.audio.playTTS({
                                                text: eSound[soundCount],
                                                code: 6,
                                                rate: 0.8,
                                                delay: 1,
                                                callback: () => {
                                                    App.audio.playTTS({
                                                        text: eSound[soundCount],
                                                        code: 7,
                                                        rate: 0.8,
                                                        delay: 1,
                                                        callback: () => {
                                                            soundCount++;
                                                            if (soundCount < kSound.length) {

                                                                setTimeout(() => {
                                                                    sound();
                                                                }, 1000);

                                                            } else if (soundCount === kSound.length) {
                                                                g++;
                                                                c = 1;

                                                                setTimeout(() => {
                                                                    gsap.to($(".header"), {
                                                                        opacity: 0,
                                                                        duration: 0.75,
                                                                        ease: Cubic.easeInOut
                                                                    });

                                                                    list.each((idx, el) => {
                                                                        gsap.to(el, {
                                                                            opacity: 0,
                                                                            x: -30,
                                                                            duration: 0.5,
                                                                            delay: 0.15 * idx,
                                                                            ease: Cubic.easeOut
                                                                        });
                                                                    });

                                                                    if (g === enDatas.length) {
                                                                        App.audio.playTTS({
                                                                            text: "구독과 좋아요는 영상 제작에 큰 도움이 됩니다.! 감사합니다!",
                                                                            code: 3,
                                                                            rate: 1,
                                                                            delay: 1,
                                                                            playCallback: () => {
                                                                                gsap.fromTo($(".end-scene"),
                                                                                    { opacity: 0, y: 100 },
                                                                                    { opacity: 1, y: 0, duration: 1, ease: Cubic.easeInOut });
                                                                            },
                                                                        });

                                                                        return;
                                                                    }

                                                                    setTimeout(() => {
                                                                        show();
                                                                    }, 1000);

                                                                }, 1000);
                                                            }
                                                        }
                                                    });
                                                }
                                            });
                                        }
                                    });

                                }
                            });
                        }
                    }
                );
            }
        }


        return {
            Init
        }
    };

    $(document).ready(() => {
        App.talkNew = index();
        App.talkNew.Init();
    });

})();