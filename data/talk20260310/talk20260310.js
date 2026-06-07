

(function () {
    const talk20260310 = function () {
        function Init() {

            setTimeout(() => {
                gsap.to( $( ".intro-desc" ), { opacity: 1, y: 0, duration: 1, ease: Cubic.easeInOut, onComplete: () => {
                    gsap.to( $( ".intro-title" ), { opacity: 1, duration: 1, ease: Cubic.easeInOut });
                }});

                setTimeout(() => {
                    start();
                }, 4000 );
            }, 2000 );

            $( "body" ).on( "click", () => {

                gsap.to( $( ".intro-desc" ), { opacity: 1, y: 0, duration: 1, ease: Cubic.easeInOut, onComplete: () => {
                    gsap.to( $( ".intro-title" ), { opacity: 1, duration: 1, ease: Cubic.easeInOut });
                }});

                setTimeout(() => {
                    start();
                }, 4000 );
            });

            let c = 0;
            datas.forEach((item, idx) => {
                const findIndex = datas.findIndex(prev => prev.en.you === item.en.you );

                if( idx !== findIndex ){
                    c++;
                }

                // console.log( item.en.me, ' ', item.ko.me );
                // console.log( item.en.you, ' ', item.ko.you );
                // console.log( "" );
            });

            // console.log( datas.length );
        }

        function start(){
            gsap.to( $( ".intro-bx" ), { duration: 1, opacity: 0, ease: Cubic.easeOut });
            setTimeout(() => {
                create();
            }, 500 );
        }

        function create(){
            // let count = parseInt( '' + Math.random() * datas.length );
            let count = 0;
            function show() {
                $( ".progress-bar" ).find( "li" ).each(function(idx){
                    if( count === idx ){
                        $( this ).addClass( "on target" );
                    }else if( idx < count ){
                        $( this ).removeClass( "target" ).addClass( "on" );
                    }else{
                        $( this ).removeClass( "on target" );
                    }
                });

                const data = datas[count];
        
                const meEn = $(".me-container").find(".en-txt");
                const meEnT = data.en.me;
        
                const meKo = $(".me-container").find(".ko-txt");
                const meKoT = '- ' + data.ko.me;
        
                const youEn = $(".you-container").find(".en-txt");
                const youEnT = data.en.you;
        
                const youKo = $(".you-container").find(".ko-txt");
                const youKoT = '- ' + data.ko.you;
        
                function showText(tag, txt, posX = -30) {
                    gsap.fromTo( tag, 
                        { opacity: 0, x: posX }, 
                        { opacity: 1, x: 0, duration: 0.3, ease: Cubic.easeOut });

                    tag.text(txt);
                }

                function hideText(tag, posX = -30){
                    gsap.fromTo( tag, 
                        { opacity: 1, x: 0 }, 
                        { opacity: 0, x: posX, duration: 0.3, ease: Cubic.easeOut });
                }
                
                function showSound(type){
                    App.audio.playTTS({
                        text: meKoT,
                        code: 0,
                        rate: 0.9,
                        playCallback: () => {
                            showText( meKo, meKoT, -30 );
                        },
                        
                        callback: () => {
                            App.audio.playTTS({
                                text: meEnT,
                                code: 7,
                                rate: 0.65,
                                delay: 1,
                                playCallback: () => {
                                    showText(meEn, meEnT, -30);
                                },
                                callback: () => {
                                    App.audio.playTTS({
                                        text: meEnT,
                                        code: 15,
                                        rate: 0.65,
                                        delay: 1,
                                        callback: () => {
                                            App.audio.playTTS({
                                                text: youKoT,
                                                code: 3,
                                                rate: 0.85,
                                                delay: 1,
                                                playCallback: () => {
                                                    showText( youKo, youKoT, 30);
                                                },
                                                callback: () => {
                                                    App.audio.playTTS({
                                                        text: youEnT,
                                                        code: 6,
                                                        rate: 0.65,
                                                        delay: 1,
                                                        playCallback: () => {
                                                            showText(youEn, youEnT, 30);
                                                        },
                                                        callback: () => {

                                                            App.audio.playTTS({
                                                                text: youEnT,
                                                                code: 5,
                                                                rate: 0.65,
                                                                delay: 1,
                                                                callback: () => {
                                    
                                                                    setTimeout(() => {
                                                                        // if( type === 1 ){
                                                                        //     showSound(2);
                                                                        //     return;
                                                                        // }
                                
                                                                        hideText(meEn, 30);
                                                                        hideText(youEn, -30);
                                                                        hideText(meKo, 30);
                                                                        hideText(youKo, -30);
                                    
                                                                        setTimeout(() => {
                                                                            // count = parseInt( '' + Math.random() * datas.length );
                                                                            count += 1;
                                                                            if( count > datas.length - 1 ){
                                                                                console.log( "끝" );
                                                                                return;
                                                                            }
                
                                                                            show();
                                                                        }, 1000 * 0.1 );
                                    
                                                                    }, type === 2 ? 1000 * 1.2 : 1000 * 1.2 );
                                                                }
                                                            });
                                                        }
                                                    });
                                                }
                                            });
                                        }
                                    });
                                }
                            });
                        }
                    });

                    
                }

                showSound(1);

                // showText(meEn, meEnT);
                // showText(meKo, meKoT);
                // showText(youEn, youEnT);
                // showText(youKo, youKoT);

                // setTimeout(() => {
                //     count = parseInt( '' + Math.random() * datas.length );
                //     show();
                // }, 1000 * 5 );
        
                // datas.splice( count, 1 );
            }
        
            show();
        }

        return {
            Init,
        }

    }

    $(document).ready(function () {
        App.talk20260310 = talk20260310();
        App.talk20260310.Init();
    });

})();