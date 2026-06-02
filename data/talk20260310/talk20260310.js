

(function () {
    const talk20260310 = function () {
        function Init() {
            $( "body" ).on( "click", () =>{
                create();
            });

            let c = 0;
            console.log( datas.length );
            datas.forEach((item, idx) => {
                const findIndex = datas.findIndex(prev => prev.en.you === item.en.you );

                if( idx !== findIndex ){
                    c++;
                    console.log( item.en.me );
                }

                console.log( item.en.me, ' ', item.ko.me );
                console.log( item.en.you, ' ', item.ko.you );
                console.log( "" );
            });
        }

        function create(){
            let count = parseInt( '' + Math.random() * datas.length );
            let countValue = 0;
            function show() {
                countValue++;
                console.log( countValue );
                const data = datas[count];
        
                const meEn = $(".me-container").find(".en-txt");
                const meEnT = data.en.me;
        
                const meKo = $(".me-container").find(".ko-txt");
                const meKoT = data.ko.me;
        
                const youEn = $(".you-container").find(".en-txt");
                const youEnT = data.en.you;
        
                const youKo = $(".you-container").find(".ko-txt");
                const youKoT = data.ko.you;
        
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
                        text: meEnT,
                        code: 7,
                        rate: 0.65,
                        playCallback: () => {
                            if( type === 2 ){
                                showText( meKo, meKoT, -30 );
                                return;
                            }

                            showText(meEn, meEnT, -30);   
                        },
    
                        callback: () => {
                            App.audio.playTTS({
                                text: youEnT,
                                code: 6,
                                rate: 0.65,
                                delay: 0.35,
                                playCallback: () => {
                                    if( type === 2 ){
                                        showText( youKo, youKoT, 30);
                                        return;
                                    }

                                    showText(youEn, youEnT, 30);
                                },

                                callback: () => {
    
                                    setTimeout(() => {
                                        if( type === 1 ){
                                            showSound(2);
                                            return;
                                        }

                                        hideText(meEn, 30);
                                        hideText(youEn, -30);
                                        hideText(meKo, 30);
                                        hideText(youKo, -30);
    
                                        setTimeout(() => {
                                            count = parseInt( '' + Math.random() * datas.length );
                                            show();
                                        }, 1000 * 0.1 );
    
                                    }, type === 2 ? 1000 * 1.2 : 1000 * 0.35 );
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