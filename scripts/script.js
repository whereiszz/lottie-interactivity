document.addEventListener('DOMContentLoaded', function () {

    // Sync Lottie with scroll
    LottieInteractivity.create({
        mode: 'scroll',
        player: '#firstLottie',
        actions: [
          {
            visibility: [0,1],
            type: 'seek',
            frames: [0, 76],
          },
        ],
    });

    //Lottie scroll relative to container
    LottieInteractivity.create({
        mode: "scroll",
        player: "#secondLottie",
        container: "#MyContainerId",
        actions: [
        {
        visibility: [0,1],
        type: "seek",
        frames: [0, 76],
        },
    ],
    });


    //Lottie scroll with offset
    LottieInteractivity.create({
        mode:"scroll",
        player: "#thirdLottie",
        actions: [
          {
            visibility: [0, 0.3],
            type: "stop",
            frames: [0],
          },
          {
            visibility: [0.3, 1],
            type: "seek",
            frames: [0, 76],
          },
        ],
    });


    //Scroll effect with offset and segment looping
    LottieInteractivity.create({
        player:"#fourthLottie",
        mode:"scroll",
        actions: [
          {
            visibility: [0, 0.2],
            type: "stop",
            frames: [0],
          },
          {
            visibility: [0.2, 0.55],
            type: "seek",
            frames: [0, 38],
          },
          {
            visibility: [0.55, 1.0],
            type: "loop",
            frames: [38, 76],
          },
        ],
    });


    //Play segments
    LottieInteractivity.create({
        mode:"scroll",
        player: "#fifthLottie",
        actions: [
          {
            visibility: [0, 1],
            type: "loop",
            frames: [38, 76],
          }
        ]
    });


    //Play segments on hover
    LottieInteractivity.create({
        mode:"cursor",
        player: "#sixthLottie",
        actions: [
          {
            position: { x: [0, 1], y: [0, 1] },
            type: "loop",
            frames: [0, 38],
          },
          {
            position: { x: -1, y: -1 },
            type: "stop",
            frames: [0],
          },
        ],
    });


    //Sync animation with cursor horizontal movement
    LottieInteractivity.create({
        player: '#seventhLottie',
        mode: 'cursor',
        actions: [
          {
            position: { x: [0, 1], y: [-1, 2] },
            type: 'seek',
            frames: [0, 76],
          },
          {
            position: { x: -1, y: -1 },
            type: 'stop',
            frames: [0],
          },
        ],
      });

});