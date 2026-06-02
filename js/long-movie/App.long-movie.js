
(function () {
    const index = function () {

        koDatas.forEach((item, idx) => {
            let koTxt = "";
            item.forEach((item) => {
                koTxt += item.ko + " ";
            });

            let enTxt = "";
            enDatas[idx].forEach((item) => {
                enTxt += item.en + " ";
            });

            console.log(idx + 1 + '. ' + enTxt);
            console.log(idx + 1 + '. ' + koTxt);
            console.log("")
        });

        function Init() {
            // const nums = [
            //     "①", "①", "②", "③", "④", "⑤", "⑥", "⑦", "⑧", "⑨", "⑩", "⑪", "⑫", "⑬", "⑭", "⑮", "⑯", "⑰", "⑱", "⑲", "⑳"
            // ];

            // $(".list-bx").find("li").each((idx, el) => {
            //     let introList = "";
            //     let introKoList = "";

            //     if (idx !== 0) {
            //         const eList = enDatas[1].filter((item) => item.step <= idx);
            //         const kList = koDatas[1].filter((item) => item.step <= idx );
            //         eList.forEach((item, _index) => {
            //             // introList += `<span style="color: ${color[item.step]}"> ${item.en} </span>`;
            //             // introKoList += `<span style="color: ${color[kList[_index].step]}"> ${kList[_index].ko} </span>`;
            //             // introList += `<span style="color: #FFD648"> ${item.en} </span>`;
            //             // introKoList += `<span style="color: #ffffff"> ${kList[_index].ko} </span>`;
            //         });

            //         $(el).find( ".en-container" ).html(nums[idx] + introList);
            //         $(el).find( ".en-container" ).html(introList);
            //         $(el).find( ".ko-container" ).html( introKoList);
            //     }
            // });

            $("body").on("click", () => {
                show();
            });

            let c = 3;
            const timer = setInterval(() => {
                c--;
                $(".timer").text(c);
                if (c === 0) {
                    clearTimeout(timer);
                    $(".timer").css("display", "none");

                    setTimeout(() => {
                        show();
                    }, 1000);
                }
            }, 1000);
        }

        function intro() {

        }

        function desc() {

        }

        const color = [
            "#ffffff",
            "#FFD648",
            "#FE68AD",
            "#16F5EF",
            "#F01A32",
            "#8D84D3",
        ];

        function show() {
            show2();
        }

        let enAllData = [];
        let koAllData = [];

        function createEnglish() {
            $(".en-list").find("ul").empty();
            $(".en-txt").find("ul").empty();

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
            $(".ko-list").find("ul").empty();
            $(".ko-txt").find("ul").empty();

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

        let g = 0;
        function show2() {
            enAllData = enDatas[g];
            koAllData = koDatas[g];

            createKorean();
            createEnglish();

            gsap.to($(".study-2"), { opacity: 1, duration: 0.5, ease: Cubic.easeOut });

            let tag = '';
            let sound = '';
            let soundArr = [];
            enDatas.forEach((items, index) => {
                sound = '';

                items.forEach((item) => {
                    tag += `<span class='en-group-${index}'>${item.en}</span>`
                    sound += item.en + ' ';
                });

                soundArr.push(sound);
            });

            $(".study-step-eng").html(tag);

            App.audio.playTTS({
                text: "영어는 단어 순서만 익혀도 문장이 쉬워집니다.",
                code: 3,
                rate: 1,
                callback: () => {
                    App.audio.playTTS({
                        text: "앞에서부터 천천히 들어보세요.",
                        code: 3,
                        rate: 1,
                        callback: () => {
                            let count = 0;
                            gsap.to($(".intro-bx"), {
                                opacity: 0, duration: 0.5, delay: 0.5, ease: Cubic.easeOut, onComplete: () => {
                                    stepStart();
                                }
                            });

                            function stepStart() {
                                const descTxt = $(".step-desc-txt");
                                const koDesc = koAllData.map((item) => item.ko).join(" ");
                                descTxt.html(`<span>${g + 1}. </span> ${koDesc}`);

                                App.audio.playTTS({
                                    text: koDesc,
                                    code: 3,
                                    rate: 0.9,
                                    delay: 1,
                                    playCallback: () => {
                                        gsap.set(descTxt, { opacity: 0, y: 0 });
                                        gsap.to(descTxt, { opacity: 1, duration: 0.5, ease: Cubic.easeInOut });

                                        // gsap.to($(".img-bx").find("img"), { opacity: 0, duration: 1, ease: Cubic.easeOut });
                                        // gsap.to($(".img-bx").find("img").eq(g), { opacity: 0.2, duration: 1, ease: Cubic.easeOut });
                                    },
                                    callback: () => {

                                        gsap.to(descTxt, {
                                            y: -470, duration: 1, ease: Cubic.easeInOut, onComplete: () => {
                                                study2();
                                            }
                                        });
                                    }
                                });
                            }

                            function study2() {
                                const eData = enAllData.filter((item) => item.step <= count);
                                const kData = koAllData.filter((item) => item.step <= count);

                                const enTags = $(".en-txt").find("ul");
                                const enList = $(".en-list").find("ul").eq(count);

                                const enSound = eData.map((item) => item.en).join(" ");
                                const koSound = kData.map((item) => item.ko).join(" ");

                                const koTags = $(".ko-txt").find("ul");
                                const koList = $(".ko-list").find("ul").eq(count);

                                kData.forEach((item, idx) => {
                                    const koTag = koTags.find('.ko-step-' + item.step);
                                    const koContainer = koList.find("li").eq(idx);

                                    const { left: bxLeft } = $(".inner").offset();
                                    const { left } = koContainer.offset();
                                    const { top } = koContainer.position();

                                    if (koTag.hasClass("on")) {
                                        gsap.to(koTag, { x: left - bxLeft, y: top, duration: 0.75, ease: Cubic.easeInOut });
                                    } else {
                                        gsap.fromTo(koTag,
                                            { x: left - bxLeft, y: top + koTag.height(), opacity: 0 },
                                            { y: top, opacity: 1, duration: 0.75, ease: Cubic.easeInOut, delay: 1 }
                                        );
                                    }

                                    koTag.addClass("on");
                                });

                                App.audio.playTTS({
                                    text: koSound,
                                    code: 3,
                                    rate: 0.9,
                                    delay: 1,
                                    playCallback: () => {
                                    },
                                    callback: () => {
                                        gsap.delayedCall(0, () => {
                                            eData.forEach((item, _idx) => {

                                                const enTagList = enTags.find(".en-step-" + item.step);
                                                const enContainerList = enList.find(".en-step-" + item.step);

                                                enTagList.each((i, el) => {
                                                    const enTag = $(el);
                                                    const enContainer = $(enContainerList[i]);

                                                    const { left: bxLeft } = $(".inner").offset();
                                                    const { left } = enContainer.offset();
                                                    const { top } = enContainer.position();

                                                    if (enTag.hasClass("on")) {
                                                        gsap.to(enTag, { x: left - bxLeft, y: top, duration: 0.75, ease: Cubic.easeInOut });
                                                    } else {
                                                        gsap.fromTo(enTag, { x: left - bxLeft, y: top + enTag.height(), opacity: 0 }, { y: top, opacity: 1, duration: 0.75, ease: Cubic.easeInOut, delay: 1 });
                                                    }

                                                    enTag.addClass("on");
                                                });
                                            });

                                            App.audio.playTTS({
                                                text: enSound,
                                                code: 6,
                                                rate: 0.675,
                                                delay: 1.5,
                                                callback: () => {

                                                    if( count === 0 || count === 1 ){
                                                        count++;

                                                        setTimeout(() => {
                                                            study2();
                                                        }, 750);

                                                        return;
                                                    }

                                                    App.audio.playTTS({
                                                        text: enSound,
                                                        code: 5,
                                                        rate: 0.725,
                                                        delay: 1.5,
                                                        playCallback: () => {
                                                            if (count === Math.min(enAllData.length, koAllData.length) - 1) {
                                                                gsap.to($(".en-txt").find("li"), { color: '#FFD648', duration: 0.5, ease: Cubic.easeOut });
                                                                gsap.to($(".ko-txt").find("li"), { color: '#FFD648', duration: 0.5, ease: Cubic.easeOut });
                                                            }
                                                        },
                                                        callback: () => {
                                                            if (count === Math.min(enAllData.length, koAllData.length) - 1) {
                                                                setTimeout(() => {
                                                                    const descTxt = $(".step-desc-txt");
                                                                    gsap.to(descTxt, { opacity: 0, duration: 0.5, ease: Cubic.easeInOut });

                                                                    gsap.to($(".en-txt"), { x: -30, opacity: 0, duration: 0.5, ease: Cubic.easeOut });
                                                                    gsap.to($(".ko-txt"), {
                                                                        x: 30, opacity: 0, duration: 0.5, ease: Cubic.easeOut, onComplete: () => {
                                                                            g++;
                                                                            count = 0;

                                                                            if (g >= enDatas.length) {
                                                                                gsap.to($(".inner"), { opacity: 0, duration: 0.5, ease: Cubic.easeOut });
                                                                                return;
                                                                            }

                                                                            enAllData = enDatas[g];
                                                                            koAllData = koDatas[g];

                                                                            createKorean();
                                                                            createEnglish();

                                                                            gsap.set($(".en-txt"), { x: 0, y: 0, opacity: 1 });
                                                                            gsap.set($(".ko-txt"), { x: 0, y: 0, opacity: 1 });

                                                                            stepStart();
                                                                        }
                                                                    });

                                                                }, 1000);

                                                                return;
                                                            }

                                                            count++;

                                                            setTimeout(() => {
                                                                study2();
                                                            }, 750);
                                                        }
                                                    });
                                                }
                                            });
                                        });
                                    }
                                });
                            }
                        }
                    });
                }
            });
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