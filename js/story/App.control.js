


const fold = '09-21';
const thumbnail = 2;
const intro = 0;
const url = [
    'data/story/2026/09/' + fold + '/1.png',
    'data/story/2026/09/' + fold + '/2.png',
    'data/story/2026/09/' + fold + '/3.png',
    'data/story/2026/09/' + fold + '/4.png',
    'data/story/2026/09/' + fold + '/5.png',
];

function showImages(){
    $( ".thumbnail-img" ).attr( "src", url[thumbnail]);
    $( ".intro-img" ).attr( "src", url[intro]);
    url.forEach((item, idx ) => {
        $( ".full-img-list" ).find( "img" ).eq( idx ).attr( "src", item );
        $( ".bg-list" ).find( "img" ).eq( idx ).attr( "src", item );
        $( ".finish-img-list" ).find( "img" ).eq( idx ).attr( "src", item );
    });
}

function showConsole() {
    enStorys.forEach((item, idx) => {
        let count = idx;
        let en = '';
        let ko = '';

        item.en.forEach((enList) => {
            en += enList.txt + ' ';
        });

        item.ko.forEach((koList) => {
            ko += koList.txt + ' ';
        });

        console.log('');
        console.log(en);
        console.log(ko);
    });
}

function hiddenTimer() {
    $(".timer").css({
        opacity: 0,
        pointerEvents: "none"
    });
}

function hiddenThumbnail() {
    $(".thumbnail-wrap").css({
        opacity: 0,
        pointerEvents: "none",
    })
}

function hiddenIntro() {
    $(".intro").css({
        opacity: 0,
        pointerEvents: "none",
    })
}

function hiddenFullEng() {
    $(".full-eng").css({
        opacity: 0,
        pointerEvents: "none"
    });
}

function hiddenStudyRoom() {
    $(".study-room").css({
        opacity: 0,
        pointerEvents: "none"
    })
}

function hiddenFinish() {
    $(".finish-eng").css({
        opacity: 0,
        pointerEvents: "none"
    });
}

App.control = () => {
    showConsole();
    showImages();


    hiddenTimer();
    // hiddenThumbnail();


    hiddenIntro();
    hiddenFullEng();
    hiddenStudyRoom();
    hiddenFinish();

    let auto = true;
    $("body").on("click", () => {
        auto = false;

        App.intro.start();
        // App.fullEng.start();
        // App.story.start();
        // App.finish.start();
        
        // App.control.sound();
    });

    let count = 3;
    const timer = setInterval(() => {
        if (!auto) {
            clearInterval(timer);
            return;
        }

        count--;
        $(".timer").text(count);

        if (count === 0) {
            clearInterval(timer);
            $(".timer").css("display", "none");

            App.control.sound();
            setTimeout(() => {
                App.intro.start();
            }, 1000);
        }
    }, 1000);
}

App.control.startFullEng = () => {
    gsap.to($(".full-eng"), { delay: 1.5, duration: 0.5, opacity: 1, ease: Cubic.easeOut });

    setTimeout(() => {
        App.fullEng.start();
    }, 2000);
}

App.control.startStory = () => {
    gsap.to($(".study-room"), { delay: 1.5, duration: 0.5, opacity: 1, ease: Cubic.easeOut });

    setTimeout(() => {
        App.story.start();
    }, 2000);
}

App.control.startFinish = () => {
    gsap.to($(".finish-eng"), { delay: 0.5, duration: 0.5, opacity: 1, ease: Cubic.easeOut });

    setTimeout(() => {
        App.finish.start();
    }, 1000);
}

App.control.showStep = (step) => {
    const stepBx = $( ".step-bx-info" ).eq(step);
    const stepList = stepBx.find( "li" );

    gsap.set( stepList.find( "span" ), { width: '0%' });
    gsap.to( stepList.eq( step ).find( "span" ), { duration: 0.75, width: '100%', ease: Cubic.easeInOut });
}

App.control.sound = () => {
    const sound = $( "audio" )[0];
    sound.currentTime = 0;
    sound.volume = 0.1;
    sound.play();
}

$(document).ready(() => {
    App.control();
});

