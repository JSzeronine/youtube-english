


// "AIzaSyAuweZt1PSe-Gv5vwVn6ibRLQ9L25kIM3g"

(function () {
    const index = function () {

        let swiper = null;
        let eTime = 1;
        function START() {
            list.forEach((item, index) => {
                const { text, translation } = item;

                let processed = '';
                let inside = false;
                [...text].forEach((ch) => {
                    if (ch === '/') {
                        inside = !inside;
                        if (inside) {
                            processed += '<span class="eng-mask"><span class="eng-text">';
                        } else {
                            processed += '</span></span>';
                        }
                        return;
                    }

                    processed += ch;
                });

                $(".eng-list").append(`
                    <div class="swiper-slide">
                        <span class="eng">
                            ${processed}
                        </span>
                        <span class="kor">
                            ${translation}
                        </span>
                    </div>
                `);
            });

            swiper = new Swiper(".mySwiper", {
                direction: "vertical",
                slidesPerView: "auto",
                spaceBetween: 50,
                centeredSlides: true,
                speed: eTime * 1000,
            });
        }

        function SHOWINTRO() {

            App.audio.playTTS({
                text: "작은 영어 한걸음과 함께 오늘의 20문장 시작합니다!",
                code: 3,
                rate: 1.1,
                delay: 0.5,
                playCallback: () => {
                    console.log("playCallback");
                },

                callback: () => {
                    setTimeout(() => {

                        const introBx = $( ".intro-bx" );
                        gsap.to( introBx, { duration: 0.75, opacity: 0, ease: Cubic.easeInOut });

                        const headerBx = $( ".header-bx" );
                        gsap.to( headerBx, { duration: 0.75, opacity: 1, ease: Cubic.easeInOut });

                        const contentBx = $( ".content-bx" );
                        gsap.to( contentBx, { duration: 0.75, opacity: 1, ease: Cubic.easeInOut });

                        setTimeout(() => {
                            Study();
                        }, 1000 );

                    }, 1000);
                }
            });
        }

        function Init() {
            START();

            let s = 3;
            setInterval(() => {
                s--;

                if( s === 0 ){
                    $( ".timer" ).css( "display", "none" );
                    setTimeout(() => {
                        SHOWINTRO();
                    }, 1000 );
                }

                $( ".timer" ).text( s );
            }, 1000 );

            // $( ".btn-play" ).on("click", () => {
            //     $( ".timer" ).css( "display", "none" );
                
            //     const introBx = $( ".intro-bx" );
            //     gsap.to( introBx, { duration: 0.75, opacity: 0, ease: Cubic.easeInOut });

            //     const headerBx = $( ".header-bx" );
            //     gsap.to( headerBx, { duration: 0.75, opacity: 1, ease: Cubic.easeInOut });

            //     const contentBx = $( ".content-bx" );
            //     gsap.to( contentBx, { duration: 0.75, opacity: 1, ease: Cubic.easeInOut });

            //     setTimeout(() => {
            //         Study();
            //     }, 1000 );
            // });
        }

        function Study() {

            let count = 0;
            function show() {

                if( count >= list.length ){
                    const introBx = $( ".intro-bx" );
                    gsap.to( introBx, { duration: 0.75, opacity: 0, ease: Cubic.easeInOut });
                    const contentBx = $( ".content-bx" );
                    gsap.to( contentBx, { duration: 0.75, opacity: 0, ease: Cubic.easeInOut });

                    return;
                }

                const engBx = $(".eng-list").find(".swiper-slide");
                gsap.to(engBx, { duration: eTime, opacity: 0.1, scale: 0.7, ease: Cubic.easeOut });

                gsap.killTweensOf($(engBx[count]));
                gsap.to($(engBx[count]), { duration: eTime, opacity: 1, scale: 1, ease: Cubic.easeOut });

                gsap.to($( ".header-gage-bar" ), { duration: eTime, width: `${( count + 1 ) * (100 / list.length)}%`, ease: Cubic.easeOut });

                swiper.slideTo(count);

                const eng = list[count].text.replace(/\//g, "");
                const kor = list[count].translation.replace(/\//g, "");

                App.audio.playTTS({
                    text: kor,
                    code: 3,
                    delay: 1,
                    playCallback: () => {
                        console.log("playCallback");
                    },
                    callback: () => {
                        App.audio.playTTS({
                            text: eng,
                            code: 4,
                            delay: 1,
                            playCallback: () => {
                                gsap.to($(engBx[count]).find(".eng-text"), { duration: 0.5, y: 0, ease: Cubic.easeInOut });
                                $(engBx[count]).find(".eng-mask").css("border", "2px dotted rgba( 0, 0, 0, 0 )");
                            },
                            callback: () => {

                                App.audio.playTTS({
                                    text: eng,
                                    code: 5,
                                    delay: 1,

                                    callback: () => {
                                        App.audio.playTTS({
                                            text: eng,
                                            code: 7,
                                            delay: 1,
                                            callback: () => {
                                                setTimeout(() => {
                                                    count++;
                                                    show();
                                                }, 1000 );
                                            }
                                        });
        
                                    }
                                });
                            }
                        });
                    }
                });
            }

            show();
        }

        return {
            Init
        }
    };

    $(document).ready(() => {
        App.index = index();
        App.index.Init();
    });

})();