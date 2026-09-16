




(function () {

    const fullEng = function () {
        function getList() {

            let str = ``;
            enStorys.forEach((item, idx) => {
                str += `<li>`
                str += `<div class="list en-list">`
                item.en.forEach((enItem) => {
                    str += `<div class="list-txt en-txt"><span class="en-item-${enItem.step}">${enItem.txt}</span></div>`
                });
                str += `</div>`
                str += `</li>`
            });

            return str;
        }

        function Init() {
            const fullStr = getList();
            $(".full-eng-list").find("ul").append(fullStr);
        }

        function start(){
            App.audio.playTTS({
                text: "스텝 원, 전체 문장 듣기.",
                code: 3,
                rate: 1,
                playCallback: () => {

                },
                callback: () => {
                    gsap.to( $( ".full-eng-step-bx" ), { delay: 1, opacity: 0, duration: 1, ease: Cubic.easeOut, onComplete: () => {
                        show();
                    }});
                }
            });
        }

        let count = 0;
        function show() {
            gsap.to( $( ".full-eng-bx" ), { opacity: 1, duration: 1, ease: Cubic.easeOut });

            const fullBx = $( ".full-eng" ).find( "ul" );
            const storyList = enStorys[count];
            const enTxt = storyList.en.reduce((a, b) => a + b.txt + ' ', '');

            imgs.forEach((num, idx) => {
                const img = $(".full-img-list").find("img");

                if (count >= num) {
                    gsap.to(img.eq(idx), { duration: 1, opacity: 1, ease: Cubic.easeOut });
                } else {

                }
            });

            App.audio.playTTS({
                text: enTxt,
                // code: 5,
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
                    console.log( count, enStorys.length );
                    if( count === enStorys.length){
                        App.control.startStory();
                        return;
                    }

                    show();
                },

            });
        }

        return {
            Init,
            start,
        }

    }

    $(document).ready(() => {
        App.fullEng = fullEng();
        App.fullEng.Init();
    });

})();