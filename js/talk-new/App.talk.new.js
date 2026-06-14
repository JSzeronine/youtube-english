


const mainC = 1;


(function () {
    $(".step-num").text(`Week 4 - #${mainC + 1}`);

    const enAllData = enDatas[mainC];
    const koAllData = koDatas[mainC];

    const color = [
        "#ffffff",
        "#FFD648",
        "#FE68AD",
        "#16F5EF",
        "#FFAC22",
        "#8D84D3",
    ]

    function createEnglish() {
        let enText = "";
        enAllData.forEach((item) => {
            enText += `<li class="en-step-${item.step}" style="color: ${color[item.step]}">${item.en}</li>`;
        });

        $(".en-txt").find("ul").html(enText);

        let i = 0;
        let len = enAllData.length;
        for (i; i < len; i++) {
            enText = "";
            enAllData.filter((item) => item.step <= i).forEach((item) => {
                enText += `<li class="en-step-${item.step}">${item.en}</li>`;
            });

            $(".en-list").find("ul").eq(i).html(enText);
        }
    }

    function createKorean() {
        let koText = "";
        koAllData.forEach((item) => {
            koText += `<li class="ko-step-${item.step}" style="color: ${color[item.step]}">${item.ko}</li>`;
        });

        $(".ko-txt").find("ul").html(koText);

        let i = 0;
        let len = koAllData.length;
        for (i; i < len; i++) {
            koText = "";
            koAllData.filter((item) => item.step <= i).forEach((item) => {
                koText += `<li class="en-step-${item.step}">${item.ko}</li>`;
            });

            $(".ko-list").find("ul").eq(i).html(koText);
        }
    }

    let previewSound = "";
    function createPreview() {
        let previewText = "";
        koAllData.forEach((item) => {
            previewText += item.ko + ' ';
            previewSound += item.ko + ' ';
        });

        $(".text-bx").find("span").text('👉 ' + previewText);
    }

    const index = function () {
        $(".list-bx").find("li").each((idx, el) => {
            let introList = "";

            const eList = koDatas[0].filter((item) => item.step <= idx);
            eList.forEach((item, index) => {
                introList += `<span style="color: ${color[item.step]}"> ${item.ko} </span>`;
            });

            $(el).html(nums[idx] + introList);
        });

        function Init() {
            createEnglish();
            createKorean();
            createPreview();

            $("body").on("click", () => {
                App.audio.playTTS({
                    text: previewSound,
                    code: 3,
                    rate: 1,
                    delay: 0.5,
                    playCallback: () => {
                        gsap.fromTo($(".text-bx"),
                            { opacity: 0, x: 30 },
                            { opacity: 1, x: 0, duration: 0.5, ease: Cubic.easeOut });
                    },
                    callback: () => {

                        setTimeout(() => {
                            count++;
                            start();
                        }, 300);

                    }
                });

                // count++;
                // start();
            });

            let c = 3;
            const timer = setInterval(() => {
                c--;
                $(".timer").text(c);
                if (c === 0) {
                    clearTimeout(timer);
                    $(".timer").css("display", "none");

                    setTimeout(() => {
                        App.audio.playTTS({
                            text: previewSound,
                            code: 3,
                            rate: 1,
                            delay: 0.5,
                            playCallback: () => {
                                gsap.fromTo($(".text-bx"),
                                    { opacity: 0, x: 30 },
                                    { opacity: 1, x: 0, duration: 0.5, ease: Cubic.easeOut });
                            },
                            callback: () => {

                                setTimeout(() => {
                                    count++;
                                    start();
                                }, 300);

                            }
                        });
                    }, 500);
                }
            }, 1000)

        }

        let count = -1;
        function start() {
            const eData = enAllData.filter((item) => item.step <= count);
            const kData = koAllData.filter((item) => item.step <= count);

            const enTags = $(".en-txt").find("ul").find("li");
            const enList = $(".en-list").find("ul").eq(count);

            const enSound = eData.map((item) => item.en).join(" ");
            const koSound = kData.map((item) => item.ko).join(" ");

            console.log("START", enSound, count);

            App.audio.playTTS({
                text: enSound,
                code: 7,
                rate: 0.8,
                delay: 0.5,
                callback: () => {
                    if (count === enAllData.length - 2 )
                    {
                        setTimeout(() => {
                            gsap.to($(".en-txt"), { x: -30, opacity: 0, duration: 0.5, ease: Cubic.easeOut });
                            gsap.to($(".ko-txt"), { x: 30, opacity: 0, duration: 0.5, ease: Cubic.easeOut });

                            gsap.fromTo($(".text-bx"),
                                { opacity: 1, x: 0 },
                                { opacity: 0, x: 30, duration: 0.5, ease: Cubic.easeOut });

                        }, 1000);
                        return;
                    }

                    count++;

                    setTimeout(() => {
                        start();
                    }, 750);
                }
            });

            const enTags2 = $(".en-txt").find("ul");
            const enList2 = $(".en-list").find("ul").eq(count);

            eData.forEach((item, _idx) => {

                const enTagList = enTags2.find(".en-step-" + item.step);
                const enContainerList = enList2.find(".en-step-" + item.step);

                enTagList.each((i, el) => {
                    const enTag = $(el);
                    const enContainer = $(enContainerList[i]);

                    const { left: bxLeft } = $(".inner").offset();
                    const { left } = enContainer.offset();
                    const { top } = enContainer.position();

                    if (enTag.hasClass("on")) {
                        gsap.to(enTag, { x: left - bxLeft, y: top, duration: 0.5, ease: Cubic.easeInOut });
                    } else {
                        gsap.fromTo(enTag,
                            { x: left - bxLeft, y: top + enTag.height(), opacity: 0 },
                            { y: top, opacity: 1, duration: 0.5, ease: Cubic.easeInOut, delay: 0.5 }
                        );
                    }

                    enTag.addClass("on");
                });
            });

            const koTags2 = $(".ko-txt").find("ul");
            const koList2 = $(".ko-list").find("ul").eq(count);

            kData.forEach((item, _idx) => {

                const koTagList = koTags2.find(".ko-step-" + item.step);
                const koContainerList = koList2.find(".en-step-" + item.step);

                koTagList.each((i, el) => {
                    const koTag = $(el);
                    const koContainer = $(koContainerList[i]);

                    const { left: bxLeft } = $(".inner").offset();
                    const { left } = koContainer.offset();
                    const { top } = koContainer.position();

                    if (koTag.hasClass("on")) {
                        gsap.to(koTag, { x: left - bxLeft, y: top, duration: 0.5, ease: Cubic.easeInOut });
                    } else {
                        gsap.fromTo(koTag,
                            { x: left - bxLeft, y: top + koTag.height(), opacity: 0 },
                            { y: top, opacity: 1, duration: 0.5, ease: Cubic.easeInOut, delay: 0.5 }
                        );
                    }

                    koTag.addClass("on");
                });
            });

            // const koTags = $(".ko-txt").find("ul");
            // const koList = $(".ko-list").find("ul").eq(count);

            // kData.forEach((item, idx) => {
            //     const koTag = koTags.find('.ko-step-' + item.step);
            //     const koContainer = koList.find("li").eq(idx);

            //     const { left: bxLeft } = $(".inner").offset();
            //     const { left } = koContainer.offset();
            //     const { top } = koContainer.position();

            //     if (koTag.hasClass("on")) {
            //         gsap.to(koTag, { x: left - bxLeft, y: top, duration: 0.5, ease: Cubic.easeInOut });
            //     } else {
            //         gsap.fromTo(koTag,
            //             { x: left - bxLeft, y: top + koTag.height(), opacity: 0 },
            //             { y: top, opacity: 1, duration: 0.5, ease: Cubic.easeInOut, delay: 0.5 }
            //         );
            //     }

            //     koTag.addClass("on");
            // });
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