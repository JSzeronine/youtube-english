(function () {





    let m = 3;
    let c = 0;





    const storyShort = function () {
        const studyBx = $(".study-room");


        function getList() {

            let str = ``;
            enStorys.forEach((item, idx) => {
                str += `<li>`
                str += `<div class="list en-list"><span class="list-txt-count">#${idx + 1}. </span>`
                item.en.forEach((enItem) => {
                    str += `<div class="list-txt en-txt"><span class="en-item-${enItem.step}">${enItem.txt}</span></div>`
                });
                str += `</div>`

                str += `<div class="list ko-list">`
                item.ko.forEach((koItem, itemIdx) => {
                    str += `<div class="list-txt ko-txt"><span class='ko-not'>?</span><span class="ko-item-${koItem.step}">${koItem.txt}</span></div>`
                });

                str += `</div>`
                str += `</li>`
            });

            return str;
        }

        function showSound(){
            const audio = document.getElementById('introMusic');
            audio.currentTime = 58;
            audio.volume = 0.3;
            audio.play();
        }

        function Init() {
            create();

            let auto = false;
            $("body").on("click", () => {
                auto = true;
                $(".timer").css("display", "none");

                all();
            });

            // $( ".timer" ).css( "opacity", 0 );
            // all();
            // return;

            showSound();

            let countValue = 3;
            const timer = setInterval(() => {
                if (auto) {
                    return;
                }

                countValue--;
                $(".timer").find("span").text(countValue);
                if (countValue === 0) {
                    clearInterval(timer);
                    $(".timer").css("display", "none");

                    setTimeout(() => {
                        all();
                    }, 1000);
                }

            }, 1000);

        }

        function create() {
            const tag = getList();
            $(".content-list").find("ul").append(tag);
        }

        function all() {
            const list = $(".content-list").find("li");
            const bx = $(".content-list").find("ul");
            const item = list.eq(m);
            item.addClass("on");

            list.each(function (listIdx) {
                if (listIdx > m) {
                    $(this).addClass("prev");
                }
            });

            const { y, height } = item[0].getBoundingClientRect();
            const pY = (296 - y) + (985 / 2) - (height / 1.25) - 75;
            // gsap.set( bx, { y: pY, duration: 0 });
            gsap.fromTo(bx, { y: pY + 15, opacity: 0, }, {
                y: pY, opacity: 1, duration: 0.75, ease: Cubic.easeInOut, onComplete: () => {
                    let allKo = '';
                    enStorys[m].ko.forEach((storyItem) => {
                        allKo += storyItem.txt + ' ';
                    });

                    // '👉 '
                    // $(".all-ko-txt").find( "span" ).text( `#${m + 1}. ` + allKo);
                    $(".all-ko-txt").find("span").text(`👉 ` + allKo);

                    const storyList = enStorys[m];
                    const ko = storyList.ko;
                    const koTxt = ko.reduce((a, b) => a + b.txt + ' ', '');

                    App.audio.playTTS({
                        text: koTxt,
                        code: 3,
                        rate: 1,
                        playCallback: () => {
                            // gsap.fromTo($(".all-ko-txt"), { opacity: 0, }, { duration: 0.35, opacity: 1, ease: Cubic.easeOut });
                        },
                        callback: () => {
                            setTimeout(() => {
                                show();
                            }, 1000);
                        }
                    });
                }
            });
        }

        const color = ['#FFD648', '#7BFFE4', '#FF5D09', '#7FFED5'];
        function show() {
            const storyList = enStorys[m];
            const item = $("li").eq(m);

            const en = storyList.en[c];
            const ko = storyList.ko[c];

            const enTag = item.find(".en-item-" + en.step);
            const koTag = item.find(".ko-item-" + en.step);

            App.audio.playTTS({
                text: en.txt,
                code: 6,
                rate: 0.675,
                delay: 0,
                playCallback: () => {
                    gsap.to(koTag, { duration: 0.5, y: 0, color: color[c], opacity: 1, ease: Cubic.easeOut });
                    gsap.to(enTag, { duration: 0.5, y: 0, color: color[c], opacity: 1, ease: Cubic.easeOut });
                },

                callback: () => {
                    c++;

                    let max = 0;
                    storyList.en.forEach((item) => {
                        max = Math.max(max, item.step);
                    });

                    if (c > max) {
                        let allEn = '';
                        enStorys[m].en.forEach((storyItem) => {
                            allEn += storyItem.txt + ' ';
                        });

                        App.audio.playTTS({
                            text: allEn,
                            code: 6,
                            rate: 0.675,
                            delay: 1,
                            playCallback: () => {

                            },

                            callback: () => {
                                App.audio.playTTS({
                                    text: allEn,
                                    code: 7,
                                    rate: 0.8,
                                    delay: 1,
                                    playCallback: () => {
                                        gsap.to( $( "li" ).eq(m).find( "span"), { color: '#fcf4df', duration: 0.35, ease: Cubic.easeOut });
                                        gsap.to( $( "li" ).eq(m).find( ".ko-txt"), { borderColor: 'transparent', duration: 0.35, ease: Cubic.easeOut });
                                    },

                                    callback: () => {
                                        setTimeout(() => {
                                            gsap.to( $( ".all-ko-txt"), { duration: 0.5, opacity: 0, ease: Cubic.easeOut });
                                            gsap.to( $( ".content-list").find( "ul" ), { duration: 0.5, opacity: 0, ease: Cubic.easeOut });
                                        }, 1000);
        
                                    }
                                });
                            },
                        });

                        return
                    }

                    setTimeout(() => {
                        show();
                    }, 1000);
                }
            });
        }

        return {
            Init,
        }

    }

    $(document).ready(() => {
        App.storyShort = storyShort();
        App.storyShort.Init();
    });

})();