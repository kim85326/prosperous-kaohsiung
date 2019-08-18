const gameStart = {
    key: "gameStart",
    preload: function() {
        this.load.image("sky", "./images/sky.png");
        this.load.image("city", "./images/city.png");
        this.load.image("cloud", "./images/cloud.png");
        this.load.image("road", "./images/road.png");
        this.load.image("logo", "./images/logo.png");
        this.load.image("startButton", "./images/start.png");
        this.load.image("up", "./images/up.svg");
        this.load.image("down", "./images/down.svg");
        this.load.image("liar", "./images/liar_1.svg");
    },
    create: function() {
        // 背景
        this.sky = this.add.tileSprite(w / 2, h / 2, w, h, "sky");
        this.city = this.add.tileSprite(w / 2, h - 520, w, 500, "city");
        this.cloud = this.add.tileSprite(w / 4, h - 520, w / 2, 400, "cloud");
        this.road = this.add.tileSprite(w / 2, h - 460 / 2, w, 460, "road");

        // logo
        let logo = this.add.image(w - 600, h / 2 - 55, "logo");

        // 開始按鈕
        let startButton = this.add.image(w - 600, h / 2 + 230, "startButton");
        startButton.setInteractive();
        startButton.on("pointerdown", () => this.scene.start("gamePlay"));

        // 說明按紐
        let up = this.add.image(w - 600 + 80, h / 2 + 370, "up");
        let down = this.add.image(w - 600 - 80, h / 2 + 370, "down");

        // 主角
        let liar = this.add.image(500, h / 2 + 200, "liar");
    },
    update: function() {
        this.sky.tilePositionX += 2;
        this.city.tilePositionX += 4;
        this.road.tilePositionX += 3;
    },
};
