

(function () {

    const ShortStory = () => {

        function Init() {
            createInput();
        }

        function createInput() {

            const list = $(".education-list");
            const dtlist = $(".education-list").find("dt");
            const ddlist = $(".education-list").find("dd");
            const emojilist = $(".education-list").find(".emoji-text");

            $(".education-list").each((index, item) => {
                const education = $(item);

                const dt = education.find("dt");
                const dd = education.find("dd");

                const t = storyData[index].text;
                let dtTag = "";

                t.split("").forEach((text, index) => {
                    if (text === "/") {
                        if (!window.__inSlash) {
                            window.__inSlash = true;
                            dtTag += `<span><span class="answer">`;
                        } else {
                            window.__inSlash = false;
                            dtTag += `</span></span>`;
                        }
                    } else {
                        dtTag += text;
                    }
                });

                dt.html(dtTag);

                dd.text(storyData[index].translation);
                education.find(".emoji-text").text(storyData[index].sex === 'girl' ? '👧' : '👨‍🦰');

                list.eq(index).addClass(storyData[index].sex === 'girl' ? 'right' : 'left');
            });

            let count = 0;
            let isRepeat = false;

            const answerlist = $(".education-list").find(".answer");

            // $("button").on("click", () => {
            //     Show(count, isRepeat);
            // });

            setTimeout(() => {
                Show(count);
            }, 3000);

            function Show(idx, repeat = false) {
                App.audio.playTTS({
                    text: storyData[idx].text.replace(/\//g, ""),
                    code: storyData[idx].sex === 'girl' ? 9 : 5,
                    pitch: storyData[idx].sex === 'girl' ? 5.0 : 0,
                    playCallback: () => {
                        if (isRepeat) {
                            // gsap.fromTo(ddlist.eq(idx),
                            //     { y: 10, opacity: 0, },
                            //     {
                            //         y: 0,
                            //         opacity: 1,
                            //         duration: 0.5,
                            //         ease: Cubic.easeInOut,
                            //     });
                        } else {
                            gsap.fromTo(answerlist.eq(idx),
                                { y: '100%' },
                                {
                                    y: '0%',
                                    opacity: 1,
                                    duration: 0.5,
                                    ease: Cubic.easeInOut,
                                });

                            gsap.to(emojilist.eq(idx), {
                                scale: 1.2,
                                repeat: 3,
                                yoyo: true,
                                duration: 0.4,
                                ease: Cubic.easeInOut,
                            });

                            // gsap.fromTo(dtlist.eq(idx),
                            //     { y: 10, opacity: 0, },
                            //     {
                            //         y: 0,
                            //         opacity: 1,
                            //         duration: 0.5,
                            //         ease: Cubic.easeInOut,
                            //     });
                        }
                    },
                    callback: () => {
                        setTimeout(() => {
                            count++;

                            if (count >= storyData.length) {
                                if (repeat) {
                                    console.log("끝");
                                    return;
                                }

                                // if (!repeat) {

                                //     setTimeout(() => {
                                //         $( "h2" ).text("다시 들어볼께요~");
                                //         gsap.fromTo( $( "h2" ), {
                                //             y: 10, opacity: 0, },
                                //             {
                                //                 y: 0,
                                //                 opacity: 1,
                                //                 duration: 0.5,
                                //                 ease: Cubic.easeInOut,
                                //             });

                                //         App.audio.playTTS({
                                //             text: "다시 들어볼께요~",
                                //             code: 2,
                                //             callback: () => {
                                //                 setTimeout(() => {
                                //                     count = 0;
                                //                     isRepeat = true;

                                //                     Show(count, isRepeat);
                                //                 }, 1000 );
                                //             }
                                //         });
                                //     }, 1000 );
                                // }

                                return;
                            }

                            Show(count, isRepeat);
                        }, 1000);
                    }
                });
            }
        }

        return {
            Init
        }
    }

    $(document).ready(() => {
        App.shortStory = ShortStory();
        App.shortStory.Init();
    })
})();