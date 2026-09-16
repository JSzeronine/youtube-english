function hiddenTimer() {
    $(".timer").css({
        opacity: 0,
        pointerEvents: "none"
    });
}

function hiddenThumbnail() {
    $(".thumbnail").css({
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

        console.log(count);
        console.log(en);
        console.log(ko);
    });
}

App.control = () => {
    // showConsole();
    hiddenTimer();
    // hiddenThumbnail();


    hiddenIntro();
    hiddenFullEng();
    hiddenStudyRoom();

    let auto = true;
    $("body").on("click", () => {
        auto = false;
        // App.intro.start();
        // App.fullEng.start();
        // App.story.start();
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

            setTimeout(() => {
                App.intro.start();
            }, 1000);
        }
    }, 1000);
}

App.control.startFullEng = () => {
    gsap.to($(".full-eng"), { delay: 1, duration: 0.35, opacity: 1, ease: Cubic.easeOut });

    setTimeout(() => {
        App.fullEng.start();
    }, 1500);
}

App.control.startStory = () => {
    gsap.to($(".study-room"), { delay: 1, duration: 0.35, opacity: 1, ease: Cubic.easeOut });

    setTimeout(() => {
        App.story.start();
    }, 1500);
}

$(document).ready(() => {
    App.control();
});

