






(function () {

    const finish = function () {
        function getList() {

            let str = ``;
            enStorys.forEach((item, idx) => {
                str += `<li>`
                str += `<div class="list en-list">`
                item.en.forEach((enItem) => {
                    str += `<div class="list-txt en-txt"><span class="en-item-${enItem.step}">${enItem.txt}</span></div>`
                });
                str += `</div>`

                str += `<div class="list ko-list">`
                item.ko.forEach((koItem) => {
                    str += `<div class="list-txt ko-txt"><span class="ko-item-${koItem.step}">${koItem.txt}</span></div>`
                });

                str += `</div>`
                str += `</li>`
            });

            return str;
        }

        function Init() {
            const fullStr = getList();
            $(".finish-eng-list").find("ul").append(fullStr);
        }

        function start(){
            // gsap.to( $( ".finish-eng-step-bx" ), { opacity: 0, duration: 1, ease: Cubic.easeOut });
            // gsap.to( $( ".finish-eng-bx" ), { opacity: 1, duration: 1, ease: Cubic.easeOut });
            // return;

            App.audio.playTTS({
                text: "Step Three",
                code: 7,
                rate: 0.8,
                playCallback: () => {
                    App.control.showStep(2);
                },
                callback: () => {
                    App.audio.playTTS({
                        text: "전체 이야기 복습하기",
                        code: 28,
                        rate: 0.95,
                        callback: () => {
                            gsap.to( $( ".finish-eng-step-bx" ), { delay: 1, opacity: 0, duration: 1, ease: Cubic.easeOut, onComplete: () => {
                                show();
                            }});
                        }
                    });
        
                }
            });
        }

        let count = 0;
        function show() {
            gsap.to( $( ".finish-eng-bx" ), { opacity: 1, duration: 1, ease: Cubic.easeOut });

            const fullBx = $( ".finish-eng" ).find( ".finish-eng-list" ).find( "ul" );
            const storyList = enStorys[count];
            const enTxt = storyList.en.reduce((a, b) => a + b.txt + ' ', '');

            imgs.forEach((num, idx) => {
                const img = $(".finish-img-list").find("img");

                if (count >= num) {
                    gsap.to(img.eq(idx), { duration: 1, opacity: 1, ease: Cubic.easeOut });
                } else {

                }
            });

            App.audio.playTTS({
                text: enTxt,
                code: 7,
                rate: 0.725,
                delay: 0.5,
                playCallback: () => {
                    // gsap.to( fullBx, { duration: 0, y: ( 300 * count ) * -1, ease: Cubic.easeOut });        
                    
                    fullBx.find( "li" ).each(function(i){
                        const item = $( this );
                        if( i === count ){
                            item.css( "display", "flex" );
                        }else{
                            item.css( "display", "none" );
                        }
                    });
                    
                    
                },
                
                callback: () => {
                    count++;
                    if( count === enStorys.length){
                        gsap.to( $( ".finish-eng-bx" ), { delay: 2, duration: 1, opacity: 0, ease: Cubic.easeOut });
                        // App.control.sound();
                        return;
                    }

                    show();
                },

            });
        }

        return {
            Init,
            start
        }
    }

    $(document).ready(() => {
        App.finish = finish();
        App.finish.Init();
    });

})();