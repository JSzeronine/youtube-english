

(function () {
    const index = function () {
        function Init() {
            let tag = '';
            let sound = '';
            let soundArr = [];
            enDatas.forEach((items, index) => {
                sound = '';

                items.forEach((item) => {
                    tag += `<span class='finish-en-word-${index}'>${item.en}</span>`
                    sound += item.en + ' ';
                });

                soundArr.push(sound);
            });

            $(".finish-en").html(tag);

            tag = '';
            let koSound = '';
            let koSoundArr = [];
            koDatas.forEach((items, index) => {
                koSound = '';

                items.forEach((item) => {
                    tag += `<span class='finish-ko-word-${index}'>${item.ko}</span>`
                    koSound += item.ko + ' ';
                });

                koSoundArr.push(koSound);
            });

            $(".finish-ko").html(tag);

            App.audio.playTTS({
                text: "이제 눈에 보이시나요?",
                code: 3,
                rate: 1.1,
                playCallback: () => {
                    gsap.fromTo( $( ".finish-bx" ), 
                        { opacity: 0, y: 50 }, 
                        { opacity: 1, duration: 0.75, ease: Cubic.easeOut });
                },

                callback: () => {

                    App.audio.playTTS({
                        text: "마지막으로 전체 문장을 복습해볼께요.",
                        code: 3,
                        rate: 1.1,
                        delay: 0.5,
                        callback: () => {
                            let c = -1;
                            function showSound() {
                                c++;
                                if (c >= soundArr.length) {

                                    setTimeout(() => {
                                        App.audio.playTTS({
                                            text: "구독과 좋아요는 영상 제작에 큰 도움이 됩니다.",
                                            code: 3,
                                            rate: 1.1,
                                            callback: () => {
                                                App.audio.playTTS({
                                                    text: "감사합니다.",
                                                    code: 3,
                                                    rate: 1.1,
                                                    callback: () => {
                                                        console.log("끝");
                                                    }
                                                });
                                            }
                                        });
                                    }, 2000 );

                                    return;
                                }

                                gsap.to($(".finish-en").find("span"), {
                                    color: "#ffffff",
                                    opacity: 0.5,
                                    duration: 0.5,
                                    ease: Cubic.easeOut
                                });

                                gsap.to($(".finish-ko").find("span"), {
                                    color: "#ffffff",
                                    opacity: 0.5,
                                    duration: 0.5,
                                    ease: Cubic.easeOut
                                });

                                gsap.to($(".finish-en").find(`span.finish-en-word-${c}`), {
                                    color: "#FFD648",
                                    opacity: 1,
                                    duration: 0.5,
                                    ease: Cubic.easeOut
                                }); 

                                gsap.to($(".finish-ko").find(`span.finish-ko-word-${c}`), {
                                    color: "#FFD648",
                                    opacity: 1,
                                    duration: 0.5,
                                    ease: Cubic.easeOut
                                });

                                App.audio.playTTS({
                                    text: koSoundArr[c],
                                    code: 3,
                                    rate: 1,
                                    callback: () => {
                                        App.audio.playTTS({
                                            text: soundArr[c],
                                            code: 7,
                                            rate: 0.8,
                                            callback: () => {
                                                showSound();
                                            }
                                        });
                                    }
                                });
                            }

                            setTimeout(() => {
                                showSound();
                            }, 1000);
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
        App.finish = index();
    });
})();