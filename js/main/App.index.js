


// "AIzaSyAuweZt1PSe-Gv5vwVn6ibRLQ9L25kIM3g"

(function () {
    const index = function () {

        function START(){
            setTimeout(() => {
                App.introduceScene.START(() => {
                    App.step.ShowContent(list, () => {
                        App.introduceScene.HideStep(() => {
                            console.log( "끝" );

                            // App.introduceScene.START(() => {
                            //     App.step.ShowContent(repeat, () => {
                                    
                            //     });
                            // }, true);

                        });
                    });
                });
            }, 3000 );
        }

        function Init() {
            START();
            
            // $( ".btn-play" ).on("click", async () => {
            //     App.introduceScene.START(() => {
            //         App.step.ShowContent(list, () => {
            //             App.introduceScene.HideStep(() => {

            //                 App.introduceScene.START(() => {
            //                     App.step.ShowContent(repeat, () => {

            //                     });
            //                 }, true);

            //             });
            //         });
            //     });
            // });
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