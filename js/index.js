const config = {
    type: Phaser.AUTO,
    width: w,
    height: h,
    parent: "app",
    physics: {
        default: "arcade",
    },
    scene: [gameStart, gamePlay],
};

const game = new Phaser.Game(config);
